import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    subtitle: "Decades of Expertise, United",
    headline: "Industry Leaders.",
    highlight: "One Trusted",
    headlineEnd: " Name.",
    description:
      "Four specialized companies — each with decades of proven expertise in their industry — now united under CIONIX. The same leaders. The same excellence. One powerful brand you can trust.",
  },
  {
    image: heroSlide2,
    subtitle: "From Separate Experts to One Force",
    headline: "Built by Specialists.",
    highlight: "Backed by",
    headlineEnd: " Legacy.",
    description:
      "Our technology, media, healthcare, and real estate divisions aren't new ventures — they're established teams with years of track records, now operating together under CIONIX for unmatched synergy.",
  },
  {
    image: heroSlide3,
    subtitle: "Trust Earned Over Years",
    headline: "Proven Track Records.",
    highlight: "Unified",
    headlineEnd: " Strength.",
    description:
      "Each CIONIX division is led by industry veterans who've delivered results for years. Together, we bring cross-sector intelligence that no single-industry firm can match.",
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


      {/* Slide Content */}
      <div className="container-custom relative z-10 pt-32 pb-40">
        <div className="max-w-5xl">
          <div className="animate-fade-up mb-6" key={`badge-${current}`}>
            <span className="text-white/80 text-base md:text-lg font-medium">
              {slides[current].subtitle} — <span className="text-ryse-orange font-bold">CIONIX</span>
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
