import { Cloud, Landmark, ShoppingCart, Building2, Monitor, GraduationCap, Bitcoin, Home } from "lucide-react";
import floatingShapes from "@/assets/floating-shapes.png";

const industries = [
  {
    title: "SaaS",
    icon: Cloud,
  },
  {
    title: "Fintech",
    icon: Landmark,
  },
  {
    title: "eCommerce",
    icon: ShoppingCart,
  },
  {
    title: "Financial",
    icon: Building2,
  },
  {
    title: "IT & Software",
    icon: Monitor,
  },
  {
    title: "EdTech",
    icon: GraduationCap,
  },
  {
    title: "Crypto",
    icon: Bitcoin,
  },
  {
    title: "Real Estate",
    icon: Home,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 opacity-20 floating-element-slow hidden lg:block">
        <img src={floatingShapes} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Card */}
              <div className="card-white !p-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-secondary to-accent/80 flex items-center justify-center">
                  <div className="text-center text-card p-8">
                    <div className="text-6xl font-bold font-heading mb-2">97%</div>
                    <div className="text-lg opacity-90">Client Satisfaction Rate</div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -right-6 top-8 card-white !p-4 floating-element">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center">
                    <span className="text-card font-bold text-lg">3x</span>
                  </div>
                  <div>
                    <div className="font-bold font-heading text-foreground">ROI Increase</div>
                    <div className="text-sm text-muted-foreground">Average Result</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 bottom-8 card-white !p-4 floating-element-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center">
                    <span className="text-card font-bold text-lg">48h</span>
                  </div>
                  <div>
                    <div className="font-bold font-heading text-foreground">Response Time</div>
                    <div className="text-sm text-muted-foreground">On Average</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-foreground">
              Any Industry. Any Goal.{" "}
              <span className="gradient-text">We Make Performance Marketing Work for You</span>
            </h2>

            {/* Industries Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div 
                  key={index} 
                  className="card-white !p-5 text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
                    <industry.icon className="h-7 w-7 text-card" />
                  </div>
                  <h4 className="font-semibold font-heading text-foreground text-sm">
                    {industry.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
