import { Search, Clapperboard, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Strategy & Research",
    description: "Deep-dive into your niche, audience demographics, competitor landscape, and content gaps to craft a data-backed media strategy that's built to win.",
  },
  {
    icon: Clapperboard,
    step: "02",
    title: "Content Production",
    description: "Our team of writers, editors, and designers create high-quality videos, scripts, thumbnails, and supporting content — every piece engineered for engagement.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Optimization & Distribution",
    description: "Every piece is SEO-optimized with strategic tags, descriptions, and scheduling. We distribute across platforms to maximize reach and algorithmic favor.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Growth & Monetization",
    description: "We track analytics, refine strategy, scale what works, and implement monetization frameworks — turning views into revenue streams.",
  },
];

const MediaProcess = () => {
  return (
    <section className="py-24 bg-[#0d0d20] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Process</p>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
            How We{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Scale Your Channel
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%+0.5rem)] w-[calc(100%-3rem)] h-[1px] bg-gradient-to-r from-purple-500/30 to-transparent z-0" />
              )}
              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-purple-500/20 transition-all duration-500 relative z-10 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <span className="text-4xl font-bold text-white/[0.06] font-heading">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaProcess;
