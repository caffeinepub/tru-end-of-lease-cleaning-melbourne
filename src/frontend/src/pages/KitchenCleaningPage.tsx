import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function KitchenCleaningPage({ navigate }: Props) {
  useMetaTags({
    title: "Kitchen Cleaning Melbourne | Bond Clean Service | Tru Cleaning",
    description:
      "Professional kitchen cleaning Melbourne for end of lease. Benchtops, rangehood, stovetop, cupboards, splashback, sink. Deep clean for your bond return.",
    ogTitle: "Kitchen Cleaning Melbourne — Bond Clean Specialists",
    ogDescription:
      "Deep kitchen cleaning Melbourne. Benchtops, rangehood, stovetop, microwave, dishwasher, cupboards in & out, splashback. Essential for bond return.",
    ogImage: "/assets/generated/service-kitchen.dim_900x500.jpg",
    canonical: "https://truendofleasecleaning.com.au/services/kitchen-cleaning",
  });

  return (
    <ServicePageTemplate
      navigate={navigate}
      heroImage="/assets/generated/service-kitchen.dim_900x500.jpg"
      heroAlt="Kitchen cleaning Melbourne end of lease bond clean"
      title="Kitchen Cleaning Melbourne Bond Clean"
      subtitle="Every surface sparkling — benchtops, rangehood, cupboards inside and out."
      badge="Kitchen Cleaning"
      intro="The kitchen is the heart of any home — and one of the hardest areas to get spotless for your end of lease inspection. Grease builds up on the rangehood. Food residue sticks to the stovetop. Crumbs and grime accumulate inside cupboards. At Tru End of Lease Cleaning Melbourne, we give your kitchen the deep clean it needs to sail through any real estate agent inspection."
      body={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Why Kitchen Cleaning Matters for Your Bond
          </h2>
          <p>
            The kitchen is the room real estate agents spend the most time
            inspecting. They open every cupboard. They check inside the
            microwave. They lift the rangehood filter. They wipe the splashback
            with a cloth. They check benchtop edges and the area behind the
            sink.
          </p>
          <p>
            A dirty kitchen — even if just the rangehood filter or the inside of
            the microwave — can result in a bond deduction. Grease, food
            residue, and grime are a direct sign of poor maintenance. Our
            professional kitchen clean leaves every surface spotless so your
            agent has nothing to find.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            What Our Kitchen Cleaning Covers
          </h2>
          <p>
            Our kitchen cleaning service covers every area that a real estate
            agent will check. Here is exactly what we do:
          </p>
          <p>
            <strong>Benchtops and surfaces</strong> — We degrease and sanitise
            all bench surfaces. We clean the edges, the backsplash area, and the
            areas around the sink. We remove dried food splatter, grease marks,
            and watermarks.
          </p>
          <p>
            <strong>Sink and tapware</strong> — We descale and polish the
            kitchen sink. We remove limescale from taps and restore them to a
            shine. We clean the drain and the area around the sink.
          </p>
          <p>
            <strong>Stovetop</strong> — We degrease the stovetop including gas
            burners, grates, electric coils, or ceramic glass surfaces. We clean
            drip pans and any removable components.
          </p>
          <p>
            <strong>Rangehood</strong> — We clean the rangehood canopy, the
            filter (we degrease or replace if needed), and the light cover. A
            clogged rangehood filter is a common bond deduction — we make sure
            yours is spotless.
          </p>
          <p>
            <strong>Microwave</strong> — We clean the microwave inside and out,
            removing food splatter from the walls, ceiling, and turntable.
          </p>
          <p>
            <strong>Dishwasher</strong> — We clean the dishwasher door, control
            panel, and the inside door seal. We check and clean the filter.
          </p>
          <p>
            <strong>Cupboards and drawers</strong> — We wipe all cupboards and
            drawers inside and out, removing crumbs, grease, and food residue.
            We clean hinges and handles.
          </p>
          <p>
            <strong>Splashback</strong> — We clean the splashback tiles or
            panels, removing grease and food splatter. We clean the grout lines
            if applicable.
          </p>
          <p>
            <strong>Refrigerator</strong> — If required, we clean the
            refrigerator inside and out, removing food spills and buildup from
            shelves, drawers, and door seals.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Our Professional Degreasing Process
          </h2>
          <p>
            Kitchen grease is tough. Regular domestic cleaners often do not cut
            through years of accumulated grease on rangehoods, stovetops, and
            splashbacks. We use professional-grade alkaline degreasers that
            dissolve grease quickly and safely without damaging surfaces.
          </p>
          <p>
            We apply our degreaser, allow it to dwell, then agitate and remove
            it — taking all the grease with it. For stubborn buildup, we use a
            steam cleaner to loosen deposits before degreasing. The result is a
            kitchen that looks like the day it was installed.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Kitchen Clean Today
          </h2>
          <p>
            Kitchen cleaning is available as part of our full end of lease clean
            or as a standalone service. We cover all Melbourne suburbs and offer
            fixed-price, no-surprise quotes. Contact us today and we will
            confirm your booking within 1 hour.
          </p>
        </div>
      }
      checklist={[
        "Benchtops degreased & sanitised",
        "Sink descaled & polished",
        "Stovetop deep cleaned",
        "Gas burners & grates cleaned",
        "Rangehood canopy cleaned",
        "Rangehood filter degreased",
        "Microwave inside & out",
        "Dishwasher cleaned",
        "All cupboards inside & out",
        "Drawers cleaned",
        "Splashback cleaned",
        "Refrigerator (if required)",
        "Taps & hardware polished",
      ]}
      pricing={[
        { label: "Small Kitchen", price: "$80–$120" },
        { label: "Medium Kitchen", price: "$120–$180" },
        { label: "Large Kitchen", price: "$180–$260" },
        { label: "Fridge clean (add-on)", price: "+$40–$60" },
        { label: "Dishwasher clean", price: "+$20–$30" },
      ]}
      ctaText="Book Kitchen Cleaning"
    />
  );
}
