import { Button } from "@/components/ui/button";
import type { Route } from "@/hooks/useHashRouter";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

interface NavbarProps {
  currentRoute: Route;
  navigate: (route: Route) => void;
}

const serviceLinks: { label: string; route: Route }[] = [
  { label: "End of Lease Cleaning", route: "/services/end-of-lease-cleaning" },
  { label: "Carpet Cleaning", route: "/services/carpet-cleaning" },
  { label: "Oven Cleaning", route: "/services/oven-cleaning" },
  { label: "Window Cleaning", route: "/services/window-cleaning" },
  { label: "Bathroom Cleaning", route: "/services/bathroom-cleaning" },
  { label: "Kitchen Cleaning", route: "/services/kitchen-cleaning" },
];

export function Navbar({ currentRoute, navigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: reset on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [currentRoute]);

  const navLinkClass = (route: Route) =>
    `text-sm font-medium transition-colors duration-200 hover:text-brand-teal ${
      currentRoute === route
        ? "text-brand-teal font-semibold"
        : "text-foreground/80"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded-md"
            aria-label="Tru End of Lease Cleaning Melbourne - Home"
          >
            <img
              src="/assets/generated/logo-transparent.dim_400x120.png"
              alt="Tru End of Lease Cleaning Melbourne logo"
              className="h-10 md:h-12 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              type="button"
              data-ocid="nav.home_link"
              onClick={() => navigate("/")}
              className={navLinkClass("/")}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                data-ocid="nav.services_link"
                onClick={() => navigate("/services")}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
                className={`${navLinkClass("/services")} flex items-center gap-1`}
              >
                Services <ChevronDown className="h-3.5 w-3.5" />
              </button>

              {isServicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-card border border-border py-1 z-50"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {serviceLinks.map((link) => (
                    <button
                      type="button"
                      key={link.route}
                      onClick={() => navigate(link.route)}
                      className="w-full text-left px-4 py-2.5 text-sm text-foreground/80 hover:bg-secondary hover:text-brand-teal transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              data-ocid="nav.about_link"
              onClick={() => navigate("/about")}
              className={navLinkClass("/about")}
            >
              About
            </button>

            <button
              type="button"
              data-ocid="nav.contact_link"
              onClick={() => navigate("/contact")}
              className={navLinkClass("/contact")}
            >
              Contact
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/contact")}
              className="border-brand-teal text-brand-teal hover:bg-secondary"
            >
              Get a Free Quote
            </Button>
            <a
              data-ocid="nav.whatsapp_button"
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-whatsapp text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              aria-label="Chat on WhatsApp"
            >
              <SiWhatsapp className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <button
              type="button"
              data-ocid="nav.home_link"
              onClick={() => navigate("/")}
              className="text-left px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-brand-teal hover:bg-secondary rounded-md transition-colors"
            >
              Home
            </button>
            <button
              type="button"
              data-ocid="nav.services_link"
              onClick={() => navigate("/services")}
              className="text-left px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-brand-teal hover:bg-secondary rounded-md transition-colors"
            >
              Services
            </button>
            <div className="pl-3">
              {serviceLinks.map((link) => (
                <button
                  type="button"
                  key={link.route}
                  onClick={() => navigate(link.route)}
                  className="w-full text-left px-3 py-2 text-sm text-foreground/60 hover:text-brand-teal hover:bg-secondary rounded-md transition-colors"
                >
                  → {link.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              data-ocid="nav.about_link"
              onClick={() => navigate("/about")}
              className="text-left px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-brand-teal hover:bg-secondary rounded-md transition-colors"
            >
              About
            </button>
            <button
              type="button"
              data-ocid="nav.contact_link"
              onClick={() => navigate("/contact")}
              className="text-left px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-brand-teal hover:bg-secondary rounded-md transition-colors"
            >
              Contact
            </button>
            <div className="pt-2 flex flex-col gap-2">
              <Button
                variant="outline"
                onClick={() => navigate("/contact")}
                className="border-brand-teal text-brand-teal hover:bg-secondary w-full"
              >
                Get a Free Quote
              </Button>
              <a
                data-ocid="nav.whatsapp_button"
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-whatsapp text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                <SiWhatsapp className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
