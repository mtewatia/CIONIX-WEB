import { Youtube, User, GraduationCap, ShoppingCart, Blocks } from "lucide-react";

const audiences = [
  { icon: Youtube, title: "YouTubers & Creators", description: "Scale your channel with AI-powered production and proven growth frameworks." },
  { icon: User, title: "Personal Brands", description: "Build authority and thought leadership through high-quality video and podcast content." },
  { icon: GraduationCap, title: "Coaches & Consultants", description: "Convert expertise into content that attracts clients and builds community." },
  { icon: ShoppingCart, title: "E-Commerce Brands", description: "Drive product awareness and sales through strategic video marketing campaigns." },
  { icon: Blocks, title: "Web3 & Tech Startups", description: "Explain complex products and build community through engaging media content." },
];

const MediaTargetAudience = () => {
  return (
    <section className="py-24 bg-[#0d0d20] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">Who We Serve</p>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
            Built For{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ambitious Brands
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {audiences.map((audience, i) => (
            <div key={i} className="group bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 text-center hover:bg-white/[0.06] hover:border-purple-500/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <audience.icon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-base font-bold font-heading text-white mb-2">{audience.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaTargetAudience;
