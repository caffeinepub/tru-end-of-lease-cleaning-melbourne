import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function BrightonPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning Brighton Melbourne | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in Brighton, Melbourne. Expert bond cleaners for Brighton homes and apartments. 100% bond back guarantee. Book online today.",
    ogTitle:
      "End of Lease Cleaning Brighton Melbourne — Tru End of Lease Cleaning",
    ogDescription:
      "Brighton's trusted bond cleaning service. Beachside homes and apartments. 100% bond back guarantee. Fixed-price quotes. Book now.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/brighton",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="Brighton"
      postcode="3186"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning Brighton Melbourne - professional bond cleaning beachside suburb"
      description="Professional bond cleaning for Brighton beachside homes and apartments. Full bond back guaranteed."
      localInfo="Brighton is one of Melbourne's most sought-after bayside suburbs, known for its beautiful homes, beach boxes, and family-friendly streets. Whether you are moving out of a Brighton home or apartment, real estate agents in this area expect a meticulous clean. Tru End of Lease Cleaning delivers the professional standard Brighton property managers demand."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Bond Cleaning in Brighton
          </h2>
          <p>
            Brighton is a premium bayside suburb where property managers hold
            high expectations for end of lease cleaning. Our Brighton bond
            cleaning team understands the local market and consistently delivers
            results that satisfy agents and secure bond refunds.
          </p>
          <p>
            We clean all Brighton property types — family homes, beachside
            units, modern apartments, and period properties. Our team arrives
            fully equipped and delivers a thorough, professional clean.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Brighton Bond Clean — Complete Coverage
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All bedrooms, living areas and studies</li>
            <li>Kitchen — full deep clean of all appliances and cabinetry</li>
            <li>Bathrooms — tiles, grout, mould treatment, full sanitise</li>
            <li>Windows — streak-free inside, tracks, sills, flyscreens</li>
            <li>Skirting boards, cornices and architraves</li>
            <li>Wardrobes and built-in robes inside and out</li>
            <li>Walls spot cleaned throughout</li>
            <li>Garage, outdoor areas and decking swept</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Why Brighton Renters Choose Tru
          </h2>
          <p>
            Brighton renters love our reliable service, professional team, and
            bond-back guarantee. We are fully insured, police-checked, and
            experienced with Brighton properties. We know which real estate
            agencies operate in Brighton and what their exit condition standards
            require.
          </p>
          <p>
            Our 100% bond-back guarantee protects you. If the agent finds
            anything, we come back and re-clean within 72 hours — free of
            charge.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Brighton Bond Clean
          </h2>
          <p>
            Get your free, fixed-price quote now. We service all of Brighton
            including New Street, Were Street, Bay Street, North Road, and the
            full Brighton area including Brighton East.
          </p>
        </div>
      }
    />
  );
}
