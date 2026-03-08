import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function BrunswickPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning Brunswick Melbourne | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in Brunswick, Melbourne. Expert bond cleaners for Brunswick terrace homes and apartments. 100% bond back guarantee. Book now.",
    ogTitle: "End of Lease Cleaning Brunswick — Tru End of Lease Cleaning",
    ogDescription:
      "Brunswick's trusted bond cleaning service. Terrace homes, share houses and apartments. 100% bond back guarantee. Fixed-price quotes.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/brunswick",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="Brunswick"
      postcode="3056"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning Brunswick Melbourne - professional bond cleaning for share houses and terrace homes"
      description="Professional bond cleaning in Brunswick for share houses, terrace homes and apartments. Full bond back guaranteed."
      localInfo="Brunswick is one of Melbourne's most popular rental suburbs — a creative, multicultural community full of terrace houses, share houses, apartments, and converted warehouses. With a large number of renters moving in and out, Brunswick real estate agents use thorough exit checklists. Our Brunswick bond cleaning team knows exactly what to clean and how."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            End of Lease Cleaning in Brunswick
          </h2>
          <p>
            Brunswick properties come in all shapes and sizes — from
            single-fronted terrace houses on Sydney Road to large share houses
            on Lygon Street. Our Brunswick bond cleaning team is experienced
            with all of them. We know what Brunswick real estate agents expect
            and deliver a clean that secures your bond refund.
          </p>
          <p>
            We clean share houses, terrace homes, townhouses, apartments, and
            student accommodation in Brunswick. No property is too messy or too
            complex.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            What's Included in Our Brunswick Bond Clean
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All rooms — vacuum, mop, wipe all surfaces</li>
            <li>
              Kitchen — oven, rangehood, stovetop, microwave, all cupboards
            </li>
            <li>
              Bathrooms — tiles, grout scrub, mould removal, full sanitise
            </li>
            <li>Windows — streak-free inside, tracks and sills cleaned</li>
            <li>Skirting boards and light fittings</li>
            <li>Wardrobes and built-in robes inside and out</li>
            <li>Walls spot cleaned throughout</li>
            <li>Backyard or courtyard swept and tidied</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Brunswick Bond Cleaning Specialists
          </h2>
          <p>
            We have helped hundreds of Brunswick renters move out successfully
            and get their full bond back. Our team is reliable, professional,
            and thorough. We communicate clearly, arrive on time, and complete
            the job to the highest standard.
          </p>
          <p>
            Every Brunswick clean includes our 100% bond-back guarantee. If your
            agent finds anything, we return and re-clean for free within 72
            hours.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Brunswick Bond Clean Today
          </h2>
          <p>
            Get a free fixed-price quote now. We service all of Brunswick —
            Sydney Road, Lygon Street, Albert Street, Dawson Street, and the
            full Brunswick area.
          </p>
        </div>
      }
    />
  );
}
