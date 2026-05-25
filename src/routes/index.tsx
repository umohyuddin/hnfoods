import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/hn/Navbar";
import { Hero } from "@/components/hn/Hero";
import { SignatureDishes } from "@/components/hn/SignatureDishes";
import { Story } from "@/components/hn/Story";
import { Menu } from "@/components/hn/Menu";
import { WhyUs } from "@/components/hn/WhyUs";
import { Locations } from "@/components/hn/Locations";
import { Reviews } from "@/components/hn/Reviews";
import { Reservation } from "@/components/hn/Reservation";
import { Footer } from "@/components/hn/Footer";
import { WhatsAppFloat } from "@/components/hn/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HN Foods — Premium Pakistani Fusion Cuisine | Ranjha Gosht & Heer Gosht" },
      {
        name: "description",
        content:
          "HN Foods — Premium Pakistani Fusion Cuisine. Home of the legendary Ranjha Gosht & Heer Gosht. Serving Multan, Lahore, Islamabad & Karachi.",
      },
      { property: "og:title", content: "HN Foods — Where Every Bite Tells a Love Story" },
      {
        property: "og:description",
        content:
          "Taste the legendary Ranjha Gosht & Heer Gosht — slow-cooked recipes born from the heart of Punjab.",
      },
      { property: "og:type", content: "restaurant" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SignatureDishes />
        <Story />
        <Menu />
        <WhyUs />
        <Locations />
        <Reviews />
        <Reservation />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
