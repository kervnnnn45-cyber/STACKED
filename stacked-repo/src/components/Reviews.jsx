import { REVIEWS } from "../data/site";
import SectionHeading from "./SectionHeading";

export default function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading id="reviews-title" title="Loud reviews">Placeholder reviews. Replace with real customer testimonials.</SectionHeading>
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <figure key={r.quote} className={`rounded-2xl border-2 border-paper/10 bg-coal p-7 ${i === 1 ? "md:translate-y-6" : ""}`}>
            <blockquote className="font-display text-2xl uppercase leading-tight text-paper">&ldquo;{r.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm font-bold text-flame">{r.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
