import { useState, useEffect } from "react";
import { Clock, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const TechUrgencyBanner = () => {
  const [spotsLeft, setSpotsLeft] = useState(3);

  return (
    <div className="bg-foreground text-primary-foreground py-3 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center gap-3 text-sm font-medium">
          <Flame className="h-4 w-4 text-primary animate-pulse" />
          <span>
            Only <span className="text-primary font-bold">{spotsLeft} spots</span> left for Q2 2026 projects
          </span>
          <span className="hidden sm:inline text-primary-foreground/40">•</span>
          <a
            href="mailto:tech@cionix.com"
            className="hidden sm:inline underline underline-offset-2 hover:text-primary transition-colors"
          >
            Reserve yours now →
          </a>
        </div>
      </div>
    </div>
  );
};

export default TechUrgencyBanner;
