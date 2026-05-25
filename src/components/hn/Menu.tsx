import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

type Item = { name: string; desc?: string; price: string };

const MENU: Record<string, Item[]> = {
  "Signature Dishes": [
    { name: "Ranjha Gosht", desc: "7-hour tandoor-baked mutton", price: "Market Price" },
    { name: "Heer Gosht", desc: "Slow-simmered desi ghee mutton", price: "Market Price" },
  ],
  "BBQ & Grill": [
    { name: "Afghani Tikka (Mutton)", price: "Rs. 1,000" },
    { name: "Chicken Afghani Boti", price: "Rs. 2,400" },
    { name: "Chicken Seekh Kabab", price: "Rs. 350" },
    { name: "Chicken Shahi Kabab", price: "Rs. 400" },
    { name: "Chicken Tikka", price: "Rs. 800" },
    { name: "Khizar Mutton Champ", price: "Rs. 700" },
    { name: "Chicken Lebanese Kabab", price: "Rs. 500" },
    { name: "Malai Boti", price: "Rs. 600" },
    { name: "Beef Bihari Boti", price: "Rs. 700" },
    { name: "Mutton Chanp", price: "Rs. 900" },
  ],
  "Karahi & Handi": [
    { name: "Afghani Mutton Karahi", price: "Rs. 2,800" },
    { name: "Kabuli Mutton Karahi", price: "Rs. 2,900" },
    { name: "Shinwari Mutton", price: "Rs. 3,000" },
    { name: "Zubaida Khanam Bhuna Gosht", price: "Rs. 1,200" },
    { name: "Palak Gosht", price: "Rs. 1,500" },
  ],
  "Breakfast (Nashta)": [
    { name: "Mutton Paya", price: "Rs. 1,500" },
    { name: "Beef Nihari", price: "Rs. 900" },
    { name: "Halwa Puri", price: "Rs. 450" },
    { name: "Murgh Cholay", price: "Rs. 550" },
    { name: "Sweet / Salty Lassi", price: "Rs. 250" },
  ],
  "Rice & Pulao": [
    { name: "Kabuli Pulao", price: "Rs. 2,200" },
    { name: "Peshawari Beef Pulao", price: "Rs. 1,550" },
    { name: "Shinwari Masala Pulao", price: "Rs. 3,200" },
    { name: "Nankh Shorba Pulao", price: "Rs. 3,200" },
    { name: "Zubaida Khanam Bhuna Pulao Mutton", price: "Rs. 3,000" },
  ],
  "Breads": [
    { name: "Roghni Naan", price: "Rs. 150" },
    { name: "Kandahari Naan", price: "Rs. 200" },
    { name: "Afghani Roti", price: "Rs. 120" },
    { name: "Cheese Naan", price: "Rs. 700" },
    { name: "Chicken Naan", price: "Rs. 500" },
  ],
  "Desserts": [
    { name: "Milk Ball", desc: "Gulab Jamun style", price: "Rs. 300" },
  ],
  "Beverages": [
    { name: "Sweet Lassi", price: "Rs. 250" },
    { name: "Salty Lassi", price: "Rs. 250" },
  ],
};

const TABS = Object.keys(MENU);

export function Menu() {
  const [active, setActive] = useState(TABS[0]);

  return (
    <section id="menu" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— The Menu —</p>
          <h2 className="font-serif text-4xl md:text-6xl text-cream">
            Explore Our <span className="italic text-gradient-gold">Complete Menu</span>
          </h2>
          <div className="gold-divider w-32 mx-auto my-6" />
          <p className="text-muted-foreground text-lg">
            Premium Pakistani Fusion Cuisine — over 100 dishes
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] rounded-full border transition-all ${
                active === tab
                  ? "bg-gold text-primary-foreground border-gold"
                  : "border-border text-muted-foreground hover:text-gold hover:border-gold/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-2 max-w-5xl mx-auto"
          >
            {MENU[active].map((item) => (
              <div
                key={item.name}
                className="group flex items-baseline gap-4 py-5 border-b border-border/60 hover:border-gold/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-xl text-cream group-hover:text-gold transition-colors truncate">
                    {item.name}
                  </h4>
                  {item.desc && (
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  )}
                </div>
                <div className="flex-1 border-b border-dotted border-border/60 mb-2" />
                <span className="font-serif text-lg text-gold whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream hover:bg-gold/10 transition-all"
          >
            <Download className="h-4 w-4" /> Download Full Menu PDF
          </a>
        </div>
      </div>
    </section>
  );
}
