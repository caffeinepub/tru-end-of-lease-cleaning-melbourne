import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function StKildaPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning St Kilda Melbourne | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in St Kilda, Melbourne. Expert bond cleaners for St Kilda apartments and houses. 100% bond back guarantee. Book online.",
    ogTitle: "End of Lease Cleaning St Kilda — Tru End of Lease Cleaning",
    ogDescription:
      "St Kilda's trusted bond cleaning service. 100% bond back guarantee. All property types covered. Fixed-price quotes. Book now.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/st-kilda",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="St Kilda"
      postcode="3182"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning St Kilda Melbourne - professional bond clean service"
      description="Professional bond cleaning for St Kilda apartments, units and Victorian homes. Full bond back guarantee."
      localInfo="St Kilda is one of Melbourne's most iconic beachside suburbs, with a huge rental market covering everything from art deco flats to modern apartments and heritage homes. Moving out of a St Kilda property requires a professional standard clean to satisfy local real estate agents. Tru End of Lease Cleaning knows St Kilda properties and delivers a spotless result every time."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Bond Cleaning in St Kilda
          </h2>
          <p>
            St Kilda's rental market is busy and competitive. Real estate agents
            here manage everything from beachside apartments to art deco
            buildings, and they hold tenants to a high cleaning standard. Our St
            Kilda bond cleaning team understands these expectations and meets
            them every single time.
          </p>
          <p>
            We clean all St Kilda property types — art deco apartments near
            Fitzroy Street, modern units off Acland Street, period homes in St
            Kilda East, and holiday apartments near the esplanade.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Our St Kilda Bond Clean Covers
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All bedrooms, living areas, and studies</li>
            <li>
              Kitchen — full deep clean of oven, stovetop, rangehood, microwave
            </li>
            <li>
              Bathrooms — tiles, grout, shower screen, toilet, mould removal
            </li>
            <li>Windows — streak-free inside, tracks, flyscreens</li>
            <li>Skirting boards, cornices, light fittings</li>
            <li>Cupboards and wardrobes inside and out</li>
            <li>Walls spot cleaned</li>
            <li>Courtyard or balcony swept</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            St Kilda Specialists
          </h2>
          <p>
            Many St Kilda properties have unique features like original tiling,
            art deco cornices, and period fixtures. Our team handles these with
            care, using the right products for each surface. We never cut
            corners — every area is cleaned to the real estate agent's standard.
          </p>
          <p>
            Our 100% bond-back guarantee covers every St Kilda clean. If the
            agent identifies any issue, we return and re-clean within 72 hours
            at no extra charge.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your St Kilda Bond Clean Today
          </h2>
          <p>
            Get your free, fixed-price quote now. We service all of St Kilda
            including Fitzroy Street, Acland Street, Grey Street, Barkly Street,
            and the full St Kilda postcode area.
          </p>
        </div>
      }
    />
  );
}
