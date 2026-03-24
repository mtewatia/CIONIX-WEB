import { CheckCircle, Users, Film, Youtube, Award, Shield, BarChart3 } from "lucide-react";

const reasons = [
  { icon: Users, text: "Dedicated team of 50+ media professionals" },
  { icon: Film, text: "10,000+ videos produced and counting" },
  { icon: Youtube, text: "500+ channels managed across 30+ niches" },
  { icon: Award, text: "Proven monetization systems with $10M+ generated" },
  { icon: Shield, text: "End-to-end execution — we handle everything" },
  { icon: BarChart3, text: "Transparent analytics and monthly performance reports" },
];

const MediaWhyUs = () => {
  return (
    <section className="py-24 bg-[#080818] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">Why CIONIX Media</p>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
              Your Partner in{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Media Excellence
              </span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              We don't just produce content — we build media empires. Our data-driven approach combined with creative expertise ensures every piece of content works harder for your brand.
            </p>
            <div className="space-y-5">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <reason.icon className="h-5 w-5 text-purple-400" />
                  </div>
                  <span className="text-white/60 group-hover:text-white/80 transition-colors">{reason.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "300%", label: "Average Channel Growth", color: "from-purple-600/20 to-violet-600/20" },
              { value: "10K+", label: "Videos Produced", color: "from-pink-600/20 to-rose-600/20" },
              { value: "500+", label: "Channels Managed", color: "from-red-600/20 to-orange-600/20" },
              { value: "$10M+", label: "Revenue Generated", color: "from-amber-600/20 to-yellow-600/20" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 text-center hover:border-purple-500/20 transition-all duration-500 ${i % 2 === 1 ? "mt-8" : ""}`}
              >
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaWhyUs;
