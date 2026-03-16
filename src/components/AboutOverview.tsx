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
            <p className="section-subtitle">About CIONIX</p>
            <h2 className="section-title text-foreground">
              One Enterprise. <span className="gradient-text">Four Sectors.</span> Infinite Possibilities.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              CIONIX Innovations Services LLC was founded with a singular vision — to build a multi-sector 
              powerhouse that delivers world-class solutions across Real Estate, IT Services, 
              Video Production & Entertainment, and Healthcare. Each division operates with 
              deep domain expertise, unified under one brand.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Our Vision:</span> To become a globally trusted enterprise that transforms industries through innovation, integrity, and impact.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Global Mindset:</span> Serving clients across the USA, Middle East, and beyond — with teams operating 24/7 to deliver results without borders.
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
                alt="Nexorah Global team collaboration"
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
