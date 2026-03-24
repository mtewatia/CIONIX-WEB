import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";

const MediaFloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-[#1a1a30]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 flex items-center gap-4 shadow-2xl shadow-purple-900/30">
        <span className="text-white/70 text-sm hidden sm:block">🔥 Limited Q2 spots available</span>
        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg" asChild>
          <Link to="/media/contact">
            Get Free Audit <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
        <button onClick={() => setIsDismissed(true)} className="text-white/30 hover:text-white/60 transition-colors">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default MediaFloatingCTA;
