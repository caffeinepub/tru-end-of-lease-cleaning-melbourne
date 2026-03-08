import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function EndOfLeaseCleaningPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning Melbourne | Get Your Full Bond Back | Tru",
    description:
      "Professional end of lease cleaning Melbourne. We follow real estate agent checklists and guarantee 100% bond back. All suburbs covered. Book online now.",
    ogTitle: "End of Lease Cleaning Melbourne — 100% Bond Back Guarantee",
    ogDescription:
      "Melbourne's most thorough bond cleaning service. Real estate agent approved. Fixed-price quotes. Free re-clean guarantee.",
    ogImage: "/assets/generated/hero-services.dim_1200x500.jpg",
    canonical:
      "https://truendofleasecleaning.com.au/services/end-of-lease-cleaning",
  });

  return (
    <ServicePageTemplate
      navigate={navigate}
      heroImage="/assets/generated/hero-services.dim_1200x500.jpg"
      heroAlt="Bond cleaning services Melbourne - professional cleaners"
      title="End of Lease Cleaning Melbourne — Get Your Full Bond Back"
      subtitle="The complete bond clean that real estate agents love. 100% satisfaction guaranteed."
      badge="End of Lease Cleaning"
      intro="End of lease cleaning — also called bond cleaning or vacate cleaning — is the most important clean you will ever do in your rental property. It directly determines whether you get your security deposit back. At Tru End of Lease Cleaning Melbourne, we turn bond cleaning stress into peace of mind."
      body={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            What is End of Lease Cleaning?
          </h2>
          <p>
            When you move out of a rental property, your lease agreement
            requires you to return the property in the same clean condition as
            when you moved in. This is what end of lease cleaning means. You
            need to clean every room, every appliance, every window, every
            cupboard — inside and out. Missing even one area can result in your
            landlord deducting money from your bond.
          </p>
          <p>
            The average bond in Melbourne is $2,000–$5,000. Professional end of
            lease cleaning typically costs $250–$600. The maths is simple —
            invest in a professional clean and protect your bond.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            What Does Our End of Lease Clean Cover?
          </h2>
          <p>
            Our full end of lease clean follows the exact checklist used by
            Melbourne real estate agents. We leave nothing out. Here is what we
            clean:
          </p>
          <p>
            <strong>All rooms</strong> — We vacuum and mop every floor. We wipe
            all skirting boards, light switches, and power points. We clean
            light fittings, ceiling fans, and air conditioning vents. We clean
            mirrors and wipe down all surfaces.
          </p>
          <p>
            <strong>Kitchen</strong> — We deep clean the oven, stovetop,
            rangehood and filters. We clean the microwave inside and out. We
            wipe the dishwasher inside and out. We clean the refrigerator if
            requested. We wipe all benchtops, the sink, the splashback, and all
            cupboards inside and out.
          </p>
          <p>
            <strong>Bathrooms</strong> — We scrub and disinfect the toilet,
            shower, bath, and tiles. We remove mould from grout and silicon
            seals. We clean the vanity, mirrors, taps, and exhaust fans. We
            descale showerheads and taps.
          </p>
          <p>
            <strong>Windows</strong> — We clean inside window glass until it is
            streak-free. We clean window tracks, window sills, and frames. We
            wipe down flyscreens.
          </p>
          <p>
            <strong>Laundry</strong> — We clean the laundry trough, taps, and
            cupboards. We wipe the washing machine area.
          </p>
          <p>
            <strong>Wardrobes & cupboards</strong> — We wipe all shelves,
            drawers, and doors inside and out.
          </p>
          <p>
            <strong>Walls</strong> — We spot clean marks and scuffs throughout.
          </p>
          <p>
            <strong>Garage, balcony & outdoor</strong> — We sweep and clean
            these areas as required.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Why Choose Tru End of Lease Cleaning?
          </h2>
          <p>
            We have been helping Melbourne renters get their bonds back for
            years. Our team knows exactly what property managers and real estate
            agents check. We use professional-grade equipment and eco-friendly
            products. We work fast, efficiently, and thoroughly.
          </p>
          <p>
            Most importantly, we back every clean with a 100% bond-back
            guarantee. If your real estate agent is not satisfied with the
            clean, we come back within 72 hours and re-clean for free — no extra
            charge, no questions asked.
          </p>
          <p>
            We cover every Melbourne suburb, offer same-day bookings, and
            provide fixed-price quotes upfront so you always know what you are
            paying.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your End of Lease Clean Today
          </h2>
          <p>
            Moving out is already stressful enough. Let us take care of the
            cleaning so you can focus on your new home. Contact us today for a
            free, fixed-price quote. We confirm your booking within 1 hour.
          </p>
        </div>
      }
      checklist={[
        "All rooms vacuumed & mopped",
        "Skirting boards wiped",
        "Light fittings & fans cleaned",
        "Air conditioning vents",
        "Kitchen deep clean",
        "Oven, stovetop, rangehood",
        "Microwave & dishwasher",
        "Bathroom scrub & disinfect",
        "Mould removal",
        "Windows inside (streak-free)",
        "Window tracks & sills",
        "Flyscreens wiped",
        "Cupboards inside & out",
        "Wardrobes wiped",
        "Walls spot cleaned",
        "Laundry cleaned",
        "Garage & balcony swept",
      ]}
      pricing={[
        { label: "1-Bedroom Unit", price: "$250–$350" },
        { label: "2-Bedroom Unit", price: "$350–$450" },
        { label: "3-Bedroom House", price: "$450–$600" },
        { label: "4-Bedroom House", price: "$600–$800" },
        { label: "Carpet Cleaning (per room)", price: "$80–$150" },
        { label: "Oven Cleaning", price: "$60–$90" },
      ]}
      ctaText="Book Your Bond Clean"
    />
  );
}
