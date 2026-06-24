import { z } from "zod";

import {
  formatExamType,
  formatPackageInterest,
  formatPreferredContact,
  siteConfig,
} from "@/data/site";

const contactSchema = z.object({
  type: z.literal("contact"),
  name: z.string().trim().min(2).max(120),
  email: z.email().max(160),
  subject: z.string().trim().min(2).max(160),
  message: z.string().trim().min(2).max(2000),
});

const requestAccessSchema = z.object({
  type: z.literal("request-access"),
  fullName: z.string().trim().min(2).max(120),
  email: z.email().max(160),
  whatsapp: z.string().trim().min(7).max(60),
  country: z.string().trim().min(2).max(100),
  examType: z.string().trim().min(1).max(80),
  packageInterest: z.string().trim().min(1).max(120),
  message: z.string().trim().max(1000).optional().default(""),
  preferredContact: z.enum(["whatsapp", "email", "both"]),
});

const submissionSchema = z.discriminatedUnion("type", [
  contactSchema,
  requestAccessSchema,
]);

type EmailField = {
  label: string;
  value: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatFieldsAsText(fields: EmailField[]) {
  return fields.map((field) => `${field.label}: ${field.value}`).join("\n");
}

function formatFieldsAsHtml(fields: EmailField[]) {
  const rows = fields
    .map(
      (field) => `
        <tr>
          <th align="left" style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#0f2942;width:210px;">
            ${escapeHtml(field.label)}
          </th>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#334155;">
            ${escapeHtml(field.value).replace(/\n/g, "<br />")}
          </td>
        </tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#334155;">
      <h1 style="font-size:20px;color:#0f2942;margin:0 0 16px;">NCLEX Prep Nation Form Submission</h1>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:760px;border:1px solid #e5e7eb;">
        ${rows}
      </table>
    </div>`;
}

async function sendResendEmail({
  fields,
  replyTo,
  subject,
}: {
  fields: EmailField[];
  replyTo: string;
  subject: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const from =
    process.env.RESEND_FROM_EMAIL ||
    "NCLEX Prep Nation <onboarding@resend.dev>";
  const to =
    process.env.CONTACT_TO_EMAIL ||
    process.env.SUPPORT_EMAIL ||
    siteConfig.emails.support;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      reply_to: replyTo,
      text: formatFieldsAsText(fields),
      html: formatFieldsAsHtml(fields),
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Resend email failed: ${message}`);
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const result = submissionSchema.safeParse(payload);

    if (!result.success) {
      return Response.json(
        { message: "Please check the form and try again." },
        { status: 400 },
      );
    }

    if (result.data.type === "contact") {
      const fields: EmailField[] = [
        { label: "Form type", value: "General inquiry" },
        { label: "Name", value: result.data.name },
        { label: "Email", value: result.data.email },
        { label: "Subject", value: result.data.subject },
        { label: "Message", value: result.data.message },
      ];

      await sendResendEmail({
        fields,
        replyTo: result.data.email,
        subject: `General inquiry: ${result.data.subject}`,
      });

      return Response.json({ message: "Message sent." });
    }

    const fields: EmailField[] = [
      { label: "Form type", value: "Package/access request" },
      { label: "Full name", value: result.data.fullName },
      { label: "Email", value: result.data.email },
      { label: "WhatsApp number", value: result.data.whatsapp },
      { label: "Country", value: result.data.country },
      { label: "Exam type", value: formatExamType(result.data.examType) },
      {
        label: "Interested service or package",
        value: formatPackageInterest(result.data.packageInterest),
      },
      {
        label: "Preferred contact method",
        value: formatPreferredContact(result.data.preferredContact),
      },
      {
        label: "Message",
        value: result.data.message || "No extra message provided.",
      },
    ];

    await sendResendEmail({
      fields,
      replyTo: result.data.email,
      subject: `Access request: ${result.data.fullName}`,
    });

    return Response.json({ message: "Request sent." });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        message:
          "We could not send the message right now. Please try again or contact support directly.",
      },
      { status: 500 },
    );
  }
}
