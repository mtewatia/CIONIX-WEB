import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";

const TechFinalCTA = () => (
  <section className="relative py-24 md:py-32 overflow-hidden bg-foreground">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/8 rounded-full blur-[180px]" />

    <div className="container-custom relative z-10 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-heading text-primary-foreground mb-6 leading-tight">
        Ready to Scale Your Business{" "}
        <span className="gradient-text">with AI?</span>
      </h2>
      <p className="text-primary-foreground/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        Let's discuss your project and explore how CIONIX Technologies can help you dominate your market with intelligent, scalable solutions.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" className="btn-ryse rounded-full px-8 py-6 text-base" asChild>
          <a href="mailto:tech@cionix.com">
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
        <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 py-6 text-base backdrop-blur-sm transition-all duration-300" asChild>
          <a href="mailto:tech@cionix.com">
            <MessageSquare className="mr-2 h-5 w-5" />
            Talk to Our Experts
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default TechFinalCTA;
