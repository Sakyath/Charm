import { Link } from "@tanstack/react-router";
import { ScrollCanvas } from "@/components/ScrollCanvas";
import type { ReactNode } from "react";

export function HeroScroll() {
  return (
    <ScrollCanvas
      frameDir="/videos/video-01"
      frameCount={300}
      scrollHeight="420vh"
      objectFit="cover"
      objectPosition="center"
      alt="A handmade charm bracelet revealed in warm light"
      imageFilter="brightness(1.35) saturate(1.08)"
      imageBlendMode="screen"
      className="relative bg-[#2f251c]"
      overlay={(progress) => {
        const fade1 = Math.max(0, 1 - progress * 3);
        const fade3 = Math.max(0, Math.min(1, (progress - 0.7) * 3));
        return (
          <>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
              <div style={{ opacity: fade1, transition: "opacity 0.4s" }}>
                <p className="eyebrow text-gold">Handmade charm jewellery</p>
                <h1 className="display-lg mt-8 text-ivory">
                  LITTLE CHARMS.
                  <span className="block italic">BIG MEMORIES.</span>
                </h1>
                <p className="body-lg mx-auto mt-7 max-w-md">
                  Handmade charm jewellery for the moments you don't want to forget.
                </p>
                <div className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link
                    to="/shop"
                    className="btn-gold px-10 py-4 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.3em]"
                  >
                    Explore Collection
                  </Link>
                  <Link
                    to="/customise"
                    className="btn-glass px-10 py-4 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.3em]"
                  >
                    Create Your Charm
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2"
              style={{ opacity: fade1 * 0.5, transition: "opacity 0.4s" }}
            >
              <span className="block h-16 w-px bg-gradient-to-b from-transparent to-ivory" />
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-40"
              style={{
                opacity: fade3,
                transition: "opacity 0.5s",
                background: "linear-gradient(to bottom, transparent, var(--obsidian))",
              }}
            />
          </>
        ) as ReactNode;
      }}
    />
  );
}
