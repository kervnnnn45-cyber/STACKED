import { useEffect, useRef, useState } from "react";
import { Plus, Minus, Trash2, X } from "lucide-react";
import { DELIVERY_FEE } from "../data/site";
import { theme } from "../theme";
import { peso } from "../utils/format";
import { submitOrder } from "../utils/submit";
import Button from "./Button";

export default function CartDrawer({ open, onClose, cart }) {
  const [step, setStep] = useState("cart"); // "cart" | "review"
  const [f, setF] = useState({ name: "", phone: "", method: "Pickup", address: "", note: "" });
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const closeRef = useRef(null);
  const fee = f.method === "Delivery" && cart.subtotal ? DELIVERY_FEE : 0;
  const total = cart.subtotal + fee;
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => { if (!cart.count) setStep("cart"); }, [cart.count]);

  const proceed = () => {
    setNotice("");
    if (!cart.count) return setError("Add at least one sandwich before checkout.");
    if (!f.name.trim()) return setError("Please enter your name.");
    if (f.phone.replace(/\D/g, "").length < 7) return setError("Please enter a valid contact number.");
    if (f.method === "Delivery" && !f.address.trim()) return setError("Please enter your delivery address.");
    setError(""); setStep("review");
  };
  const confirm = async () => {
    const r = await submitOrder({ items: cart.list, ...f, total });
    setNotice(r.sent ? "Order sent. Thank you!" : "Demo only: your order was not sent. This site isn't connected to an ordering service yet, so nothing was submitted or charged.");
  };
  const label = `font-bold ${theme.title}`;

  return (
    <>
      <div onClick={onClose} aria-hidden="true" className={`fixed inset-0 z-40 ${theme.overlay} transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} />
      <aside role="dialog" aria-modal="true" aria-label="Your order"
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-[420px] flex-col p-7 shadow-2xl transition-transform ${theme.panel} ${open ? "translate-x-0" : "invisible translate-x-full"}`}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className={`text-2xl ${theme.h2}`}>{step === "cart" ? theme.cartTitle : theme.reviewTitle}</h2>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close order" className={`p-2 ${theme.title}`}><X aria-hidden="true" /></button>
        </div>
        <div className="flex-1 overflow-y-auto pr-1">
          {step === "cart" ? (
            <>
              {cart.list.length === 0 && <p className="py-5">Your order is empty. Add a sandwich from the menu.</p>}
              <ul>
                {cart.list.map((i) => (
                  <li key={i.key} className={`flex items-center justify-between gap-3 border-b py-3 ${theme.line}`}>
                    <div><strong>{i.name}</strong><br /><span className={`text-sm ${theme.muted}`}>{peso(i.price)} each</span></div>
                    <div className="flex items-center gap-2">
                      <button type="button" className={theme.round} aria-label={`Decrease ${i.name}`} onClick={() => cart.change(i.key, -1)}><Minus size={14} aria-hidden="true" /></button>
                      <span aria-live="polite">{i.qty}</span>
                      <button type="button" className={theme.round} aria-label={`Increase ${i.name}`} onClick={() => cart.change(i.key, 1)}><Plus size={14} aria-hidden="true" /></button>
                      <button type="button" className={theme.round} aria-label={`Remove ${i.name}`} onClick={() => cart.remove(i.key)}><Trash2 size={14} aria-hidden="true" /></button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid gap-3 text-sm font-medium">
                <label className="grid gap-1">Notes or special instructions<textarea rows={2} value={f.note} onChange={set("note")} className={theme.field} /></label>
                <label className="grid gap-1">Name<input value={f.name} onChange={set("name")} autoComplete="name" className={theme.field} /></label>
                <label className="grid gap-1">Contact number<input type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" className={theme.field} /></label>
                <label className="grid gap-1">Pickup or delivery
                  <select value={f.method} onChange={set("method")} className={theme.field}><option>Pickup</option><option value="Delivery">Delivery (sample fee {peso(DELIVERY_FEE)})</option></select></label>
                {f.method === "Delivery" && <label className="grid gap-1">Delivery address<textarea rows={2} value={f.address} onChange={set("address")} autoComplete="street-address" className={theme.field} /></label>}
              </div>
            </>
          ) : (
            <div>
              <ul>{cart.list.map((i) => <li key={i.key} className={`flex justify-between gap-3 border-b py-2 ${theme.line}`}><span>{i.qty} × {i.name}</span><span>{peso(i.price * i.qty)}</span></li>)}</ul>
              <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
                <dt className={label}>Name</dt><dd>{f.name}</dd>
                <dt className={label}>Contact</dt><dd>{f.phone}</dd>
                <dt className={label}>Method</dt><dd>{f.method}</dd>
                {f.method === "Delivery" && <><dt className={label}>Address</dt><dd>{f.address}</dd></>}
                {f.note.trim() && <><dt className={label}>Notes</dt><dd>{f.note}</dd></>}
              </dl>
            </div>
          )}
          <p role="alert" className={`mt-3 min-h-[1.2em] font-medium ${theme.err}`}>{error}</p>
        </div>
        <div className="pt-3">
          <p className="flex justify-between text-sm"><span>Subtotal</span><span>{peso(cart.subtotal)}</span></p>
          <p className="flex justify-between text-sm"><span>Delivery fee</span><span>{peso(fee)}</span></p>
          <p className={`my-3 flex justify-between text-xl font-semibold ${theme.price}`}><span>Total</span><span>{peso(total)}</span></p>
          <div className="grid gap-2">
            <Button onClick={step === "cart" ? proceed : confirm}>{step === "cart" ? "Proceed to Checkout" : "Confirm Order"}</Button>
            {step === "review" && <Button variant="ghost" onClick={() => { setStep("cart"); setNotice(""); }}>Edit Order</Button>}
          </div>
          <p role="status" className={`mt-3 min-h-[1.2em] text-sm font-medium ${theme.title}`}>{notice}</p>
        </div>
      </aside>
    </>
  );
}
