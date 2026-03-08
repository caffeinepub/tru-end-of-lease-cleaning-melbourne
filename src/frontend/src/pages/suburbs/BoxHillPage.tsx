import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function BoxHillPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning Box Hill Melbourne | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in Box Hill, Melbourne. Expert bond cleaners for Box Hill apartments and homes. 100% bond back guarantee. Book online today.",
    ogTitle:
      "End of Lease Cleaning Box Hill Melbourne — Tru End of Lease Cleaning",
    ogDescription:
      "Box Hill's trusted bond cleaning service. Apartments, units and homes. 100% bond back guarantee. Fixed-price quotes. Book now.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/box-hill",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="Box Hill"
      postcode="3128"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning Box Hill Melbourne - professional bond cleaning service"
      description="Expert bond cleaning in Box Hill for apartments, units and family homes. 100% bond back guaranteed."
      localInfo="Box Hill is a major activity centre in Melbourne's eastern suburbs, with a thriving rental market featuring apartments, townhouses, and family homes. As one of Melbourne's fastest-growing suburbs, Box Hill attracts renters from all walks of life. Tru End of Lease Cleaning delivers a thorough, professional bond clean that meets real estate agent standards and helps you get your full bond back."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            End of Lease Cleaning in Box Hill
          </h2>
          <p>
            Box Hill has a busy rental market with properties ranging from
            high-density apartments near Box Hill Central to family homes in the
            quieter residential streets. Real estate agents in Box Hill are
            thorough in their exit inspections. Our Box Hill bond cleaning team
            knows exactly what they check and delivers a clean that satisfies
            those requirements.
          </p>
          <p>
            We clean all Box Hill property types — high-rise apartments near
            Station Street, townhouses, and family homes throughout Box Hill
            North and Box Hill South.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Box Hill Bond Clean Coverage
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All rooms — thorough vacuum, mop and wipe-down</li>
            <li>
              Kitchen — oven, rangehood, stovetop, microwave, all cupboards
            </li>
            <li>Bathrooms — tiles, grout, mould removal, full disinfection</li>
            <li>Windows — streak-free inside, tracks, sills and flyscreens</li>
            <li>Skirting boards, light fittings and ceiling fans</li>
            <li>All wardrobes and built-in robes inside and out</li>
            <li>Walls spot cleaned throughout</li>
            <li>Garage and outdoor areas swept and cleaned</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Why Box Hill Renters Choose Tru
          </h2>
          <p>
            Our Box Hill team is reliable, efficient, and professional. We
            understand the Box Hill rental market and deliver consistently
            high-quality bond cleans. We are fully insured, police-checked, and
            back every clean with our bond-back guarantee.
          </p>
          <p>
            If your Box Hill agent raises any issues after the clean, we return
            and resolve them free of charge within 72 hours. You have nothing to
            risk and your full bond to gain.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Box Hill Bond Clean
          </h2>
          <p>
            Get a free fixed-price quote today. We cover all of Box Hill
            including Station Street, Whitehorse Road, Mont Albert Road, and
            surrounding streets.
          </p>
        </div>
      }
    />
  );
}
