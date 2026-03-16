import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Monitor, Film, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

const sectors = [
  {
    icon: Building2,
    title: "CIONIX Realty",
    description: "Expert guidance on property investments, market analysis, portfolio management, and strategic real estate advisory for residential and commercial projects.",
    color: "from-blue-500 to-indigo-600",
    link: "#",
  },
  {
    icon: Monitor,
    title: "CIONIX Technologies",
    description: "Full-spectrum technology solutions including Web & App Development, GEO (Generative Engine Optimization), Content Marketing, Digital Marketing, and more.",
    color: "from-primary to-orange-400",
    link: "#",
  },
  {
    icon: Film,
    title: "Video Production & Entertainment",
    description: "End-to-end content production, professional video creation, YouTube channel management, and entertainment media services that captivate audiences.",
    color: "from-purple-500 to-pink-500",
    link: "#",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Industry",
    description: "Specialized healthcare solutions including Medical Billing services for USA-based doctors, practice management consulting, and healthcare IT integration.",
    color: "from-emerald-500 to-teal-500",
    link: "#",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-subtitle">Our Sectors</p>
          <h2 className="section-title text-foreground">
            Multi-Sector Excellence Under <span className="gradient-text">One Roof</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Each sector operates with dedicated expertise and will soon have its own specialized platform. 
            Explore what Nexora Global brings to every industry we serve.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="card-ryse p-8 group relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${sector.color}`} />
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sector.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <sector.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold font-heading mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {sector.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {sector.description}
              </p>

              <span className="inline-flex items-center text-primary font-semibold text-sm">
                Coming Soon — Dedicated Website
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
