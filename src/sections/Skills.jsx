import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";
import SkillBar from "@/components/SkillBar";
import { staggerContainer, scaleIn } from "@/animations/variants";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const category = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="What I bring to the"
          highlight="table"
          description="A toolkit built through projects, internships and constant tinkering."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${activeCategory === cat.id ? "text-white" : "text-text-muted hover:text-text"
                }`}
            >
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="skill-tab-pill"
                  className="absolute inset-0 rounded-full bg-linear-to-r from-primary to-secondary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{cat.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer(0.06)}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 justify-center"
          >
            {category.skills.map((skill) => (
              <motion.div key={skill.name} variants={scaleIn}>
                <SkillBar {...skill} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
