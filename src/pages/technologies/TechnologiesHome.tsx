import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Globe, Smartphone, Search, BarChart3, Zap, Shield, Users, CheckCircle2, Monitor, Cpu, Database, Cloud } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/technologies" },
  { name: "Services", href: "/technologies/services" },
  { name: "Contact", href: "/technologies/contact" },
];

const services = [
  { icon: Globe, title: "Web Development", desc: "Custom websites & web apps built with modern frameworks for speed, scalability, and seamless UX." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native & cross-platform apps for iOS and Android that engage users and drive growth." },
  { icon: Search, title: "GEO Optimization", desc: "Generative Engine Optimization to rank in AI-powered search results and stay ahead." },
  { icon: BarChart3, title: "Digital Marketing", desc: "Data-driven campaigns across SEO, PPC, social media, and content for maximum ROI." },
  { icon: Cpu, title: "AI & ML Solutions", desc: "Intelligent automation, chatbots, predictive analytics, and custom AI models." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Cloud architecture, migration, DevOps, and managed services for enterprise scale." },
];

const stats = [
  { number: "200+", label: "Projects Delivered" },
  { number: "50+", label: "Enterprise Clients" },
  { number: "98%", label: "Client Retention" },
  { number: "15+", label: "Countries Served" },
];

const techStack = ["React", "Node.js", "Python", "AWS", "Flutter", "TypeScript", "Next.js", "PostgreSQL", "Docker", "Kubernetes", "TensorFlow", "GraphQL"];

const TechnologiesHome = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SectorHeader
        sectorName="Technologies"
        sectorColor="from-primary to-orange-400"
        navLinks={navLinks}
        contactHref="/technologies/contact"
        homePath="/technologies"
      />

      {/* Hero */}
      <section className="hero-section pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-white/80 text-sm font-medium">Full-Spectrum Technology Partner</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Engineering <span className="gradient-text">Digital Excellence</span> for Tomorrow
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed">
                From custom web and mobile applications to AI-driven solutions and generative engine optimization — we build technology that transforms businesses and creates lasting impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/technologies/contact">Start Your Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/technologies/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: Code, label: "Development", color: "from-primary to-orange-400" },
                { icon: Monitor, label: "UI/UX Design", color: "from-purple-500 to-pink-500" },
                { icon: Database, label: "Data & AI", color: "from-emerald-500 to-teal-500" },
                { icon: Shield, label: "Security", color: "from-blue-500 to-indigo-600" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="curve-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z" className="shape-fill" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="section-subtitle">What We Do</p>
            <h2 className="section-title text-foreground">
              Technology Solutions That <span className="gradient-text">Drive Growth</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              We deliver end-to-end technology services — from strategy to deployment — helping businesses innovate faster and scale smarter.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="card-ryse p-8 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-ryse-orange-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/technologies/services">View All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle">Why CIONIX Technologies</p>
              <h2 className="section-title text-foreground">
                Beyond Development. <span className="gradient-text">We Deliver Transformation.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We don't just write code — we architect digital ecosystems that help businesses outperform, outscale, and outlast the competition.
              </p>
              <div className="space-y-5">
                {[
                  "Agile methodology with transparent sprint cycles",
                  "Dedicated project managers and tech leads",
                  "Post-launch support and maintenance included",
                  "Enterprise-grade security and compliance",
                  "Scalable architecture designed for growth",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted/50 rounded-3xl p-8">
              <h3 className="text-lg font-heading font-bold mb-6 text-foreground">Our Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground border border-border hover:border-primary hover:text-primary transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-primary/15 rounded-full blur-[100px]" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Something <span className="gradient-text">Extraordinary</span>?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how CIONIX Technologies can help you achieve your digital goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/technologies/contact">Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="dark" asChild>
              <Link to="/technologies/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <SectorFooter
        sectorName="Technologies"
        description="CIONIX Technologies delivers cutting-edge web, mobile, AI, and digital marketing solutions for businesses worldwide."
        serviceLinks={[
          { name: "Web Development", href: "/technologies/services" },
          { name: "Mobile Apps", href: "/technologies/services" },
          { name: "GEO Optimization", href: "/technologies/services" },
          { name: "Digital Marketing", href: "/technologies/services" },
          { name: "AI Solutions", href: "/technologies/services" },
        ]}
        quickLinks={[
          { name: "Home", href: "/technologies" },
          { name: "Services", href: "/technologies/services" },
          { name: "Contact", href: "/technologies/contact" },
          { name: "Main Site", href: "/" },
        ]}
        email="tech@cionix.com"
        phone="+1 (234) 567-890"
        location="San Francisco, CA"
      />
    </div>
  );
};

export default TechnologiesHome;
