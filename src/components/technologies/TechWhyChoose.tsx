import { Zap, Users, Bot, Layers, Headphones, ShieldCheck } from "lucide-react";

const points = [
  { icon: Zap, text: "Agile execution with transparency" },
  { icon: Users, text: "Dedicated project managers" },
  { icon: Bot, text: "AI-first approach" },
  { icon: Layers, text: "Scalable architecture" },
  { icon: Headphones, text: "Ongoing support" },
  { icon: ShieldCheck, text: "Enterprise-grade security" },
];

const TechWhyChoose = () => (
  <section className="relative py-24 md:py-32 bg-muted/50">
    <div className="container-custom relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-subtitle">Why CIONIX</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
            Not Just Development —{" "}
            <span className="gradient-text">We Build Growth Engines</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            We don't just write code — we architect digital ecosystems that help businesses outperform, outscale, and outlast the competition.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((point, i) => (
              <div key={i} className="flex items-center gap-3 bg-background border border-border rounded-xl px-5 py-4 hover:border-primary/20 transition-all duration-300 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <p className="text-foreground/70 text-sm font-medium">{point.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-8 rounded-full border border-primary/15 animate-[spin_20s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/60" />
            </div>
            <div className="absolute inset-16 rounded-full border border-ryse-orange-light/15 animate-[spin_15s_linear_infinite_reverse]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-ryse-orange-light/60" />
            </div>
            <div className="absolute inset-24 rounded-full border border-accent/15 animate-[spin_10s_linear_infinite]">
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/60" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-ryse-orange-light flex items-center justify-center shadow-[0_0_60px_rgba(251,81,6,0.2)]">
                <Bot className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechWhyChoose;
