import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    category: "GEO + Content Strategy",
    title: "Tech Startup Brand Visibility",
    challenge: "Struggling to rank in AI-powered search results and gain visibility in a competitive market.",
    solution: "Implemented comprehensive GEO strategy with AI-optimized content architecture.",
    result: "4x increase in AI search visibility, 280% growth in organic traffic.",
    gradient: "from-primary via-orange-500 to-amber-500",
  },
  {
    category: "Video + Social Growth",
    title: "E-commerce Brand Transformation",
    challenge: "Low engagement rates and minimal social media presence despite quality products.",
    solution: "Created viral-first video content strategy with platform-specific optimization.",
    result: "500K+ organic views, 12x increase in social engagement, 180% sales lift.",
    gradient: "from-accent via-purple-500 to-pink-500",
  },
  {
    category: "Full-Stack Growth",
    title: "B2B SaaS Market Expansion",
    challenge: "Limited brand awareness and inconsistent lead generation in new markets.",
    solution: "Integrated approach combining podcasts, events, and targeted content marketing.",
    result: "85% increase in qualified leads, successful entry into 3 new markets.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-foreground">
              Real Results, <span className="gradient-text">Real Impact</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              See how we've helped brands like yours achieve measurable growth 
              and market-leading results.
            </p>
          </div>
          <Button variant="outline" size="lg" className="self-start md:self-auto">
            View All Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="card-white group cursor-pointer !p-0 overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-48 relative bg-gradient-to-br ${study.gradient}`}>
                <div className="absolute inset-0 bg-secondary/20" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm text-xs font-semibold text-foreground">
                    {study.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold font-heading mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {study.title}
                </h3>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground font-medium">Challenge: </span>
                    <span className="text-foreground/80">{study.challenge}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground font-medium">Solution: </span>
                    <span className="text-foreground/80">{study.solution}</span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <span className="text-primary font-bold text-base">{study.result}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
