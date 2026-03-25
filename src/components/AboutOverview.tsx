import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutOverview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <p className="section-subtitle">The CIONIX Story</p>
            <h2 className="section-title text-foreground">
              Separate Experts. <span className="gradient-text">One Powerful Brand.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              CIONIX isn't a single company trying to do it all — it's a collective of specialized firms, 
              each with decades of expertise in their respective industries. Our technology leaders, media 
              producers, healthcare specialists, and real estate advisors have been operating independently 
              for years. Now, they've come together under one trusted name to deliver cross-sector 
              excellence that was never possible before.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Industry Veterans:</span> Each division is led by seasoned professionals with 10+ years of domain experience — not generalists, but true specialists.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Unified Advantage:</span> When you work with one division, you gain access to the expertise of all four — creating synergies that independent firms simply can't offer.
                </p>
              </div>
            </div>
            <Button size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="CIONIX team collaboration"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            {/* World map overlay card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 shadow-lg border border-border max-w-[220px]">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg"
                alt="Global presence"
                className="w-full h-auto opacity-40 mb-3"
              />
              <p className="text-xs font-semibold text-foreground font-heading">Operating Across</p>
              <p className="text-2xl font-bold gradient-text font-heading">10+ Countries</p>
            </div>
            {/* Accent decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
