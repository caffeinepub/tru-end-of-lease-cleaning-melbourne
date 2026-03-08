import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";
import { useHashRouter } from "@/hooks/useHashRouter";
import { AboutPage } from "@/pages/AboutPage";
import { BathroomCleaningPage } from "@/pages/BathroomCleaningPage";
import { CarpetCleaningPage } from "@/pages/CarpetCleaningPage";
import { ContactPage } from "@/pages/ContactPage";
import { EndOfLeaseCleaningPage } from "@/pages/EndOfLeaseCleaningPage";
import { HomePage } from "@/pages/HomePage";
import { KitchenCleaningPage } from "@/pages/KitchenCleaningPage";
import { OvenCleaningPage } from "@/pages/OvenCleaningPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { WindowCleaningPage } from "@/pages/WindowCleaningPage";

export default function App() {
  const { currentRoute, navigate } = useHashRouter();

  const renderPage = () => {
    switch (currentRoute) {
      case "/":
        return <HomePage navigate={navigate} />;
      case "/services":
        return <ServicesPage navigate={navigate} />;
      case "/services/end-of-lease-cleaning":
        return <EndOfLeaseCleaningPage navigate={navigate} />;
      case "/services/carpet-cleaning":
        return <CarpetCleaningPage navigate={navigate} />;
      case "/services/oven-cleaning":
        return <OvenCleaningPage navigate={navigate} />;
      case "/services/window-cleaning":
        return <WindowCleaningPage navigate={navigate} />;
      case "/services/bathroom-cleaning":
        return <BathroomCleaningPage navigate={navigate} />;
      case "/services/kitchen-cleaning":
        return <KitchenCleaningPage navigate={navigate} />;
      case "/about":
        return <AboutPage navigate={navigate} />;
      case "/contact":
        return <ContactPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentRoute={currentRoute} navigate={navigate} />
      <main className="flex-1 pt-16 md:pt-20">{renderPage()}</main>
      <Footer navigate={navigate} />
      <WhatsAppFloat />
      <Toaster />
    </div>
  );
}
