import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function ToorakPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning Toorak Melbourne | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in Toorak, Melbourne. Expert bond cleaners for Toorak luxury homes and apartments. Meticulous results. 100% bond back guarantee.",
    ogTitle:
      "End of Lease Cleaning Toorak Melbourne — Tru End of Lease Cleaning",
    ogDescription:
      "Toorak's premium bond cleaning service. Luxury homes and apartments. Meticulous detail. 100% bond back guarantee. Fixed-price quotes.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/toorak",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="Toorak"
      postcode="3142"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning Toorak Melbourne - premium bond cleaning for luxury homes"
      description="Premium bond cleaning for Toorak luxury homes and apartments. Meticulous results. Full bond back guaranteed."
      localInfo="Toorak is Melbourne's most prestigious suburb — home to some of the city's finest properties. Whether you are moving out of a luxury apartment or a grand estate, the cleaning standard expected by Toorak property managers is extremely high. Tru End of Lease Cleaning meets and exceeds that standard with our meticulous professional service."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Premium Bond Cleaning in Toorak
          </h2>
          <p>
            Toorak properties are in a class of their own. The homes are grand,
            the apartments are luxurious, and the property managers expect an
            impeccable finish. Our Toorak bond cleaning team is experienced with
            high-end properties and uses premium products and techniques to
            deliver a showroom-quality result.
          </p>
          <p>
            We handle marble surfaces, stone benchtops, timber floors, high
            ceilings, and all the special requirements that come with Toorak
            properties. Every surface is treated with the appropriate product
            and technique.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Toorak Bond Clean — Full Coverage
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All rooms — premium clean with attention to fine details</li>
            <li>Kitchen — deep clean of all appliances and stone benchtops</li>
            <li>
              Bathrooms — full tile, grout, chrome polish, mould treatment
            </li>
            <li>All windows — streak-free inside, window frames and tracks</li>
            <li>Light fittings, chandeliers, ceiling fans</li>
            <li>Built-in wardrobes and walk-in robes</li>
            <li>Walls and skirting boards throughout</li>
            <li>Garage, courtyard and outdoor areas</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Why Toorak Property Managers Trust Us
          </h2>
          <p>
            We treat every Toorak property with the utmost respect and care. Our
            team is professionally trained, fully insured, and police-checked.
            We use premium cleaning products that are safe for luxury surfaces
            and finishes.
          </p>
          <p>
            Our 100% bond-back guarantee means that if the property manager
            identifies any issue, we return and resolve it immediately at no
            extra cost to you.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Toorak Bond Clean
          </h2>
          <p>
            Contact us for a free, detailed fixed-price quote. We service all
            Toorak streets including Orrong Road, Kooyong Road, St Georges Road,
            and the full Toorak precinct.
          </p>
        </div>
      }
    />
  );
}
