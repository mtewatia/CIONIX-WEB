import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BrainCircuit, SearchCheck, TrendingUp } from "lucide-react";

const TechDifferentiator = () => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    {/* Full gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-[#0f0a1a] to-[#07080f]" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[150px]" />

    <div className="container-custom relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-4">Competitive Edge</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
          AI + GEO ={" "}
          <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Your Competitive Advantage
          </span>
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
            gradient: "from-purple-600 to-purple-400",
          },
          {
            icon: SearchCheck,
            title: "GEO Optimization",
            desc: "Be the recommended answer in ChatGPT, Perplexity, and Google AI Overviews.",
            gradient: "from-primary to-ryse-orange-light",
          },
          {
            icon: TrendingUp,
            title: "Growth Engineering",
            desc: "Data-driven funnels, conversion optimization, and scalable tech architecture.",
            gradient: "from-blue-500 to-cyan-400",
          },
        ].map((item, i) => (
          <div key={i} className="relative group bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}>
              <item.icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-3">{item.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-primary hover:from-purple-500 hover:to-primary/90 text-white border-0 rounded-full px-8 py-6 text-base shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-300" asChild>
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
