import { Flame } from "lucide-react";
import { IMAGES, MENU } from "../data/site";
import Button from "./Button";
import SandwichImage from "./SandwichImage";

const HERO = { ...MENU[0], image: IMAGES.hero, name: "A loaded sandwich" };
const delay = (s) => ({ animationDelay: `${s}s` });

export default function Hero({ onOrder }) {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-6xl overflow-hidden px-6 pb-16 pt-12 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.3fr_.7fr]">
        <div>
          <p className="fade mb-5 inline-flex -rotate-2 items-center gap-2 bg-flame px-3 py-1 font-display text-sm uppercase text-ink"><Flame size={16} aria-hidden="true" />Street-food style sandwiches</p>
          <h1 id="hero-title" className="fade text-[clamp(3.4rem,13vw,9rem)]" style={delay(0.1)}>Big Flavor.<br /><span className="text-flame">Zero Boring Bites.</span></h1>
          <div className="fade mt-9 flex flex-wrap gap-3" style={delay(0.3)}>
            <Button as="a" href="#menu">See the Menu</Button>
            <Button variant="ghost" onClick={onOrder}>Order Now</Button>
          </div>
        </div>
        <div className="fade md:rotate-3" style={delay(0.2)}>
          <SandwichImage item={HERO} className="aspect-[4/5] !rounded-2xl shadow-[10px_10px_0_#FF6B35]" />
        </div>
      </div>
    </section>
  );
}
