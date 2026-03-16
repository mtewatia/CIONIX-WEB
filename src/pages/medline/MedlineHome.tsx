import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import SectorBlogSection from "@/components/sectors/SectorBlogSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeartPulse, FileText, DollarSign, Shield, Users, TrendingUp, Clock, CheckCircle, ArrowRight, Building2, Stethoscope, ClipboardList } from "lucide-react";
import { getBlogsBySector } from "@/data/blogPosts";

const navLinks = [
  { name: "Home", href: "/medline" },
  { name: "Services", href: "/medline/services" },
  { name: "Blog", href: "/medline/blog" },
  { name: "Contact", href: "/medline/contact" },
];

const stats = [
  { value: "98%", label: "Clean Claims Rate" },
  { value: "30%", label: "Revenue Increase" },
  { value: "500+", label: "Healthcare Providers" },
  { value: "24hr", label: "Turnaround Time" },
];

const services = [
  {
    icon: FileText,
    title: "Medical Billing & Coding",
    description: "Accurate medical billing and coding services ensuring maximum reimbursement. We handle CPT, ICD-10, and HCPCS coding with 98%+ accuracy.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: DollarSign,
    title: "Revenue Cycle Management",
    description: "End-to-end RCM solutions that optimize your revenue cycle from patient registration to final payment, reducing denials and accelerating cash flow.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Shield,
    title: "Compliance & Credentialing",
    description: "Stay HIPAA-compliant and properly credentialed. We manage provider enrollment, credentialing, and ensure adherence to all regulatory requirements.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: ClipboardList,
    title: "Practice Management",
    description: "Streamline your practice operations with our consulting services—scheduling optimization, workflow automation, and performance analytics.",
    color: "from-cyan-500 to-blue-600",
  },
];

const MedlineHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <SectorHeader sectorName="Medline" sectorColor="from-emerald-500 to-teal-500" navLinks={navLinks} contactHref="/medline/contact" homePath="/medline" />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-[150px]" />
        </div>
        <div className="container-custom relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/80 mb-6">
                <HeartPulse className="h-4 w-4 text-emerald-400" /> Trusted Healthcare Revenue Partner
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6">
                Intelligent <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Healthcare</span> Revenue Solutions
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
                Specialized medical billing and revenue cycle management for USA-based physicians. Maximize reimbursements, reduce denials, and focus on patient care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white" asChild>
                  <Link to="/medline/contact">Free RCM Assessment <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link to="/medline/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-subtitle">Our Solutions</p>
            <h2 className="section-title text-foreground">
              Comprehensive <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Healthcare Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              From medical billing to practice management, we provide end-to-end solutions that optimize your healthcare revenue cycle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="card-ryse p-8 group relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <Link to="/medline/services" className="inline-flex items-center text-primary font-semibold text-sm hover:gap-1 transition-all">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-4">Why CIONIX Medline</p>
              <h2 className="text-4xl font-bold font-heading mb-6 text-foreground">
                Your Trusted Partner in Healthcare Revenue Management
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We understand the complexities of US healthcare billing. Our team of certified coders and billing experts ensures your practice receives maximum reimbursement while staying fully compliant.
              </p>
              <div className="space-y-4">
                {[
                  "AAPC & AHIMA certified coding professionals",
                  "HIPAA-compliant processes and infrastructure",
                  "Specialization in 30+ medical specialties",
                  "Real-time dashboards and transparent reporting",
                  "Dedicated account managers for each practice",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Stethoscope, value: "30+", label: "Specialties Covered" },
                { icon: Users, value: "500+", label: "Providers Served" },
                { icon: TrendingUp, value: "30%", label: "Avg Revenue Increase" },
                { icon: Clock, value: "<24h", label: "Claims Turnaround" },
              ].map((stat, i) => (
                <div key={i} className={`bg-background rounded-2xl p-6 border shadow-sm text-center ${i % 2 === 1 ? "mt-8" : ""}`}>
                  <stat.icon className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-heading mb-6">Get a Free Revenue Cycle Assessment</h2>
          <p className="text-white/70 text-lg mb-8">Discover how much revenue your practice is leaving on the table. Our experts will analyze your billing process and identify opportunities for improvement.</p>
          <Button size="lg" className="bg-white text-emerald-900 hover:bg-white/90" asChild>
            <Link to="/medline/contact">Schedule Free Assessment <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <SectorBlogSection posts={getBlogsBySector("medline")} sectorPath="/medline" accentColor="from-emerald-500 to-teal-500" accentText="text-emerald-600" />

      <SectorFooter
        sectorName="Medline"
        description="CIONIX Medline provides specialized medical billing, revenue cycle management, and healthcare IT solutions for USA-based physicians."
        serviceLinks={[
          { name: "Medical Billing", href: "/medline/services" },
          { name: "Revenue Cycle Mgmt", href: "/medline/services" },
          { name: "Compliance", href: "/medline/services" },
          { name: "Practice Management", href: "/medline/services" },
        ]}
        quickLinks={[
          { name: "Home", href: "/medline" },
          { name: "Services", href: "/medline/services" },
          { name: "Contact", href: "/medline/contact" },
          { name: "Main Site", href: "/" },
        ]}
        email="medline@cionix.com"
        phone="+1 (555) 345-6789"
        location="Dubai, UAE"
      />
    </div>
  );
};

export default MedlineHome;
