import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const MediaFinalCTA = () => {
  return (
    <section className="py-24 bg-[#080818] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-600/15 to-pink-600/15 rounded-full blur-[150px]" />
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-6">Let's Go</p>
          <h2 className="text-4xl lg:text-6xl font-bold font-heading text-white mb-6">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Media Empire?
            </span>
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            Get a free channel audit and a custom growth strategy tailored to your niche. No commitment, no BS — just actionable insights to 10x your media presence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-6 text-base shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] transition-all" asChild>
              <Link to="/media/contact">
                Get Free Channel Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-base" asChild>
              <Link to="/media/contact">
                <Play className="mr-2 h-5 w-5" /> Talk to Our Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaFinalCTA;
