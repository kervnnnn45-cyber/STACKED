import { useState } from "react";
import { COMBO_DISCOUNT, DRINKS, MENU, SIDES } from "../data/site";
import { theme } from "../theme";
import { peso } from "../utils/format";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

// Pick a sandwich + side + drink. The total updates live and includes the combo discount.
export default function ComboBuilder({ onAdd }) {
  const [pick, setPick] = useState({ sandwich: 0, side: 0, drink: 0 });
  const [added, setAdded] = useState(false);
  const groups = [["sandwich", "Sandwich", MENU], ["side", "Side", SIDES], ["drink", "Drink", DRINKS]];
  const chosen = { sandwich: MENU[pick.sandwich], side: SIDES[pick.side], drink: DRINKS[pick.drink] };
  const subtotal = chosen.sandwich.price + chosen.side.price + chosen.drink.price;
  const total = subtotal - COMBO_DISCOUNT;
  const name = `Stack Combo: ${chosen.sandwich.name} + ${chosen.side.name} + ${chosen.drink.name}`;
  const add = () => { onAdd(`combo:${chosen.sandwich.id}|${chosen.side.id}|${chosen.drink.id}`, name, total); setAdded(true); setTimeout(() => setAdded(false), 1000); };
  return (
    <section id="combo" aria-labelledby="combo-title" className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading id="combo-title" title="Build your combo">Pick a sandwich, a side and a drink. The total updates as you choose.</SectionHeading>
      <div className="mt-9 grid items-start gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          {groups.map(([key, label, options]) => (
            <fieldset key={key} className="mb-6">
              <legend className="mb-3 font-display text-lg uppercase text-paper">{label}</legend>
              <div className="flex flex-wrap gap-2.5">
                {options.map((o, i) => (
                  <label key={o.id} className="relative cursor-pointer">
                    <input type="radio" name={`combo-${key}`} className="peer sr-only" checked={pick[key] === i} onChange={() => setPick({ ...pick, [key]: i })} />
                    <span className={`inline-block transition-colors peer-focus-visible:ring-4 peer-focus-visible:ring-offset-2 ${theme.optBase} ${theme.optOn}`}>{o.name} <small className="ml-1 opacity-75">{peso(o.price)}</small></span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
        </div>
        <aside aria-label="Your combo" className="rounded-2xl border-2 border-flame bg-coal p-7 md:sticky md:top-24">
          <h3 className="text-2xl">Your combo</h3>
          <ul className="my-4 grid gap-1">
            <li className="flex justify-between"><span>{chosen.sandwich.name}</span><span>{peso(chosen.sandwich.price)}</span></li>
            <li className="flex justify-between"><span>{chosen.side.name}</span><span>{peso(chosen.side.price)}</span></li>
            <li className="flex justify-between"><span>{chosen.drink.name}</span><span>{peso(chosen.drink.price)}</span></li>
            <li className="flex justify-between text-flame"><span>Combo discount</span><span>−{peso(COMBO_DISCOUNT)}</span></li>
          </ul>
          <p className="mb-4 flex justify-between font-display text-2xl uppercase text-flame" aria-live="polite"><span>Combo total</span><span>{peso(total)}</span></p>
          <Button onClick={add} className="w-full">{added ? "Added to order" : "Add Combo to Order"}</Button>
        </aside>
      </div>
    </section>
  );
}
