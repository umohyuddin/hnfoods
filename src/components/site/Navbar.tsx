import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#engagement", label: "Engagement Models" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-indigo flex items-center justify-center glow">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Cognetic<span className="text-gradient-blue">AI</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="btn-shimmer inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow"
          >
            Book a Call
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border/60 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
