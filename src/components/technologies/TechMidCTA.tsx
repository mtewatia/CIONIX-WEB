import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const TechMidCTA = () => (
  <section className="relative py-16 bg-gradient-to-r from-primary to-ryse-orange-light overflow-hidden">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

    <div className="container-custom relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-primary-foreground mb-3">
            Get a Free Strategy Call — No Strings Attached
          </h3>
          <div className="flex flex-wrap gap-4 text-primary-foreground/80 text-sm">
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4" /> 30-min deep dive</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4" /> Custom roadmap</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4" /> No commitment</span>
          </div>
        </div>
        <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 rounded-full px-8 py-6 text-base font-bold shadow-xl shrink-0" asChild>
          <a href="mailto:tech@cionix.com">
            Claim Your Free Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default TechMidCTA;
