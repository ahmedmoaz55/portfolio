import { ArrowUpRight, Clock3, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { ContactForm } from "@/components/contact/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-10 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Start a conversation"
          title="Have a good idea?"
          highlight="Let&apos;s make it real."
          description="Tell me what you&apos;re working on, where you&apos;re stuck, or what you want to explore next."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal variant="left">
          <div className="flex h-full flex-col justify-between">
            <div className="space-y-5">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 text-lg font-medium transition hover:text-teal"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-surface-2 text-teal">
                  <Mail aria-hidden="true" size={19} />
                </span>
                {site.email}
                <ArrowUpRight aria-hidden="true" className="text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1" size={17} />
              </a>
              <div className="flex items-center gap-4 text-muted">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-surface-2 text-violet">
                  <MapPin aria-hidden="true" size={19} />
                </span>
                {site.location}
              </div>
              <div className="flex items-center gap-4 text-muted">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-surface-2 text-coral">
                  <Clock3 aria-hidden="true" size={19} />
                </span>
                Usually replies within 24 hours
              </div>
            </div>
            <p className="mt-12 max-w-sm text-sm leading-7 text-muted">
              Whether it&apos;s a new build, a thoughtful migration, or a product
              that needs a clearer next step, the first conversation is simple.
            </p>
          </div>
        </Reveal>
        <Reveal variant="right" delay={100}>
          <GlassCard className="relative overflow-hidden border-teal/20 p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-teal to-transparent" />
            <ContactForm />
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
