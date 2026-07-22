import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/misc";
import SectionHeading from "@/components/SectionHeading";
import { staggerContainer, scaleIn } from "@/animations/variants";

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials &"
          highlight="learning"
          description="Courses and certifications I've completed along the way."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px 0px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="glass group flex flex-col gap-4 rounded-2xl p-6 transition-colors duration-300 hover:border-primary/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-accent/20 text-accent transition-transform duration-300 group-hover:scale-110">
                <Award size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-text">{cert.title}</h3>
                <p className="text-sm text-text-muted">{cert.issuer}</p>
              </div>
              <span className="mt-auto font-mono text-xs text-text-faint">{cert.year}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
