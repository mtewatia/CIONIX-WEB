import { useState } from "react";
import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmailToAdmin } from "@/services/emailService";

const navLinks = [
  { name: "Home", href: "/realty" },
  { name: "Services", href: "/realty/services" },
  { name: "Contact", href: "/realty/contact" },
];

const RealtyContact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: "", budget: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendContactEmailToAdmin({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.interest,
        message: formData.message,
      }, "realty@cionix.com");

      toast({ 
        title: "Inquiry Submitted!", 
        description: "Thank you for your interest. Our real estate advisor will contact you within 24 hours. Check your email for updates." 
      });
      setFormData({ name: "", email: "", phone: "", interest: "", budget: "", message: "" });
    } catch (error) {
      toast({ 
        title: "Error", 
        description: "Failed to submit inquiry. Please contact us directly at realty@cionix.com",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SectorHeader sectorName="Realty" sectorColor="from-blue-500 to-indigo-600" navLinks={navLinks} contactHref="/realty/contact" homePath="/realty" />

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container-custom text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</p>
          <h1 className="text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
            Let's Find Your <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Perfect Property</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Get personalized property recommendations and expert advisory from our real estate consultants.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold font-heading mb-6 text-foreground">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })} required>
                    <option value="">I'm Interested In</option>
                    <option value="residential">Residential Property</option>
                    <option value="commercial">Commercial Property</option>
                    <option value="land">Land & Plots</option>
                    <option value="investment">Investment Advisory</option>
                    <option value="management">Property Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}>
                  <option value="">Select Budget Range (Optional)</option>
                  <option value="under-50l">Under ₹50 Lakhs</option>
                  <option value="50l-1cr">₹50 Lakhs - ₹1 Crore</option>
                  <option value="1cr-3cr">₹1 Crore - ₹3 Crore</option>
                  <option value="3cr-5cr">₹3 Crore - ₹5 Crore</option>
                  <option value="above-5cr">Above ₹5 Crore</option>
                </select>
                <Textarea placeholder="Tell us about your property requirements..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} required />
                <Button type="submit" size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Inquiry"} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-heading mb-6 text-foreground">Contact Info</h2>
              {[
                { icon: Mail, label: "Email Us", value: "realty@cionix.com", href: "mailto:realty@cionix.com" },
                { icon: Phone, label: "Call Us", value: "+1 (555) 456-7890", href: "tel:+15554567890" },
                { icon: MapPin, label: "Office", value: "Dubai, UAE" },
                { icon: Clock, label: "Working Hours", value: "Mon-Sat: 9AM - 7PM GST" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
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

      <SectorFooter sectorName="Realty" description="CIONIX Realty offers expert real estate advisory and investment consulting." serviceLinks={[{ name: "Residential", href: "/realty/services" }, { name: "Commercial", href: "/realty/services" }, { name: "Investment", href: "/realty/services" }]} quickLinks={[{ name: "Home", href: "/realty" }, { name: "Services", href: "/realty/services" }, { name: "Contact", href: "/realty/contact" }, { name: "Main Site", href: "/" }]} email="realty@cionix.com" phone="+1 (555) 456-7890" location="Dubai, UAE" />
    </div>
  );
};

export default RealtyContact;
