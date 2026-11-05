import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Kind words"
          title="The best work feels"
          highlight="shared."
          description="A home for real collaboration stories, ready to be replaced with verified voices."
        />
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 80}>
            <SpotlightCard className="h-full">
              <Quote aria-hidden="true" className="text-teal" size={22} />
              <blockquote className="mt-6 text-lg leading-8 text-muted">&quot;{testimonial.quote}&quot;</blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-teal/30 to-violet/30 font-mono text-xs text-foreground">{testimonial.initials}</div>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
