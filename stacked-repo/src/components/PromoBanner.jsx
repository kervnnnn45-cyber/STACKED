import { useState } from "react";
import { Zap, X } from "lucide-react";
import { PROMO } from "../data/site";

export default function PromoBanner() {
  const [shown, setShown] = useState(true);
  if (!shown) return null;
  return (
    <div className="bg-flame text-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 text-sm font-bold">
        <p className="flex items-center gap-2"><Zap size={16} aria-hidden="true" />{PROMO.text}</p>
        <div className="flex shrink-0 items-center gap-3">
          <a href="#combo" className="underline">Build a combo</a>
          <button type="button" aria-label="Dismiss offer" onClick={() => setShown(false)}><X size={18} aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  );
}
