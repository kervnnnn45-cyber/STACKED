import { useState } from "react";
import { BUILDER } from "./data/site";
import { useCart } from "./hooks/useCart";
import Navbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Deals from "./components/Deals";
import ComboBuilder from "./components/ComboBuilder";
import Builder from "./components/Builder";
import SectionHeading from "./components/SectionHeading";
import Story from "./components/Story";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  const cart = useCart();
  const [open, setOpen] = useState(false);
  const openCart = () => setOpen(true);
  return (
    <>
      <Navbar count={cart.count} onOrder={openCart} />
      <PromoBanner />
      <main id="top">
        <Hero onOrder={openCart} />
        <Menu onAdd={cart.add} />
        <Deals onAdd={cart.add} />
        <ComboBuilder onAdd={cart.add} />
        <section id="build" aria-labelledby="build-title" className="bg-coal py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading id="build-title" title="Build your own stack">Choose every layer. The price updates as you go.</SectionHeading>
            <div className="mt-9"><Builder config={BUILDER} onAdd={cart.add} addLabel="Add My Stack to Order" /></div>
          </div>
        </section>
        <Story />
        <Reviews />
        <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading id="contact-title" title="Find us">Contact details are placeholders to replace with your own.</SectionHeading>
          <div className="mt-9"><ContactForm /></div>
        </section>
      </main>
      <Footer />
      <CartDrawer open={open} onClose={() => setOpen(false)} cart={cart} />
    </>
  );
}
