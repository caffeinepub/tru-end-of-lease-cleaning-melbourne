import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import type { Route } from "@/hooks/useHashRouter";
import { useMetaTags } from "@/hooks/useMetaTags";

interface Props {
  navigate: (route: Route) => void;
}

export function CarpetCleaningPage({ navigate }: Props) {
  useMetaTags({
    title: "Carpet Steam Cleaning Melbourne | End of Lease | Tru Cleaning",
    description:
      "Professional carpet steam cleaning Melbourne. Hot water extraction removes stains, odours & allergens. REIV approved. Required for bond return. Book now.",
    ogTitle: "Carpet Steam Cleaning Melbourne — Bond Clean Specialists",
    ogDescription:
      "Professional hot water extraction carpet cleaning. Removes stains, odours, allergens. Required by Melbourne real estate agents for bond return.",
    ogImage: "/assets/generated/service-carpet.dim_900x500.jpg",
    canonical: "https://truendofleasecleaning.com.au/services/carpet-cleaning",
  });

  return (
    <ServicePageTemplate
      navigate={navigate}
      heroImage="/assets/generated/service-carpet.dim_900x500.jpg"
      heroAlt="Professional carpet steam cleaning Melbourne end of lease"
      title="Professional Carpet Steam Cleaning Melbourne"
      subtitle="Hot water extraction removes deep-down dirt, stains, and odours. Required by most Melbourne agents."
      badge="Carpet Cleaning"
      intro="Carpet cleaning is one of the most important parts of your end of lease clean. Most Melbourne real estate agents specifically require professional carpet steam cleaning as a condition of your lease — and they check. At Tru End of Lease Cleaning, we use industrial-grade hot water extraction equipment to get your carpets looking and smelling brand new."
      body={
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-foreground">
            Why Carpet Steam Cleaning Matters for Your Bond
          </h2>
          <p>
            Dirty carpets are one of the most common reasons landlords deduct
            money from bonds in Melbourne. Even if your carpets look okay to the
            naked eye, years of trapped dust, allergens, bacteria, and odours
            build up deep in the carpet fibres. Your property manager will
            notice the difference between a vacuumed carpet and a professionally
            steam-cleaned one.
          </p>
          <p>
            Most tenancy agreements in Victoria specifically state that carpets
            must be professionally steam cleaned at the end of the lease. If you
            skip this step, your landlord has the right to deduct the cost of
            professional cleaning from your bond.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            How Hot Water Extraction Works
          </h2>
          <p>
            Hot water extraction — also called carpet steam cleaning — is the
            most effective method for deep-cleaning carpets. Here is how it
            works:
          </p>
          <p>
            First, we vacuum the carpet thoroughly to remove loose dirt and
            debris. Next, we apply a professional pre-treatment solution to
            break down stains, bacteria, and built-up grime. Then we inject hot
            water mixed with cleaning solution deep into the carpet fibres at
            high pressure. Finally, we extract the dirty water along with all
            the dirt, allergens, and bacteria — leaving your carpet clean,
            fresh, and almost dry.
          </p>
          <p>
            The hot water extraction method is endorsed by carpet manufacturers
            and the Real Estate Institute of Victoria (REIV) as the gold
            standard for carpet cleaning.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            What We Treat and Remove
          </h2>
          <p>
            Our carpet steam cleaning service removes all the things that
            regular vacuuming cannot touch:
          </p>
          <p>
            We remove pet stains and pet odours using specialised enzyme-based
            treatments that break down the organic compounds causing the smell.
            We treat red wine, coffee, juice, and food stains with targeted
            stain removers before the steam cleaning process. We remove
            accumulated dust, dust mites, and allergens that are common causes
            of allergies and respiratory issues. We eliminate bacteria and germs
            that build up in carpet fibres over time.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Our REIV-Approved Process
          </h2>
          <p>
            Our carpet cleaning process is fully approved by Melbourne real
            estate agents and the Real Estate Institute of Victoria. We carry
            certificate of carpet cleaning which most agents require you to
            provide at the end of your tenancy. When you book carpet cleaning
            with Tru End of Lease Cleaning, we provide you with written
            documentation of the clean that you can present to your agent.
          </p>
          <p>
            We cover all carpet types — wool, synthetic, berber, and plush — and
            adjust our process and products to suit your specific carpet. Drying
            time is typically 2–4 hours with proper ventilation.
          </p>

          <h2 className="font-display font-bold text-2xl text-foreground">
            Book Professional Carpet Steam Cleaning Today
          </h2>
          <p>
            Do not risk your bond over dirty carpets. Our carpet steam cleaning
            is available as part of a full end of lease clean or as a standalone
            service. We cover all Melbourne suburbs and offer same-day bookings.
            Book now for a fixed-price quote.
          </p>
        </div>
      }
      checklist={[
        "Pre-vacuum entire carpet area",
        "Pre-treatment for stains",
        "Hot water extraction steam clean",
        "Pet stain & odour treatment",
        "Deep allergen removal",
        "All carpet types covered",
        "Certificate of clean provided",
        "Drying within 2–4 hours",
      ]}
      pricing={[
        { label: "Studio / 1-Bedroom", price: "$80–$120" },
        { label: "2-Bedroom", price: "$120–$180" },
        { label: "3-Bedroom", price: "$180–$250" },
        { label: "4-Bedroom", price: "$250–$320" },
        { label: "Per room (add-on)", price: "$80–$150" },
        { label: "Pet stain treatment", price: "+$30/room" },
      ]}
      ctaText="Book Carpet Steam Cleaning"
    />
  );
}
