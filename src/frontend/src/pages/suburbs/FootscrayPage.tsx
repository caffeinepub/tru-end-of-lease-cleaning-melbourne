import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function FootscrayPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning Footscray Melbourne | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in Footscray, Melbourne. Expert bond cleaners for Footscray apartments and homes. 100% bond back guarantee. Book online.",
    ogTitle:
      "End of Lease Cleaning Footscray Melbourne — Tru End of Lease Cleaning",
    ogDescription:
      "Footscray's trusted bond cleaning service. Apartments and homes. 100% bond back guarantee. Affordable fixed-price quotes. Book now.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/footscray",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="Footscray"
      postcode="3011"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning Footscray Melbourne - professional bond cleaning service"
      description="Professional bond cleaning in Footscray for apartments, share houses and homes. 100% bond back guaranteed."
      localInfo="Footscray is one of Melbourne's most vibrant and rapidly transforming inner-western suburbs. Its rental market is booming, with modern apartments, Victorian terrace houses, and share houses all part of the mix. Tru End of Lease Cleaning services Footscray and delivers a thorough, professional bond clean that gets you your full bond back."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Bond Cleaning in Footscray
          </h2>
          <p>
            Footscray is changing fast, and so is its real estate market. New
            apartment buildings are going up, and real estate agencies are
            managing properties to a high standard. When you move out of your
            Footscray rental, your bond is on the line. Our professional bond
            cleaning team makes sure you get every dollar back.
          </p>
          <p>
            We clean all Footscray property types — modern apartments near the
            Maribyrnong River, older Victorian homes, share houses, and
            everything in between.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Footscray Bond Clean — Full Coverage
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All rooms — vacuum, mop, wipe all surfaces</li>
            <li>
              Kitchen — oven, rangehood, stovetop, microwave, all cupboards
            </li>
            <li>Bathrooms — tiles, grout, mould removal, full sanitise</li>
            <li>Windows inside — streak-free, tracks and flyscreens</li>
            <li>Skirting boards, light fittings, ceiling fans</li>
            <li>All wardrobes and robes inside and out</li>
            <li>Walls spot cleaned throughout</li>
            <li>Backyard or outdoor area swept</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Affordable Footscray Bond Cleaning
          </h2>
          <p>
            We believe everyone deserves a professional bond clean at a fair
            price. Our Footscray bond cleaning rates are affordable and
            transparent — you get a fixed-price quote upfront with no hidden
            fees or surprise charges.
          </p>
          <p>
            Every Footscray clean includes our 100% bond-back guarantee. If your
            agent finds anything after the clean, we come back and fix it for
            free within 72 hours.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Footscray Bond Clean
          </h2>
          <p>
            Get your free fixed-price quote today. We service all of Footscray
            including Hopkins Street, Nicholson Street, Barkly Street, and the
            surrounding Footscray area.
          </p>
        </div>
      }
    />
  );
}
