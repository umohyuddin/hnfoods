import { Flame, Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background grain">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-full border border-gold/60 flex items-center justify-center bg-card/40">
                <Flame className="h-4 w-4 text-gold" />
              </div>
              <div className="leading-tight">
                <p className="font-serif text-2xl text-cream">
                  HN <span className="italic text-gradient-gold">Foods</span>
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
                  Premium Pakistani Fusion Cuisine
                </p>
              </div>
            </div>
            <p className="font-urdu text-2xl text-gold/70 mb-4" dir="rtl">ہیر رانجھا</p>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Home of the legendary Ranjha Gosht & Heer Gosht. Slow-cooked recipes born from
              the heart of Punjab — served across Multan, Lahore, Islamabad & Karachi.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#story" className="hover:text-cream">Our Story</a></li>
              <li><a href="#menu" className="hover:text-cream">Menu</a></li>
              <li><a href="#locations" className="hover:text-cream">Locations</a></li>
              <li><a href="#reserve" className="hover:text-cream">Contact</a></li>
              <li><a href="#" className="hover:text-cream">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">Follow</h4>
            <div className="flex gap-3 mb-6">
              <SocialLink href="https://instagram.com/hnfoodspk" icon={Instagram} />
              <SocialLink href="https://facebook.com/hnfoodspk" icon={Facebook} />
              <SocialLink href="https://wa.me/923093336703" icon={MessageCircle} />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              0304-1110915<br />
              05 AM – 10 PM Daily
            </p>
          </div>
        </div>

        <div className="gold-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 HN Foods. All Rights Reserved.</p>
          <p>Made by <a href="https://cogneticai.io" className="text-gold">CogneticAI</a> in Pakistan</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/60 transition-all"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
