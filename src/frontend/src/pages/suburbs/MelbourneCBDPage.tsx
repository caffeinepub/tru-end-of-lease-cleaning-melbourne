import { SuburbPageTemplate } from "@/components/SuburbPageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function MelbourneCBDPage({ navigate }: Props) {
  useMetaTags({
    title: "End of Lease Cleaning Melbourne CBD | Bond Cleaning | Tru",
    description:
      "Professional end of lease cleaning in Melbourne CBD. 100% bond back guarantee. We clean apartments, units and houses in the CBD. Fixed-price quotes. Book online.",
    ogTitle: "End of Lease Cleaning Melbourne CBD — Tru End of Lease Cleaning",
    ogDescription:
      "Melbourne CBD's most trusted bond cleaning service. 100% bond back guarantee. Real estate agent approved. Book online today.",
    ogImage: "/assets/generated/suburb-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/suburbs/melbourne-cbd",
  });

  return (
    <SuburbPageTemplate
      navigate={navigate}
      suburb="Melbourne CBD"
      postcode="3000"
      heroImage="/assets/generated/suburb-hero.dim_1200x400.jpg"
      heroAlt="End of lease cleaning Melbourne CBD - Tru End of Lease Cleaning professional bond cleaners"
      description="Professional bond cleaning for CBD apartments and units. 100% bond back guarantee."
      localInfo="Melbourne CBD is home to thousands of renters living in high-rise apartments and modern units. When it is time to move out, getting your bond back requires a thorough professional clean. Tru End of Lease Cleaning specialises in CBD apartment bond cleans — we know exactly what Melbourne CBD real estate agents check."
      bodyContent={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            End of Lease Cleaning in Melbourne CBD
          </h2>
          <p>
            Moving out of a Melbourne CBD apartment is exciting — but the bond
            clean can be stressful. Real estate agents in the CBD are thorough,
            and they expect every surface, appliance, and fixture to be
            spotless. Our professional team knows the exact standard required
            and delivers it every time.
          </p>
          <p>
            We clean all types of CBD properties — studio apartments,
            one-bedroom units, two-bedroom apartments, and larger homes. Whether
            you live in a Southbank high-rise or a heritage building in the
            heart of the CBD, we come to you fully equipped.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            What We Clean in Your Melbourne CBD Property
          </h2>
          <p>
            Our Melbourne CBD end of lease clean covers every area on the real
            estate agent's exit condition report:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>All rooms vacuumed, mopped, and wiped</li>
            <li>
              Kitchen — oven, stovetop, rangehood, microwave, dishwasher,
              cupboards
            </li>
            <li>Bathrooms — tiles, grout, toilet, shower, vanity, mirrors</li>
            <li>Windows — inside glass, tracks, sills, flyscreens</li>
            <li>Skirting boards, light fittings, ceiling fans</li>
            <li>Wardrobes and cupboards inside and out</li>
            <li>Walls spot cleaned</li>
            <li>Balcony swept and cleaned</li>
          </ul>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Why Melbourne CBD Renters Choose Tru
          </h2>
          <p>
            We understand the pace of life in the CBD. That is why we offer
            flexible scheduling, same-day bookings, and fast turnarounds. We
            arrive on time, work efficiently, and deliver results that satisfy
            even the most meticulous real estate agents.
          </p>
          <p>
            Every clean comes with our 100% bond-back guarantee. If your agent
            is not satisfied, we come back within 72 hours and re-clean for free
            — no extra charge, no arguments.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Your Melbourne CBD Bond Clean Today
          </h2>
          <p>
            Contact us via our online form or WhatsApp for a fast, free
            fixed-price quote. We confirm your booking within 1 hour and cover
            all Melbourne CBD buildings and streets.
          </p>
        </div>
      }
    />
  );
}
