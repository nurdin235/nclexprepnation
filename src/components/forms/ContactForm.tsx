"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  if (submitted) {
    return (
      <div
        className="rounded-md border border-success/25 bg-green-50 p-6"
        role="status"
      >
        <CheckCircle2 aria-hidden className="text-success" size={28} />
        <h3 className="mt-4 text-xl font-bold text-navy">
          Your message has been sent.
        </h3>
        <p className="mt-2 text-sm leading-7 text-muted">
          Thank you for contacting NCLEX Prep Nation. The team will review your
          details and reply as soon as possible.
        </p>
        <Button
          className="mt-5"
          onClick={() => {
            setSubmitError("");
            setSubmitted(false);
          }}
          variant="outline"
        >
          Write Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");

        const formData = new FormData(event.currentTarget);
        const payload = {
          type: "contact",
          name: String(formData.get("name") || ""),
          email: String(formData.get("email") || ""),
          subject: String(formData.get("subject") || ""),
          message: String(formData.get("message") || ""),
        };

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            const data = await response.json().catch(() => null);
            throw new Error(data?.message || "Unable to send your message.");
          }

          setSubmitted(true);
        } catch (error) {
          setSubmitError(
            error instanceof Error
              ? error.message
              : "Unable to send your message.",
          );
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          <span className="form-label">Full name</span>
          <Input name="name" placeholder="Your full name" required />
        </label>
        <label>
          <span className="form-label">Email</span>
          <Input
            name="email"
            placeholder="Your email address"
            required
            type="email"
          />
        </label>
      </div>
      <label>
        <span className="form-label">Subject</span>
        <Input name="subject" placeholder="How can we help?" required />
      </label>
      <label>
        <span className="form-label">Message</span>
        <Textarea
          name="message"
          placeholder="Tell us about your question or preparation needs."
          required
        />
      </label>
      <Button className="w-full sm:w-fit" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
      {submitError ? (
        <p className="text-sm font-medium text-error" role="alert">
          {submitError}
        </p>
      ) : null}
    </form>
  );
}
