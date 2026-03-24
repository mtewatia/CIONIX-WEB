import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import SectorBlogSection from "@/components/sectors/SectorBlogSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Home, TrendingUp, MapPin, Users, Award, BarChart3, Shield, CheckCircle, ArrowRight, Landmark, Key } from "lucide-react";
import { getBlogsBySector } from "@/data/blogPosts";

const navLinks = [
  { name: "Home", href: "/realty" },
  { name: "Services", href: "/realty/services" },
  { name: "Blog", href: "/realty/blog" },
  { name: "Contact", href: "/realty/contact" },
];

const stats = [
  { value: "₹500Cr+", label: "Property Transacted" },
  { value: "2,000+", label: "Happy Clients" },
  { value: "50+", label: "Premium Projects" },
  { value: "15+", label: "Cities Covered" },
];

const services = [
  {
    icon: Home,
    title: "Residential Advisory",
    description: "Expert guidance for premium residential investments—luxury apartments, villas, and plotted developments across prime locations.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Building2,
    title: "Commercial Real Estate",
    description: "Strategic commercial property advisory for office spaces, retail outlets, and mixed-use developments with high ROI potential.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Investment Consulting",
    description: "Data-driven investment strategies and portfolio management to maximize returns on your real estate investments.",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: Landmark,
    title: "Property Management",
    description: "Complete property management services including tenant management, maintenance coordination, and rental optimization.",
    color: "from-violet-500 to-purple-600",
  },
];

const RealtyHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <SectorHeader sectorName="Realty" sectorColor="from-blue-500 to-indigo-600" navLinks={navLinks} contactHref="/realty/contact" homePath="/realty" headerBg="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-[150px]" />
        </div>
        <div className="container-custom relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/80 mb-6">
                <Building2 className="h-4 w-4 text-blue-400" /> Premium Real Estate Consultancy
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6">
                Your Trusted <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Real Estate</span> Partner
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
                Expert property advisory, market analysis, and investment consulting for residential and commercial real estate across premium locations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white" asChild>
                  <Link to="/realty/contact">Book Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link to="/realty/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-subtitle">Our Expertise</p>
            <h2 className="section-title text-foreground">
              Comprehensive <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Real Estate Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              From residential to commercial, we provide expert advisory and investment consulting to help you make the best property decisions.
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
                <Link to="/realty/services" className="inline-flex items-center text-primary font-semibold text-sm hover:gap-1 transition-all">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">Why CIONIX Realty</p>
              <h2 className="text-4xl font-bold font-heading mb-6 text-foreground">Navigate Real Estate with Confidence</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With deep market expertise and a client-first approach, we help investors, homebuyers, and businesses make informed real estate decisions that deliver long-term value.
              </p>
              <div className="space-y-4">
                {[
                  "RERA-registered and fully compliant advisory",
                  "In-depth market research and property analysis",
                  "Exclusive access to premium pre-launch projects",
                  "End-to-end support from search to possession",
                  "Transparent pricing with zero hidden charges",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Key, value: "2,000+", label: "Properties Sold" },
                { icon: Users, value: "98%", label: "Client Satisfaction" },
                { icon: Award, value: "15+", label: "Years Experience" },
                { icon: BarChart3, value: "25%", label: "Avg ROI Delivered" },
              ].map((stat, i) => (
                <div key={i} className={`bg-background rounded-2xl p-6 border shadow-sm text-center ${i % 2 === 1 ? "mt-8" : ""}`}>
                  <stat.icon className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-heading mb-6">Find Your Perfect Property Today</h2>
          <p className="text-white/70 text-lg mb-8">Whether you're buying, selling, or investing—our experts are ready to guide you every step of the way.</p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90" asChild>
            <Link to="/realty/contact">Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <SectorBlogSection posts={getBlogsBySector("realty")} sectorPath="/realty" accentColor="from-blue-500 to-indigo-600" accentText="text-blue-600" />

      <SectorFooter
        sectorName="Realty"
        description="CIONIX Realty offers expert real estate advisory, investment consulting, and property management services across premium locations."
        serviceLinks={[
          { name: "Residential Advisory", href: "/realty/services" },
          { name: "Commercial Real Estate", href: "/realty/services" },
          { name: "Investment Consulting", href: "/realty/services" },
          { name: "Property Management", href: "/realty/services" },
        ]}
        quickLinks={[
          { name: "Home", href: "/realty" },
          { name: "Services", href: "/realty/services" },
          { name: "Contact", href: "/realty/contact" },
          { name: "Main Site", href: "/" },
        ]}
        email="realty@cionix.com"
        phone="+1 (555) 456-7890"
        location="Dubai, UAE"
      />
    </div>
  );
};

export default RealtyHome;
