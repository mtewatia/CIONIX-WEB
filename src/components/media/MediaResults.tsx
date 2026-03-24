import { TrendingUp, DollarSign, Flame, Users } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    metric: "300%",
    title: "Average Channel Growth",
    description: "Our clients see an average 300% increase in subscribers and views within the first 6 months of working with us.",
  },
  {
    icon: DollarSign,
    metric: "$10M+",
    title: "Revenue Generated",
    description: "We've helped our clients generate over $10 million in ad revenue, sponsorships, and brand deals combined.",
  },
  {
    icon: Flame,
    metric: "50+",
    title: "Viral Videos Created",
    description: "Our viral content frameworks have produced 50+ videos exceeding 10 million views each across client channels.",
  },
  {
    icon: Users,
    metric: "50M+",
    title: "Total Subscribers Gained",
    description: "Across all managed channels, we've helped clients accumulate over 50 million subscribers organically.",
  },
];

const MediaResults = () => {
  return (
    <section className="py-24 bg-[#080818] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[120px]" />
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">Proven Results</p>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
            Numbers That{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, i) => (
            <div key={i} className="group bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 text-center hover:bg-white/[0.06] hover:border-purple-500/20 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <result.icon className="h-7 w-7 text-purple-400" />
              </div>
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">{result.metric}</p>
              <h3 className="text-lg font-bold font-heading text-white mb-2">{result.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaResults;
