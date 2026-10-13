import { useState } from "react";
import { theme } from "../theme";
import { peso } from "../utils/format";
import Button from "./Button";

const initial = (config) => Object.fromEntries(config.groups.map((g) => [g.id, g.type === "single" ? [0] : []]));

// Custom sandwich builder. `config` = { base, groups:[{id,label,type:"single"|"multi",options:[{label,price}]}] }.
// `extra(chosenOptions)` can render additional info (e.g. dietary notes) under the summary.
export default function Builder({ config, onAdd, extra, addLabel = "Add Custom Sandwich to Cart" }) {
  const [sel, setSel] = useState(() => initial(config));
  const [added, setAdded] = useState(false);
  const toggle = (g, i) => setSel((s) => ({
    ...s,
    [g.id]: g.type === "single" ? [i] : s[g.id].includes(i) ? s[g.id].filter((x) => x !== i) : [...s[g.id], i],
  }));
  const chosen = config.groups.map((g) => ({ g, opts: sel[g.id].map((i) => g.options[i]) }));
  const names = chosen.flatMap((c) => c.opts.map((o) => o.label));
  const price = config.base + chosen.reduce((s, c) => s + c.opts.reduce((a, o) => a + o.price, 0), 0);
  const add = () => { onAdd("custom:" + names.join("|"), "Custom: " + names.join(", "), price); setAdded(true); setTimeout(() => setAdded(false), 1000); };
  return (
    <div className="grid items-start gap-10 md:grid-cols-[1.3fr_1fr]">
      <div>
        {config.groups.map((g) => (
          <fieldset key={g.id} className="mb-6">
            <legend className={`mb-3 text-lg font-semibold ${theme.h2}`}>{g.label}{g.type === "multi" && <span className="font-sans text-sm font-normal"> (choose any)</span>}</legend>
            <div className="flex flex-wrap gap-2.5">
              {g.options.map((o, i) => (
                <label key={o.label} className="relative cursor-pointer">
                  <input type={g.type === "single" ? "radio" : "checkbox"} name={g.id} className="peer sr-only" checked={sel[g.id].includes(i)} onChange={() => toggle(g, i)} />
                  <span className={`inline-block transition-colors peer-focus-visible:ring-4 peer-focus-visible:ring-offset-2 ${theme.optBase} ${theme.optOn}`}>
                    {o.label}{o.price > 0 && <small className="ml-1 opacity-75">+{peso(o.price)}</small>}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      <aside aria-label="Your custom sandwich" className={`p-7 md:sticky md:top-24 ${theme.card}`}>
        <h3 className={`text-xl ${theme.h2}`}>Your sandwich</h3>
        <ul className="my-4">
          {chosen.map(({ g, opts }) => (
            <li key={g.id} className={`flex justify-between gap-3 border-b py-2 ${theme.line}`}><span>{g.label}</span><span className="text-right">{opts.map((o) => o.label).join(", ") || "None"}</span></li>
          ))}
        </ul>
        {extra && <div className="mb-4 text-sm">{extra(chosen.flatMap((c) => c.opts))}</div>}
        <p className={`mb-4 flex justify-between text-xl font-semibold ${theme.price}`}><span>Sample price</span><span>{peso(price)}</span></p>
        <Button onClick={add} className="w-full">{added ? "Added to order" : addLabel}</Button>
      </aside>
    </div>
  );
}
