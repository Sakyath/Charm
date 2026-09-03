import { Link } from "@tanstack/react-router";

import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  createWhatsAppGeneralLink,
} from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-espresso-deep text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-2xl uppercase tracking-[0.2em]">Charmelle</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/65">
              Handmade charm jewellery, assembled one piece at a time in small batches. Every order is a
              conversation, not a checkout.
            </p>
            <p className="mt-6 font-script text-3xl text-champagne">Made with love</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[0.65rem] uppercase tracking-luxe text-ivory/50">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/collections">Collections</Link>
              </li>
              <li>
                <Link to="/customise">Customise</Link>
              </li>
              <li>
                <Link to="/our-story">Our Story</Link>
              </li>
              <li>
                <Link to="/journal">Journal</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[0.65rem] uppercase tracking-luxe text-ivory/50">Order & say hello</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              <li>
                <a href={createWhatsAppGeneralLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ivory/15 pt-6 text-[0.65rem] uppercase tracking-luxe text-ivory/45 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Charmelle</p>
          <p>Handmade in India</p>
        </div>
      </div>
    </footer>
  );
}
