import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function CarltonPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning Carlton Melbourne | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in Carlton, Melbourne. Expert bond cleaners for Carlton apartments and terrace homes. 100% bond back guarantee. Book now.",
    ogTitle:
      "End of Lease Cleaning Carlton Melbourne — Tru End of Lease Cleaning",
    ogDescription:
      "Carlton's trusted bond cleaning specialists. Student apartments to Victorian terraces. 100% bond back guarantee. Fixed-price quotes.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/carlton",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="Carlton"
      postcode="3053"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning Carlton Melbourne - professional bond cleaning for apartments and terrace homes"
      description="Expert bond cleaning in Carlton for apartments, student housing and terrace homes. 100% bond back guaranteed."
      localInfo="Carlton is Melbourne's cultural heart and home to thousands of renters — from university students near Melbourne Uni to young professionals in modern apartments and families in period terraces. Our Carlton bond cleaning team is experienced across all property types and delivers a spotless result that satisfies local real estate agents."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Bond Cleaning in Carlton
          </h2>
          <p>
            Carlton is one of Melbourne's most densely rented suburbs. With the
            University of Melbourne nearby and a buzzing cafe and restaurant
            culture, Carlton attracts a huge range of renters. When it is time
            to move out, getting your bond back means having every area of your
            property professionally cleaned.
          </p>
          <p>
            We clean all Carlton property types — student apartments, modern
            units, Victorian terrace houses, and period homes. Our team knows
            the Carlton rental market and delivers consistently high standards.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            What Our Carlton Bond Clean Includes
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All bedrooms, study and living areas cleaned thoroughly</li>
            <li>
              Kitchen — oven, stovetop, rangehood, microwave, all cupboards
            </li>
            <li>Bathrooms — tiles, grout, mould removal, full disinfection</li>
            <li>Windows — streak-free inside, tracks, flyscreens</li>
            <li>Skirting boards, light switches, power points</li>
            <li>Wardrobes and robes inside and out</li>
            <li>Walls spot cleaned throughout</li>
            <li>Outdoor areas and courtyard swept</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Trusted by Carlton Renters
          </h2>
          <p>
            Carlton real estate agents have high expectations. They use detailed
            exit checklists and expect every surface to be immaculate. Our
            Carlton team cleans to that exact standard — no corners cut, no
            areas skipped.
          </p>
          <p>
            Our 100% bond-back guarantee means you are fully protected. If the
            agent is not happy, we return and re-clean at no extra cost within
            72 hours.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Carlton Bond Clean
          </h2>
          <p>
            Get a free fixed-price quote today. We cover all of Carlton
            including Lygon Street, Faraday Street, Elgin Street, Grattan
            Street, and surrounding streets.
          </p>
        </div>
      }
    />
  );
}
