import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Building2, TrendingUp, Landmark, MapPin, FileSearch, ArrowRight, CheckCircle } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/realty" },
  { name: "Services", href: "/realty/services" },
];

const services = [
  {
    icon: Home,
    title: "Residential Advisory",
    description: "Find your dream home with our expert residential advisory. We curate premium properties—luxury apartments, independent villas, and plotted developments—across the best locations.",
    features: ["Premium Apartment Selection", "Villa & Independent House Advisory", "Plotted Development Guidance", "Home Loan Assistance", "Legal Due Diligence", "Registration & Documentation Support"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Building2,
    title: "Commercial Real Estate",
    description: "Strategic commercial property solutions for businesses and investors. Office spaces, retail outlets, warehouses, and mixed-use developments with high appreciation potential.",
    features: ["Office Space Advisory", "Retail & Shopping Spaces", "Warehouse & Industrial Properties", "Co-working Space Solutions", "Lease Negotiation Support", "Commercial Due Diligence"],
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Investment Consulting",
    description: "Data-driven real estate investment strategies. We analyze market trends, growth corridors, and ROI potential to help you build a profitable property portfolio.",
    features: ["Market Analysis & Research", "ROI Projection & Modeling", "Portfolio Diversification Strategy", "Pre-launch & New Launch Access", "Exit Strategy Planning", "Tax Planning Advisory"],
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: Landmark,
    title: "Property Management",
    description: "Hassle-free property management for landlords and investors. We handle tenant sourcing, rent collection, maintenance, and legal compliance so you earn passive income.",
    features: ["Tenant Sourcing & Screening", "Rent Collection & Accounting", "Property Maintenance Coordination", "Legal & Lease Management", "Property Insurance Advisory", "Monthly Performance Reports"],
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: MapPin,
    title: "Land & Plot Advisory",
    description: "Expert guidance on land and plot investments. We identify high-growth corridors and help you secure land parcels with strong appreciation and development potential.",
    features: ["Land Identification & Evaluation", "Title Verification & Legal Check", "Growth Corridor Analysis", "Development Feasibility Studies", "Government Approval Guidance", "Joint Venture Advisory"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: FileSearch,
    title: "Market Research & Valuation",
    description: "Comprehensive real estate market research and property valuation services. Get accurate valuations and deep market insights for informed decision-making.",
    features: ["Property Valuation Reports", "Comparative Market Analysis", "Area Development Forecasts", "Rental Yield Analysis", "Infrastructure Impact Studies", "Quarterly Market Reports"],
    color: "from-amber-500 to-orange-600",
  },
];

const RealtyServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <SectorHeader sectorName="Realty" sectorColor="from-blue-500 to-indigo-600" navLinks={navLinks} contactHref="/realty/services" homePath="/realty" />

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container-custom text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">Our Services</p>
          <h1 className="text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
            Real Estate <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Comprehensive property advisory and investment services for residential, commercial, and land investments.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom space-y-20">
          {services.map((service, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">{service.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{service.description}</p>
                <Button asChild>
                  <a href="mailto:realty@cionix.com">Get Started <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
              <div className={`bg-muted/50 rounded-2xl p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h4 className="font-heading font-bold text-lg mb-5 text-foreground">What's Included</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-heading mb-6">Ready to Invest in Real Estate?</h2>
          <p className="text-white/70 text-lg mb-8">Get personalized property recommendations and investment insights from our expert advisors.</p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90" asChild>
            <a href="mailto:realty@cionix.com">Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></a>
          </Button>
        </div>
      </section>

      <SectorFooter sectorName="Realty" description="CIONIX Realty offers expert real estate advisory and investment consulting." serviceLinks={[{ name: "Residential", href: "/realty/services" }, { name: "Commercial", href: "/realty/services" }, { name: "Investment", href: "/realty/services" }]} quickLinks={[{ name: "Home", href: "/realty" }, { name: "Services", href: "/realty/services" }, { name: "Contact", href: "/realty/contact" }, { name: "Main Site", href: "/" }]} email="realty@cionix.com" phone="+1 (555) 456-7890" location="Dubai, UAE" />
    </div>
  );
};

export default RealtyServices;
