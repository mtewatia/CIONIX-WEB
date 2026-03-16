import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import SectorBlogSection from "@/components/sectors/SectorBlogSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Film, Youtube, Camera, Mic, TrendingUp, Users, Eye, Award, ArrowRight, CheckCircle } from "lucide-react";
import { getBlogsBySector } from "@/data/blogPosts";

const navLinks = [
  { name: "Home", href: "/media" },
  { name: "Services", href: "/media/services" },
  { name: "Blog", href: "/media/blog" },
  { name: "Contact", href: "/media/contact" },
];

const stats = [
  { icon: Youtube, value: "500+", label: "Channels Managed" },
  { icon: Eye, value: "1B+", label: "Views Generated" },
  { icon: Users, value: "50M+", label: "Subscribers Gained" },
  { icon: Award, value: "98%", label: "Client Retention" },
];

const services = [
  {
    icon: Youtube,
    title: "YouTube Automation",
    description: "End-to-end YouTube channel management—from niche research and scripting to video production, SEO optimization, and monetization. Grow faceless or branded channels effortlessly.",
    color: "from-red-500 to-rose-600",
  },
  {
    icon: Film,
    title: "Video Production",
    description: "Professional video content creation including brand films, explainer videos, product demos, social media reels, and full post-production editing.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Camera,
    title: "Content Production",
    description: "High-quality content across formats—blogs, articles, infographics, podcasts, and multimedia campaigns that tell your brand story.",
    color: "from-pink-500 to-fuchsia-600",
  },
  {
    icon: Mic,
    title: "Podcast Production",
    description: "Full-service podcast creation from concept development and recording to editing, distribution, and audience growth strategies.",
    color: "from-amber-500 to-orange-600",
  },
];

const processSteps = [
  { step: "01", title: "Discovery & Strategy", description: "We analyze your niche, audience, and competitors to craft a tailored content strategy." },
  { step: "02", title: "Content Creation", description: "Our team produces high-quality videos, scripts, thumbnails, and supporting content." },
  { step: "03", title: "Optimization & Upload", description: "Every piece is SEO-optimized, scheduled, and published for maximum reach." },
  { step: "04", title: "Growth & Monetization", description: "We track analytics, refine strategy, and scale your channel for revenue growth." },
];

const MediaHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <SectorHeader
        sectorName="Media"
        sectorColor="from-purple-500 to-pink-500"
        navLinks={navLinks}
        contactHref="/media/contact"
        homePath="/media"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-violet-900 to-fuchsia-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-[150px]" />
        </div>
        <div className="container-custom relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/80 mb-6">
                <Play className="h-4 w-4 text-pink-400" /> #1 Media Production & YouTube Automation Agency
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6">
                Amplify Your <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Brand's Voice</span> Through Media
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
                From YouTube automation to cinematic video production, we create media that captivates audiences, builds communities, and drives revenue growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" asChild>
                  <Link to="/media/contact">Start Your Channel <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link to="/media/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center">
                  <stat.icon className="h-8 w-8 text-pink-400 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-subtitle">What We Offer</p>
            <h2 className="section-title text-foreground">
              Full-Spectrum <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Media Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Everything you need to dominate digital media—from content creation to channel growth and monetization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="card-ryse p-8 group relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <Link to="/media/services" className="inline-flex items-center text-primary font-semibold text-sm hover:gap-1 transition-all">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-subtitle">Our Process</p>
            <h2 className="section-title text-foreground">
              How We <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Scale Your Channel</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-5 text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold font-heading mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-purple-900 via-violet-900 to-fuchsia-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-pink-400 font-semibold text-sm uppercase tracking-wider mb-4">Why CIONIX Media</p>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
                Your Partner in Digital Media Excellence
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We don't just produce content—we build media empires. Our data-driven approach combined with creative expertise ensures every piece of content works harder for your brand.
              </p>
              <div className="space-y-4">
                {[
                  "Dedicated team of 50+ media professionals",
                  "AI-powered content optimization and analytics",
                  "Proven monetization strategies for YouTube",
                  "End-to-end production from concept to distribution",
                  "Transparent reporting and performance tracking",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-400 shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <TrendingUp className="h-8 w-8 text-pink-400 mb-3" />
                <p className="text-2xl font-bold">300%</p>
                <p className="text-sm text-white/60">Average Channel Growth</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mt-8">
                <Film className="h-8 w-8 text-purple-400 mb-3" />
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm text-white/60">Videos Produced</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <Youtube className="h-8 w-8 text-red-400 mb-3" />
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-white/60">Channels Managed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mt-8">
                <Award className="h-8 w-8 text-amber-400 mb-3" />
                <p className="text-2xl font-bold">$10M+</p>
                <p className="text-sm text-white/60">Revenue Generated</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-heading mb-6 text-foreground">
            Ready to Dominate Digital Media?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let's build your media presence together. Get a free channel audit and growth strategy today.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white" asChild>
            <Link to="/media/contact">Get Your Free Audit <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <SectorFooter
        sectorName="Media"
        description="CIONIX Media delivers end-to-end media production, YouTube automation, and content creation services that amplify your brand's digital presence."
        serviceLinks={[
          { name: "YouTube Automation", href: "/media/services" },
          { name: "Video Production", href: "/media/services" },
          { name: "Content Production", href: "/media/services" },
          { name: "Podcast Production", href: "/media/services" },
        ]}
        quickLinks={[
          { name: "Home", href: "/media" },
          { name: "Services", href: "/media/services" },
          { name: "Contact", href: "/media/contact" },
          { name: "Main Site", href: "/" },
        ]}
        email="media@cionix.com"
        phone="+1 (555) 234-5678"
        location="Dubai, UAE"
      />
    </div>
  );
};

export default MediaHome;
