import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Sparkles } from "lucide-react";

const MediaHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a1a]">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[200px]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container-custom relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 text-sm text-white/70 mb-8 hover:bg-white/10 transition-colors">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span>AI-Powered Media Production Agency</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading text-white leading-[1.05] mb-8">
            Build Media That{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
              Drives Revenue
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto">
            We help creators and brands scale YouTube channels, content systems, and digital media using AI, automation, and high-performance production.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 text-base shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] transition-all" asChild>
              <Link to="/media/contact">
                Start Your Channel <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 backdrop-blur-sm px-8 py-6 text-base" asChild>
              <Link to="/media/contact">
                <Play className="mr-2 h-5 w-5" /> Get Free Channel Audit
              </Link>
            </Button>
          </div>

          {/* Trust metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "500+", label: "Channels Managed" },
              { value: "1B+", label: "Views Generated" },
              { value: "50M+", label: "Subscribers Gained" },
              { value: "98%", label: "Client Retention" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">{stat.value}</p>
                  <p className="text-xs text-white/40 mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaHero;
