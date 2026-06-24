"use client";

import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  getRequestAccessWhatsAppHref,
  packageInterestLabels,
} from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const requestSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  email: z.email("Enter a valid email address."),
  whatsapp: z.string().trim().min(7, "Enter a valid WhatsApp number."),
  country: z.string().trim().min(2, "Enter your country."),
  examType: z.string().min(1, "Select an exam type."),
  packageInterest: z.string().min(1, "Select a service or package."),
  message: z.string().max(1000, "Keep your message under 1,000 characters."),
  preferredContact: z.enum(["whatsapp", "email", "both"], {
    message: "Select a preferred contact method.",
  }),
});

type RequestFormValues = z.infer<typeof requestSchema>;
type SubmittedRequest = {
  whatsappHref: string;
} | null;

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-1.5 text-xs text-error">{message}</p>;
}

export function RequestAccessForm() {
  const [submitted, setSubmitted] = useState<SubmittedRequest>(null);
  const [submitError, setSubmitError] = useState("");
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    setError,
    setValue,
  } = useForm<RequestFormValues>({
    defaultValues: {
      examType: "",
      packageInterest: "",
      message: "",
    },
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const rawPackageFromUrl =
      searchParams.get("package") || searchParams.get("service");
    const packageFromUrl =
      rawPackageFromUrl === "materials"
        ? "exam-prep-materials"
        : rawPackageFromUrl;

    if (packageFromUrl && packageFromUrl in packageInterestLabels) {
      setValue("packageInterest", packageFromUrl);
    }
  }, [setValue]);

  async function onSubmit(values: RequestFormValues) {
    const result = requestSchema.safeParse(values);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const field = issue.path[0];

        if (typeof field === "string") {
          setError(field as keyof RequestFormValues, {
            type: "validate",
            message: issue.message,
          });
        }
      });
      return;
    }

    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "request-access",
          ...result.data,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Unable to send your request.");
      }

      const whatsappHref = getRequestAccessWhatsAppHref(result.data);
      const shouldOpenWhatsApp =
        result.data.preferredContact === "whatsapp" ||
        result.data.preferredContact === "both";

      if (shouldOpenWhatsApp) {
        window.location.assign(whatsappHref);
        return;
      }

      reset();
      setSubmitted({ whatsappHref });
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Unable to send your request.",
      );
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg border border-success/25 bg-green-50 p-7"
        role="status"
      >
        <CheckCircle2 aria-hidden className="text-success" size={30} />
        <h2 className="mt-4 text-xl font-bold text-navy">
          Your request has been sent.
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          Thank you. The team will review your details and follow up through
          your preferred contact method.
        </p>
        <Button className="mt-6" href={submitted.whatsappHref} variant="whatsapp">
          Continue on WhatsApp
        </Button>
        <Button
          className="mt-3"
          onClick={() => {
            setSubmitError("");
            setSubmitted(null);
          }}
          variant="outline"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          <span className="form-label">Full name</span>
          <Input
            aria-invalid={Boolean(errors.fullName)}
            placeholder="Your full name"
            type="text"
            {...register("fullName")}
          />
          <FieldError message={errors.fullName?.message} />
        </label>
        <label>
          <span className="form-label">Email</span>
          <Input
            aria-invalid={Boolean(errors.email)}
            placeholder="Your email address"
            type="email"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </label>
        <label>
          <span className="form-label">WhatsApp number</span>
          <Input
            aria-invalid={Boolean(errors.whatsapp)}
            placeholder="+1 555 000 0000"
            type="tel"
            {...register("whatsapp")}
          />
          <FieldError message={errors.whatsapp?.message} />
        </label>
        <label>
          <span className="form-label">Country</span>
          <Input
            aria-invalid={Boolean(errors.country)}
            placeholder="Country"
            type="text"
            {...register("country")}
          />
          <FieldError message={errors.country?.message} />
        </label>
        <label>
          <span className="form-label">Exam type</span>
          <Select
            aria-invalid={Boolean(errors.examType)}
            {...register("examType")}
          >
            <option disabled value="">
              Select exam type
            </option>
            <option value="nclex-rn">NCLEX-RN</option>
            <option value="nclex-pn">NCLEX-PN</option>
            <option value="not-sure">Not sure yet</option>
          </Select>
          <FieldError message={errors.examType?.message} />
        </label>
        <label>
          <span className="form-label">Interested service or package</span>
          <Select
            aria-invalid={Boolean(errors.packageInterest)}
            {...register("packageInterest")}
          >
            <option disabled value="">
              Select a service or package
            </option>
            <option value="exam-prep-materials">Exam Prep Materials</option>
            <option value="certificate">Certificate Program</option>
            <option value="score-improvement">Score Improvement Support</option>
            <option value="starter">Starter Package</option>
            <option value="premium">Premium Package</option>
            <option value="guided-support">Guided Support</option>
            <option value="recommendation">I need a recommendation</option>
          </Select>
          <FieldError message={errors.packageInterest?.message} />
        </label>
      </div>

      <label>
        <span className="form-label">Message</span>
        <Textarea
          aria-invalid={Boolean(errors.message)}
          placeholder="Tell us about your preparation needs or current weak areas."
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </label>

      <fieldset>
        <legend className="form-label">Preferred contact method</legend>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          {[
            ["WhatsApp", "whatsapp"],
            ["Email", "email"],
            ["Both", "both"],
          ].map(([label, value]) => (
            <label className="flex items-center gap-2 text-sm text-ink" key={value}>
              <input
                className="h-4 w-4 accent-clinical"
                type="radio"
                value={value}
                {...register("preferredContact")}
              />
              {label}
            </label>
          ))}
        </div>
        <FieldError message={errors.preferredContact?.message} />
      </fieldset>

      <Button className="w-full sm:w-fit" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending..." : "Send Package Request"}
      </Button>
      {submitError ? (
        <p className="text-sm font-medium text-error" role="alert">
          {submitError}
        </p>
      ) : null}
    </form>
  );
}
