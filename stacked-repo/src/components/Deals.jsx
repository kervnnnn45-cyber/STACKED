import { useState } from "react";
import { Check } from "lucide-react";
import { DEALS, MENU } from "../data/site";
import { peso } from "../utils/format";
import Button from "./Button";
import SectionHeading from "./SectionHeading";

const dealTotal = (d) => d.items.reduce((s, id) => s + MENU.find((m) => m.id === id).price, 0);

function DealCard({ deal, onAdd }) {
  const [added, setAdded] = useState(false);
  const original = dealTotal(deal);
  const price = original - deal.off;
  const add = () => { onAdd("deal:" + deal.id, deal.name, price); setAdded(true); setTimeout(() => setAdded(false), 1000); };
  return (
    <article className="flex flex-col gap-3 rounded-2xl border-2 border-flame bg-ink p-6">
      <h3 className="text-3xl">{deal.name}</h3>
      <p className="flex-1 text-paper/75">{deal.description}</p>
      <p className="flex items-baseline gap-3"><span className="font-display text-4xl text-flame">{peso(price)}</span><s className="text-paper/60" aria-label={`Regular price ${peso(original)}`}>{peso(original)}</s></p>
      <Button onClick={add} aria-label={added ? `${deal.name} added` : `Add ${deal.name} deal to order`}>{added ? <><Check size={16} aria-hidden="true" />Added</> : "Add Deal"}</Button>
    </article>
  );
}

export default function Deals({ onAdd }) {
  return (
    <section id="deals" aria-labelledby="deals-title" className="bg-coal py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="deals-title" title="Meal deals">Bundles that cost less than ordering one by one. Sample savings, editable in the data file.</SectionHeading>
        <div className="mt-9 grid gap-5 md:grid-cols-3">{DEALS.map((d) => <DealCard key={d.id} deal={d} onAdd={onAdd} />)}</div>
      </div>
    </section>
  );
}
