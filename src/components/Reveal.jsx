import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/animations/variants";

/**
 * Wraps children in a scroll-triggered fade/slide-up reveal.
 * Pass `variants` to override, or `delay` for stagger-like offsets.
 */
export default function Reveal({
  children,
  as = "div",
  variants = fadeUp,
  delay = 0,
  className = "",
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
