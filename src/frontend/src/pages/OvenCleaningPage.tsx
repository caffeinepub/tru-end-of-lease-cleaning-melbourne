import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function OvenCleaningPage({ navigate }: Props) {
  useMetaTags({
    title: "Oven Cleaning Melbourne | Deep Clean for Bond Return | Tru",
    description:
      "Professional oven cleaning Melbourne. We deep clean the oven cavity, racks, glass door, seals, stovetop and rangehood. Essential for your bond return.",
    ogTitle: "Oven Cleaning Melbourne — Essential for Bond Return",
    ogDescription:
      "Deep oven cleaning Melbourne. Cavity, racks, glass door, seals, stovetop and rangehood. Agents always check the oven — make sure it's spotless.",
    ogImage: "/assets/generated/service-oven.dim_900x500.jpg",
    canonical: "https://truendofleasecleaning.com.au/services/oven-cleaning",
  });

  return (
    <ServicePageTemplate
      navigate={navigate}
      heroImage="/assets/generated/service-oven.dim_900x500.jpg"
      heroAlt="Oven cleaning service Melbourne bond clean"
      title="Oven Cleaning Melbourne — Deep Clean for Your Bond"
      subtitle="The oven is the first thing agents check. We make yours look brand new."
      badge="Oven Cleaning"
      intro="Real estate agents in Melbourne always check the oven. It is one of the most scrutinised items on the exit inspection checklist. Baked-on grease, burnt residue, and dirty racks are an instant red flag for property managers — and a common reason bonds get cut. At Tru End of Lease Cleaning, we transform even the dirtiest ovens back to a near-new condition."
      body={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Why Oven Cleaning is Critical for Your Bond
          </h2>
          <p>
            The oven takes a beating over the course of a tenancy. Grease
            splatters, spills, and food residue build up on the oven cavity
            walls, the racks, the glass door, and the door seals. Over time,
            this bakes on and becomes extremely difficult to remove. A dirty
            oven is one of the top five reasons landlords deduct money from
            bonds in Victoria.
          </p>
          <p>
            Property managers in Melbourne look inside the oven every single
            time. They check the cavity for grease buildup, the racks for brown
            residue, the glass door for grime, and the door seal for burnt food.
            A clean oven sends a clear message — this tenant took good care of
            the property.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            What Our Oven Cleaning Covers
          </h2>
          <p>
            Our oven cleaning service is thorough. We clean every part of the
            oven that an agent will inspect. Here is what we do:
          </p>
          <p>
            <strong>Oven cavity</strong> — We remove all baked-on grease and
            food residue from the walls, ceiling, and floor of the oven. We use
            professional-grade degreasers that break down even the toughest
            buildup.
          </p>
          <p>
            <strong>Oven racks and trays</strong> — We soak and scrub all oven
            racks, baking trays, and grill elements until they are clean and
            shiny.
          </p>
          <p>
            <strong>Glass door</strong> — We clean the oven glass door inside
            and out, removing the brown haze that builds up from cooking
            splatter.
          </p>
          <p>
            <strong>Door seal</strong> — We carefully clean around the rubber
            door seal where grease and burnt food often accumulate.
          </p>
          <p>
            <strong>Stovetop</strong> — We degrease and clean the stovetop,
            including the burners, grates, and drip pans.
          </p>
          <p>
            <strong>Rangehood</strong> — We clean the rangehood canopy, the
            filter, and the grease trap. A clogged rangehood is a fire hazard
            and a big tick against you in the exit inspection.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Our Professional Process
          </h2>
          <p>
            We use professional caustic-free oven cleaning products that are
            safe for your kitchen and safe for the environment. We do not use
            harsh chemicals that damage oven surfaces or leave toxic residue.
            Our process is:
          </p>
          <p>
            We start by removing all racks and trays. We apply our professional
            degreaser and allow it to penetrate the buildup. We scrub
            methodically from the top of the oven to the bottom. We rinse
            thoroughly and then polish the exterior. The result is an oven that
            looks like it came straight from the showroom.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Oven Clean Today
          </h2>
          <p>
            Oven cleaning is available as part of our full end of lease clean or
            as a standalone service. Our prices start from just $60 for a
            standard oven clean. We cover all Melbourne suburbs and can often
            fit you in on the same day. Contact us now for a free quote.
          </p>
        </div>
      }
      checklist={[
        "Oven cavity deep cleaned",
        "Baked-on grease removed",
        "All racks & trays cleaned",
        "Glass door cleaned inside & out",
        "Door seal cleaned",
        "Stovetop degreased",
        "Burners & grates cleaned",
        "Rangehood canopy cleaned",
        "Rangehood filter degreased",
        "Grease trap cleaned",
      ]}
      pricing={[
        { label: "Standard Oven Clean", price: "$60–$90" },
        { label: "Large/Double Oven", price: "$90–$130" },
        { label: "Stovetop Clean", price: "$30–$50" },
        { label: "Rangehood Clean", price: "$30–$50" },
        { label: "Oven + Stovetop + Rangehood", price: "$120–$180" },
      ]}
      ctaText="Book Your Oven Clean"
    />
  );
}
