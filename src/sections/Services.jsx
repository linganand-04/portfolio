import { motion } from "framer-motion";
import { services } from "@/data/misc";
import SectionHeading from "@/components/SectionHeading";
import { getIcon } from "@/utils/icons";
import { staggerContainer, fadeUp } from "@/animations/variants";

export default function Services() {
  return (
    <section id="services" className="relative px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="How I can"
          highlight="help"
          description="Where I can plug into your team or project."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px 0px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-2xl p-7 transition-colors duration-300 hover:border-primary/30"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-300 group-hover:bg-primary/20" />
                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent text-white shadow-lg shadow-primary/20">
                  <Icon size={22} />
                </div>
                <h3 className="relative mb-2 font-display text-lg font-semibold text-text">
                  {service.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
