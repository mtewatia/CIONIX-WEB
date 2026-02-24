import { Building2, Monitor, Film, HeartPulse, Code, Megaphone, Video, Stethoscope } from "lucide-react";

const capabilities = [
  {
    icon: Building2,
    title: "Property Advisory",
    description: "Strategic real estate consultancy for residential and commercial investments with market analysis and portfolio management.",
    position: "left",
  },
  {
    icon: Code,
    title: "Web & App Development",
    description: "Custom web applications, mobile apps, and scalable digital products built with modern technologies.",
    position: "left",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & GEO",
    description: "AI-powered search optimization, content marketing, social media management, and performance campaigns.",
    position: "left",
  },
  {
    icon: Video,
    title: "Content Production",
    description: "High-quality video production, brand films, social content, and compelling storytelling across formats.",
    position: "left",
  },
  {
    icon: Film,
    title: "YouTube Management",
    description: "Full YouTube channel management, SEO optimization, thumbnail design, and growth automation.",
    position: "right",
  },
  {
    icon: HeartPulse,
    title: "Medical Billing (USA)",
    description: "Comprehensive medical billing services for US-based physicians with compliance and revenue cycle management.",
    position: "right",
  },
  {
    icon: Stethoscope,
    title: "Healthcare IT",
    description: "Healthcare technology integration, practice management systems, and HIPAA-compliant digital solutions.",
    position: "right",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description: "Human-centered interface design, user research, prototyping, and design systems for digital products.",
    position: "right",
  },
];

const FeaturesSection = () => {
  const leftItems = capabilities.filter(f => f.position === "left");
  const rightItems = capabilities.filter(f => f.position === "right");

  return (
    <section className="section-padding bg-ryse-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ryse-dark via-ryse-dark-light to-ryse-dark opacity-50" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="section-subtitle">Our Capabilities</p>
          <h2 className="section-title text-white">
            Expertise Across <span className="gradient-text">Every Sector We Serve</span>
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-6">
            {leftItems.map((item, index) => (
              <div key={index} className="flex items-start gap-5 group">
                <div className="flex-1 text-right">
                  <h4 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-ryse-orange transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="icon-gradient flex-shrink-0">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-ryse-orange/20 to-ryse-orange-light/10 flex items-center justify-center floating">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-ryse-orange/30 to-ryse-orange-light/20 flex items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-ryse-orange to-ryse-orange-light flex items-center justify-center shadow-2xl shadow-ryse-orange/50">
                  <span className="text-white font-heading font-bold text-2xl md:text-3xl text-center">
                    Nexorah<br />Global
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-1/4 w-3 h-3 rounded-full bg-ryse-orange animate-pulse" />
            <div className="absolute bottom-10 right-1/4 w-2 h-2 rounded-full bg-ryse-orange-light animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/3 right-0 w-4 h-4 rounded-full bg-ryse-orange/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          <div className="space-y-6">
            {rightItems.map((item, index) => (
              <div key={index} className="flex items-start gap-5 group">
                <div className="icon-gradient flex-shrink-0">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-ryse-orange transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {capabilities.map((item, index) => (
            <div key={index} className="flex items-start gap-5 group">
              <div className="icon-gradient flex-shrink-0">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-ryse-orange transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
