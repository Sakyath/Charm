import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";

type Phase = "idle" | "anticipation" | "activation" | "opening" | "emerge" | "open";

type Props = {
  image: string;
  alt: string;
  eyebrow?: string;
  name: string;
  meaning?: string;
  price?: string;
  href?: string;
  ctaLabel?: string;
  autoOpen?: boolean;
  showInfo?: boolean;
};

/** Cinematic 5-phase capsule opening: anticipation → activation → 3D opening → emergence → glass info panel. */
export function CapsuleReveal({
  image,
  alt,
  eyebrow = "The capsule",
  name,
  meaning,
  price,
  href,
  ctaLabel = "Order via WhatsApp",
  autoOpen = true,
  showInfo = true,
}: Props) {
  const [phase, setPhase] = useState<Phase>("idle");
  const timers = useRef<number[]>([]);
  const root = useRef<HTMLDivElement>(null);
  const reduced = useRef(false);

  const clear = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  const run = useCallback(
    (steps: [Phase, number][]) => {
      clear();
      steps.forEach(([next, delay]) => {
        timers.current.push(window.setTimeout(() => setPhase(next), delay));
      });
    },
    [clear],
  );

  const open = useCallback(() => {
    if (reduced.current) {
      clear();
      setPhase("open");
      return;
    }
    run([
      ["anticipation", 0],
      ["activation", 220],
      ["opening", 520],
      ["emerge", 1180],
      ["open", 1900],
    ]);
  }, [clear, run]);

  const close = useCallback(() => {
    if (reduced.current) {
      clear();
      setPhase("idle");
      return;
    }
    run([
      ["emerge", 0],
      ["opening", 320],
      ["activation", 820],
      ["anticipation", 1100],
      ["idle", 1320],
    ]);
  }, [clear, run]);

  const skip = useCallback(() => {
    clear();
    setPhase("open");
  }, [clear]);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return clear;
  }, [clear]);

  useEffect(() => {
    if (!autoOpen || !root.current) return;
    const el = root.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && phase === "idle") {
            open();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.45 },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoOpen]);

  const animating = phase !== "idle" && phase !== "open";
  const isOpen = phase === "open";

  const particles = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        left: `${8 + i * 9}%`,
        bottom: `${18 + (i % 4) * 9}%`,
        delay: `${(i % 5) * 0.42}s`,
      })),
    [],
  );

  return (
    <div ref={root} className="capsule stage-glow relative" data-phase={phase}>
      <div className="capsule-stage relative mx-auto aspect-[4/5] w-full max-w-md">
        {/* interior warm light */}
        <div className="capsule-interior-light pointer-events-none absolute inset-6 rounded-[2rem]" />

        {/* glass shell halves */}
        <div className="capsule-shell absolute inset-0">
          <div className="capsule-lid absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-[2.2rem] border border-t border-ivory/12 bg-ivory/[0.055] backdrop-blur-xl">
            <div className="absolute inset-x-6 top-4 h-[38%] rounded-full bg-gradient-to-b from-ivory/15 to-transparent" />
          </div>
          <div className="capsule-base absolute inset-x-0 bottom-0 h-1/2 overflow-hidden rounded-b-[2.2rem] border border-ivory/12 bg-ivory/[0.035] backdrop-blur-xl">
            <div className="absolute inset-x-10 bottom-5 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          </div>
        </div>

        {/* particles */}
        {particles.map((p, i) => (
          <span
            key={i}
            className="capsule-particle"
            style={{ left: p.left, bottom: p.bottom, animationDelay: p.delay }}
            aria-hidden="true"
          />
        ))}

        {/* product */}
        <div className="capsule-product absolute inset-8 overflow-hidden rounded-[1.6rem] border border-gold/20 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
          <img src={image} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <span className="capsule-sweep" aria-hidden="true" />
        </div>
      </div>

      {/* glass info panel */}
      <div hidden={!showInfo} className="capsule-info glass-panel glass-panel-raised mx-auto -mt-8 w-[88%] max-w-sm p-6 text-center">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h3 className="font-display mt-3 text-3xl italic text-ivory">{name}</h3>
        {meaning && <p className="mt-2 font-sans text-[0.8rem] font-light text-ivory/55">{meaning}</p>}
        {price && <p className="mt-4 font-sans text-sm text-gold">{price}</p>}
        <div className="mt-5 flex flex-col items-center gap-3">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em]"
            >
              <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.6} />
              {ctaLabel}
            </a>
          )}
          <button
            type="button"
            onClick={isOpen ? close : open}
            className="btn-glass px-6 py-3 font-sans text-[0.58rem] uppercase tracking-[0.25em]"
          >
            {isOpen ? "Close the capsule" : "Open the capsule"}
          </button>
        </div>
      </div>

      {!showInfo && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={isOpen ? close : open}
            className="btn-glass px-6 py-3 font-sans text-[0.58rem] uppercase tracking-[0.25em]"
          >
            {isOpen ? "Close the capsule" : "Replay the opening"}
          </button>
        </div>
      )}

      {/* skip control while the reveal plays */}
      {animating && (
        <button
          type="button"
          onClick={skip}
          className="btn-glass absolute right-2 top-2 z-10 inline-flex items-center gap-1.5 px-4 py-2 font-sans text-[0.55rem] uppercase tracking-[0.25em]"
        >
          <Sparkles className="h-3 w-3 text-gold" strokeWidth={1.6} />
          Skip
        </button>
      )}
    </div>
  );
}
