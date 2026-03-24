import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "CIONIX rebuilt our entire platform in 8 weeks. Revenue jumped 140% in the first quarter after launch.",
    name: "Sarah Chen",
    role: "CEO, NovaPay",
    industry: "Fintech",
    metric: "140% revenue increase",
  },
  {
    quote: "Their GEO strategy got us featured in ChatGPT responses. Organic leads tripled without extra ad spend.",
    name: "Marcus Webb",
    role: "Head of Growth, ChainVault",
    industry: "Web3",
    metric: "3x organic leads",
  },
  {
    quote: "The AI automation they built saved us 30+ hours a week. Best investment we've made this year.",
    name: "Priya Sharma",
    role: "COO, ScaleStack",
    industry: "SaaS",
    metric: "30+ hrs/week saved",
  },
];

const TechTestimonials = () => (
  <section className="relative py-24 md:py-32 bg-muted/50">
    <div className="container-custom">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="section-subtitle">Client Results</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
          Real Results from{" "}
          <span className="gradient-text">Real Clients</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Don't take our word for it — see what our partners have to say.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="group relative bg-background border border-border rounded-2xl p-8 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-lg"
          >
            <div className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
              {t.metric}
            </div>

            <Quote className="h-8 w-8 text-primary/20 mb-4" />

            <p className="text-foreground/80 leading-relaxed mb-8 text-sm">
              "{t.quote}"
            </p>

            <div className="flex items-center gap-3 pt-6 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-ryse-orange-light flex items-center justify-center text-primary-foreground font-bold text-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>

            <div className="flex gap-1 mt-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-6 bg-background border border-border rounded-full px-8 py-4 shadow-sm">
          <div className="text-center">
            <p className="text-2xl font-bold font-heading gradient-text">4.9/5</p>
            <p className="text-muted-foreground text-xs">Client Rating</p>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-bold font-heading gradient-text">98%</p>
            <p className="text-muted-foreground text-xs">Retention</p>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-bold font-heading gradient-text">200+</p>
            <p className="text-muted-foreground text-xs">Projects</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechTestimonials;
