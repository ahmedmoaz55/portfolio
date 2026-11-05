import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-linear-to-r from-teal via-violet to-coral text-white shadow-[0_16px_34px_-18px_color-mix(in_srgb,var(--teal)_70%,transparent)] hover:brightness-110",
  secondary:
    "border border-border bg-surface/70 text-foreground hover:border-teal/50 hover:bg-surface-2",
  ghost: "text-muted hover:bg-surface-2 hover:text-foreground",
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition duration-200 ease-out disabled:pointer-events-none disabled:opacity-50";

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
}) {
  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  href: string;
}) {
  const { href, ...anchorProps } = props;

  return (
    <Link
      className={cn(baseClasses, variantClasses[variant], className)}
      href={href}
      {...anchorProps}
    />
  );
}
