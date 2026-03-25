import { Users, Briefcase, Layers, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "200+",
    label: "Clients Worldwide",
  },
  {
    icon: Briefcase,
    number: "500+",
    label: "Projects Delivered",
  },
  {
    icon: Layers,
    number: "4",
    label: "Specialized Companies",
  },
  {
    icon: TrendingUp,
    number: "10+",
    label: "Years Combined Legacy",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-ryse-orange to-ryse-orange-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold font-heading text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
