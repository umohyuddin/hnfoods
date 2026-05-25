import { motion } from "framer-motion";

const STORY_IMG =
  "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1400&q=80";

export function Story() {
  return (
    <section id="story" className="relative py-28 md:py-36 grain">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— Our Heritage —</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
            A Love Story on <br />
            <span className="italic text-gradient-gold">Every Plate</span>
          </h2>
          <p
            className="font-urdu text-2xl text-gold/70 mt-4"
            dir="rtl"
          >
            ہیر تے رانجھا
          </p>
          <div className="gold-divider w-24 my-8" />

          <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px] md:text-base">
            <p>
              Long before HN Foods became famous across Multan, Lahore, Islamabad, and Karachi —
              there was a passion for flavour rooted deep in Punjabi soil.
            </p>
            <p>
              We named our two signature dishes after the greatest love story ever told in Punjab:
              <span className="text-cream"> Heer and Ranjha</span>. Just as their story is one of
              longing, warmth, and timeless beauty — so is every plate we serve.
            </p>
            <p>
              <span className="text-cream">Ranjha Gosht</span>, cooked slowly through the night in a
              tandoor, carries the patience and devotion of a man who crossed rivers for love.{" "}
              <span className="text-cream">Heer Gosht</span>, rich with desi ghee and layered
              spices, captures the grace and warmth of the woman who inspired an entire culture.
            </p>
            <p className="text-cream italic font-serif text-lg">
              HN Foods is more than a restaurant. It's a heritage.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative aspect-[4/5] rounded-sm overflow-hidden border border-border"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${STORY_IMG}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
          {/* Decorative frame */}
          <div className="absolute inset-4 border border-gold/30 pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2">— Estd. Punjab —</p>
            <p className="font-serif text-2xl text-cream italic">
              "Cooked with patience. Served with devotion."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
