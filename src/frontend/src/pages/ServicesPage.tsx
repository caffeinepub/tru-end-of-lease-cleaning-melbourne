import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

interface ServicesPageProps {
  navigate: (route: Route) => void;
}

const services = [
  {
    title: "End of Lease Cleaning",
    route: "/services/end-of-lease-cleaning" as Route,
    img: "/assets/generated/hero-services.dim_1200x500.jpg",
    alt: "Bond cleaning services Melbourne - professional cleaners",
    desc: "The complete bond clean that covers every single room, surface, and corner of your rental property. We follow the exact checklist that Melbourne real estate agents use at exit inspection.",
    features: [
      "All rooms cleaned",
      "Bathrooms & laundry",
      "Kitchen deep clean",
      "Windows & tracks",
    ],
    price: "From $250",
  },
  {
    title: "Carpet Steam Cleaning",
    route: "/services/carpet-cleaning" as Route,
    img: "/assets/generated/service-carpet.dim_900x500.jpg",
    alt: "Professional carpet steam cleaning Melbourne end of lease",
    desc: "Professional hot water extraction carpet cleaning removes deep-down dirt, stains, and odours. Required by most Melbourne real estate agents as part of the bond clean.",
    features: [
      "Hot water extraction",
      "Stain removal",
      "Odour treatment",
      "REIV approved",
    ],
    price: "From $80/room",
  },
  {
    title: "Oven Cleaning",
    route: "/services/oven-cleaning" as Route,
    img: "/assets/generated/service-oven.dim_900x500.jpg",
    alt: "Oven cleaning service Melbourne bond clean",
    desc: "The oven is the one thing most real estate agents check first. Our deep clean covers the cavity, racks, glass door, seals, and the stovetop — leaving it sparkling clean.",
    features: [
      "Oven cavity",
      "Racks & trays",
      "Glass door",
      "Stovetop & rangehood",
    ],
    price: "From $60",
  },
  {
    title: "Window Cleaning",
    route: "/services/window-cleaning" as Route,
    img: "/assets/generated/service-windows.dim_900x500.jpg",
    alt: "Window cleaning Melbourne end of lease cleaning",
    desc: "Streak-free window cleaning including inside glass, window tracks, window sills, and flyscreens. Agents notice dirty windows instantly — we make sure yours are spotless.",
    features: ["Inside glass", "Window tracks", "Sills & frames", "Flyscreens"],
    price: "From $50",
  },
  {
    title: "Bathroom Cleaning",
    route: "/services/bathroom-cleaning" as Route,
    img: "/assets/generated/service-bathroom.dim_900x500.jpg",
    alt: "Bathroom cleaning Melbourne bond clean service",
    desc: "Sparkling bathrooms are essential for your bond return. We clean the toilet, shower, bath, tiles, grout, vanity, mirrors, and exhaust fans — and remove every trace of mould.",
    features: [
      "Toilet & shower",
      "Tiles & grout",
      "Vanity & mirrors",
      "Mould removal",
    ],
    price: "From $80",
  },
  {
    title: "Kitchen Cleaning",
    route: "/services/kitchen-cleaning" as Route,
    img: "/assets/generated/service-kitchen.dim_900x500.jpg",
    alt: "Kitchen cleaning Melbourne end of lease bond clean",
    desc: "A deep kitchen clean including benchtops, sink, stovetop, rangehood filters, microwave, dishwasher, cupboards inside and out, and the splashback.",
    features: [
      "Benchtops & sink",
      "Rangehood filters",
      "Cupboards in & out",
      "Splashback",
    ],
    price: "From $80",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesPage({ navigate }: ServicesPageProps) {
  useMetaTags({
    title: "End of Lease Cleaning Services Melbourne | Tru Cleaning",
    description:
      "Complete bond cleaning services in Melbourne: carpet cleaning, oven cleaning, window cleaning, bathroom & kitchen cleaning. Get a free quote today.",
    ogTitle: "Bond Cleaning Services Melbourne | Tru End of Lease Cleaning",
    ogDescription:
      "Professional end of lease cleaning services in Melbourne. Carpet, oven, window, bathroom, kitchen cleaning. 100% bond back guarantee.",
    ogImage: "/assets/generated/hero-services.dim_1200x500.jpg",
    canonical: "https://truendofleasecleaning.com.au/services",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <img
          src="/assets/generated/hero-services.dim_1200x500.jpg"
          alt="Bond cleaning services Melbourne - professional cleaners"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Our Services
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              Our End of Lease Cleaning Services in Melbourne
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-4 text-white/90 text-lg max-w-2xl mx-auto"
            >
              Everything you need to get your full bond back — done right the
              first time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              At Tru End of Lease Cleaning Melbourne, we offer a complete range
              of bond cleaning services. Whether you need a full end of lease
              clean or just specific services like carpet steam cleaning or oven
              cleaning, we have you covered. Every service includes a{" "}
              <strong className="text-foreground">
                100% bond-back guarantee
              </strong>{" "}
              — if your real estate agent is not happy, we come back and
              re-clean for free.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-2xl overflow-hidden border border-border bg-white shadow-card card-hover"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-brand-amber text-foreground font-semibold">
                        {service.price}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-display font-bold text-xl text-foreground mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="grid grid-cols-2 gap-1.5 mb-5">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-1.5 text-xs text-foreground/80"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => navigate(service.route)}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-teal text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Book? Get a Free Quote Today
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Book online in minutes or chat with us on WhatsApp. We confirm your
            booking within 1 hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-brand-amber text-foreground hover:bg-brand-amber-dark font-semibold"
            >
              Get a Free Quote
            </Button>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <SiWhatsapp className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
