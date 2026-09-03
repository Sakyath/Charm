import { Link } from "@tanstack/react-router";
import { Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { readWishlist, subscribeWishlist } from "@/lib/wishlist";
import { INSTAGRAM_URL } from "@/lib/whatsapp";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/customise", label: "Customise" },
  { to: "/our-story", label: "Our Story" },
  { to: "/journal", label: "Journal" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sync = () => setCount(readWishlist().length);
    sync();
    return subscribeWishlist(sync);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-ivory/92 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-ivory/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Link to="/" className="text-2xl tracking-[0.2em] text-espresso uppercase">
          Charmelle
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-espresso" }}
              className="text-[0.68rem] uppercase tracking-luxe text-espresso/60 transition-colors hover:text-espresso"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[0.68rem] uppercase tracking-luxe text-espresso/60 transition-colors hover:text-espresso md:block"
          >
            Instagram
          </a>
          <Link to="/wishlist" aria-label="Wishlist" className="relative text-espresso">
            <Heart className="h-5 w-5" />
            {count > 0 ? (
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-espresso text-[0.55rem] text-ivory">
                {count}
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            className="md:hidden text-espresso"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="border-t border-border bg-ivory px-5 py-5 md:hidden">
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block text-sm uppercase tracking-luxe text-espresso"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm uppercase tracking-luxe text-espresso"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
