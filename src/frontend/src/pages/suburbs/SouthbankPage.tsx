import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function SouthbankPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning Southbank Melbourne | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in Southbank, Melbourne. Expert bond cleaners for Southbank apartments. 100% bond back guarantee. Book online today.",
    ogTitle: "End of Lease Cleaning Southbank — Tru End of Lease Cleaning",
    ogDescription:
      "Southbank's trusted bond cleaning service. 100% bond back guarantee. Real estate agent approved. Fixed-price quotes.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/southbank",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="Southbank"
      postcode="3006"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning Southbank Melbourne - professional bond cleaning service"
      description="Expert bond cleaning for Southbank high-rise apartments. 100% bond back guarantee."
      localInfo="Southbank is one of Melbourne's most popular rental precincts, known for its stunning high-rise apartments and river views. When you move out of your Southbank apartment, you need a cleaning team that understands the high standards expected by Southbank real estate agents. Tru End of Lease Cleaning delivers exactly that."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Bond Cleaning Experts in Southbank
          </h2>
          <p>
            Southbank apartments are modern, well-maintained, and managed by
            professional real estate agencies. These agencies use detailed exit
            condition checklists and expect every area to be immaculate. Our
            Southbank bond cleaning team knows exactly what they look for.
          </p>
          <p>
            We specialise in cleaning Southbank high-rise apartments — from
            studio units to large penthouse-style apartments. Our team arrives
            with all professional equipment, eco-friendly products, and a
            thorough cleaning checklist.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Complete Southbank End of Lease Clean
          </h2>
          <p>
            Our Southbank end of lease cleaning service covers everything on the
            real estate agent's exit report:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>All living areas, bedrooms, and studies cleaned</li>
            <li>
              Kitchen — oven, stovetop, rangehood, dishwasher, microwave,
              benchtops
            </li>
            <li>
              Bathrooms — shower screen, tiles, toilet, vanity, mould removal
            </li>
            <li>Floor-to-ceiling windows cleaned streak-free inside</li>
            <li>Balcony swept and wiped</li>
            <li>Skirting boards, light fittings, ceiling fans</li>
            <li>Cupboards and wardrobes inside and out</li>
            <li>Carpet steam cleaning available</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Southbank Apartment Specialists
          </h2>
          <p>
            We have cleaned hundreds of Southbank apartments and understand the
            unique requirements of high-rise living. Floor-to-ceiling windows,
            modern kitchen finishes, and shared lobby standards — we handle it
            all.
          </p>
          <p>
            Our 100% bond-back guarantee gives you complete peace of mind. If
            your agent is not satisfied, we return and re-clean for free — no
            extra cost.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Southbank Bond Clean
          </h2>
          <p>
            Get a free fixed-price quote today. We service all Southbank streets
            and buildings, including City Road, Power Street, Kavanagh Street,
            and all Southbank Promenade developments.
          </p>
        </div>
      }
    />
  );
}
