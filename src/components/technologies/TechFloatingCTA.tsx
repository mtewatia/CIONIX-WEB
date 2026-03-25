import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";

const TechFloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-fade-up">
      <div className="flex items-center gap-3 bg-foreground border border-primary-foreground/10 rounded-full pl-6 pr-2 py-2 shadow-2xl">
        <p className="text-primary-foreground text-sm font-medium hidden sm:block">
          Limited Q2 spots available
        </p>
        <Button size="sm" className="btn-ryse rounded-full px-5 py-2 text-sm" asChild>
          <a href="mailto:tech@cionix.com">
            Book Free Call
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </Button>
        <button
          onClick={() => setDismissed(true)}
          className="p-1.5 rounded-full text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default TechFloatingCTA;
