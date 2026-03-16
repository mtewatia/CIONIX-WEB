import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    subtitle: "Real Estate & IT Services",
    headline: "One Vision. Multiple Sectors.",
    highlight: "Limitless",
    headlineEnd: " Growth.",
    description:
      "From Real Estate & IT Services to Video Production and Healthcare — CIONIX delivers industry-leading solutions across sectors that shape the future.",
  },
  {
    image: heroSlide2,
    subtitle: "Video Production & Entertainment",
    headline: "Creative Stories.",
    highlight: "Powerful",
    headlineEnd: " Impact.",
    description:
      "Content production, YouTube management, and brand storytelling — our media division brings your vision to life with cinematic quality.",
  },
  {
    image: heroSlide3,
    subtitle: "Healthcare & Medical Billing",
    headline: "Precision Care.",
    highlight: "Revenue",
    headlineEnd: " Optimized.",
    description:
      "End-to-end medical billing for USA physicians, healthcare IT integration, and HIPAA-compliant digital solutions for modern practices.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Slide Backgrounds */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-ryse-dark/90 via-ryse-dark/80 to-ryse-dark" />

      {/* Floating Particles */}
      <div className="particle-dot w-3 h-3 top-20 left-[10%] animate-pulse-orange" />
      <div className="particle-dot w-2 h-2 top-40 right-[15%] animate-pulse-orange" style={{ animationDelay: "1s" }} />
      <div className="particle-dot w-4 h-4 bottom-40 left-[20%] animate-pulse-orange" style={{ animationDelay: "2s" }} />

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-background opacity-25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            className="fill-background opacity-50"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-background"
          />
        </svg>
      </div>

      {/* Slide Content */}
      <div className="container-custom relative z-10 pt-32 pb-40">
        <div className="max-w-5xl">
          <div className="animate-fade-up mb-6" key={`badge-${current}`}>
            <span className="text-white/80 text-base md:text-lg font-medium">
              {slides[current].subtitle} — <span className="text-ryse-orange font-bold">Nexorah Global</span>
            </span>
          </div>

          <h1
            key={`headline-${current}`}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] text-white mb-8 animate-fade-up animation-delay-100"
          >
            {slides[current].headline}{" "}
            <span className="gradient-text">{slides[current].highlight}</span>
            {slides[current].headlineEnd}
          </h1>

          <p
            key={`desc-${current}`}
            className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-10 animate-fade-up animation-delay-200"
          >
            {slides[current].description}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up animation-delay-300">
            <Button size="lg">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="dark" size="lg">
              <Play className="mr-2 h-5 w-5" />
              Explore Our Sectors
            </Button>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-44 right-4 lg:right-0 flex items-center gap-4 z-30">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-ryse-orange hover:border-ryse-orange hover:text-white transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-ryse-orange" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-ryse-orange hover:border-ryse-orange hover:text-white transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
