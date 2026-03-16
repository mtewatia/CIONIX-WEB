import { useState } from "react";
import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const navLinks = [
  { name: "Home", href: "/medline" },
  { name: "Services", href: "/medline/services" },
  { name: "Contact", href: "/medline/contact" },
];

const MedlineContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", practice: "", specialty: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Assessment Request Sent!", description: "Our healthcare billing team will contact you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", practice: "", specialty: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SectorHeader sectorName="Medline" sectorColor="from-emerald-500 to-teal-500" navLinks={navLinks} contactHref="/medline/contact" homePath="/medline" />

      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="container-custom text-center">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</p>
          <h1 className="text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
            Get Your Free <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">RCM Assessment</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Discover how much revenue your practice is leaving on the table with a complimentary revenue cycle analysis.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold font-heading mb-6 text-foreground">Request a Free Assessment</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                  <Input placeholder="Practice Name" value={formData.practice} onChange={(e) => setFormData({ ...formData, practice: e.target.value })} required />
                </div>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  required
                >
                  <option value="">Select Your Specialty</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="internal-medicine">Internal Medicine</option>
                  <option value="family-practice">Family Practice</option>
                  <option value="mental-health">Mental & Behavioral Health</option>
                  <option value="radiology">Radiology</option>
                  <option value="other">Other</option>
                </select>
                <Textarea placeholder="Tell us about your practice and current billing challenges..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} required />
                <Button type="submit" size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                  Request Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-heading mb-6 text-foreground">Get in Touch</h2>
              {[
                { icon: Mail, label: "Email Us", value: "medline@cionix.com", href: "mailto:medline@cionix.com" },
                { icon: Phone, label: "Call Us", value: "+1 (555) 345-6789", href: "tel:+15553456789" },
                { icon: MapPin, label: "Office", value: "Dubai, UAE" },
                { icon: Clock, label: "Working Hours", value: "Mon-Fri: 9AM - 6PM GST" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-foreground hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-semibold text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectorFooter sectorName="Medline" description="CIONIX Medline provides specialized medical billing and healthcare revenue solutions." serviceLinks={[{ name: "Medical Billing", href: "/medline/services" }, { name: "Revenue Cycle Mgmt", href: "/medline/services" }, { name: "Compliance", href: "/medline/services" }]} quickLinks={[{ name: "Home", href: "/medline" }, { name: "Services", href: "/medline/services" }, { name: "Contact", href: "/medline/contact" }, { name: "Main Site", href: "/" }]} email="medline@cionix.com" phone="+1 (555) 345-6789" location="Dubai, UAE" />
    </div>
  );
};

export default MedlineContact;
