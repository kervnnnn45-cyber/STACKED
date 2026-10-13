import { theme } from "../theme";

export default function FilterBar({ items, value, onChange, label = "Filter menu" }) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {items.map((c) => (
        <button key={c.id} type="button" aria-pressed={value === c.id} onClick={() => onChange(c.id)} className={`transition-colors ${theme.chip}`}>{c.label}</button>
      ))}
    </div>
  );
}
