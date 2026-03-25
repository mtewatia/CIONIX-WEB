import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, Search, BarChart3, Cpu, Cloud, Code, Palette, Mail, Share2, ShoppingCart, Database, Shield, Layers, Workflow } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/technologies" },
  {
    name: "Services",
    href: "/technologies/services",
    children: [
      { name: "Web Development", href: "/technologies/services/web-development" },
      { name: "Mobile App Development", href: "/technologies/services/mobile-app-development" },
      { name: "AI & Automation", href: "/technologies/services/ai-automation" },
      { name: "GEO Optimization", href: "/technologies/services/geo-optimization" },
      { name: "Digital Marketing", href: "/technologies/services/digital-marketing" },
      { name: "Cloud & DevOps", href: "/technologies/services/cloud-devops" },
    ],
  },
  { name: "Blog", href: "/technologies/blog" },
];

const allServices = [
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Custom-built web applications using React, Next.js, Angular, and Vue.js. We create responsive, performant, and scalable solutions tailored to your business needs.",
    features: ["Progressive Web Apps (PWAs)", "SaaS Product Development", "E-commerce Platforms", "Enterprise Portals", "API Development & Integration"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android using Flutter, React Native, and Swift/Kotlin for seamless user experiences.",
    features: ["iOS & Android Native Apps", "Cross-Platform Development", "App Store Optimization", "In-App Purchases & Payments", "Push Notifications & Analytics"],
  },
  {
    icon: Search,
    title: "GEO (Generative Engine Optimization)",
    description: "Position your brand in AI-generated search results across ChatGPT, Google AI Overviews, Perplexity, and other generative platforms.",
    features: ["AI Search Visibility Audits", "Content Optimization for AI", "Entity & Knowledge Graph", "Structured Data Implementation", "AI Citation Building"],
  },
  {
    icon: BarChart3,
    title: "Digital Marketing & SEO",
    description: "Data-driven marketing strategies combining SEO, PPC, content marketing, and analytics to drive traffic, leads, and revenue growth.",
    features: ["Search Engine Optimization", "Google & Meta Ads Management", "Content Marketing Strategy", "Conversion Rate Optimization", "Analytics & Reporting"],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Custom AI solutions including chatbots, predictive analytics, natural language processing, and computer vision for intelligent business automation.",
    features: ["Custom AI Model Development", "Chatbot & Virtual Assistants", "Predictive Analytics", "Natural Language Processing", "Computer Vision Solutions"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Enterprise cloud architecture, migration strategies, CI/CD pipelines, and managed infrastructure on AWS, Azure, and Google Cloud.",
    features: ["Cloud Migration & Architecture", "CI/CD Pipeline Setup", "Kubernetes & Docker", "Infrastructure as Code", "24/7 Monitoring & Support"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design that combines aesthetics with functionality. We create interfaces that are intuitive, accessible, and conversion-optimized.",
    features: ["User Research & Testing", "Wireframing & Prototyping", "Design System Creation", "Responsive Design", "Accessibility Compliance"],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Strategic email campaigns with automation workflows, segmentation, and personalization to nurture leads and maximize customer lifetime value.",
    features: ["Automation Workflow Design", "Template Design & Copywriting", "List Segmentation", "A/B Testing & Optimization", "Deliverability Management"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build your brand presence across platforms with strategic content, community management, and paid social advertising campaigns.",
    features: ["Platform Strategy", "Content Creation & Scheduling", "Community Management", "Influencer Partnerships", "Paid Social Advertising"],
  },
];

const TechnologiesServices = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SectorHeader
        sectorName="Technologies"
        sectorColor="from-primary to-orange-400"
        navLinks={navLinks}
        contactHref="/technologies/services"
        homePath="/technologies"
      />

      {/* Hero */}
      <section className="hero-section pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Our Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Full-Spectrum <span className="gradient-text">Technology Services</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            From idea to deployment and beyond — we provide everything you need to build, launch, and scale your digital products.
          </p>
        </div>
        <div className="curve-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z" className="shape-fill" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {allServices.map((service, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-ryse-orange-light flex items-center justify-center mb-6 shadow-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <Button asChild>
                    <a href="mailto:tech@cionix.com">Discuss This Service <ArrowRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                </div>
                <div className={`bg-muted/50 rounded-2xl p-8 ${i % 2 !== 0 ? "lg:col-start-1" : ""}`}>
                  <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-muted-foreground mb-5">Key Capabilities</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Every business is unique. Let's build technology that fits yours perfectly.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:tech@cionix.com">Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></a>
          </Button>
        </div>
      </section>

      <SectorFooter
        sectorName="Technologies"
        description="CIONIX Technologies delivers cutting-edge web, mobile, AI, and digital marketing solutions for businesses worldwide."
        serviceLinks={[
          { name: "Web Development", href: "/technologies/services/web-development" },
          { name: "Mobile Apps", href: "/technologies/services/mobile-app-development" },
          { name: "GEO Optimization", href: "/technologies/services/geo-optimization" },
          { name: "Digital Marketing", href: "/technologies/services/digital-marketing" },
          { name: "AI Solutions", href: "/technologies/services/ai-automation" },
          { name: "Cloud & DevOps", href: "/technologies/services/cloud-devops" },
        ]}
        quickLinks={[
          { name: "Home", href: "/technologies" },
          { name: "Services", href: "/technologies/services" },
          { name: "Main Site", href: "/" },
        ]}
        email="tech@cionix.com"
        phone="+1 (234) 567-890"
        location="San Francisco, CA"
      />
    </div>
  );
};

export default TechnologiesServices;
