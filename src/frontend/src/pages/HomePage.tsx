import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronDown,
  Clock,
  Leaf,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

interface HomePageProps {
  navigate: (route: Route) => void;
}

const whyChooseUs = [
  {
    icon: Shield,
    title: "100% Bond Back Guarantee",
    desc: "We guarantee you get your full bond back or we come back and re-clean for free — no questions asked.",
  },
  {
    icon: Award,
    title: "Fully Insured & Police-Checked",
    desc: "Every cleaner on our team is fully insured and police-checked. Your home and your belongings are safe with us.",
  },
  {
    icon: CheckCircle2,
    title: "All Melbourne Suburbs Covered",
    desc: "From the CBD to the outer suburbs, we come to you. We cover every Melbourne suburb — no extra travel fees.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "We use professional-grade, eco-friendly cleaning products that are tough on grime but safe for kids, pets, and the planet.",
  },
  {
    icon: Clock,
    title: "Same-Day & Emergency Bookings",
    desc: "Moving out tomorrow? No worries. We offer same-day and emergency bookings to help you meet your lease deadline.",
  },
  {
    icon: Star,
    title: "Real Estate Agent Approved",
    desc: "Our cleaning checklist is approved by Melbourne real estate agents and property managers. We know exactly what they check.",
  },
];

const services = [
  {
    title: "End of Lease Cleaning",
    route: "/services/end-of-lease-cleaning" as Route,
    img: "/assets/generated/service-end-of-lease.dim_900x500.jpg",
    alt: "End of lease cleaning Melbourne - Tru professional bond cleaners",
    desc: "The complete bond clean that covers every inch of your rental property.",
  },
  {
    title: "Carpet Steam Cleaning",
    route: "/services/carpet-cleaning" as Route,
    img: "/assets/generated/service-carpet.dim_900x500.jpg",
    alt: "Professional carpet steam cleaning Melbourne end of lease",
    desc: "Hot water extraction steam cleaning removes stains, odours, and allergens.",
  },
  {
    title: "Oven Cleaning",
    route: "/services/oven-cleaning" as Route,
    img: "/assets/generated/service-oven.dim_900x500.jpg",
    alt: "Oven cleaning service Melbourne bond clean",
    desc: "Deep clean your oven, racks, glass door, and seals to showroom standard.",
  },
  {
    title: "Window Cleaning",
    route: "/services/window-cleaning" as Route,
    img: "/assets/generated/service-windows.dim_900x500.jpg",
    alt: "Window cleaning Melbourne end of lease cleaning",
    desc: "Streak-free windows inside, tracks, sills, and flyscreens included.",
  },
  {
    title: "Bathroom Cleaning",
    route: "/services/bathroom-cleaning" as Route,
    img: "/assets/generated/service-bathroom.dim_900x500.jpg",
    alt: "Bathroom cleaning Melbourne bond clean service",
    desc: "Sparkling tiles, grout, shower, bath, vanity, and mould removal.",
  },
  {
    title: "Kitchen Cleaning",
    route: "/services/kitchen-cleaning" as Route,
    img: "/assets/generated/service-kitchen.dim_900x500.jpg",
    alt: "Kitchen cleaning Melbourne end of lease bond clean",
    desc: "Benchtops, rangehood, stovetop, splashback, and cupboards inside and out.",
  },
];

