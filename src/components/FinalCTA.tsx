import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-ryse-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ryse-dark via-ryse-dark-light/50 to-ryse-dark" />
      
      <div className="absolute top-20 left-[10%] w-4 h-4 rounded-full bg-ryse-orange/30 animate-pulse" />
      <div className="absolute bottom-20 right-[15%] w-3 h-3 rounded-full bg-ryse-orange-light/40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-[10%] w-5 h-5 rounded-full bg-ryse-orange/20 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-ryse-orange to-ryse-orange-light flex items-center justify-center shadow-2xl shadow-ryse-orange/40 floating">
            <Sparkles className="h-10 w-10 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading mb-6 text-white leading-tight">
            Ready to Work With{" "}
            <span className="gradient-text">CIONIX?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Whether it's real estate, technology, media, or healthcare — let's discuss 
            how we can drive results for your business. Book a free consultation today.
          </p>

          <Button size="xl">
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <p className="text-sm text-white/50 mt-8">
            No commitment required • 30-minute strategy session • 100% free
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
