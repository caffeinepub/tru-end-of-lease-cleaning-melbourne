import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Route } from "@/hooks/useHashRouter";
import { ArrowRight, CheckCircle2, MapPin, Phone, Star } from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

interface SuburbPageTemplateProps {
  navigate: (route: Route) => void;
  suburb: string;
  postcode: string;
  heroImage: string;
  heroAlt: string;
  description: string;
  localInfo: string;
  bodyContent: React.ReactNode;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "End of Lease Cleaning",
    route: "/services/end-of-lease-cleaning" as Route,
    price: "From $250",
  },
  {
    title: "Carpet Steam Cleaning",
    route: "/services/carpet-cleaning" as Route,
    price: "From $80/room",
  },
  {
    title: "Oven Cleaning",
    route: "/services/oven-cleaning" as Route,
    price: "From $60",
  },
  {
    title: "Window Cleaning",
    route: "/services/window-cleaning" as Route,
    price: "From $80",
  },
  {
    title: "Bathroom Cleaning",
    route: "/services/bathroom-cleaning" as Route,
    price: "From $60",
  },
  {
    title: "Kitchen Cleaning",
    route: "/services/kitchen-cleaning" as Route,
    price: "From $80",
  },
];

export function SuburbPageTemplate({
  navigate,
  suburb,
  postcode,
  heroImage,
  heroAlt,
  description,
  localInfo,
  bodyContent,
}: SuburbPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt={heroAlt}
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
                <MapPin className="h-3 w-3 mr-1" />
                {suburb} {postcode}
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto"
            >
              End of Lease Cleaning {suburb}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-4 text-white/90 text-lg max-w-xl mx-auto"
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Body */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-lg text-muted-foreground leading-relaxed mb-6"
              >
                {localInfo}
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="prose prose-sm max-w-none text-muted-foreground"
              >
                {bodyContent}
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="space-y-6"
            >
              {/* Services List */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-secondary rounded-2xl p-6"
              >
                <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal" />
                  Our Services in {suburb}
                </h3>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service.title}>
                      <button
                        type="button"
                        onClick={() => navigate(service.route)}
                        className="w-full flex items-center justify-between text-sm text-foreground/80 hover:text-brand-teal transition-colors py-1.5 border-b border-border last:border-0"
                      >
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal flex-shrink-0" />
                          {service.title}
                        </span>
                        <span className="text-brand-teal font-medium text-xs">
                          {service.price}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Rating */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-white border border-border rounded-2xl p-6 shadow-card"
              >
                <div className="flex items-center gap-2 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-5 w-5 fill-brand-amber text-brand-amber"
                    />
                  ))}
                  <span className="font-bold text-foreground text-lg">4.9</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Absolutely brilliant job. The apartment in {suburb} was
                  spotless and we got our full bond back. Highly recommend Tru
                  End of Lease Cleaning!"
                </p>
                <p className="mt-2 text-xs text-muted-foreground font-medium">
                  — Verified {suburb} Customer
                </p>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-brand-teal rounded-2xl p-6 text-white"
              >
                <h3 className="font-display font-bold text-xl mb-3">
                  Book in {suburb} Today
                </h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  100% bond-back guarantee. Fixed-price quote. Same-day bookings
                  available in {suburb}.
                </p>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-brand-amber text-foreground hover:bg-brand-amber-dark font-semibold"
                    onClick={() => navigate("/contact")}
                  >
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-2 border-white/40 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors w-full"
                  >
                    <SiWhatsapp className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:0488841883"
                    className="flex items-center justify-center gap-2 text-white/80 text-sm hover:text-white transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    0488 841 883
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nearby Suburbs */}
      <section className="section-padding gradient-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <Badge className="mb-3 bg-secondary text-primary">
                All Melbourne Suburbs
              </Badge>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                We Also Service These Melbourne Suburbs
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Tru End of Lease Cleaning covers all Melbourne suburbs. Find
                your suburb below or contact us directly.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto"
            >
              {[
                { name: "Melbourne CBD", route: "/suburbs/melbourne-cbd" },
                { name: "Southbank", route: "/suburbs/southbank" },
                { name: "Richmond", route: "/suburbs/richmond" },
                { name: "St Kilda", route: "/suburbs/st-kilda" },
                { name: "Fitzroy", route: "/suburbs/fitzroy" },
                { name: "Carlton", route: "/suburbs/carlton" },
                { name: "South Yarra", route: "/suburbs/south-yarra" },
                { name: "Prahran", route: "/suburbs/prahran" },
                { name: "Toorak", route: "/suburbs/toorak" },
                { name: "Brighton", route: "/suburbs/brighton" },
                { name: "Brunswick", route: "/suburbs/brunswick" },
                { name: "Hawthorn", route: "/suburbs/hawthorn" },
                { name: "Doncaster", route: "/suburbs/doncaster" },
                { name: "Box Hill", route: "/suburbs/box-hill" },
                { name: "Footscray", route: "/suburbs/footscray" },
              ]
                .filter((s) => s.name !== suburb)
                .map((s) => (
                  <Card
                    key={s.name}
                    className="cursor-pointer card-hover border-border shadow-xs"
                    onClick={() => navigate(s.route as Route)}
                  >
                    <CardContent className="p-3 text-center">
                      <span className="text-xs font-medium text-foreground/80 hover:text-brand-teal transition-colors">
                        {s.name}
                      </span>
                    </CardContent>
                  </Card>
                ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-center mt-8"
            >
              <Button
                onClick={() => navigate("/")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Back to Home
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-teal py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-4xl font-bold mb-4"
            >
              Ready for Your Bond Clean in {suburb}?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-white/80 text-lg mb-8 max-w-xl mx-auto"
            >
              Get your free fixed-price quote today. We service {suburb} and all
              Melbourne suburbs.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                onClick={() => navigate("/contact")}
                className="bg-brand-amber text-foreground hover:bg-brand-amber-dark font-semibold px-8"
              >
                Book Now — Get a Free Quote
              </Button>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <SiWhatsapp className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