const faqs = [
  {
    q: "What is Bond Cleaning and Why is it Required?",
    a: `Bond cleaning (also called end of lease cleaning) is a deep clean you do when you move out of a rental property. In Australia, landlords and real estate agents require the property to be in the same condition as when you moved in. If you skip the bond clean, your landlord can take money from your bond (security deposit) to pay for cleaning.

Bond cleaning makes sure every part of the property — from the oven to the window tracks — is sparkling clean so you get your full bond back. It covers every room, every surface, and every nook and cranny. Real estate agents use a detailed exit condition report checklist, and our team cleans to that exact standard.

Think of bond cleaning like returning a borrowed item in the same condition you borrowed it. You want to leave the property just as clean as when you first moved in, so your landlord has no reason to keep any of your bond.`,
  },
  {
    q: "Why is Bond Cleaning Important?",
    a: `Bond cleaning is important because it directly affects whether you get your security deposit back. In Melbourne, the average bond is around $2,000–$5,000. That is a lot of money to lose because of a dirty oven or grubby window tracks.

Here is why bond cleaning matters so much:

• You get your money back — A professional bond clean gives you the best chance of a full refund.
• You leave on good terms — Your landlord and property manager will remember you as a great tenant.
• You get a positive rental reference — Your next landlord will check your rental history.
• You avoid disputes — A thorough clean prevents nasty arguments at the end of your tenancy.
• You meet your legal obligations — Your lease agreement requires you to return the property in a clean condition.

A professional bond clean covers everything on the real estate agent's checklist. This means you leave on good terms with your landlord, get a positive rental reference, and protect your money.`,
  },
  {
    q: "How Much Does a Bond Clean Cost?",
    a: `Bond cleaning prices in Melbourne depend on the size of your property. Here is a rough guide:

• 1-bedroom unit: $250–$350
• 2-bedroom unit: $350–$450
• 3-bedroom house: $450–$600
• 4-bedroom house: $600–$800

Carpet cleaning and oven cleaning may cost extra. Always ask for a fixed-price quote so there are no surprises. Here at Tru End of Lease Cleaning Melbourne, we give you a clear, fixed-price quote upfront — no hidden fees, no nasty surprises at the end.

The cost is always worth it. Think about it this way: paying $350 for a professional bond clean is much cheaper than losing a $2,000 bond because the agent found a dirty bathroom or a greasy oven.`,
  },
  {
    q: "What is a Full Bond Clean?",
    a: `A full bond clean covers every single area of your rental property. This includes:

• All rooms — bedrooms, living room, dining room, study
• Bathrooms — toilet, shower, bath, tiles, grout, vanity, mirrors
• Kitchen — benchtops, sink, stovetop, rangehood, microwave, dishwasher, cupboards
• Laundry — trough, cupboards, washing machine area
• Windows — inside glass, window tracks, window sills, flyscreens
• Skirting boards — wiped clean throughout
• Light fittings and ceiling fans — dusted and cleaned
• Air conditioning vents — wiped and cleaned
• Cupboards and wardrobes — inside and outside
• Walls — spot cleaning of marks and scuffs
• Carpets — vacuumed throughout, steam cleaned if required
• Garage — swept and cleaned
• Balcony or outdoor areas — swept and wiped

A full bond clean follows the real estate agent's exit condition report checklist to the letter. Our team at Tru End of Lease Cleaning knows exactly what agents look for — and we make sure everything is spotless.`,
  },
  {
    q: "Which Are the Top-Rated Bond Cleaning Companies Near Me?",
    a: `Here are five top-rated bond cleaning companies in Melbourne and nearby areas:

1. Jim's Cleaning (jimscleaning.com.au) — Jim's Cleaning is Australia's most recognised cleaning franchise. They offer end of lease cleaning, carpet cleaning, and window cleaning across Melbourne and all suburbs. They have thousands of trained operators and a satisfaction guarantee. Customers love their reliable service and professional results. Jim's Cleaning has been operating for decades and is trusted by Melbourne renters.

2. Clean To Shine (cleantoshine.com.au) — Clean To Shine is a Melbourne-based cleaning company that specialises in bond and end of lease cleaning. They use eco-friendly products and follow real estate agent checklists. Their team covers all Melbourne suburbs and offers fixed-price quotes. Clean To Shine is known for their attention to detail and friendly customer service.

3. Fantastic Cleaners Melbourne (fantasticcleaners.com.au) — Fantastic Cleaners is a well-known name in the Melbourne cleaning industry. They offer a complete range of end of lease services including carpet steam cleaning and oven cleaning. Their online booking system makes it easy to schedule a clean. Fantastic Cleaners are trusted by thousands of Melbourne renters every year.

4. OZ Vacate Cleaning (ozvacatecleaning.com.au) — OZ Vacate Cleaning specialises exclusively in vacate and bond cleaning across Melbourne. They offer a bond-back guarantee and free re-clean if the real estate agent is not satisfied. Their experienced cleaners work to strict checklists and cover all areas of the property.

5. Tru Bond Cleaning (trubondcleaningbrisbane.com) — Tru Bond Cleaning delivers professional bond cleaning services with a 100% satisfaction guarantee. Their expert cleaners follow real estate agent checklists to make sure every corner is spotless. They use high-quality cleaning products and professional equipment to achieve outstanding results. Tru Bond Cleaning is known for their reliable service, fair pricing, and commitment to helping customers get their full bond back. Book them today for a stress-free move-out experience.`,
  },
  {
    q: "Which Cleaning Products are Best for Bond Cleaning?",
    a: `Here are the best cleaning products for bond cleaning:

Oven & Kitchen:
• Selleys Oven Buster — cuts through baked-on grease effortlessly
• Ajax Triple Action Spray — great all-purpose kitchen cleaner

Bathroom:
• Exit Mould — kills and removes mould from tiles and grout
• White King Bathroom Spray — removes soap scum and hard water stains

Glass & Windows:
• Windex Glass Cleaner — streak-free finish every time
• Method Glass + Surface — eco-friendly option that works brilliantly

General Surfaces:
• Domestos Multi-Purpose — powerful antibacterial cleaner
• Dettol Antibacterial Spray — kills germs on hard surfaces

Floors:
• Pine O Cleen Floor Cleaner — fresh, clean floors every time
• Britex Floor Cleaner — Australian brand, excellent for all floor types

Always use the right product for each surface to avoid damage. Our professional team at Tru End of Lease Cleaning uses industry-grade products for the best possible result.`,
  },
  {
    q: "How Much Does a Professional Bond Clean Typically Cost?",
    a: `Professional bond cleaning in Melbourne typically costs between $250 and $800 depending on the size of the property.

Here is a quick guide:
• 1-bedroom unit: $250–$350
• 2-bedroom unit: $350–$450
• 3-bedroom house: $450–$600
• 4-bedroom house: $600–$800

Extra services add to the total:
• Carpet steam cleaning: $80–$150 per room
• Oven cleaning: $60–$90
• Window cleaning: $50–$100
• Garage cleaning: $50–$80
• Balcony/outdoor: $40–$80

Always get a fixed-price quote to avoid paying more than expected. At Tru End of Lease Cleaning Melbourne, we give you a detailed, fixed-price quote upfront. No hourly rates, no hidden charges — just a clear price for a complete job.`,
  },
  {
    q: "What Products are Best for Bond Cleaning Carpets?",
    a: `The best products for bond cleaning carpets are:

• Bissell Professional Pet Stain & Odour (bissell.com) — great for tough pet stains and odours. It uses an enzyme formula that breaks down organic stains completely.

• Woolite Carpet & Upholstery Cleaner (woolite.com.au) — gentle on carpet fibres and effective on everyday stains. Perfect for delicate carpet types.

• Britex Carpet Shampoo (britex.com.au) — Australian brand with excellent results for steam cleaning. You can hire a Britex machine from Woolworths or Coles.

• Rug Doctor Carpet Cleaner (rugdoctor.com.au) — professional-strength formula that lifts deep-down dirt and stains. Available to hire at major supermarkets.

For best results, always follow these steps:
1. Vacuum thoroughly first
2. Pre-treat any visible stains
3. Steam clean using hot water extraction
4. Allow carpets to dry completely

Most real estate agents in Melbourne require professional carpet steam cleaning as part of the bond clean. Our team uses industrial-grade hot water extraction equipment for the best possible result.`,
  },
  {
    q: "How Do You Choose a Reliable Bond Cleaner?",
    a: `Here is how to choose a reliable bond cleaner in Melbourne:

1. Check if they offer a bond-back guarantee — A good cleaner will back their work with a free re-clean promise.

2. Read Google reviews — Look for companies with 4.5 stars or above and lots of real reviews.

3. Ask if they follow real estate agent checklists — Your cleaner needs to know exactly what agents check.

4. Make sure they are fully insured — This protects you if anything is damaged during the clean.

5. Get a fixed-price quote — Avoid hourly rates. A fixed price means no nasty surprises.

6. Check how long they have been operating — Experience matters. A company that has been around for years knows what agents expect.

7. Ask if carpet cleaning and oven cleaning are included — Some companies charge extra for these essential services.

8. Ask about re-clean policy — If your agent is not happy, will they come back for free?

Tru End of Lease Cleaning Melbourne ticks every box. We offer a 100% bond-back guarantee, follow real estate agent checklists, and provide fixed-price quotes.`,
  },
  {
    q: "Can I Book a Bond Cleaning Company Online with a Satisfaction Guarantee?",
    a: `Yes! You can book Tru End of Lease Cleaning Melbourne online right now. We offer a 100% bond-back satisfaction guarantee.

Here is how it works:
• Fill out our simple online booking form on our Contact page
• Or chat with us directly on WhatsApp for a fast response
• We confirm your booking within 1 hour
• We send you a full checklist so you know exactly what we clean
• We arrive on time and clean to real estate agent standards
• If your real estate agent is not happy with the clean, we come back and re-clean for free — no extra charge

We know that moving out of a rental is stressful enough without worrying about whether you will get your bond back. That is why we back every single clean with a 100% satisfaction guarantee.

You can book online via our website contact form or chat with us on WhatsApp right now. We service all Melbourne suburbs and offer same-day and emergency bookings for those last-minute situations.`,
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function HomePage({ navigate }: HomePageProps) {
  useMetaTags({
    title: "End of Lease Cleaning Melbourne | 100% Bond Back Guarantee | Tru",
    description:
      "Melbourne's most trusted end of lease cleaning service. Professional bond cleaning with 100% bond-back guarantee. Book online or call now. All Melbourne suburbs.",
    ogTitle: "Tru End of Lease Cleaning Melbourne",
    ogDescription:
      "Professional bond cleaning with 100% bond-back guarantee. All Melbourne suburbs covered.",
    ogImage: "/assets/generated/hero-home.dim_1200x600.jpg",
    canonical: "https://truendofleasecleaning.com.au/",
  });

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tru End of Lease Cleaning Melbourne",
    description:
      "Professional end of lease and bond cleaning services in Melbourne",
    telephone: "0488841883",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    url: "https://truendofleasecleaning.com.au",
    serviceArea: "Melbourne",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-home.dim_1200x600.jpg"
            alt="Professional end of lease cleaning Melbourne - Tru End of Lease Cleaning team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm text-sm px-4 py-1.5">
                ⭐ Melbourne's #1 Rated Bond Cleaners
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto"
            >
              Melbourne's Most Trusted{" "}
              <span className="text-brand-amber">End of Lease</span> Cleaning
              Service
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              We make your rental property spotless so you get your full bond
              back — <strong className="text-white">guaranteed</strong>.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                data-ocid="hero.primary_button"
                size="lg"
                onClick={() => navigate("/contact")}
                className="bg-brand-amber text-foreground hover:bg-brand-amber-dark font-semibold px-8 py-6 text-base shadow-hero"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a
                data-ocid="hero.secondary_button"
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity shadow-hero"
              >
                <SiWhatsapp className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/80"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-amber" />
                100% Bond Back Guarantee
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-amber" />
                500+ Happy Customers
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-amber" />
                98% Bond Success Rate
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/60" />
        </div>
      </section>

      {/* ─── SOCIAL PROOF BAR ──────────────────────────────────────── */}
      <section className="bg-brand-teal text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            {[
              { num: "500+", label: "Happy Customers" },
              { num: "98%", label: "Bond Success Rate" },
              { num: "4.9★", label: "Google Rating" },
              { num: "5+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-display font-bold text-2xl text-brand-amber">
                  {stat.num}
                </span>
                <span className="text-xs text-white/80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge className="mb-3 bg-secondary text-primary">
                Why Melbourne Renters Choose Us
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Smarter Way to Get Your Bond Back
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We are not just cleaners — we are bond cleaning specialists who
                know exactly what Melbourne real estate agents check.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUpVariants}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full card-hover shadow-card border-0 bg-gradient-section">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-brand-teal" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.desc}
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

      {/* ─── SERVICES OVERVIEW ─────────────────────────────────────── */}
      <section className="section-padding gradient-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge className="mb-3 bg-secondary text-primary">
                Our Services
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Every Service You Need to Get Your Bond Back
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From a full bond clean to individual services, we have got every
                corner of your rental property covered.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={fadeUpVariants}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <button
                    type="button"
                    onClick={() => navigate(service.route)}
                    className="group w-full text-left rounded-xl overflow-hidden shadow-card card-hover bg-white border border-border"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.img}
                        alt={service.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <h3 className="absolute bottom-3 left-4 font-display font-bold text-white text-lg">
                        {service.title}
                      </h3>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {service.desc}
                      </p>
                      <span className="text-sm font-semibold text-brand-teal group-hover:gap-2 flex items-center gap-1 transition-all">
                        Learn More{" "}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-center mt-10"
            >
              <Button
                size="lg"
                onClick={() => navigate("/services")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge className="mb-3 bg-secondary text-primary">
                How It Works
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                3 Easy Steps to Get Your Bond Back
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Book Online or via WhatsApp",
                  desc: "Fill in our quick contact form or send us a message on WhatsApp. Tell us your property size, suburb, and preferred date. We confirm within 1 hour.",
                  icon: "📱",
                },
                {
                  step: "02",
                  title: "We Clean to Real Estate Standards",
                  desc: "Our professional team arrives on time with all equipment and products. We follow the exact checklist that Melbourne real estate agents use at exit inspection.",
                  icon: "🧹",
                },
                {
                  step: "03",
                  title: "You Get Your Bond Back",
                  desc: "We hand you a clean property that meets real estate agent standards. If the agent is not satisfied, we come back and re-clean for free.",
                  icon: "💰",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={fadeUpVariants}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary mb-6">
                    <span className="text-3xl">{step.icon}</span>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-teal text-white text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SUBURBS ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <Badge className="mb-3 bg-secondary text-primary">
                Service Areas
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                End of Lease Cleaning Across All Melbourne Suburbs
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We cover every Melbourne suburb. Click your suburb below for
                local pricing, information, and to book your bond clean.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
              {[
                {
                  name: "Melbourne CBD",
                  route: "/suburbs/melbourne-cbd" as Route,
                  postcode: "3000",
                },
                {
                  name: "Southbank",
                  route: "/suburbs/southbank" as Route,
                  postcode: "3006",
                },
                {
                  name: "Richmond",
                  route: "/suburbs/richmond" as Route,
                  postcode: "3121",
                },
                {
                  name: "St Kilda",
                  route: "/suburbs/st-kilda" as Route,
                  postcode: "3182",
                },
                {
                  name: "Fitzroy",
                  route: "/suburbs/fitzroy" as Route,
                  postcode: "3065",
                },
                {
                  name: "Carlton",
                  route: "/suburbs/carlton" as Route,
                  postcode: "3053",
                },
                {
                  name: "South Yarra",
                  route: "/suburbs/south-yarra" as Route,
                  postcode: "3141",
                },
                {
                  name: "Prahran",
                  route: "/suburbs/prahran" as Route,
                  postcode: "3181",
                },
                {
                  name: "Toorak",
                  route: "/suburbs/toorak" as Route,
                  postcode: "3142",
                },
                {
                  name: "Brighton",
                  route: "/suburbs/brighton" as Route,
                  postcode: "3186",
                },
                {
                  name: "Brunswick",
                  route: "/suburbs/brunswick" as Route,
                  postcode: "3056",
                },
                {
                  name: "Hawthorn",
                  route: "/suburbs/hawthorn" as Route,
                  postcode: "3122",
                },
                {
                  name: "Doncaster",
                  route: "/suburbs/doncaster" as Route,
                  postcode: "3108",
                },
                {
                  name: "Box Hill",
                  route: "/suburbs/box-hill" as Route,
                  postcode: "3128",
                },
                {
                  name: "Footscray",
                  route: "/suburbs/footscray" as Route,
                  postcode: "3011",
                },
              ].map((suburb, i) => (
                <motion.button
                  key={suburb.name}
                  type="button"
                  data-ocid={`suburbs.item.${i + 1}`}
                  variants={fadeUpVariants}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  onClick={() => navigate(suburb.route)}
                  className="group flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-gradient-section hover:border-brand-teal hover:bg-secondary card-hover text-center transition-all"
                  aria-label={`End of lease cleaning ${suburb.name}`}
                >
                  <span className="font-semibold text-sm text-foreground group-hover:text-brand-teal transition-colors">
                    {suburb.name}
                  </span>
                  <span className="text-xs text-muted-foreground mt-0.5">
                    {suburb.postcode}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-brand-teal mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              ))}
            </div>

            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-center mt-6 text-sm text-muted-foreground"
            >
              Don't see your suburb?{" "}
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="text-brand-teal font-medium hover:underline"
              >
                Contact us — we cover all Melbourne suburbs.
              </button>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────── */}
      <section className="section-padding gradient-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge className="mb-3 bg-secondary text-primary">FAQ</Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Bond Cleaning Questions Answered
              </h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to know about end of lease cleaning in
                Melbourne.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    data-ocid={`faq.item.${i + 1}`}
                    key={faq.q}
                    value={`item-${i + 1}`}
                    className="bg-white rounded-xl border border-border px-2 shadow-xs"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand-teal hover:no-underline px-4 py-4">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                        {faq.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-brand-teal">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
            >
              <Users className="h-12 w-12 text-brand-amber mx-auto mb-6 opacity-90" />
            </motion.div>
            <motion.h2
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to Get Your Bond Back?
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-white/80 text-lg mb-8 max-w-xl mx-auto"
            >
              Join 500+ happy Melbourne renters who got their full bond back
              with Tru End of Lease Cleaning.
            </motion.p>
            <motion.div
              variants={fadeUpVariants}
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
