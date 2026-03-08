import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { useMetaTags } from "@/hooks/useMetaTags";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SERVICE_OPTIONS = [
  "End of Lease Cleaning",
  "Carpet Steam Cleaning",
  "Oven Cleaning",
  "Window Cleaning",
  "Bathroom Cleaning",
  "Kitchen Cleaning",
  "Full Bond Clean Package",
  "Other / Multiple Services",
];

const allSuburbs = [
  "Melbourne CBD",
  "Southbank",
  "Docklands",
  "Richmond",
  "Fitzroy",
  "Carlton",
  "Collingwood",
  "Abbotsford",
  "Brunswick",
  "Coburg",
  "Preston",
  "Thornbury",
  "Northcote",
  "Fairfield",
  "Alphington",
  "Hawthorn",
  "Camberwell",
  "Balwyn",
  "Box Hill",
  "Doncaster",
  "Nunawading",
  "Ringwood",
  "Croydon",
  "Lilydale",
  "South Yarra",
  "Prahran",
  "Windsor",
  "St Kilda",
  "Elwood",
  "Brighton",
  "Hampton",
  "Sandringham",
  "Cheltenham",
  "Moorabbin",
  "Bentleigh",
  "Carnegie",
  "Caulfield",
  "Glen Waverley",
  "Mount Waverley",
  "Oakleigh",
  "Clayton",
  "Dandenong",
  "Noble Park",
  "Springvale",
  "Footscray",
  "Sunshine",
  "St Albans",
  "Essendon",
  "Moonee Ponds",
  "Ascot Vale",
  "Maribyrnong",
  "Williamstown",
  "Newport",
  "Yarraville",
  "Seddon",
  "All Other Suburbs",
];

