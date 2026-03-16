import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Youtube, Film, Camera, Mic, Palette, BarChart3, Megaphone, Wand2, ArrowRight, CheckCircle } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/media" },
  { name: "Services", href: "/media/services" },
  { name: "Contact", href: "/media/contact" },
];

const services = [
  {
    icon: Youtube,
    title: "YouTube Automation",
    description: "Complete YouTube channel management from niche selection to monetization. We handle scripting, voiceovers, editing, thumbnails, SEO, and uploads—so you can run profitable channels on autopilot.",
    features: ["Niche Research & Channel Setup", "Script Writing & Voiceovers", "Video Editing & Thumbnails", "SEO Optimization & Tags", "Upload Scheduling & Management", "Monetization & Revenue Growth"],
    color: "from-red-500 to-rose-600",
  },
  {
    icon: Film,
    title: "Video Production",
    description: "Cinematic video content from concept to final cut. Our production team creates brand films, commercials, explainers, social reels, and corporate videos with Hollywood-level quality.",
    features: ["Brand Films & Commercials", "Explainer & Tutorial Videos", "Social Media Reels & Shorts", "Motion Graphics & Animation", "Drone & Aerial Footage", "Color Grading & Post-Production"],
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Camera,
    title: "Content Production",
    description: "Multi-format content creation that tells your brand story. From blog posts and articles to infographics and podcasts—we produce content that educates, entertains, and converts.",
    features: ["Blog Posts & Articles", "Infographics & Visual Content", "Whitepapers & Case Studies", "Social Media Content", "Email Newsletters", "Brand Storytelling"],
    color: "from-pink-500 to-fuchsia-600",
  },
  {
    icon: Mic,
    title: "Podcast Production",
    description: "Full-service podcast creation and management. We handle everything from concept development and guest booking to recording, editing, distribution, and audience growth.",
    features: ["Concept & Format Development", "Recording & Sound Engineering", "Professional Editing & Mixing", "Distribution & Syndication", "Show Notes & Transcription", "Audience Growth Strategy"],
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Eye-catching visual design for all your media needs. Thumbnails, channel art, social media graphics, brand kits, and marketing collateral that stand out in crowded feeds.",
    features: ["YouTube Thumbnails & Banners", "Social Media Graphics", "Brand Identity & Logo Design", "Marketing Collateral", "Presentation Design", "Ad Creatives & Banners"],
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: BarChart3,
    title: "Analytics & Growth",
    description: "Data-driven media strategy and performance optimization. We analyze your content performance, audience behavior, and market trends to continuously improve your media ROI.",
    features: ["Channel Analytics & Reporting", "Audience Insights & Segmentation", "Content Performance Analysis", "Competitor Benchmarking", "A/B Testing & Optimization", "Monthly Growth Reports"],
    color: "from-blue-500 to-indigo-600",
  },
];

const MediaServices = () => {
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-violet-900 to-fuchsia-900">
        <div className="container-custom text-center">
          <p className="text-pink-400 font-semibold text-sm uppercase tracking-wider mb-4">Our Services</p>
          <h1 className="text-5xl lg:text-6xl font-bold font-heading text-white mb-6">
            Media Services That <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Drive Results</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            From YouTube automation to full-scale video production, we offer comprehensive media solutions tailored to your brand's unique needs.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-background">
        <div className="container-custom space-y-20">
          {services.map((service, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">{service.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{service.description}</p>
                <Button asChild>
                  <Link to="/media/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className={`bg-muted/50 rounded-2xl p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h4 className="font-heading font-bold text-lg mb-5 text-foreground">What's Included</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-purple-900 via-violet-900 to-fuchsia-900 text-white text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-heading mb-6">Ready to Elevate Your Media Presence?</h2>
          <p className="text-white/70 text-lg mb-8">Get a free consultation and discover how CIONIX Media can transform your digital content strategy.</p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90" asChild>
            <Link to="/media/contact">Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <SectorFooter
        sectorName="Media"
        description="CIONIX Media delivers end-to-end media production, YouTube automation, and content creation services."
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

export default MediaServices;
