import { Youtube, Film, Camera, Mic, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Youtube,
    title: "YouTube Automation",
    description: "End-to-end YouTube channel management — from niche research and scripting to video production, SEO optimization, and monetization. Grow faceless or branded channels on autopilot.",
    features: ["Niche Research & Strategy", "AI-Powered Scripting", "Professional Editing", "SEO & Thumbnail Optimization"],
    gradient: "from-red-500 to-rose-600",
    glow: "shadow-red-500/20",
  },
  {
    icon: Film,
    title: "Video Production",
    description: "Cinematic video content from concept to final cut. Brand films, explainers, product demos, social reels, and corporate videos with Hollywood-level production quality.",
    features: ["Brand Films & Commercials", "Explainer Videos", "Social Media Reels", "Motion Graphics & VFX"],
    gradient: "from-purple-500 to-violet-600",
    glow: "shadow-purple-500/20",
  },
  {
    icon: Camera,
    title: "Content Production",
    description: "Multi-format content that tells your brand story across every platform. Blogs, infographics, podcasts, and multimedia campaigns engineered for engagement.",
    features: ["Blog Posts & Articles", "Infographics & Visuals", "Social Media Content", "Brand Storytelling"],
    gradient: "from-pink-500 to-fuchsia-600",
    glow: "shadow-pink-500/20",
  },
  {
    icon: Mic,
    title: "Podcast Production",
    description: "Full-service podcast creation — from concept development and guest booking to recording, editing, distribution, and audience growth across all major platforms.",
    features: ["Recording & Engineering", "Professional Editing", "Distribution & Syndication", "Audience Growth Strategy"],
    gradient: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/20",
  },
];

const MediaServicesGrid = () => {
  return (
    <section className="py-24 bg-[#080818] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Services</p>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
            Full-Spectrum{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Media Solutions
            </span>
          </h2>
          <p className="text-white/50 text-lg">
            Everything you need to dominate digital media — from content creation to channel growth and monetization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-purple-500/20 transition-all duration-500 hover:shadow-2xl hover:${service.glow}`}
            >
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold font-heading text-white mb-3">{service.title}</h3>
              <p className="text-white/40 leading-relaxed mb-6">{service.description}</p>
              
              <div className="grid grid-cols-2 gap-2 mb-6">
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span className="text-sm text-white/50">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/media/services"
                className="inline-flex items-center text-purple-400 font-semibold text-sm hover:text-purple-300 transition-colors group/link"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaServicesGrid;
