import { motion } from "framer-motion";
import { viewportOnce } from "@/animations/variants";

export default function Timeline({ items, renderItem }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* vertical line */}
      <div className="absolute left-3.75 top-2 bottom-2 w-px bg-linear-to-b from-primary via-secondary to-accent/40 sm:left-1/2 sm:-translate-x-1/2" />

      <div className="flex flex-col gap-10">
        {items.slice().reverse().map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={item.id} className="relative flex sm:justify-center">
              {/* dot */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute left-0 top-1 z-10 h-7.5 w-7.5 rounded-full border-4 border-bg bg-linear-to-br from-primary to-accent sm:left-1/2 sm:-translate-x-1/2"
              />

              {/* card */}
              <div
                className={`w-full pl-12 sm:w-1/2 sm:pl-0 ${isEven ? "sm:pr-12 sm:mr-auto sm:text-right" : "sm:pl-12 sm:ml-auto"
                  }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="glass rounded-2xl p-6 text-left"
                >
                  {renderItem(item)}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
