import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Monitor, Film, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

const sectors = [
  {
    icon: Monitor,
    title: "CIONIX Technologies",
    description: "A dedicated technology firm with years of experience in Web & App Development, GEO (Generative Engine Optimization), Content Marketing, Digital Marketing, and enterprise solutions — now operating under the CIONIX umbrella.",
    color: "from-primary to-orange-400",
    link: "/technologies",
  },
  {
    icon: Film,
    title: "CIONIX Media",
    description: "An established media production house specializing in end-to-end content creation, professional video production, YouTube channel management, and brand storytelling — trusted by creators and brands for years.",
    color: "from-purple-500 to-pink-500",
    link: "/media",
  },
  {
    icon: HeartPulse,
    title: "CIONIX Medline",
    description: "A seasoned healthcare solutions provider with deep expertise in Medical Billing for USA-based physicians, revenue cycle management, practice consulting, and healthcare IT — built on years of compliance-first operations.",
    color: "from-emerald-500 to-teal-500",
    link: "/medline",
  },
  {
    icon: Building2,
    title: "CIONIX Realty",
    description: "An experienced real estate advisory firm offering property investment guidance, market analysis, portfolio management, and strategic consulting for residential and commercial projects across key markets.",
    color: "from-blue-500 to-indigo-600",
    link: "/realty",
  },
];

const ServicesSection = () => {
  return (
    <section id="our-sectors" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-subtitle">Our Companies</p>
          <h2 className="section-title text-foreground">
            Four Expert Companies. <span className="gradient-text">One Trusted Brand.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Each CIONIX division is an independent company with its own legacy of excellence — 
            specialists who've been delivering results in their industry for years, 
            now united to offer you unmatched cross-sector capability.
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

              {sector.link.startsWith("/") && sector.link !== "#" ? (
                <Link to={sector.link} className="inline-flex items-center text-primary font-semibold text-sm hover:gap-1 transition-all">
                  Explore {sector.title.replace("CIONIX ", "")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ) : (
                <span className="inline-flex items-center text-primary font-semibold text-sm">
                  Coming Soon — Dedicated Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
