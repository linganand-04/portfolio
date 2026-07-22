import { motion } from "framer-motion";
import { getIcon } from "@/utils/icons";
import { viewportOnce } from "@/animations/variants";

export default function SkillBar({ name, level, icon }) {
  const Icon = getIcon(icon);

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="glass group rounded-2xl p-5 transition-colors duration-300 hover:border-primary/30"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-15 w-15 items-center justify-center rounded-lg bg-linear-to-br from-primary/20 to-accent/20 text-accent transition-transform duration-300 group-hover:scale-110">
          <Icon size={22} />
        </div>
        <span className="text-base font-medium text-text">{name}</span>
        {/* <span className="ml-auto font-mono text-xs text-text-faint">{level}%</span> */}
      </div>
      {/* <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/6">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="h-full rounded-full bg-linear-to-r from-primary to-accent"
        />
      </div> */}
    </motion.div>
  );
}
