import { Bot, Cpu, Workflow, BarChart3 } from "lucide-react";

const MediaDifferentiator = () => {
  return (
    <section className="py-24 bg-[#0d0d20] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Edge</p>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
              AI + Content Systems ={" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Scalable Media Empire
              </span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              While other agencies rely on manual workflows, we've built proprietary AI-powered systems that handle research, scripting, optimization, and distribution — enabling us to produce 10x the output at a fraction of the cost, without sacrificing quality.
            </p>
            <div className="space-y-6">
              {[
                { icon: Bot, title: "AI-First Production Pipeline", desc: "Our proprietary AI tools handle 60% of the production workflow, from research to script generation to SEO optimization." },
                { icon: Workflow, title: "Automated Content Systems", desc: "Systematized workflows that scale from 4 to 40+ videos per month without proportional cost increases." },
                { icon: Cpu, title: "Machine Learning Optimization", desc: "Our ML models analyze millions of data points to predict what content will perform before it's even published." },
                { icon: BarChart3, title: "Real-Time Performance Analytics", desc: "Live dashboards tracking every metric that matters — from CTR and watch time to revenue per view." },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white mb-1">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl blur-3xl" />
            <div className="relative bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-3xl p-10">
              <div className="space-y-6">
                {[
                  { label: "Content Output", value: "10x", sub: "More than traditional agencies" },
                  { label: "Production Cost", value: "-60%", sub: "Lower per-video cost" },
                  { label: "Time to Publish", value: "48hrs", sub: "Average turnaround" },
                  { label: "SEO Score", value: "95+", sub: "Average optimization score" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-white/[0.06] last:border-0">
                    <div>
                      <p className="text-white/60 text-sm">{stat.label}</p>
                      <p className="text-white/30 text-xs mt-0.5">{stat.sub}</p>
                    </div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaDifferentiator;
