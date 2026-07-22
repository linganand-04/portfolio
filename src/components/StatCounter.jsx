import { useCountUp } from "@/hooks/useCountUp";

export default function StatCounter({ value, suffix = "", label }) {
  const { ref, value: displayValue } = useCountUp(value);

  return (
    <div ref={ref} className="flex flex-col gap-1 items-center">
      <span className="font-display text-3xl font-bold text-text sm:text-4xl">
        {displayValue}
        <span className="text-gradient">{suffix}</span>
      </span>
      <span className="text-sm text-text-muted">{label}</span>
    </div>
  );
}
