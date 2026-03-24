import { Globe, Smartphone, Bot, Search, BarChart3, Cloud, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Globe, title: "Web Development", desc: "High-performance websites & scalable web apps built for speed, SEO, and conversions.", id: "web-development" },
  { icon: Smartphone, title: "Mobile App Development", desc: "iOS & Android apps designed for engagement and growth.", id: "mobile-app-development" },
  { icon: Bot, title: "AI & Automation", desc: "Custom AI chatbots, workflow automation, and intelligent systems.", id: "ai-automation" },
  { icon: Search, title: "GEO Optimization", desc: "Rank in AI search engines like ChatGPT & Google SGE.", id: "geo-optimization" },
  { icon: BarChart3, title: "Digital Marketing", desc: "SEO, paid ads, and content strategies that generate leads.", id: "digital-marketing" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Secure, scalable infrastructure and deployment pipelines.", id: "cloud-devops" },
];

const TechServices = () => (
  <section className="relative py-24 md:py-32 bg-background">
    <div className="container-custom relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="section-subtitle">What We Build</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
          Technology That Drives{" "}
          <span className="gradient-text">Real Business Growth</span>
        </h2>
        <p className="text-muted-foreground text-lg">End-to-end solutions engineered for scale, speed, and market dominance.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <Link
            key={i}
            to={`/technologies/services/${service.id}`}
            className="group relative bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-lg overflow-hidden block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-ryse-orange-light flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default TechServices;
