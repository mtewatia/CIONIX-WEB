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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 py-4 group border-b md:border-b-0 md:border-r last:border-0 border-secondary-foreground/10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-300">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-base font-semibold text-secondary-foreground/90 font-heading whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
