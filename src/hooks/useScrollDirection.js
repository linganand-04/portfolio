import { useEffect, useRef, useState } from "react";

/**
 * Returns "up" | "down" and whether the page has scrolled past a threshold.
 */
export function useScrollDirection(threshold = 10) {
  const [direction, setDirection] = useState("up");
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      if (Math.abs(y - lastY.current) < threshold) return;
      setDirection(y > lastY.current ? "down" : "up");
      lastY.current = y > 0 ? y : 0;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, scrolled };
}
