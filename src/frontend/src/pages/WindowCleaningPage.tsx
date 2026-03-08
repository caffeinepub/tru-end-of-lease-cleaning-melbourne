import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function WindowCleaningPage({ navigate }: Props) {
  useMetaTags({
    title: "Window Cleaning Melbourne End of Lease | Streak-Free | Tru",
    description:
      "Professional window cleaning Melbourne for end of lease. Inside glass, tracks, sills, flyscreens. Streak-free finish. Real estate agent approved.",
    ogTitle: "Window Cleaning Melbourne — End of Lease Specialists",
    ogDescription:
      "Streak-free window cleaning for end of lease. Inside glass, tracks, sills, flyscreens cleaned. Real estate agents always check — make sure yours are spotless.",
    ogImage: "/assets/generated/service-windows.dim_900x500.jpg",
    canonical: "https://truendofleasecleaning.com.au/services/window-cleaning",
  });

  return (
    <ServicePageTemplate
      navigate={navigate}
      heroImage="/assets/generated/service-windows.dim_900x500.jpg"
      heroAlt="Window cleaning Melbourne end of lease cleaning"
      title="Window Cleaning Melbourne End of Lease"
      subtitle="Streak-free windows inside, tracks, sills, and flyscreens. Agents always check."
      badge="Window Cleaning"
      intro="Windows are one of the most visible and most inspected parts of a rental property. Dirty windows, grimy tracks, and dusty flyscreens are immediately obvious to a real estate agent doing an exit inspection. At Tru End of Lease Cleaning Melbourne, we deliver a streak-free window clean that leaves your property looking bright, open, and well-cared for."
      body={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Why Clean Windows Matter for Your Bond
          </h2>
          <p>
            Think about what a real estate agent sees when they walk into your
            empty rental property. The first thing they notice is the light —
            and dirty, smudged, or streaky windows immediately catch their eye.
            Dusty flyscreens filter the sunlight. Grimy window tracks show
            accumulated dirt and neglect. These small details add up to a bad
            impression that can cost you part of your bond.
          </p>
          <p>
            Clean windows, on the other hand, make the entire property feel
            brighter, fresher, and better cared for. They signal to the agent
            that the tenant maintained the property well throughout the tenancy.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            What Our Window Cleaning Service Covers
          </h2>
          <p>
            Our window cleaning service for end of lease is comprehensive. We do
            not just wipe the glass and call it done. Here is exactly what we
            cover:
          </p>
          <p>
            <strong>Inside window glass</strong> — We clean all interior window
            glass using professional squeegees and streak-free cleaning
            solution. No smears, no streaks, no residue — just crystal-clear
            glass.
          </p>
          <p>
            <strong>Window tracks</strong> — Window tracks are notorious for
            accumulating dust, dead insects, grime, and mould. We clean out the
            tracks using specialist tools and cleaning solution, removing every
            trace of buildup.
          </p>
          <p>
            <strong>Window sills and frames</strong> — We wipe down all window
            sills, frames, and reveals. We remove dust, grime, mould spots, and
            water stains.
          </p>
          <p>
            <strong>Flyscreens</strong> — Flyscreens accumulate dust and
            airborne particles over time. We carefully clean each flyscreen,
            removing the grey film that builds up and blocks light.
          </p>
          <p>
            <strong>Sliding door tracks</strong> — Sliding doors are treated the
            same as windows. We clean the glass and the tracks thoroughly.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Our Professional Streak-Free Method
          </h2>
          <p>
            We use a professional two-step method to achieve a completely
            streak-free finish. First, we apply our professional glass cleaning
            solution and agitate it with a scrubber to loosen grime and grease.
            Then we use a professional rubber squeegee to remove the solution in
            one smooth motion — leaving perfectly clear glass with no streaks,
            no smears, and no residue.
          </p>
          <p>
            We use lint-free cloths for edges and sills to ensure a completely
            clean finish. We do not use cheap spray-and-wipe products that leave
            streaks — only professional-grade solutions used by commercial
            window cleaners.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Window Clean Today
          </h2>
          <p>
            Window cleaning is available as part of our full end of lease clean
            package or as a standalone service. We cover all Melbourne suburbs.
            Prices start from $50 for a small property. Contact us today for a
            fixed-price quote, and we will confirm your booking within 1 hour.
          </p>
        </div>
      }
      checklist={[
        "All interior window glass",
        "Streak-free squeegee finish",
        "Window tracks cleaned",
        "Window sills & frames wiped",
        "Flyscreens dusted & cleaned",
        "Sliding door glass cleaned",
        "Sliding door tracks cleaned",
        "Mould spots removed",
        "Water stain removal",
      ]}
      pricing={[
        { label: "1-Bedroom Unit", price: "$50–$80" },
        { label: "2-Bedroom Unit", price: "$80–$120" },
        { label: "3-Bedroom House", price: "$120–$180" },
        { label: "4-Bedroom House", price: "$180–$240" },
        { label: "Extra-large windows", price: "+$10 each" },
      ]}
      ctaText="Book Window Cleaning"
    />
  );
}
