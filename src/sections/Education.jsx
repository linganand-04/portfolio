import { GraduationCap } from "lucide-react";
import { education } from "@/data/timeline";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";

export default function Education() {
  return (
    <section id="education" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic"
          highlight="background"
          description="The formal foundation behind the self-taught front-end skills."
        />

        <Timeline
          items={education}
          renderItem={(item) => (
            <>
              <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                <GraduationCap size={13} />
                {item.period}
              </div>
              <h3 className="font-display text-lg font-semibold text-text">{item.degree}</h3>
              <p className="text-sm font-medium text-secondary">{item.institution}</p>
              {/* <p className="text-sm leading-relaxed text-text-muted">{item.description}</p> */}
            </>
          )}
        />
      </div>
    </section>
  );
}
