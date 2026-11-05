"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, LoaderCircle, Send } from "lucide-react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import {
  contactSchema,
  subjectOptions,
  type ContactFormValues,
} from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/70 focus:border-teal/60 focus:ring-4 focus:ring-teal/10";

export function ContactForm() {
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const [sent, setSent] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
      formStartedAt,
    },
  });
  const message = useWatch({ control, name: "message", defaultValue: "" });

  async function onSubmit(values: ContactFormValues) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, formStartedAt }),
      });
      const result = (await response.json()) as {
        ok: boolean;
        error?: string;
        fieldErrors?: Record<string, string[] | undefined>;
      };

      if (!response.ok || !result.ok) {
        toast.error(result.error || "Something went wrong. Please try again.");
        return;
      }

      setSent(true);
      toast.success("Message sent! I'll reply within 24 hours.");
    } catch {
      toast.error("We could not reach the server. Please try again.");
      return;
    }
  }

  if (sent) {
    return (
      <div className="flex min-h-[26rem] flex-col items-center justify-center rounded-3xl border border-teal/25 bg-teal/5 p-8 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-teal/15 text-teal">
          <Check aria-hidden="true" size={30} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.03em]">
          Your message is on its way.
        </h3>
        <p className="mt-3 max-w-sm text-muted">
          Thanks for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <Button
          className="mt-7"
          variant="secondary"
          onClick={() => {
            const started = Date.now();
            setSent(false);
            setFormStartedAt(started);
            reset({
              name: "",
              email: "",
              subject: "",
              message: "",
              website: "",
              formStartedAt: started,
            });
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            {...register("name")}
            id="name"
            className={inputClasses}
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            id="email"
            className={inputClasses}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
      </div>
      <Field label="Subject" error={errors.subject?.message}>
        <select
          {...register("subject")}
          id="subject"
          className={cn(inputClasses, "appearance-none")}
          aria-invalid={Boolean(errors.subject)}
        >
          <option value="">What can I help with?</option>
          {subjectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea
          {...register("message")}
          id="message"
          className={cn(inputClasses, "min-h-36 resize-y")}
          placeholder="Tell me what you&apos;re building..."
          maxLength={2000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-count"}
        />
        <p id="message-count" className="mt-2 text-right text-xs text-muted">
          {message.length}/2000
        </p>
      </Field>
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          {...register("website")}
          id="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <LoaderCircle aria-hidden="true" className="animate-spin" size={17} />
            Sending…
          </>
        ) : (
          <>
            Send message <Send aria-hidden="true" size={16} />
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  const id = label.toLowerCase();
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
      <p
        id={`${id}-error`}
        aria-live="polite"
        className="mt-2 min-h-5 text-xs text-coral"
      >
        {error}
      </p>
    </div>
  );
}