export function ContactPage() {
  useMetaTags({
    title: "Contact Tru End of Lease Cleaning Melbourne | Get a Free Quote",
    description:
      "Contact Tru End of Lease Cleaning Melbourne for a free bond cleaning quote. Book online, call, or chat on WhatsApp. Same-day bookings available.",
    ogTitle: "Contact Tru End of Lease Cleaning Melbourne",
    ogDescription:
      "Get a free bond cleaning quote today. Book online, call or WhatsApp. We confirm your booking within 1 hour. All Melbourne suburbs.",
    ogImage: "/assets/generated/contact-hero.dim_1200x400.jpg",
    canonical: "https://truendofleasecleaning.com.au/contact",
  });

  const { actor } = useActor();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    serviceType: "",
    preferredDate: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      if (!actor) throw new Error("Service unavailable");
      await actor.submitEnquiry(
        formData.name,
        formData.email,
        formData.phone,
        formData.serviceType,
        formData.message,
        formData.suburb,
        formData.preferredDate,
      );
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        suburb: "",
        serviceType: "",
        preferredDate: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMsg(
        "We could not send your enquiry right now. Please try again or contact us on WhatsApp.",
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src="/assets/generated/contact-hero.dim_1200x400.jpg"
          alt="Contact Tru End of Lease Cleaning Melbourne"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Contact Us
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              Get a Free Quote Today
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-3 text-white/90 text-lg max-w-xl mx-auto"
            >
              We confirm your booking within 1 hour. All Melbourne suburbs
              covered.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Book Your Bond Clean
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill in the form below and we will get back to you with a
                fixed-price quote within 1 hour.
              </p>

              {status === "success" ? (
                <div
                  data-ocid="contact.success_state"
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    Enquiry Sent! We Will Be In Touch Shortly.
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for getting in touch. We will confirm your booking
                    within 1 hour. In the meantime, you can also chat with us on
                    WhatsApp for a faster response.
                  </p>
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <SiWhatsapp className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        data-ocid="contact.name_input"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        autoComplete="name"
                        className="border-input focus-visible:ring-brand-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        data-ocid="contact.email_input"
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        autoComplete="email"
                        className="border-input focus-visible:ring-brand-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        data-ocid="contact.phone_input"
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="04XX XXX XXX"
                        required
                        autoComplete="tel"
                        className="border-input focus-visible:ring-brand-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="suburb" className="text-sm font-medium">
                        Suburb <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        data-ocid="contact.suburb_input"
                        id="suburb"
                        name="suburb"
                        value={formData.suburb}
                        onChange={handleChange}
                        placeholder="e.g. Richmond, Carlton, Hawthorn"
                        required
                        autoComplete="address-level2"
                        className="border-input focus-visible:ring-brand-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="serviceType"
                        className="text-sm font-medium"
                      >
                        Service Required{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        required
                        value={formData.serviceType}
                        onValueChange={(val) =>
                          setFormData((prev) => ({
                            ...prev,
                            serviceType: val,
                          }))
                        }
                      >
                        <SelectTrigger
                          data-ocid="contact.service_select"
                          id="serviceType"
                          className="border-input focus:ring-brand-teal"
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="preferredDate"
                        className="text-sm font-medium"
                      >
                        Preferred Date
                      </Label>
                      <Input
                        data-ocid="contact.date_input"
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="border-input focus-visible:ring-brand-teal"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Additional Details
                    </Label>
                    <Textarea
                      data-ocid="contact.message_textarea"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your property — number of bedrooms, any specific areas that need attention, any pets..."
                      rows={4}
                      className="border-input focus-visible:ring-brand-teal resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div
                      data-ocid="contact.error_state"
                      className="flex items-start gap-3 bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-sm text-destructive"
                    >
                      <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <p>{errorMsg}</p>
                    </div>
                  )}

                  <Button
                    data-ocid="contact.submit_button"
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2
                          data-ocid="contact.loading_state"
                          className="mr-2 h-5 w-5 animate-spin"
                        />
                        Sending Enquiry...
                      </>
                    ) : (
                      "Send Enquiry — Get a Free Quote"
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted about
                    your cleaning enquiry. We confirm bookings within 1 hour.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="space-y-6"
            >
              {/* WhatsApp */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-[#25D366] rounded-2xl p-6 text-white"
              >
                <SiWhatsapp className="h-8 w-8 mb-3" />
                <h3 className="font-display font-bold text-xl mb-2">
                  Chat on WhatsApp
                </h3>
                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  Prefer to chat? Send us a message on WhatsApp and we will
                  reply within minutes.
                </p>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-[#25D366] font-semibold px-4 py-2.5 rounded-lg hover:bg-white/90 transition-colors w-full text-sm"
                >
                  <SiWhatsapp className="h-4 w-4" />
                  0488 841 883
                </a>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-secondary rounded-2xl p-6"
              >
                <h3 className="font-display font-bold text-foreground mb-4">
                  Contact Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-brand-teal flex-shrink-0" />
                    <a
                      href="tel:0488841883"
                      className="text-foreground hover:text-brand-teal transition-colors font-medium"
                    >
                      0488 841 883
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MessageSquare className="h-4 w-4 text-brand-teal flex-shrink-0" />
                    <a
                      href="https://wa.me/61488841883"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-brand-teal transition-colors"
                    >
                      WhatsApp: 0488 841 883
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Servicing All Melbourne Suburbs, VIC, Australia
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <div className="text-muted-foreground">
                      <div>Mon–Sat: 7am – 8pm</div>
                      <div>Sunday: 8am – 6pm</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Service Areas */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-white border border-border rounded-2xl p-6 shadow-card"
              >
                <h3 className="font-display font-bold text-foreground mb-3">
                  Service Areas
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  We cover all Melbourne suburbs including:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {allSuburbs.slice(0, 24).map((suburb) => (
                    <span
                      key={suburb}
                      className="text-xs bg-secondary text-foreground/80 px-2 py-1 rounded-md"
                    >
                      {suburb}
                    </span>
                  ))}
                  <span className="text-xs text-brand-teal font-medium px-2 py-1">
                    + All other Melbourne suburbs
                  </span>
                </div>
              </motion.div>

              {/* Guarantee */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-brand-teal rounded-2xl p-6 text-white"
              >
                <h3 className="font-display font-bold text-xl mb-3">
                  Our Guarantee
                </h3>
                <ul className="space-y-2 text-sm text-white/90">
                  {[
                    "100% bond-back guarantee",
                    "Free re-clean if agent not satisfied",
                    "Fixed-price quotes — no hidden fees",
                    "Confirmation within 1 hour",
                    "Fully insured & police-checked team",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand-amber flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
