import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function HawthornPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning Hawthorn Melbourne | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in Hawthorn, Melbourne. Expert bond cleaners for Hawthorn apartments and homes. 100% bond back guarantee. Book online now.",
    ogTitle:
      "End of Lease Cleaning Hawthorn Melbourne — Tru End of Lease Cleaning",
    ogDescription:
      "Hawthorn's trusted bond cleaning service. Apartments and family homes. 100% bond back guarantee. Fixed-price quotes. Book now.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/hawthorn",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="Hawthorn"
      postcode="3122"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning Hawthorn Melbourne - professional bond cleaning service"
      description="Professional bond cleaning in Hawthorn for apartments, units and family homes. Full bond back guaranteed."
      localInfo="Hawthorn is a prestigious inner-eastern suburb known for its leafy streets, beautiful period homes, and proximity to the Yarra River. It has a strong rental market with properties ranging from heritage apartments near Glenferrie Road to modern townhouses and family homes. Tru End of Lease Cleaning delivers a professional, thorough bond clean that satisfies Hawthorn real estate agents."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Bond Cleaning Experts in Hawthorn
          </h2>
          <p>
            Hawthorn real estate agents manage some of Melbourne's finest
            properties and hold tenants to a high standard at the end of a
            tenancy. Our Hawthorn bond cleaning team knows what agents look for
            and delivers a clean that meets that standard every single time.
          </p>
          <p>
            We clean all Hawthorn property types — apartments near Glenferrie
            Road, period homes off Burwood Road, townhouses, and standalone
            houses throughout the suburb.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Hawthorn Bond Clean Checklist
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All rooms vacuumed, mopped and wiped thoroughly</li>
            <li>
              Kitchen — oven, stovetop, rangehood, microwave, all cabinetry
            </li>
            <li>
              Bathrooms — full tile and grout scrub, mould treatment, sanitise
            </li>
            <li>Windows inside — streak-free glass, tracks and sills</li>
            <li>Skirting boards, light fittings and ceiling fans</li>
            <li>All wardrobes and robes inside and out</li>
            <li>Wall marks spot cleaned throughout</li>
            <li>Garage and outdoor areas swept</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Why Hawthorn Renters Choose Tru
          </h2>
          <p>
            Hawthorn renters trust us because we are reliable, professional, and
            deliver consistent results. We are fully insured, police-checked,
            and experienced with Hawthorn properties. We back every clean with
            our 100% bond-back guarantee.
          </p>
          <p>
            If your Hawthorn real estate agent raises any issues after the
            clean, we return and resolve them for free within 72 hours. You have
            nothing to lose and your full bond to gain.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Hawthorn Bond Clean
          </h2>
          <p>
            Get a free fixed-price quote now. We cover all of Hawthorn including
            Glenferrie Road, Burwood Road, Church Street, and the full Hawthorn
            and Hawthorn East areas.
          </p>
        </div>
      }
    />
  );
}
