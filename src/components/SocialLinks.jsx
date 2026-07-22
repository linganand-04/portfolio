import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
};

export default function SocialLinks({ className = "", iconSize = 17 }) {
  const links = [
    { key: "github", url: profile.social.github, label: "GitHub" },
    { key: "linkedin", url: profile.social.linkedin, label: "LinkedIn" },
    { key: "instagram", url: profile.social.instagram, label: "Instagram" },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ key, url, label }) => {
        const Icon = ICONS[key];
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white-10 bg-white/3 text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-text hover:shadow-[0_8px_20px_-6px_rgba(99,102,241,0.5)]"
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
      <a
        href={`mailto:${profile.email}`}
        aria-label="Email"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white-10 bg-white/3 text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-text hover:shadow-[0_8px_20px_-6px_rgba(99,102,241,0.5)]"
      >
        <Mail size={iconSize} />
      </a>
    </div>
  );
}
