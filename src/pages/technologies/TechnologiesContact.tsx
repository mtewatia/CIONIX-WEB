import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmailToAdmin } from "@/services/emailService";

const navLinks = [
  { name: "Home", href: "/technologies" },
  { name: "Services", href: "/technologies/services" },
  { name: "Contact", href: "/technologies/contact" },
];

const contactInfo = [
  { icon: Mail, title: "Email Us", value: "tech@cionix.com", href: "mailto:tech@cionix.com" },
  { icon: Phone, title: "Call Us", value: "+1 (234) 567-890", href: "tel:+1234567890" },
  { icon: MapPin, title: "Visit Us", value: "San Francisco, CA", href: null },
  { icon: Clock, title: "Working Hours", value: "Mon–Fri, 9AM–6PM PST", href: null },
];

const TechnologiesContact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", service: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendContactEmailToAdmin({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
      }, "tech@cionix.com");

      toast({
        title: "Message sent!",
        description: "Thank you for your interest. Our tech team will get back to you within 24 hours. Watch your email for updates.",
      });
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please contact us directly at tech@cionix.com",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SectorHeader
        sectorName="Technologies"
        sectorColor="from-primary to-orange-400"
        navLinks={navLinks}
        contactHref="/technologies/contact"
        homePath="/technologies"
      />

      {/* Hero */}
      <section className="hero-section pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Contact Us</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Let's Build Something <span className="gradient-text">Amazing Together</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Tell us about your project and our team will get back to you with a free consultation within 24 hours.
          </p>
        </div>
        <div className="curve-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z" className="shape-fill" />
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">Get In Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ready to start your project? Reach out through any of the channels below or fill in the form and we'll respond promptly.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="card-ryse p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                    <Input placeholder="John Doe" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                    <Input type="email" placeholder="john@company.com" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                    <Input type="tel" placeholder="+1 (234) 567-890" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Company</label>
                    <Input placeholder="Your Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Service Interested In</label>
                  <select
                    className="w-full h-12 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Select a service</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>GEO Optimization</option>
                    <option>Digital Marketing & SEO</option>
                    <option>AI & Machine Learning</option>
                    <option>Cloud & DevOps</option>
                    <option>UI/UX Design</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Project Details *</label>
                  <Textarea placeholder="Tell us about your project, timeline, and budget..." rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <SectorFooter
        sectorName="Technologies"
        description="CIONIX Technologies delivers cutting-edge web, mobile, AI, and digital marketing solutions for businesses worldwide."
        serviceLinks={[
          { name: "Web Development", href: "/technologies/services" },
          { name: "Mobile Apps", href: "/technologies/services" },
          { name: "GEO Optimization", href: "/technologies/services" },
          { name: "Digital Marketing", href: "/technologies/services" },
        ]}
        quickLinks={[
          { name: "Home", href: "/technologies" },
          { name: "Services", href: "/technologies/services" },
          { name: "Contact", href: "/technologies/contact" },
          { name: "Main Site", href: "/" },
        ]}
        email="tech@cionix.com"
        phone="+1 (234) 567-890"
        location="San Francisco, CA"
      />
    </div>
  );
};

export default TechnologiesContact;
