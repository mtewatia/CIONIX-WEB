import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Monitor, Film, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

const sectors = [
  {
    icon: Building2,
    title: "Real Estate Consultancy",
    description: "Property investment advisory, market analysis, portfolio management, and strategic consulting.",
    services: ["Property Valuation", "Investment Advisory", "Market Research", "Portfolio Management"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Monitor,
    title: "IT Services",
    description: "End-to-end technology solutions from web development to AI-powered marketing.",
    services: ["Web & App Development", "GEO Optimization", "Content Marketing", "Digital Marketing", "UI/UX Design"],
    color: "from-primary to-orange-400",
  },
  {
    icon: Film,
    title: "Video Production & Entertainment",
    description: "Professional media production and YouTube channel management for brands.",
    services: ["Video Production", "Content Creation", "YouTube Management", "Brand Films"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Specialized healthcare solutions with a focus on USA medical billing.",
    services: ["Medical Billing", "Revenue Cycle Management", "Practice Consulting", "Healthcare IT"],
    color: "from-emerald-500 to-teal-500",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-subtitle">Our Sectors</p>
          <h2 className="section-title text-foreground">
            Tailored Solutions for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Each sector has custom pricing based on scope and requirements. Contact us for a personalized quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {sectors.map((sector, index) => (
            <div key={index} className="card-ryse p-8 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${sector.color}`} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sector.color} flex items-center justify-center`}>
                  <sector.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading">{sector.title}</h3>
              </div>

              <p className="text-muted-foreground mb-6">{sector.description}</p>

              <div className="space-y-2 mb-6">
                {sector.services.map((service, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/contact">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
