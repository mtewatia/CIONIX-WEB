import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";

const TechFinalCTA = () => (
  <section className="relative py-24 md:py-32 overflow-hidden bg-[#07080f]">
    {/* Gradient backdrop */}
    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-600/10 rounded-full blur-[180px]" />

    <div className="container-custom relative z-10 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
        Ready to Scale Your Business{" "}
        <span className="bg-gradient-to-r from-purple-400 via-primary to-blue-400 bg-clip-text text-transparent">
          with AI?
        </span>
      </h2>
      <p className="text-white/40 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        Let's discuss your project and explore how CIONIX Technologies can help you dominate your market with intelligent, scalable solutions.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-primary hover:from-purple-500 hover:to-primary/90 text-white border-0 rounded-full px-8 py-6 text-base shadow-[0_0_40px_rgba(139,92,246,0.35)] hover:shadow-[0_0_60px_rgba(139,92,246,0.5)] transition-all duration-300 hover:-translate-y-0.5" asChild>
          <Link to="/technologies/contact">
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="border-white/15 text-white/80 hover:bg-white/5 hover:text-white rounded-full px-8 py-6 text-base backdrop-blur-sm transition-all duration-300" asChild>
          <Link to="/technologies/contact">
            <MessageSquare className="mr-2 h-5 w-5" />
            Talk to Our Experts
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default TechFinalCTA;
