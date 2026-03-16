import { Users, Globe, Clock, BarChart3 } from "lucide-react";

const metrics = [
  { icon: Globe, label: "Global Delivery Model" },
  { icon: Clock, label: "24/7 Operations" },
  { icon: BarChart3, label: "Data-Driven Approach" },
];

const TrustMetrics = () => {
  return (
    <section className="py-6 bg-secondary relative z-10">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-secondary-foreground/90 font-heading whitespace-nowrap">
                {item.label}
              </span>
              {index < metrics.length - 1 && (
                <div className="hidden md:block w-px h-8 bg-secondary-foreground/10 ml-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
