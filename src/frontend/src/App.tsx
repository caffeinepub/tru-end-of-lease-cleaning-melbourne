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
import { BoxHillPage } from "@/pages/suburbs/BoxHillPage";
import { BrightonPage } from "@/pages/suburbs/BrightonPage";
import { BrunswickPage } from "@/pages/suburbs/BrunswickPage";
import { CarltonPage } from "@/pages/suburbs/CarltonPage";
import { DoncasterPage } from "@/pages/suburbs/DoncasterPage";
import { FitzroyPage } from "@/pages/suburbs/FitzroyPage";
import { FootscrayPage } from "@/pages/suburbs/FootscrayPage";
import { HawthornPage } from "@/pages/suburbs/HawthornPage";
import { MelbourneCBDPage } from "@/pages/suburbs/MelbourneCBDPage";
import { PrahranPage } from "@/pages/suburbs/PrahranPage";
import { RichmondPage } from "@/pages/suburbs/RichmondPage";
import { SouthYarraPage } from "@/pages/suburbs/SouthYarraPage";
import { SouthbankPage } from "@/pages/suburbs/SouthbankPage";
import { StKildaPage } from "@/pages/suburbs/StKildaPage";
import { ToorakPage } from "@/pages/suburbs/ToorakPage";

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
      case "/suburbs/melbourne-cbd":
        return <MelbourneCBDPage navigate={navigate} />;
      case "/suburbs/southbank":
        return <SouthbankPage navigate={navigate} />;
      case "/suburbs/richmond":
        return <RichmondPage navigate={navigate} />;
      case "/suburbs/st-kilda":
        return <StKildaPage navigate={navigate} />;
      case "/suburbs/fitzroy":
        return <FitzroyPage navigate={navigate} />;
      case "/suburbs/carlton":
        return <CarltonPage navigate={navigate} />;
      case "/suburbs/south-yarra":
        return <SouthYarraPage navigate={navigate} />;
      case "/suburbs/prahran":
        return <PrahranPage navigate={navigate} />;
      case "/suburbs/toorak":
        return <ToorakPage navigate={navigate} />;
      case "/suburbs/brighton":
        return <BrightonPage navigate={navigate} />;
      case "/suburbs/brunswick":
        return <BrunswickPage navigate={navigate} />;
      case "/suburbs/hawthorn":
        return <HawthornPage navigate={navigate} />;
      case "/suburbs/doncaster":
        return <DoncasterPage navigate={navigate} />;
      case "/suburbs/box-hill":
        return <BoxHillPage navigate={navigate} />;
      case "/suburbs/footscray":
        return <FootscrayPage navigate={navigate} />;
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
