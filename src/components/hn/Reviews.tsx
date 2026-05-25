import { motion } from "framer-motion";
import { Star, Instagram } from "lucide-react";

const reviews = [
  {
    text: "Ranjha Gosht is a game-changer. The flavours are so rich, so authentic — nothing in Lahore comes close. 10/10.",
    by: "@foodiepakistan",
    city: "Lahore",
  },
  {
    text: "I've eaten at the best restaurants across Pakistan. HN Foods' Heer Gosht is in a league of its own. It tastes like it was made by someone's grandmother — with love.",
    by: "@lahorefoodies",
    city: "Lahore",
  },
  {
    text: "Drove all the way to MM Alam just for Ranjha Gosht. Worth every kilometre. Alhamdulillah, what a dish.",
    by: "@foodventure_pk",
    city: "Islamabad",
  },
];

const tiles = [
  "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1633237308525-cd587cf71926?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
];

export function Reviews() {
  return (
    <section className="relative py-28 md:py-36 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— Voices —</p>
          <h2 className="font-serif text-4xl md:text-6xl text-cream">
            What People Are <span className="italic text-gradient-gold">Saying</span>
          </h2>
          <div className="gold-divider w-32 mx-auto my-6" />
          <p className="text-muted-foreground text-lg">
            130,000+ followers. Counting bites, not just likes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={r.by}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative p-8 border border-border bg-background/60 rounded-sm hover-gold-glow"
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif text-lg text-cream leading-relaxed italic mb-6">
                "{r.text}"
              </p>
              <footer className="text-xs uppercase tracking-[0.2em] text-gold">
                {r.by} <span className="text-muted-foreground">• {r.city}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Instagram grid */}
        <div className="text-center mb-10">
          <a
            href="https://instagram.com/hnfoodspk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-gold hover:opacity-80"
          >
            <Instagram className="h-4 w-4" /> Follow us @hnfoodspk
          </a>
        </div>
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {tiles.map((src, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/hnfoodspk"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-sm group border border-border"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${src}')` }}
              />
              <div className="absolute inset-0 bg-background/30 group-hover:bg-background/60 transition-colors flex items-center justify-center">
                <Instagram className="h-6 w-6 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
