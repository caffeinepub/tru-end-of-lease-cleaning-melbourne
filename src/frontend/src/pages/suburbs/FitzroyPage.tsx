import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function FitzroyPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning Fitzroy Melbourne | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in Fitzroy, Melbourne. Expert bond cleaners for Fitzroy terrace homes and apartments. 100% bond back guarantee. Book online.",
    ogTitle: "End of Lease Cleaning Fitzroy — Tru End of Lease Cleaning",
    ogDescription:
      "Fitzroy's trusted bond cleaning service. Terrace homes, apartments and units. 100% bond back guarantee. Fixed-price quotes.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/fitzroy",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="Fitzroy"
      postcode="3065"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning Fitzroy Melbourne - professional bond cleaning for terrace homes"
      description="Bond cleaning specialists for Fitzroy terrace homes, apartments and units. Full bond back guaranteed."
      localInfo="Fitzroy is one of Melbourne's most colourful and creative inner suburbs. With rows of Victorian terrace houses, converted warehouses, and modern apartments, it is a popular choice for renters. Tru End of Lease Cleaning knows Fitzroy properties well and delivers a thorough, professional bond clean every time you move out."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            End of Lease Cleaning in Fitzroy
          </h2>
          <p>
            Fitzroy's character homes and terrace houses can be tricky to clean
            thoroughly — they often have high ceilings, ornate cornices,
            original tiling, and old-style kitchens and bathrooms that need
            extra care. Our Fitzroy team is experienced with these property
            types and knows exactly what real estate agents look for.
          </p>
          <p>
            We clean all Fitzroy property types — Victorian terrace houses on
            Smith Street and Brunswick Street, warehouse conversions,
            ground-floor apartments, and modern units off Johnston Street. No
            property is too complex.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Fitzroy Bond Clean — What's Included
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All rooms — thorough vacuum, mop and wipe-down</li>
            <li>High ceilings and cornices dusted and cleaned</li>
            <li>Kitchen — oven, rangehood, stovetop, microwave, cupboards</li>
            <li>
              Bathrooms — original tiles, grout, mould removal, full sanitise
            </li>
            <li>Windows inside — streak-free glass, tracks and sills</li>
            <li>Skirting boards, picture rails, light fittings</li>
            <li>Wardrobes and built-in robes inside and out</li>
            <li>Courtyard or outdoor area swept and cleaned</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Why Fitzroy Renters Choose Tru
          </h2>
          <p>
            We are flexible, fast, and thorough. Fitzroy renters are busy
            people, and we make the bond clean easy. Our team arrives fully
            equipped and gets to work immediately. We leave no surface untouched
            and no area uncleaned.
          </p>
          <p>
            Every Fitzroy clean comes with our 100% bond-back guarantee. If your
            agent finds anything, we come back and re-clean for free within 72
            hours.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Fitzroy Bond Clean
          </h2>
          <p>
            Contact us now for a free fixed-price quote. We service all of
            Fitzroy — Smith Street, Brunswick Street, Johnston Street, Gertrude
            Street, and beyond.
          </p>
        </div>
      }
    />
  );
}
