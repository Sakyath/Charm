import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  frameDir: string;
  frameCount: number;
  filePattern?: (i: number) => string;
  scrollHeight?: string;
  objectFit?: "cover" | "contain";
  align?: "center" | "top";
  priority?: boolean;
  className?: string;
  children?: ReactNode;
  ariaLabel: string;
  backdropClassName?: string;
};

const defaultPattern = (i: number) => `frame-${String(i).padStart(4, "0")}.jpg`;

export default function ScrollCanvas({
  frameDir,
  frameCount,
  filePattern = defaultPattern,
  scrollHeight = "300vh",
  objectFit = "cover",
  align = "center",
  priority = false,
  className = "",
  children,
  ariaLabel,
  backdropClassName = "bg-espresso-deep",
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    let active = true;
    let loadedAll = false;
    imagesRef.current = new Array(frameCount).fill(null);

    const src = (i: number) => `${frameDir}/${filePattern(i + 1)}`;

    const loadFrame = (i: number) =>
      new Promise<void>((resolve) => {
        if (!active || imagesRef.current[i]) return resolve();
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          if (active) imagesRef.current[i] = img;
          resolve();
        };
        img.onerror = () => resolve();
        img.src = src(i);
      });

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let img = imagesRef.current[frameRef.current];
      if (!img) {
        for (let d = 1; d < frameCount && !img; d++) {
          img = imagesRef.current[frameRef.current - d] ?? imagesRef.current[frameRef.current + d] ?? null;
        }
      }
      if (!img) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const scale =
        objectFit === "cover"
          ? Math.max(w / img.naturalWidth, h / img.naturalHeight)
          : Math.min(w / img.naturalWidth, h / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      const dx = (w - dw) / 2;
      const dy = align === "top" ? 0 : (h - dh) / 2;
      ctx.drawImage(img, dx, dy, dw, dh);
      setReady(true);
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        const rect = wrap.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
        const next = Math.min(frameCount - 1, Math.round(progress * (frameCount - 1)));
        if (next !== frameRef.current || !ready) {
          frameRef.current = next;
          draw();
        }
      });
    };

    const loadProgressive = async () => {
      // First frame immediately, then a sparse pass, then everything.
      await loadFrame(0);
      draw();
      for (let i = 0; i < frameCount; i += 8) await loadFrame(i);
      draw();
      for (let i = 0; i < frameCount; i++) {
        if (!active) return;
        await loadFrame(i);
        if (i % 25 === 0) draw();
      }
      loadedAll = true;
      draw();
    };

    let started = priority;
    if (priority) void loadProgressive();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            void loadProgressive();
          }
          if (!entry.isIntersecting && loadedAll) {
            // release memory when far away
            imagesRef.current = imagesRef.current.map((img, i) => (i % 8 === 0 ? img : null));
            loadedAll = false;
            started = false;
          }
        }
      },
      { rootMargin: "200% 0px" },
    );
    io.observe(wrap);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", draw);
    onScroll();

    return () => {
      active = false;
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", draw);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      imagesRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameDir, frameCount, objectFit, align, priority]);

  return (
    <section ref={wrapRef} className={`relative ${className}`} style={{ height: scrollHeight }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className={`absolute inset-0 ${backdropClassName}`} aria-hidden="true" />
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          role="img"
          aria-label={ariaLabel}
        />
        {children}
      </div>
    </section>
  );
}
