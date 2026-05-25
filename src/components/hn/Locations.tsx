import { motion } from "framer-motion";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";

const locations = [
  {
    city: "Multan",
    label: "Our Origin City",
    address: "Where the legend began",
    hours: "05 AM – 10 PM",
    map: "https://maps.google.com/?q=HN+Foods+Multan",
  },
  {
    city: "Lahore",
    label: "MM Alam Road",
    address: "B-2 Gulberg III, Lahore",
    hours: "Open 24 Hours",
    map: "https://maps.google.com/?q=HN+Foods+MM+Alam+Lahore",
  },
  {
    city: "Islamabad",
    label: "F-6 & F-7 Markaz",
    address: "F-6 Markaz & F-7, Islamabad",
    hours: "05 AM – 10 PM",
    map: "https://maps.google.com/?q=HN+Foods+F-6+Islamabad",
  },
  {
    city: "Karachi",
    label: "Coming Soon",
    address: "Available on FoodPanda",
    hours: "Order Online",
    map: "https://foodpanda.pk",
  },
];

export function Locations() {
  return (
    <section id="locations" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— Visit Us —</p>
          <h2 className="font-serif text-4xl md:text-6xl text-cream">
            Find Us <span className="italic text-gradient-gold">Near You</span>
          </h2>
          <div className="gold-divider w-32 mx-auto my-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, i) => (
            <motion.a
              key={loc.city}
              href={loc.map}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 border border-border bg-card hover-gold-glow rounded-sm block"
            >
              <MapPin className="h-5 w-5 text-gold mb-6" />
              <h3 className="font-serif text-3xl text-cream mb-1">{loc.city}</h3>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold/80 mb-4">{loc.label}</p>
              <div className="gold-divider w-12 mb-4" />
              <p className="text-sm text-muted-foreground mb-3">{loc.address}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1.5 mb-6">
                <Clock className="h-3.5 w-3.5" /> {loc.hours}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-cream group-hover:text-gold transition-colors">
                Get Directions <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
