import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Route } from "@/hooks/useHashRouter";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

interface ServicePageTemplateProps {
  navigate: (route: Route) => void;
  heroImage: string;
  heroAlt: string;
  title: string;
  subtitle: string;
  badge: string;
  intro: string;
  body: React.ReactNode;
  checklist: string[];
  pricing?: { label: string; price: string }[];
  ctaText?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ServicePageTemplate({
  navigate,
  heroImage,
  heroAlt,
  title,
  subtitle,
  badge,
  intro,
  body,
  checklist,
  pricing,
  ctaText = "Get a Free Quote",
}: ServicePageTemplateProps) {
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
                {badge}
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-4 text-white/90 text-lg max-w-xl mx-auto"
            >
              {subtitle}
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
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >
                {intro}
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="prose prose-sm max-w-none text-muted-foreground"
              >
                {body}
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
              {/* Checklist */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-secondary rounded-2xl p-6"
              >
                <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal" />
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <CheckCircle2 className="h-4 w-4 text-brand-teal mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Pricing */}
              {pricing && pricing.length > 0 && (
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-border rounded-2xl p-6 shadow-card"
                >
                  <h3 className="font-display font-bold text-foreground mb-4">
                    Pricing Guide
                  </h3>
                  <ul className="space-y-2">
                    {pricing.map((p) => (
                      <li
                        key={p.label}
                        className="flex justify-between items-center text-sm border-b border-border pb-2 last:border-0"
                      >
                        <span className="text-muted-foreground">{p.label}</span>
                        <span className="font-semibold text-brand-teal">
                          {p.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-muted-foreground">
                    *Fixed-price quotes. No hidden fees.
                  </p>
                </motion.div>
              )}

              {/* CTA Card */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-brand-teal rounded-2xl p-6 text-white"
              >
                <h3 className="font-display font-bold text-xl mb-3">
                  {ctaText}
                </h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  100% bond-back guarantee. Fixed-price quote. Same-day bookings
                  available.
                </p>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-brand-amber text-foreground hover:bg-brand-amber-dark font-semibold"
                    onClick={() => navigate("/contact")}
                  >
                    Book Now
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
    </>
  );
}
