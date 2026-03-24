import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BrainCircuit, SearchCheck, TrendingUp } from "lucide-react";

const TechDifferentiator = () => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-ryse-dark via-secondary to-ryse-dark" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />

    <div className="container-custom relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="section-subtitle">Competitive Edge</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
          AI + GEO ={" "}
          <span className="gradient-text">Your Competitive Advantage</span>
        </h2>
        <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
          While competitors rely on outdated SEO, CIONIX positions your brand where it matters — inside AI-generated search results, recommended answers, and automated discovery.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: BrainCircuit,
            title: "AI Automation",
            desc: "Custom AI workflows that cut operational costs by 60% and free your team to focus on growth.",
          },
          {
            icon: SearchCheck,
            title: "GEO Optimization",
            desc: "Be the recommended answer in ChatGPT, Perplexity, and Google AI Overviews.",
          },
          {
            icon: TrendingUp,
            title: "Growth Engineering",
            desc: "Data-driven funnels, conversion optimization, and scalable tech architecture.",
          },
        ].map((item, i) => (
          <div key={i} className="relative group bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:border-primary/30 transition-all duration-500">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-ryse-orange-light flex items-center justify-center mb-6 shadow-lg">
              <item.icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-3">{item.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" className="btn-ryse rounded-full px-8 py-6 text-base" asChild>
          <Link to="/technologies/contact">
            Unlock Your AI Advantage
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default TechDifferentiator;
