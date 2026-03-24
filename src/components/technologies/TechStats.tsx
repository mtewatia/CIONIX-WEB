import { Rocket, Globe, Heart, MapPin } from "lucide-react";

const stats = [
  { icon: Rocket, number: "200+", label: "Projects Delivered" },
  { icon: Globe, number: "50+", label: "Global Clients" },
  { icon: Heart, number: "98%", label: "Client Retention" },
  { icon: MapPin, number: "15+", label: "Countries Served" },
];

const TechStats = () => (
  <section className="relative py-20 bg-[#07080f]">
    <div className="container-custom">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 text-center hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-primary/20 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-purple-400" />
              </div>
              <p className="text-3xl md:text-4xl font-bold font-heading bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-1">
                {stat.number}
              </p>
              <p className="text-white/40 text-sm font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStats;
