import { useEffect, useState } from "react";

const KEY = "stacked-cart";
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };

// Cart state: { [key]: { name, price, qty } }, persisted in localStorage.
export function useCart() {
  const [items, setItems] = useState(load);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* storage unavailable */ } }, [items]);
  const add = (key, name, price, qty = 1) => setItems((c) => ({ ...c, [key]: { name, price, qty: (c[key]?.qty || 0) + qty } }));
  const change = (key, d) => setItems((c) => {
    const qty = (c[key]?.qty || 0) + d; const next = { ...c };
    if (qty < 1) delete next[key]; else next[key] = { ...c[key], qty };
    return next;
  });
  const remove = (key) => setItems((c) => { const next = { ...c }; delete next[key]; return next; });
  const clear = () => setItems({});
  const list = Object.entries(items).map(([key, i]) => ({ key, ...i }));
  const subtotal = list.reduce((s, i) => s + i.price * i.qty, 0);
  const count = list.reduce((s, i) => s + i.qty, 0);
  return { list, subtotal, count, add, change, remove, clear };
}
