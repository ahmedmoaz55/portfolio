import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { BackToTop } from "@/components/layout/back-to-top";
import { CurrentYear } from "@/components/layout/current-year";
import { site } from "@/data/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-border bg-surface/30 border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <a
              href="#top"
              className="font-display text-2xl font-bold tracking-[-0.04em]"
            >
              Ahmed<span className="text-teal">.</span>
            </a>
            <p className="text-muted mt-3 max-w-sm text-sm">
              Full-stack web and mobile products, built with clarity and care.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-teal text-sm transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {site.socials.github ? (
              <a
                aria-label="GitHub"
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-muted hover:border-teal/40 hover:text-teal inline-flex size-10 items-center justify-center rounded-full border transition"
              >
                <FaGithub aria-hidden="true" size={17} />
              </a>
            ) : null}
            {site.socials.linkedin ? (
              <a
                aria-label="LinkedIn"
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-muted hover:border-teal/40 hover:text-teal inline-flex size-10 items-center justify-center rounded-full border transition"
              >
                <FaLinkedinIn aria-hidden="true" size={17} />
              </a>
            ) : null}
            <a
              aria-label="Email Ahmed"
              href={`mailto:${site.email}`}
              className="border-border text-muted hover:border-teal/40 hover:text-teal inline-flex size-10 items-center justify-center rounded-full border transition"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
        <div className="border-border text-muted flex flex-col justify-between gap-2 border-t pt-5 text-xs sm:flex-row">
          <p>
            © <CurrentYear /> Ahmed. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript, and thoughtful details.</p>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}
