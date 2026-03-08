import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function SouthYarraPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning South Yarra Melbourne | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in South Yarra, Melbourne. Expert bond cleaners for South Yarra luxury apartments and homes. 100% bond back guarantee.",
    ogTitle: "End of Lease Cleaning South Yarra — Tru End of Lease Cleaning",
    ogDescription:
      "South Yarra's premium bond cleaning service. Luxury apartments and homes. 100% bond back guarantee. Fixed-price quotes. Book online.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/south-yarra",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="South Yarra"
      postcode="3141"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning South Yarra Melbourne - premium bond cleaning service"
      description="Premium bond cleaning for South Yarra luxury apartments and homes. Impeccable results guaranteed."
      localInfo="South Yarra is one of Melbourne's most prestigious suburbs, known for its upscale apartments, designer boutiques along Chapel Street, and leafy residential streets. When you move out of a South Yarra property, real estate agents expect an impeccable standard of cleanliness. Tru End of Lease Cleaning delivers exactly that — professional, thorough, and premium quality."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Premium Bond Cleaning in South Yarra
          </h2>
          <p>
            South Yarra properties are premium. The apartments are modern and
            sleek, the homes are well-maintained, and the real estate agents are
            meticulous. Our South Yarra bond cleaning team matches that premium
            standard — using professional-grade equipment and eco-friendly
            products to achieve a showroom-quality clean.
          </p>
          <p>
            We clean all South Yarra property types — luxury apartments near the
            Domain Road precinct, modern units off Chapel Street, and
            prestigious homes throughout the suburb.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            South Yarra Bond Clean Services
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All rooms — premium clean to real estate agent standards</li>
            <li>
              Kitchen — deep clean of all appliances, stone benchtops, cabinetry
            </li>
            <li>
              Bathrooms — full tile and grout scrub, mould treatment, chrome
              polish
            </li>
            <li>
              Floor-to-ceiling windows — streak-free inside, tracks, flyscreens
            </li>
            <li>Light fittings, ceiling fans, air conditioning vents</li>
            <li>Built-in wardrobes and walk-in robes</li>
            <li>Balcony or courtyard cleaned</li>
            <li>Carpet steam cleaning available</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Why South Yarra Renters Choose Tru
          </h2>
          <p>
            South Yarra renters expect quality — and that is what we deliver.
            Our team is professional, respectful of your property, and thorough
            in every detail. We use the right products for stone benchtops,
            timber floors, and stainless steel appliances.
          </p>
          <p>
            Our 100% bond-back guarantee gives you complete peace of mind. If
            your South Yarra agent is not fully satisfied, we return and
            re-clean for free.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your South Yarra Bond Clean
          </h2>
          <p>
            Contact us for a free fixed-price quote. We service all of South
            Yarra including Chapel Street, Domain Road, Toorak Road, and the
            surrounding precinct.
          </p>
        </div>
      }
    />
  );
}
