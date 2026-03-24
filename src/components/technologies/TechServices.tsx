import { Globe, Smartphone, Bot, Search, BarChart3, Cloud, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "High-performance websites & scalable web apps built for speed, SEO, and conversions." },
  { icon: Smartphone, title: "Mobile App Development", desc: "iOS & Android apps designed for engagement and growth." },
  { icon: Bot, title: "AI & Automation", desc: "Custom AI chatbots, workflow automation, and intelligent systems." },
  { icon: Search, title: "GEO Optimization", desc: "Rank in AI search engines like ChatGPT & Google SGE." },
  { icon: BarChart3, title: "Digital Marketing", desc: "SEO, paid ads, and content strategies that generate leads." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Secure, scalable infrastructure and deployment pipelines." },
];

const TechServices = () => (
  <section className="relative py-24 md:py-32 bg-secondary">
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

    <div className="container-custom relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="section-subtitle">What We Build</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
          Technology That Drives{" "}
          <span className="gradient-text">Real Business Growth</span>
        </h2>
        <p className="text-white/40 text-lg">End-to-end solutions engineered for scale, speed, and market dominance.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-ryse-orange-light flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="h-4 w-4 text-white/20 group-hover:text-primary transition-colors" />
              </h3>
              <p className="text-white/40 leading-relaxed text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechServices;
