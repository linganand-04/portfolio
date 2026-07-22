import { useEffect, useRef } from "react";

/**
 * Ambient glow that trails the cursor. Desktop-only (fine pointer), disabled on touch.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    let frame;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-1 hidden h-105 w-105 rounded-full opacity-[0.15] blur-[90px] md:block"
      style={{
        background:
          "radial-gradient(circle, var(--color-primary) 0%, var(--color-secondary) 45%, transparent 70%)",
      }}
    />
  );
}
