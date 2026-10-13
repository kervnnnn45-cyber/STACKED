import { Instagram, Facebook } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "../data/site";
import { theme } from "../theme";

export default function Footer() {
  const link = "opacity-85 hover:opacity-100 hover:underline";
  return (
    <footer className={`${theme.footer.bg} py-12`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-9 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div><p className={`text-2xl ${theme.footer.logo}`}>{BUSINESS.name}</p><p className="mt-2 opacity-85">{BUSINESS.tagline}</p></div>
          <nav aria-label="Footer"><h3 className={`mb-2 text-base ${theme.footer.heading}`}>Explore</h3>
            <ul className="grid gap-1">{NAV_LINKS.map((l) => <li key={l.href}><a href={l.href} className={link}>{l.label}</a></li>)}</ul></nav>
          <div><h3 className={`mb-2 text-base ${theme.footer.heading}`}>Follow</h3>
            <ul className="grid gap-1">
              <li><a href={BUSINESS.instagram} className={`${link} flex items-center gap-2`}><Instagram size={16} aria-hidden="true" />Instagram</a></li>
              <li><a href={BUSINESS.facebook} className={`${link} flex items-center gap-2`}><Facebook size={16} aria-hidden="true" />Facebook</a></li></ul></div>
          <div><h3 className={`mb-2 text-base ${theme.footer.heading}`}>Opening hours</h3><p className="opacity-85">{BUSINESS.hours}</p></div>
        </div>
        <p className="mt-9 border-t border-current/20 pt-5 text-center text-sm opacity-85">&copy; {new Date().getFullYear()} {BUSINESS.name}. {BUSINESS.disclaimer}</p>
      </div>
    </footer>
  );
}
