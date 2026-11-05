import { processSteps } from "@/data/process";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-10 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="The working rhythm"
          title="A process that keeps"
          highlight="momentum visible."
          description="The goal is not ceremony. It is making the next decision easier, earlier."
        />
      </Reveal>
      <div className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-5">
        <div aria-hidden="true" className="absolute top-6 right-[12%] left-[12%] hidden h-px bg-linear-to-r from-teal via-violet to-coral md:block" />
        {processSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 90} className="relative">
            <div className="relative flex gap-5 md:block">
              <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-teal/30 bg-background font-mono text-sm text-teal">
                0{index + 1}
              </div>
              <div className="pt-1 md:pt-7">
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
