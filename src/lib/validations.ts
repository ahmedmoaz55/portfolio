import { z } from "zod";

export const subjectOptions = [
  "Web project",
  "Mobile app",
  "Collaboration",
  "Other",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Please keep your name under 80 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z
    .enum(subjectOptions)
    .or(z.literal(""))
    .optional()
    .default(""),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more detail.")
    .max(2000, "Please keep your message under 2,000 characters."),
  website: z.string().max(0).optional().default(""),
  formStartedAt: z.number().int().positive(),
});

export type ContactFormValues = z.input<typeof contactSchema>;
export type ValidatedContactForm = z.output<typeof contactSchema>;
