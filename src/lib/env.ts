import { z } from "zod";

const optionalString = z.string().trim().optional().or(z.literal(""));
const defaultSiteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const envSchema = z.object({
  SMTP_HOST: z.string().default("smtp.gmail.com"),
  SMTP_PORT: z.coerce.number().int().positive().default(465),
  SMTP_USER: optionalString,
  SMTP_PASS: optionalString,
  CONTACT_TO_EMAIL: z.string().email().default("ahamedmoaz@gmail.com"),
  NEXT_PUBLIC_SITE_URL: z.string().url().default(defaultSiteUrl),
  UPSTASH_REDIS_REST_URL: optionalString,
  UPSTASH_REDIS_REST_TOKEN: optionalString,
});

export const env = envSchema.parse({
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
});
