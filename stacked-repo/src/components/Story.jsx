import SectionHeading from "./SectionHeading";

export default function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="bg-flame py-16 text-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1fr_1.2fr]">
        <h2 id="story-title" className="font-display text-5xl uppercase leading-[.95] !text-ink sm:text-7xl">We stack it like we mean it.</h2>
        <p className="text-lg font-medium">STACKED started with one rule: no boring sandwiches. Big flavor, honest ingredients and a menu that is fun to order from. This is sample copy, so tell your own story here.</p>
      </div>
    </section>
  );
}
