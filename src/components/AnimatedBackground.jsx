/**
 * Fixed ambient background: subtle grid, animated gradient blobs and film-grain noise.
 * Purely decorative — kept behind all content with pointer-events disabled.
 */
export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="grid-overlay absolute inset-0 opacity-60 [radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      <div
        className="animate-blob absolute -left-40 -top-40 h-130 w-130 rounded-full opacity-30 blur-[110px]"
        style={{ background: "var(--color-primary)" }}
      />
      <div
        className="animate-blob absolute -right-32 top-40 h-120 w-120 rounded-full opacity-25 blur-[110px]"
        style={{ background: "var(--color-secondary)", animationDelay: "-6s" }}
      />
      <div
        className="animate-blob absolute bottom-0 left-1/3 h-110 w-110 rounded-full opacity-20 blur-[110px]"
        style={{ background: "var(--color-accent)", animationDelay: "-12s" }}
      />

      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
