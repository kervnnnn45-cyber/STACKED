import { useState } from "react";
import { Menu as MenuIcon, X, ShoppingBag } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "../data/site";
import { theme } from "../theme";
import Button from "./Button";

export default function Navbar({ count, onOrder }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`sticky top-0 z-30 ${theme.nav.header}`}>
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#top" className={theme.nav.logo}>{BUSINESS.name}</a>
        <nav id="site-nav" aria-label="Main" className={`${open ? "block" : "hidden"} absolute inset-x-0 top-[68px] px-6 pb-6 ${theme.nav.mobile} md:static md:block md:border-0 md:bg-transparent md:p-0`}>
          <ul className="flex flex-col md:flex-row md:items-center md:gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className={`block py-3 md:py-0 ${theme.nav.link}`}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          <Button onClick={() => { setOpen(false); onOrder(); }} className="!px-5 !py-2.5">
            <ShoppingBag size={16} aria-hidden="true" />Order Now
            {count > 0 && <span className={`rounded-full px-2 text-xs ${theme.badge}`} aria-label={`${count} items in order`}>{count}</span>}
          </Button>
          <button type="button" className={`p-2 md:hidden ${theme.nav.burger}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
            {open ? <X aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
