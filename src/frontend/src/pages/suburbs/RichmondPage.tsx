import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function RichmondPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning Richmond Melbourne | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in Richmond, Melbourne. Expert bond cleaners for Richmond apartments, units and houses. 100% bond back guarantee. Book now.",
    ogTitle:
      "End of Lease Cleaning Richmond Melbourne — Tru End of Lease Cleaning",
    ogDescription:
      "Richmond's trusted bond cleaning service. 100% bond back guarantee. Real estate agent approved. Fixed-price quotes. Book online.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/richmond",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="Richmond"
      postcode="3121"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning Richmond Melbourne - professional bond cleaning"
      description="Professional bond cleaning for Richmond apartments, units and houses. Get your full bond back."
      localInfo="Richmond is a vibrant inner-city suburb packed with renters — from young professionals in modern apartments to families in Victorian terraces. Whether you are moving out of a sleek modern unit on Church Street or a classic terrace on Victoria Street, Tru End of Lease Cleaning has you covered."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            End of Lease Cleaning in Richmond
          </h2>
          <p>
            Richmond renters know the importance of a thorough bond clean. Real
            estate agents in Richmond — including agencies on Swan Street,
            Bridge Road, and Church Street — use detailed exit checklists and
            expect the property to be returned in pristine condition.
          </p>
          <p>
            Our professional team cleans all types of Richmond properties —
            modern apartments, period terraces, townhouses, and standalone
            houses. We bring all equipment and products, so you do not need to
            lift a finger.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Richmond Bond Clean Checklist
          </h2>
          <p>
            Our Richmond end of lease cleaning service covers every area on the
            exit condition report:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>All rooms — vacuum, mop, wipe surfaces</li>
            <li>Kitchen — oven, rangehood, stovetop, cupboards, benchtops</li>
            <li>Bathrooms — grout scrubbing, mould removal, full sanitise</li>
            <li>Windows inside — streak-free glass, tracks, sills</li>
            <li>Skirting boards and light fittings</li>
            <li>Wardrobes and built-in robes</li>
            <li>Walls spot cleaned</li>
            <li>Outdoor areas swept</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Why Richmond Renters Trust Us
          </h2>
          <p>
            We know Richmond properties inside out. From the Federation-era
            homes of Cobden Street to the modern apartments near the MCG, we
            deliver the same high standard every time. Our team is punctual,
            professional, and thorough.
          </p>
          <p>
            Our 100% bond-back guarantee means you can move out with confidence.
            If your real estate agent spots anything, we come back and fix it
            free of charge.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Richmond Bond Clean
          </h2>
          <p>
            Contact us today for a fast, free fixed-price quote. We confirm
            within 1 hour and offer same-day bookings for Richmond properties.
          </p>
        </div>
      }
    />
  );
}
