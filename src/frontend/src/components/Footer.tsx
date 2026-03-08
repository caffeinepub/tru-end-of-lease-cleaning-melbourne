import type { Route } from "@/hooks/useHashRouter";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

interface FooterProps {
  navigate: (route: Route) => void;
}

const serviceLinks: { label: string; route: Route }[] = [
  { label: "End of Lease Cleaning", route: "/services/end-of-lease-cleaning" },
  { label: "Carpet Steam Cleaning", route: "/services/carpet-cleaning" },
  { label: "Oven Cleaning", route: "/services/oven-cleaning" },
  { label: "Window Cleaning", route: "/services/window-cleaning" },
  { label: "Bathroom Cleaning", route: "/services/bathroom-cleaning" },
  { label: "Kitchen Cleaning", route: "/services/kitchen-cleaning" },
];

const suburbLinks: { label: string; route: Route }[] = [
  { label: "Melbourne CBD", route: "/suburbs/melbourne-cbd" },
  { label: "Southbank", route: "/suburbs/southbank" },
  { label: "Richmond", route: "/suburbs/richmond" },
  { label: "St Kilda", route: "/suburbs/st-kilda" },
  { label: "Fitzroy", route: "/suburbs/fitzroy" },
  { label: "Carlton", route: "/suburbs/carlton" },
  { label: "Brunswick", route: "/suburbs/brunswick" },
  { label: "Hawthorn", route: "/suburbs/hawthorn" },
  { label: "South Yarra", route: "/suburbs/south-yarra" },
  { label: "Prahran", route: "/suburbs/prahran" },
  { label: "Toorak", route: "/suburbs/toorak" },
  { label: "Brighton", route: "/suburbs/brighton" },
  { label: "Doncaster", route: "/suburbs/doncaster" },
  { label: "Box Hill", route: "/suburbs/box-hill" },
  { label: "Footscray", route: "/suburbs/footscray" },
];

export function Footer({ navigate }: FooterProps) {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-brand-teal-dark text-white">
      {/* Top section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src="/assets/generated/logo-transparent.dim_400x120.png"
              alt="Tru End of Lease Cleaning Melbourne logo"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/75 text-sm leading-relaxed mb-4">
              Melbourne's most trusted end of lease cleaning service. We help
              you get your full bond back — guaranteed.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
              <MapPin className="h-4 w-4 text-brand-amber flex-shrink-0" />
              <span>Servicing All Melbourne Suburbs</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Phone className="h-4 w-4 text-brand-amber flex-shrink-0" />
              <a
                href="tel:0488841883"
                className="hover:text-white transition-colors"
              >
                0488 841 883
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 text-base">
              Our Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.route}>
                  <button
                    type="button"
                    onClick={() => navigate(link.route)}
                    className="text-sm text-white/75 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 text-base">
              Service Areas
            </h3>
            <div className="grid grid-cols-2 gap-1">
              {suburbLinks.map((suburb) => (
                <button
                  key={suburb.route}
                  type="button"
                  onClick={() => navigate(suburb.route)}
                  className="text-xs text-white/70 hover:text-brand-amber transition-colors text-left flex items-center gap-1 py-0.5"
                >
                  <ArrowRight className="h-2.5 w-2.5 flex-shrink-0" />
                  {suburb.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="mt-3 text-sm text-brand-amber hover:text-white transition-colors"
            >
              + All Melbourne suburbs →
            </button>
          </div>

          {/* Why Choose Us & CTA */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 text-base">
              Why Choose Us
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                "100% Bond Back Guarantee",
                "Fully Insured Cleaners",
                "Free Re-Clean if Needed",
                "Same-Day Bookings",
                "Eco-Friendly Products",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-amber flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-whatsapp text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              <SiWhatsapp className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <p>
            &copy; {year} Tru End of Lease Cleaning Melbourne. All rights
            reserved.
          </p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
