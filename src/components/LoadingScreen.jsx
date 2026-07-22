import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const BOOT_LINES = [
  "Optimizing interface...",
  "Loading...",
  "Ready."

];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length - 1) {
      const timeout = setTimeout(() => setVisible(false), 450);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => setLineIndex((i) => i + 1), 260);
    return () => clearTimeout(timeout);
  }, [lineIndex]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-bg"
        >
          <div className="w-72 font-mono text-sm text-text-muted">
            <div className="mb-3 text-gradient font-display text-4xl font-bold text-center leading-tight">
              Linganand
            </div>
            {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => (
              <div key={line} className="flex items-center justify-center gap-2">

                <span>{line}</span>
                {i === lineIndex && (
                  <span className="inline-block h-4 w-2 animate-caret bg-primary" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
