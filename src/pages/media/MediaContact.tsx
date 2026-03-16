import { useState } from "react";
import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const navLinks = [
  { name: "Home", href: "/media" },
  { name: "Services", href: "/media/services" },
  { name: "Contact", href: "/media/contact" },
];

const MediaContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Our media team will get back to you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SectorHeader sectorName="Media" sectorColor="from-purple-500 to-pink-500" navLinks={navLinks} contactHref="/media/contact" homePath="/media" />

      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-violet-900 to-fuchsia-900">
        <div className="container-custom text-center">
          <p className="text-pink-400 font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</p>
          <h1 className="text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
            Let's Create Something <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Amazing</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Get a free channel audit and media strategy consultation from our expert team.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold font-heading mb-6 text-foreground">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  >
                    <option value="">Select a Service</option>
                    <option value="youtube-automation">YouTube Automation</option>
                    <option value="video-production">Video Production</option>
                    <option value="content-production">Content Production</option>
                    <option value="podcast-production">Podcast Production</option>
                    <option value="creative-design">Creative Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <Textarea placeholder="Tell us about your project..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} required />
                <Button type="submit" size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  Send Message <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-heading mb-6 text-foreground">Get in Touch</h2>
              {[
                { icon: Mail, label: "Email Us", value: "media@cionix.com", href: "mailto:media@cionix.com" },
                { icon: Phone, label: "Call Us", value: "+1 (555) 234-5678", href: "tel:+15552345678" },
                { icon: MapPin, label: "Visit Us", value: "Dubai, UAE" },
                { icon: Clock, label: "Working Hours", value: "Mon-Fri: 9AM - 6PM GST" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
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

      <SectorFooter
        sectorName="Media"
        description="CIONIX Media delivers end-to-end media production, YouTube automation, and content creation services."
        serviceLinks={[
          { name: "YouTube Automation", href: "/media/services" },
          { name: "Video Production", href: "/media/services" },
          { name: "Content Production", href: "/media/services" },
        ]}
        quickLinks={[
          { name: "Home", href: "/media" },
          { name: "Services", href: "/media/services" },
          { name: "Contact", href: "/media/contact" },
          { name: "Main Site", href: "/" },
        ]}
        email="media@cionix.com"
        phone="+1 (555) 234-5678"
        location="Dubai, UAE"
      />
    </div>
  );
};

export default MediaContact;
