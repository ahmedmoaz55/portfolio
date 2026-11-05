"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { ButtonLink } from "@/components/ui/button";

type NavItem = { label: string; href: string };

export function MobileMenu({
  open,
  items,
  activeId,
  onClose,
}: {
  open: boolean;
  items: NavItem[];
  activeId: string;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 p-6 backdrop-blur-2xl md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-xl font-bold tracking-[-0.04em]">
          Ahmed<span className="text-teal">.</span>
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="inline-flex size-11 items-center justify-center rounded-full border border-border text-muted"
        >
          <X aria-hidden="true" size={20} />
        </button>
      </div>
      <nav className="mt-20 flex flex-col gap-2" aria-label="Mobile">
        {items.map((item) => {
          const id = item.href.slice(1);
          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeId === id ? "page" : undefined}
              onClick={onClose}
              className={`rounded-2xl px-4 py-4 font-display text-3xl font-semibold tracking-[-0.04em] transition ${
                activeId === id
                  ? "bg-surface-2 text-teal"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
      <ButtonLink className="mt-8 w-full" href="#contact" onClick={onClose}>
        Let&apos;s talk
      </ButtonLink>
    </div>
  );
}
