import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { staggerContainer, fadeUp } from "@/animations/variants";
import MagneticButton from "@/components/MagneticButton";
import SocialLinks from "@/components/SocialLinks";
import TypingText from "@/components/TypingText";
import TerminalCard from "@/components/TerminalCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-5 pt-25 pb-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white-10 bg-white/3 px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-bold text-accent"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            {profile.availability}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl md:text-6xl"
          >
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-4 font-mono text-lg text-text-muted sm:text-xl"
          >
            <span className="text-accent">&gt;</span>{" "}
            <TypingText words={profile.roles} className="text-text" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg"
          >
            {profile.shortBio}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-4">
            <MagneticButton href={profile.resumeUrl} download variant="primary">
              <Download size={16} /> Download Resume
            </MagneticButton>
            <MagneticButton
              href="#contact"
              variant="ghost"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Send size={16} /> Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-5">
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative flex items-center justify-center"
        >
          <TerminalCard />
        </motion.div>
      </div>

    </section>
  );
}
