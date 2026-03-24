import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

const TechHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#07080f]">
      {/* Gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[150px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-primary/8 blur-[100px]" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10 pt-32 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-8 animate-fade-up">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-white/70 text-sm font-medium tracking-wide">AI-Powered Digital Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.08] text-white mb-8 animate-fade-up animation-delay-100">
            Build, Scale & Dominate with{" "}
            <span className="bg-gradient-to-r from-purple-400 via-primary to-ryse-orange-light bg-clip-text text-transparent">
              AI-Driven Digital Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-up animation-delay-200">
            We help startups, enterprises, and Web3 brands grow faster with high-performance web apps, mobile solutions, AI automation, and Generative Engine Optimization (GEO).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-primary hover:from-purple-500 hover:to-primary/90 text-white border-0 rounded-full px-8 py-6 text-base shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transition-all duration-300 hover:-translate-y-0.5" asChild>
              <Link to="/technologies/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/15 text-white/80 hover:bg-white/5 hover:text-white rounded-full px-8 py-6 text-base backdrop-blur-sm transition-all duration-300" asChild>
              <Link to="/technologies/contact">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Strategy Call
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07080f] to-transparent" />
    </section>
  );
};

export default TechHero;
