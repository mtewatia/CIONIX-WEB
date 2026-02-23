import { Zap, Users, BarChart3, Target, Rocket, Shield, Globe, TrendingUp, Award } from "lucide-react";

const TrustStrip = () => {
  const items = [
    {
      icon: Zap,
      text: "AI-Driven Growth",
    },
    {
      icon: Users,
      text: "Full-Stack Creative Team",
    },
    {
      icon: BarChart3,
      text: "Data-Backed Execution",
    },
    {
      icon: Target,
      text: "Built for Scale",
    },
    {
      icon: Rocket,
      text: "Fast Deployment",
    },
    {
      icon: Shield,
      text: "Secure Solutions",
    },
    {
      icon: Globe,
      text: "Global Reach",
    },
    {
      icon: TrendingUp,
      text: "Proven Results",
    },
    {
      icon: Award,
      text: "Award Winning",
    },
  ];

  return (
    <section className="py-16 bg-background relative z-10">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="text-sm md:text-base font-semibold text-foreground font-heading">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
