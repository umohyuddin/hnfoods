import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Happy Customers" },
  { value: 30, suffix: "+", label: "Organizations Trusted" },
  { value: 3, suffix: "", label: "Industry Awards" },
  { value: 7, suffix: "-Day", label: "Replacement Guarantee" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1500;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            setN(Math.round(p * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-bold text-gradient-blue">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="relative mt-10 text-center text-sm text-muted-foreground">
            Headquartered in Lahore, Pakistan. Serving clients across the
            <span className="text-foreground"> US, UK, Europe & MENA</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
