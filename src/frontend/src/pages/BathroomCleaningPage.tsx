import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function BathroomCleaningPage({ navigate }: Props) {
  useMetaTags({
    title: "Bathroom Cleaning Melbourne | Bond Clean Service | Tru Cleaning",
    description:
      "Professional bathroom cleaning Melbourne for end of lease. Tiles, grout, shower, bath, toilet, vanity, mirrors, mould removal. 100% bond back guarantee.",
    ogTitle: "Bathroom Cleaning Melbourne — Sparkling Bond Clean",
    ogDescription:
      "Deep bathroom cleaning Melbourne. Tiles, grout, shower, bath, toilet, vanity, mirrors, exhaust fans, mould removal. Agents always inspect bathrooms.",
    ogImage: "/assets/generated/service-bathroom.dim_900x500.jpg",
    canonical:
      "https://truendofleasecleaning.com.au/services/bathroom-cleaning",
  });

  return (
    <ServicePageTemplate
      navigate={navigate}
      heroImage="/assets/generated/service-bathroom.dim_900x500.jpg"
      heroAlt="Bathroom cleaning Melbourne bond clean service"
      title="Bathroom Cleaning Melbourne — Sparkling Bond Clean"
      subtitle="Spotless tiles, mould-free grout, gleaming taps. Bathrooms done properly."
      badge="Bathroom Cleaning"
      intro="Bathrooms are one of the most thoroughly inspected areas during an exit condition report in Melbourne. Real estate agents check the toilet, the shower screens, the tile grout, the vanity, the taps, and the exhaust fans. Any sign of mould, soap scum, limescale, or grime is grounds for a bond deduction. Tru End of Lease Cleaning delivers a hospital-grade bathroom clean that passes every inspection."
      body={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Why Bathroom Cleaning is So Important for Your Bond
          </h2>
          <p>
            Bathrooms accumulate soap scum, hard water stains, limescale, and
            mould faster than any other room in the house. In Melbourne's humid
            summer months, mould can develop on tile grout and silicon seals
            within weeks. Over the course of a tenancy, bathrooms need serious
            deep cleaning to restore them to their original condition.
          </p>
          <p>
            Property managers in Melbourne are trained to spot bathroom issues
            quickly. They check the grout lines for mould. They check the shower
            screen for soap scum and hard water buildup. They check under the
            toilet rim. They check the taps for limescale. Missing any of these
            areas can result in bond deductions.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            What Our Bathroom Cleaning Covers
          </h2>
          <p>
            Our bathroom cleaning service covers every surface an agent will
            inspect. Here is exactly what we clean:
          </p>
          <p>
            <strong>Toilet</strong> — We disinfect and scrub the toilet bowl
            inside and out, including under the rim where bacteria and limescale
            accumulate. We clean the toilet seat, the lid, the cistern, and the
            base and pipes around the toilet.
          </p>
          <p>
            <strong>Shower and bath</strong> — We remove all soap scum and hard
            water stains from the shower screen or curtain rail. We scrub the
            shower floor and walls. We clean the bath tub and remove any tide
            marks or staining.
          </p>
          <p>
            <strong>Tiles and grout</strong> — We scrub all tiles until they are
            shiny and clean. We treat grout lines with mould killer and scrub
            them clean. Dark or pink mould in grout is a major inspection fail —
            we remove it completely.
          </p>
          <p>
            <strong>Vanity and sink</strong> — We clean the vanity basin, taps,
            and surrounding surfaces. We remove soap residue, toothpaste
            splatter, and water stains. We polish the taps and chrome fittings
            to a shine.
          </p>
          <p>
            <strong>Mirrors</strong> — We clean bathroom mirrors streak-free,
            removing toothpaste spots and water splatter.
          </p>
          <p>
            <strong>Exhaust fans</strong> — We remove and clean exhaust fan
            covers, removing the dust buildup that accumulates over time.
          </p>
          <p>
            <strong>Walls, floors, and corners</strong> — We mop the bathroom
            floor, clean the skirting boards, and pay special attention to
            corners where mould often develops.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Mould Removal — Our Speciality
          </h2>
          <p>
            Mould is the number one bathroom issue in Melbourne rental
            properties. Our professional mould removal process uses targeted
            antifungal treatments that kill mould at the root — not just bleach
            it white temporarily. We treat grout lines, silicon seals, corner
            joints, and any other mould-affected areas to remove all traces.
          </p>
          <p>
            We also descale taps, showerheads, and other fixtures using
            professional descaling agents that remove limescale buildup quickly
            and safely.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Bathroom Clean Today
          </h2>
          <p>
            Our bathroom cleaning service is available as part of our full end
            of lease clean or as a standalone service. Prices start from $80 per
            bathroom. We cover all Melbourne suburbs, offer same-day bookings,
            and guarantee your result with our 100% bond-back promise.
          </p>
        </div>
      }
      checklist={[
        "Toilet scrubbed & disinfected",
        "Under-rim toilet cleaned",
        "Shower screen descaled",
        "Bath tub cleaned",
        "All tiles scrubbed",
        "Grout mould removed",
        "Vanity & basin cleaned",
        "Taps polished",
        "Mirrors cleaned streak-free",
        "Exhaust fans dusted & cleaned",
        "Bathroom floor mopped",
        "Limescale removed",
        "Silicone seals cleaned",
      ]}
      pricing={[
        { label: "1 Bathroom", price: "$80–$120" },
        { label: "2 Bathrooms", price: "$140–$200" },
        { label: "3 Bathrooms", price: "$200–$280" },
        { label: "Ensuite (add-on)", price: "$60–$90" },
        { label: "Mould treatment", price: "+$30" },
      ]}
      ctaText="Book Bathroom Cleaning"
    />
  );
}
