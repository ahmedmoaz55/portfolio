"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { ButtonLink } from "@/components/ui/button";

const items = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeId, setActiveId] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.4, 0.8] },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${
          scrolled
            ? "border-b border-border bg-background/75 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            href="#top"
            className="font-display text-xl font-bold tracking-[-0.04em]"
          >
            Ahmed<span className="text-teal">.</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {items.map((item) => {
              const id = item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={activeId === id ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm transition ${
                    activeId === id
                      ? "bg-surface-2 text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ButtonLink className="hidden sm:inline-flex" href="#contact">
              Let&apos;s talk
            </ButtonLink>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface/60 text-muted md:hidden"
            >
              <Menu aria-hidden="true" size={18} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        open={menuOpen}
        items={items}
        activeId={activeId}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
