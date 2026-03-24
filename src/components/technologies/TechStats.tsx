import { Rocket, Globe, Heart, MapPin } from "lucide-react";

const stats = [
  { icon: Rocket, number: "200+", label: "Projects Delivered" },
  { icon: Globe, number: "50+", label: "Global Clients" },
  { icon: Heart, number: "98%", label: "Client Retention" },
  { icon: MapPin, number: "15+", label: "Countries Served" },
];

const TechStats = () => (
  <section className="relative py-20 bg-muted/50">
    <div className="container-custom">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="group relative bg-background border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-md"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold font-heading gradient-text mb-1">
                {stat.number}
              </p>
              <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStats;
