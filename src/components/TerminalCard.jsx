import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CODE_LINES = [
  { text: "const developer = {", color: "text-white" },
  { text: "  name: 'Linganand',", color: "text-accent" },
  { text: "  role: 'Frontend Engineer',", color: "text-accent" },
  { text: "  stack: ['React JS', 'Node Js', 'SQL'],", color: "text-accent" },
  { text: "  loves: 'clean UI + Reusable Components',", color: "text-accent" },
  { text: "  available: true,", color: "text-primary" },
  { text: "};", color: "text-white" },
];

export default function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;
    const timeout = setTimeout(() => setVisibleLines((v) => v + 1), 260);
    return () => clearTimeout(timeout);
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="animate-float-slow glass-strong bg-black! relative w-full max-w-md rounded-2xl p-1 shadow-2xl shadow-primary/10"
    >
      <div className="rounded-[14px] bg-black/40">
        {/* window chrome */}
        <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-text-faint">developer.js</span>
        </div>
        <div className="min-h-55 p-5 font-mono text-[13px] leading-7 sm:text-sm">
          {CODE_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className={line.color}>
              {line.text}
            </div>
          ))}
          {visibleLines < CODE_LINES.length && (
            <span className="animate-caret inline-block h-4 w-2 bg-primary align-middle" />
          )}
        </div>
      </div>

      {/* floating accent badges */}
      {/* <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -right-6 -top-6 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-mono text-accent shadow-lg"
      >
        ⚛ React 19
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="glass absolute -bottom-5 -left-6 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-mono text-secondary shadow-lg"
      >
        ✓ Available for work
      </motion.div> */}
    </motion.div>
  );
}
