import { Zap, Layers, BarChart3 } from "lucide-react";

const MediaWhatWeDo = () => {
  return (
    <section className="py-24 bg-[#0d0d20] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
            We Don't Just Create Content —{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              We Build Media Machines
            </span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Most agencies make videos. We engineer scalable content systems powered by AI, data, and proven frameworks that compound growth month after month — turning your media into a revenue-generating asset.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "AI-Powered Production",
              description: "We use AI tools for research, scripting, optimization, and distribution — cutting production time by 60% while improving quality.",
            },
            {
              icon: Layers,
              title: "Scalable Content Systems",
              description: "Our frameworks let you produce 10x more content without 10x the budget. Systems that scale from 4 videos/month to 40+.",
            },
            {
              icon: BarChart3,
              title: "Data-Driven Growth",
              description: "Every piece of content is optimized using real-time analytics, A/B testing, and audience insights for maximum reach and engagement.",
            },
          ].map((item, i) => (
            <div key={i} className="group bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-purple-500/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">{item.title}</h3>
              <p className="text-white/40 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaWhatWeDo;
