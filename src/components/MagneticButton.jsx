import { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * A button that subtly follows the cursor within its bounds ("magnetic" hover).
 * Renders as <a> when `href` is provided, otherwise <button>.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  strength = 18,
  type = "button",
  target,
  rel,
  ...rest
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * strength;
    setPos({ x, y });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium text-sm tracking-wide transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent";

  const variants = {
    primary:
      "bg-linear-to-r from-primary to-secondary text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_30px_-8px_rgba(99,102,241,0.6)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_12px_40px_-6px_rgba(99,102,241,0.8)]",
    ghost:
      "border border-white-15 text-text bg-white/[0.02] hover:bg-white/6 hover:border-primary/40",
  };

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
