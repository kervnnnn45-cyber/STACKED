import { useState } from "react";
import { Check } from "lucide-react";
import { CATEGORIES, MENU } from "../data/site";
import { peso } from "../utils/format";
import Button from "./Button";
import FilterBar from "./FilterBar";
import SandwichImage from "./SandwichImage";
import SectionHeading from "./SectionHeading";

function MenuCard({ item, onAdd }) {
  const [added, setAdded] = useState(false);
  const add = () => { onAdd(item.id, item.name, item.price); setAdded(true); setTimeout(() => setAdded(false), 1000); };
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-paper/10 bg-coal transition hover:-translate-y-1.5 hover:border-flame">
      <SandwichImage item={item} className="aspect-[4/3] !rounded-none" />
      {item.best && <span className="absolute left-3 top-3 bg-flame px-2 py-1 font-display text-xs uppercase text-ink">Best seller</span>}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-2xl">{item.name}</h3>
          <span className="font-display text-3xl text-flame">{peso(item.price)}</span>
        </div>
        <p className="flex-1 text-paper/75">{item.description}</p>
        <Button onClick={add} aria-label={added ? `${item.name} added` : `Add ${item.name} to order`}>{added ? <><Check size={16} aria-hidden="true" />Added</> : "Add to Order"}</Button>
      </div>
    </article>
  );
}

export default function Menu({ onAdd }) {
  const [category, setCategory] = useState("all");
  const items = MENU.filter((i) => category === "all" || i.category === category);
  return (
    <section id="menu" aria-labelledby="menu-title" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
        <SectionHeading id="menu-title" title="Best sellers">Prices are samples. Pick a category or just go big.</SectionHeading>
        <FilterBar items={CATEGORIES} value={category} onChange={setCategory} label="Filter sandwiches" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((i) => <MenuCard key={i.id} item={i} onAdd={onAdd} />)}</div>
    </section>
  );
}
