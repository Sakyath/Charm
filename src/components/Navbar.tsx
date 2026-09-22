import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { Menu, Search, Heart, X, ChevronRight, ShoppingBag, Sparkles } from "lucide-react";
import { useWishlist } from "@/hooks/use-wishlist";
import { GENERAL_WHATSAPP_LINK } from "@/lib/whatsapp";
import { WHATSAPP_DISPLAY } from "@/data/products";
import { useCart } from "@/hooks/use-cart";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/customise", label: "Customise" },
  { to: "/our-story", label: "Our Story" },
  { to: "/journal", label: "Journal" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [utilityOpen, setUtilityOpen] = useState(false);
  const [utilityClosing, setUtilityClosing] = useState(false);
  const [search, setSearch] = useState(false);
  const [q, setQ] = useState("");
  const { count } = useWishlist();
  const { count: cartCount } = useCart();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const utilityDragStart = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open || search || utilityOpen || utilityClosing ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, search, utilityOpen, utilityClosing]);

  useEffect(() => {
    if (!utilityClosing) return;
    const timeout = window.setTimeout(() => setUtilityClosing(false), 500);
    return () => window.clearTimeout(timeout);
  }, [utilityClosing]);

  useEffect(() => {
    if (!utilityOpen) return;

    window.history.pushState({ charmelleUtility: true }, "", window.location.href);
    const onPopState = () => closeUtility(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeUtility();
    };
    window.addEventListener("popstate", onPopState);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [utilityOpen]);

  const openUtility = () => {
    setUtilityClosing(false);
    setUtilityOpen(true);
  };

  const closeUtility = (goBack = true) => {
    setUtilityOpen(false);
    setUtilityClosing(true);
    if (goBack && window.history.state?.charmelleUtility) window.history.back();
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div
        className={`navbar-contrast nav-pill pointer-events-auto relative mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8 md:py-4 ${scrolled ? "is-glass" : ""}`}
      >
        {/* Left: mobile menu */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-inherit" strokeWidth={1.3} />
        </button>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.slice(0, 3).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hairline-link font-sans text-[0.62rem] uppercase tracking-[0.25em] text-inherit"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <span className="font-display text-2xl tracking-[0.18em] text-inherit md:text-3xl">
            Charmelle
          </span>
        </Link>

        {/* Right */}
        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-8 md:flex">
            {links.slice(3).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hairline-link font-sans text-[0.62rem] uppercase tracking-[0.25em] text-inherit"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="relative">
            <button
              type="button"
              onClick={() => (utilityOpen ? closeUtility() : openUtility())}
              aria-expanded={utilityOpen}
              aria-haspopup="menu"
              aria-label="Open shopping tools"
              className={`utility-capsule flex items-center gap-1 rounded-full px-2 py-1.5 text-inherit transition-all duration-300 ${utilityOpen ? "utility-capsule-active" : ""}`}
            >
              <span className="utility-capsule-icon">
                <Search className="h-3.5 w-3.5" strokeWidth={1.5} />
              </span>
              <span className="utility-capsule-icon">
                <Heart className="h-3.5 w-3.5" strokeWidth={1.5} />
              </span>
              <span className="utility-capsule-icon">
                <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.5} />
              </span>
              {(count > 0 || cartCount > 0) && (
                <span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-gold" />
              )}
            </button>

            {mounted &&
              (utilityOpen || utilityClosing) &&
              createPortal(
                <>
                  <button
                    type="button"
                    aria-label="Close shopping tools"
                    className={`utility-scrim fixed inset-0 z-40 h-full w-full cursor-default ${utilityClosing ? "utility-scrim-closing" : ""}`}
                    onClick={() => closeUtility()}
                  />
                  <div
                    className={`utility-popover absolute right-0 top-[calc(100%+0.8rem)] z-50 w-64 overflow-hidden rounded-[1.35rem] p-2 ${utilityClosing ? "utility-popover-closing" : ""}`}
                    role="menu"
                  >
                    <div className="utility-popover-head flex items-center justify-between px-3 pb-2 pt-2">
                      <div>
                        <p className="font-display text-lg leading-none text-espresso">
                          Little rituals
                        </p>
                        <p className="mt-1 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-stone">
                          Your essentials
                        </p>
                      </div>
                      <span className="utility-sparkle" aria-hidden="true">
                        <Sparkles className="h-3.5 w-3.5" strokeWidth={1.4} />
                      </span>
                    </div>
                    <button
                      type="button"
                      role="menuitem"
                      style={{ "--i": 0 } as CSSProperties}
                      className="utility-action flex w-full items-center gap-3 rounded-[1rem] px-4 py-3 text-left text-espresso"
                      onClick={() => {
                        closeUtility();
                        setSearch(true);
                      }}
                    >
                      <Search className="h-4 w-4 text-gold" strokeWidth={1.4} />
                      <span className="flex-1 font-sans text-sm">Search the collection</span>
                      <ChevronRight className="h-4 w-4 text-stone/60" strokeWidth={1.4} />
                    </button>
                    <Link
                      to="/wishlist"
                      role="menuitem"
                      style={{ "--i": 1 } as CSSProperties}
                      onClick={() => closeUtility()}
                      className="utility-action flex items-center gap-3 rounded-[1rem] px-4 py-3 text-espresso"
                    >
                      <Heart className="h-4 w-4 text-gold" strokeWidth={1.4} />
                      <span className="flex-1 font-sans text-sm">Wishlist</span>
                      {count > 0 && <span className="font-sans text-xs text-stone">{count}</span>}
                      <ChevronRight className="h-4 w-4 text-stone/60" strokeWidth={1.4} />
                    </Link>
                    <Link
                      to="/cart"
                      role="menuitem"
                      style={{ "--i": 2 } as CSSProperties}
                      onClick={() => closeUtility()}
                      className="utility-action flex items-center gap-3 rounded-[1rem] px-4 py-3 text-espresso"
                    >
                      <ShoppingBag className="h-4 w-4 text-gold" strokeWidth={1.4} />
                      <span className="flex-1 font-sans text-sm">Your bag</span>
                      {cartCount > 0 && (
                        <span className="font-sans text-xs text-stone">{cartCount}</span>
                      )}
                      <ChevronRight className="h-4 w-4 text-stone/60" strokeWidth={1.4} />
                    </Link>
                    <div
                      className="utility-drag-handle"
                      onPointerDown={(event) => {
                        utilityDragStart.current = event.clientY;
                        event.currentTarget.setPointerCapture(event.pointerId);
                      }}
                      onPointerMove={(event) => {
                        if (
                          utilityDragStart.current !== null &&
                          utilityDragStart.current - event.clientY > 56
                        ) {
                          closeUtility();
                          utilityDragStart.current = null;
                        }
                      }}
                      onPointerUp={() => {
                        utilityDragStart.current = null;
                      }}
                      role="presentation"
                    >
                      <span />
                    </div>
                  </div>
                </>,
                document.body,
              )}
          </div>
        </div>
      </div>

      {/* Search overlay */}
      {mounted &&
        search &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] bg-obsidian/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <div className="mx-auto max-w-2xl px-5 pt-24">
              <div className="flex items-center justify-between">
                <p className="eyebrow text-gold">Search</p>
                <button onClick={() => setSearch(false)} aria-label="Close search">
                  <X className="h-5 w-5 text-espresso" strokeWidth={1.3} />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (q.trim()) {
                    window.location.href = `/shop?q=${encodeURIComponent(q.trim())}`;
                  }
                }}
              >
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search for charms, bracelets…"
                  className="mt-6 w-full border-b border-espresso/20 bg-transparent py-3 font-display text-2xl text-espresso placeholder:text-stone/50 focus:outline-none"
                />
              </form>
            </div>
          </div>,
          document.body,
        )}

      {/* Mobile drawer — iOS liquid-glass sheet */}
      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true">
            <div
              className="ios-scrim absolute inset-0 bg-ink/30 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
            />
            <div className="ios-sheet absolute inset-x-2 bottom-2 top-14 overflow-hidden rounded-[2.2rem] border border-ivory/15 bg-obsidian/80 p-4 shadow-[0_24px_70px_-20px_rgba(16,11,6,0.45)] backdrop-blur-2xl backdrop-saturate-150">
              {/* Grabber */}
              <div className="mx-auto h-[5px] w-10 rounded-full bg-obsidian/80" />

              <div className="mt-4 flex items-center justify-between px-1">
                <span className="font-display text-2xl tracking-[0.12em] text-espresso">
                  Charmelle
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="ios-glass-control flex h-9 w-9 items-center justify-center rounded-full text-espresso transition active:scale-90"
                >
                  <X className="h-4 w-4" strokeWidth={1.6} />
                </button>
              </div>

              <nav className="ios-glass-control mt-6 overflow-hidden rounded-[1.4rem]">
                {links.map((l, i) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    style={{ animationDelay: `${60 + i * 45}ms` }}
                    className={`ios-row flex items-center justify-between px-5 py-4 font-sans text-[0.95rem] tracking-[0.01em] text-espresso transition active:bg-espresso/5 ${
                      i > 0 ? "border-t border-espresso/10" : ""
                    }`}
                  >
                    <span>{l.label}</span>
                    <ChevronRight className="h-4 w-4 text-stone/70" strokeWidth={1.6} />
                  </Link>
                ))}
              </nav>

              <a
                href={GENERAL_WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="ios-row mt-4 flex items-center justify-center gap-2 rounded-[1.4rem] bg-cream px-5 py-4 font-sans text-[0.9rem] tracking-[0.02em] text-ivory backdrop-blur-xl transition active:scale-[0.98]"
                style={{ animationDelay: "300ms" }}
              >
                WhatsApp {WHATSAPP_DISPLAY}
              </a>

              <p className="mt-5 text-center font-sans text-[0.6rem] uppercase tracking-[0.3em] text-stone/70">
                Little charms. Big memories.
              </p>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
