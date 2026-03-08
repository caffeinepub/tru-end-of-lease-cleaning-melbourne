import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function PrahranPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning Prahran Melbourne | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in Prahran, Melbourne. Expert bond cleaners for Prahran apartments and units. 100% bond back guarantee. Book online today.",
    ogTitle: "End of Lease Cleaning Prahran — Tru End of Lease Cleaning",
    ogDescription:
      "Prahran's trusted bond cleaning service. Apartments, units and homes. 100% bond back guarantee. Fixed-price quotes. Book now.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/prahran",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="Prahran"
      postcode="3181"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning Prahran Melbourne - professional bond cleaning"
      description="Professional bond cleaning in Prahran for apartments, units and houses. 100% bond back guaranteed."
      localInfo="Prahran is a lively inner suburb popular with renters who love the vibrant nightlife, markets, and proximity to Chapel Street. It features a mix of modern apartment blocks and older period homes. Our Prahran bond cleaning team delivers a thorough, professional clean that meets real estate agent standards every time."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            End of Lease Cleaning in Prahran
          </h2>
          <p>
            Prahran is a high-demand rental suburb where real estate agents hold
            tenants to strict cleaning standards. When you move out, you need a
            cleaning team that knows exactly what the agent will inspect. Our
            Prahran bond cleaners have helped hundreds of renters get their full
            bond back.
          </p>
          <p>
            We clean all Prahran property types — apartment blocks near
            Commercial Road, Victorian homes off High Street, and townhouses
            throughout the suburb.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Prahran Bond Clean Checklist
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All living areas and bedrooms vacuumed, mopped and wiped</li>
            <li>
              Kitchen — oven, rangehood, stovetop, microwave, all cupboards
            </li>
            <li>Bathrooms — tiles, grout, mould removal, toilet, vanity</li>
            <li>Windows inside — streak-free, tracks and flyscreens</li>
            <li>Skirting boards, light fittings, ceiling fans</li>
            <li>All wardrobes and cupboards inside and out</li>
            <li>Wall marks spot cleaned</li>
            <li>Balcony or outdoor area swept</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Trusted Prahran Bond Cleaners
          </h2>
          <p>
            We are fully insured, police-checked, and experienced in Prahran
            properties. Our team knows the local real estate agencies and what
            their exit condition checklists require. We deliver that standard
            consistently.
          </p>
          <p>
            Backed by our 100% bond-back guarantee — if the agent is not
            satisfied, we return within 72 hours and re-clean at no cost.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Prahran Bond Clean
          </h2>
          <p>
            Get your free fixed-price quote today. We service all Prahran
            streets including High Street, Commercial Road, Greville Street, and
            the surrounding area.
          </p>
        </div>
      }
    />
  );
}
