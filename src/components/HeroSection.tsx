import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import ryseHeroBg from "@/assets/ryse-hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ryseHeroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ryse-dark/90 via-ryse-dark/80 to-ryse-dark" />
      
      {/* Floating Particles */}
      <div className="particle-dot w-3 h-3 top-20 left-[10%] animate-pulse-orange" />
      <div className="particle-dot w-2 h-2 top-40 right-[15%] animate-pulse-orange" style={{ animationDelay: '1s' }} />
      <div className="particle-dot w-4 h-4 bottom-40 left-[20%] animate-pulse-orange" style={{ animationDelay: '2s' }} />
      <div className="particle-dot w-2 h-2 top-1/3 right-[25%] animate-pulse-orange" style={{ animationDelay: '0.5s' }} />

      {/* Curve Divider */}
      <div className="curve-divider">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="shape-fill" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
        </svg>
      </div>

      <div className="container-custom relative z-10 pt-32 pb-40">
        <div className="max-w-5xl">
          {/* Welcome Badge */}
          <div className="animate-fade-up mb-6">
            <span className="text-white/80 text-base md:text-lg font-medium">
              Welcome To <span className="text-ryse-orange font-bold">GrowthForge</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] text-white mb-8 animate-fade-up animation-delay-100">
            We Grow Your Revenue With{" "}
            <span className="gradient-text">Results-Driven</span> Growth Service.
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-10 animate-fade-up animation-delay-200">
            We help brands grow using Generative Engine Optimization, powerful content, 
            high-impact media, and proven growth strategies — all under one roof.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up animation-delay-300">
            <Button size="lg">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="dark" size="lg">
              <Play className="mr-2 h-5 w-5" />
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
