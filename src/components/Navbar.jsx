import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/constants/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import ThemeToggle from "@/components/ThemeToggle";
import MagneticButton from "@/components/MagneticButton";
import Logo from "../assets/img/L_Logo.png"

export default function Navbar() {
  const { direction, scrolled } = useScrollDirection();
  const activeId = useActiveSection(navLinks.map((l) => l.id));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();

    setMenuOpen(false);

    setTimeout(() => {
      const target = document.querySelector(href);

      target?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 250); // Match your Framer Motion exit animation duration
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      // animate={{ y: direction === "down" && scrolled && !menuOpen ? -96 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 z-40 w-full"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 glass-strong shadow-lg shadow-black/20 rounded-t-none`}
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-display text-lg font-bold tracking-tight text-text flex items-baseline gap-1 "
        >
          <span className="text-gradient font-bold text-4xl leading-tight">
            {profile.name}</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeId === link.id ? "text-text" : "text-text-muted hover:text-text"
                }`}
            >
              {activeId === link.id && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full bg-white/6 border border-white-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle className="flex" />
          <MagneticButton
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden! px-5! py-2.5! text-sm md:flex!"
          >
            Let's Talk
          </MagneticButton>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white-10 bg-white/3 text-text lg:hidden cursor-pointer"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="glass-strong mx-3 my-2 h-[calc(100vh-85px)]! overflow-y-scroll rounded-2xl no-scrollbar lg:hidden">
            <div className="flex flex-col gap-1 p-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${activeId === link.id
                    ? "bg-white/6 text-text"
                    : "text-text-muted hover:bg-hover-bg hover:text-text"
                    }`}
                >
                  {link.label}
                </a>
              ))}

            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
