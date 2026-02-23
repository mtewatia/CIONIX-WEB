import { Cloud, Landmark, ShoppingCart, Building2, Monitor, GraduationCap, Bitcoin, Home } from "lucide-react";

const industries = [
  {
    icon: Cloud,
    title: "SaaS",
    description: "Drive product signups, reduce churn, and scale your recurring revenue with data-driven marketing strategies.",
    position: "left",
  },
  {
    icon: Landmark,
    title: "Fintech",
    description: "Build trust, acquire customers, and navigate compliance while scaling your financial technology solutions.",
    position: "left",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description: "Maximize conversions, reduce cart abandonment, and drive profitable growth across all sales channels.",
    position: "left",
  },
  {
    icon: Building2,
    title: "Financial",
    description: "Attract high-value clients and establish authority in the competitive financial services landscape.",
    position: "left",
  },
  {
    icon: Monitor,
    title: "IT & Software",
    description: "Generate qualified leads and accelerate sales cycles for your technology products and services.",
    position: "right",
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description: "Increase enrollments and engagement with targeted campaigns for educational platforms and courses.",
    position: "right",
  },
  {
    icon: Bitcoin,
    title: "Crypto",
    description: "Build community, drive token adoption, and navigate the unique challenges of Web3 marketing.",
    position: "right",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Generate quality leads and close more deals with strategic digital marketing for property businesses.",
    position: "right",
  },
];

const FeaturesSection = () => {
  const leftIndustries = industries.filter(f => f.position === "left");
  const rightIndustries = industries.filter(f => f.position === "right");

  return (
    <section className="section-padding bg-ryse-dark relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ryse-dark via-ryse-dark-light to-ryse-dark opacity-50" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="section-subtitle">Why Choose Us</p>
          <h2 className="section-title text-white">
            Any Industry. Any Goal. <span className="gradient-text">We Make Performance Marketing Work for You</span>
          </h2>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            {leftIndustries.map((industry, index) => (
              <div key={index} className="flex items-start gap-5 group">
                <div className="flex-1 text-right">
                  <h4 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-ryse-orange transition-colors">
                    {industry.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
                <div className="icon-gradient flex-shrink-0">
                  <industry.icon className="h-8 w-8 text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Center - Main Visual */}
          <div className="relative flex items-center justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-ryse-orange/20 to-ryse-orange-light/10 flex items-center justify-center floating">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-ryse-orange/30 to-ryse-orange-light/20 flex items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-ryse-orange to-ryse-orange-light flex items-center justify-center shadow-2xl shadow-ryse-orange/50">
                  <span className="text-white font-heading font-bold text-2xl md:text-3xl text-center">
                    Your<br />Industry
                  </span>
                </div>
              </div>
            </div>
            
            {/* Floating Dots */}
            <div className="absolute top-0 left-1/4 w-3 h-3 rounded-full bg-ryse-orange animate-pulse" />
            <div className="absolute bottom-10 right-1/4 w-2 h-2 rounded-full bg-ryse-orange-light animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/3 right-0 w-4 h-4 rounded-full bg-ryse-orange/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightIndustries.map((industry, index) => (
              <div key={index} className="flex items-start gap-5 group">
                <div className="icon-gradient flex-shrink-0">
                  <industry.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-ryse-orange transition-colors">
                    {industry.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout (below lg) */}
        <div className="lg:hidden space-y-6">
          {industries.map((industry, index) => (
            <div key={index} className="flex items-start gap-5 group">
              <div className="icon-gradient flex-shrink-0">
                <industry.icon className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-ryse-orange transition-colors">
                  {industry.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {industry.description}
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
