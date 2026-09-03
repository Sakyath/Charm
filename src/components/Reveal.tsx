import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

const prefersReduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  once = true,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced()) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) setShown(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all duration-[900ms] ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function Parallax({
  children,
  strength = 24,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (prefersReduced()) return;
    let raf: number | null = null;
    const onScroll = () => {
      if (raf !== null) return;
      raf = window.requestAnimationFrame(() => {
        raf = null;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        setOffset(-progress * strength);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className} style={{ transform: `translate3d(0,${offset}px,0)` }}>
      {children}
    </div>
  );
}
