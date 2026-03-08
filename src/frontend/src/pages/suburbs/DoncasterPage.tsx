import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function DoncasterPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning Doncaster Melbourne | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in Doncaster, Melbourne. Expert bond cleaners for Doncaster homes and apartments. 100% bond back guarantee. Book online today.",
    ogTitle:
      "End of Lease Cleaning Doncaster Melbourne — Tru End of Lease Cleaning",
    ogDescription:
      "Doncaster's trusted bond cleaning service. Family homes and apartments. 100% bond back guarantee. Fixed-price quotes. Book now.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/doncaster",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="Doncaster"
      postcode="3108"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning Doncaster Melbourne - professional bond cleaning for family homes"
      description="Professional bond cleaning for Doncaster family homes and apartments. 100% bond back guaranteed."
      localInfo="Doncaster is a thriving eastern Melbourne suburb known for its family-friendly streets, modern homes, and strong community. With a busy rental market covering everything from family houses to modern apartments, Doncaster real estate agents use comprehensive exit checklists. Our Doncaster bond cleaning team delivers a spotless result that satisfies local agents and helps you get your full bond back."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Bond Cleaning in Doncaster
          </h2>
          <p>
            Doncaster renters love the suburb for its great schools, parks, and
            shopping at Westfield Doncaster. When it is time to move out,
            getting your bond back requires a thorough, professional clean that
            meets real estate agent standards. Our Doncaster team delivers
            exactly that.
          </p>
          <p>
            We clean all Doncaster property types — family homes, townhouses,
            units, and modern apartments throughout the suburb. We also service
            Doncaster East, Donvale, and surrounding areas.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Doncaster Bond Clean — What We Cover
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All rooms — vacuum, mop, wipe all surfaces</li>
            <li>
              Kitchen — full deep clean of oven, rangehood, stovetop,
              dishwasher, all cupboards
            </li>
            <li>Bathrooms — tiles, grout, mould removal, full sanitise</li>
            <li>Windows inside — streak-free, tracks and sills</li>
            <li>Skirting boards, light fittings, ceiling fans</li>
            <li>All wardrobes and robes inside and out</li>
            <li>Walls spot cleaned throughout</li>
            <li>Garage swept, outdoor areas cleaned</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Doncaster's Trusted Bond Cleaners
          </h2>
          <p>
            Doncaster renters choose Tru End of Lease Cleaning because we are
            reliable, professional, and back our work with a bond-back
            guarantee. Our team is fully insured, police-checked, and
            experienced with all Doncaster property types.
          </p>
          <p>
            Our 100% bond-back guarantee means if your Doncaster agent finds
            anything after the clean, we return and fix it for free within 72
            hours.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Doncaster Bond Clean
          </h2>
          <p>
            Get your free fixed-price quote today. We service all Doncaster
            streets and postcodes including Doncaster East, Templestowe, and
            surrounding suburbs.
          </p>
        </div>
      }
    />
  );
}
