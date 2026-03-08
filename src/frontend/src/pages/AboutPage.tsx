import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Leaf,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

interface AboutPageProps {
  navigate: (route: Route) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const values = [
  {
    icon: Shield,
    title: "Integrity First",
    desc: "We give you a fixed price and we stick to it. No hidden fees, no nasty surprises when the job is done.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    desc: "Every clean comes with our 100% bond-back guarantee. We come back and re-clean for free if the agent is not satisfied.",
  },
  {
    icon: Users,
    title: "Community Focused",
    desc: "We are a Melbourne-based team. We live here, we work here, and we care about the community we serve.",
  },
  {
    icon: Leaf,
    title: "Eco Responsible",
    desc: "We use eco-friendly, biodegradable cleaning products. We protect your family, your pets, and the environment.",
  },
  {
    icon: Clock,
    title: "Always Reliable",
    desc: "We show up on time, every time. Moving day is stressful enough — you can count on us to be there.",
  },
  {
    icon: Star,
    title: "Customer Obsessed",
    desc: "Your 5-star review is our goal on every job. We go above and beyond to make sure you are happy with the result.",
  },
];

export function AboutPage({ navigate }: AboutPageProps) {
  useMetaTags({
    title:
      "About Tru End of Lease Cleaning Melbourne | Professional Bond Cleaners",
    description:
      "Meet the team behind Tru End of Lease Cleaning Melbourne. 500+ happy customers, 98% bond success rate. Melbourne's most trusted bond cleaning service.",
    ogTitle: "About Tru End of Lease Cleaning Melbourne",
    ogDescription:
      "Melbourne's trusted bond cleaning specialists. 500+ happy customers. 98% bond success rate. Fully insured, eco-friendly, 100% satisfaction guaranteed.",
    ogImage: "/assets/generated/about-hero.dim_1200x500.jpg",
    canonical: "https://truendofleasecleaning.com.au/about",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <img
          src="/assets/generated/about-hero.dim_1200x500.jpg"
          alt="Tru End of Lease Cleaning Melbourne team - professional bond cleaners"
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
                About Us
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              About Tru End of Lease Cleaning Melbourne
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-4 text-white/90 text-lg max-w-xl mx-auto"
            >
              Melbourne's most trusted bond cleaning team — here to help you get
              your full bond back.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                <Badge className="mb-4 bg-secondary text-primary">
                  Our Story
                </Badge>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
              >
                We Started Because Renters Deserve Better
              </motion.h2>
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="space-y-4 text-muted-foreground leading-relaxed text-base"
              >
                <p>
                  Tru End of Lease Cleaning Melbourne was born out of a simple
                  frustration — too many Melbourne renters were losing hundreds
                  or thousands of dollars from their bonds because of poor
                  quality cleaning. Some cleaning companies promised the world
                  but delivered a half-hearted job. Renters were getting
                  surprised with agent complaints and bond deductions.
                </p>
                <p>
                  Our founders had experienced this firsthand. After losing
                  money from a bond despite paying for a "professional" clean,
                  they decided to do something about it. They set up Tru End of
                  Lease Cleaning with a simple mission: provide Melbourne
                  renters with a thorough, reliable, and guaranteed bond
                  cleaning service they could trust.
                </p>
                <p>
                  Today, we have helped over 500 Melbourne renters get their
                  full bond back. Our 98% bond success rate speaks for itself.
                  We know what Melbourne real estate agents expect. We clean to
                  that exact standard — every single time.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-brand-teal text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { num: "500+", label: "Happy Customers" },
              { num: "98%", label: "Bond Success Rate" },
              { num: "4.9★", label: "Google Rating" },
              { num: "5+", label: "Years in Melbourne" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <div className="font-display font-bold text-3xl md:text-4xl text-brand-amber mb-1">
                  {stat.num}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding gradient-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge className="mb-3 bg-secondary text-primary">
                Our Values
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Stand For
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full card-hover shadow-card border-0">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
                          <value.icon className="h-5 w-5 text-brand-teal" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-foreground mb-1.5">
                            {value.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {value.desc}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 bg-secondary text-primary">
                Why Melbourne Renters Trust Us
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl font-bold text-foreground mb-6"
            >
              Our Guarantee to You
            </motion.h2>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              {[
                "We follow the exact checklist used by Melbourne real estate agents — nothing gets missed.",
                "Every member of our team is fully trained, insured, and police-checked.",
                "We use professional-grade equipment and eco-friendly products for the best results.",
                "We give you a fixed-price quote upfront — no surprises, no extras.",
                "If your real estate agent is not 100% happy, we come back and re-clean for free.",
                "We cover every suburb in Melbourne — from the CBD to the outer ring.",
                "We confirm your booking within 1 hour and send a full checklist so you know what we clean.",
                "We have helped over 500 Melbourne renters get their full bond back.",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                  <p className="leading-relaxed">{point}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-teal text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Work with Melbourne's Best Bond Cleaners?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Book online now or chat with us on WhatsApp. We service all
            Melbourne suburbs and confirm bookings within 1 hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-brand-amber text-foreground hover:bg-brand-amber-dark font-semibold"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
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
