import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { useState } from "react";

const GRADIENTS = [
  "from-primary/40 via-secondary/30 to-accent/30",
  "from-accent/40 via-primary/30 to-secondary/30",
  "from-secondary/40 via-accent/30 to-primary/30",
];

export default function ProjectCard({ project, index = 0 }) {
  const [imgError, setImgError] = useState(false);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 25 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowBackground = useMotionTemplate`radial-gradient(320px circle at ${glowX}% ${glowY}%, rgba(99,102,241,0.18), transparent 70%)`;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 10);
    rotateX.set((0.5 - py) * 10);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const gradient = GRADIENTS[index % GRADIENTS.length];

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white-10 bg-surface shadow-xl shadow-black/20 transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/10"
    >
      <motion.div
        aria-hidden="true"
        style={{ background: glowBackground }}
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className={`relative aspect-16/10 w-full overflow-hidden bg-linear-to-br ${gradient}`}>
        {!imgError ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-black/10">
            <span className="font-display text-4xl font-bold text-white/90">
              {project.title.charAt(0)}
            </span>
            <span className="font-mono text-xs text-white/60">{project.subtitle}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0" />
      </div>

      <div className="relative z-20 flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-text mb-1">{project.title}</h3>
        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-accent">
          {project.subtitle}
        </p>
        <p className="mb-4 text-sm leading-relaxed text-text-muted">{project.description}</p>

        <ul className="mb-4 flex flex-col gap-1.5">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-2 text-xs text-text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white-10 bg-white/3 px-2.5 py-1 font-mono text-[11px] text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-2">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-linear-to-r from-primary to-secondary px-4 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white-10 text-text-muted transition-colors hover:border-white/25 hover:text-text"
          >
            <GithubIcon size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
