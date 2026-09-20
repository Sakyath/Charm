import { useCallback, useEffect, useState } from "react";

const KEY = "charmelle:cart";

export type CartItem = {
  slug: string;
  quantity: number;
};

function read(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function write(items: CartItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("charmelle:cart-sync"));
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(read());
    const onStorage = (event: StorageEvent) => {
      if (event.key === KEY) setItems(read());
    };
    const onSync = () => setItems(read());
    window.addEventListener("storage", onStorage);
    window.addEventListener("charmelle:cart-sync", onSync);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("charmelle:cart-sync", onSync);
    };
  }, []);

  const add = useCallback((slug: string) => {
    const current = read();
    const existing = current.find((item) => item.slug === slug);
    const next = existing
      ? current.map((item) => (item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item))
      : [...current, { slug, quantity: 1 }];
    setItems(next);
    write(next);
  }, []);

  const updateQuantity = useCallback((slug: string, quantity: number) => {
    const next = read()
      .map((item) => (item.slug === slug ? { ...item, quantity } : item))
      .filter((item) => item.quantity > 0);
    setItems(next);
    write(next);
  }, []);

  const remove = useCallback((slug: string) => {
    const next = read().filter((item) => item.slug !== slug);
    setItems(next);
    write(next);
  }, []);

  return {
    items,
    add,
    updateQuantity,
    remove,
    count: items.reduce((total, item) => total + item.quantity, 0),
  };
}
