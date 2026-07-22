import { Heart } from "lucide-react";
import { profile } from "@/data/profile";
import { navLinks } from "@/constants/navigation";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-white-10-top border-white/5 px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="font-display text-2xl font-bold">
          <span className="text-text">{profile.name}</span>
        </a>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <SocialLinks />

        <div className="w-full max-w-xs border-t border-white/5" />

        <p className="flex items-center gap-1.5 text-sm text-text-faint">
          © {year} {profile.name}. Made with
          <Heart size={13} className="fill-primary text-primary" />
          using React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
