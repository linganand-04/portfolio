import Reveal from "@/components/Reveal";

/**
 * Consistent eyebrow + heading + description pattern used at the top of each section.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment} gap-4 mb-14 md:mb-20`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white-10 bg-white/3 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-text">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-text-muted text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
