import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/timeline";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          highlight="worked"
          description="Real projects, real constraints — here's where I've put my skills to work."
        />

        <Timeline
          items={experience}
          renderItem={(item) => (
            <>
              <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                <Briefcase size={13} />
                {item.period}
              </div>
              <h3 className="font-display text-lg font-semibold text-text">{item.role}</h3>
              <p className="mb-1 text-sm font-medium text-secondary">{item.org}</p>
              <p className="mb-3 flex items-center gap-1.5 text-xs text-text-faint">
                <MapPin size={12} /> {item.location}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">{item.description}</p>
              <ul className="flex flex-col gap-1.5">
                {item.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </>
          )}
        />
      </div>
    </section>
  );
}
