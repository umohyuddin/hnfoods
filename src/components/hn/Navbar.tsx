import { useEffect, useState } from "react";
import { Menu, X, Flame } from "lucide-react";

const links = [
  { href: "#story", label: "Our Story" },
  { href: "#signatures", label: "Signature Dishes" },
  { href: "#menu", label: "Full Menu" },
  { href: "#locations", label: "Locations" },
  { href: "#reserve", label: "Book a Table" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-full border border-gold/60 flex items-center justify-center bg-card/40">
            <Flame className="h-4 w-4 text-gold" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-wide text-cream">
              HN <span className="text-gradient-gold italic">Foods</span>
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] uppercase tracking-[0.18em] text-muted-foreground hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#reserve"
          className="hidden lg:inline-flex items-center rounded-full bg-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition-all"
        >
          Reserve Now
        </a>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-cream"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-dark border-t border-border/60 px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reserve"
            onClick={() => setOpen(false)}
            className="block text-center rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground"
          >
            Reserve Now
          </a>
        </div>
      )}
    </header>
  );
}
