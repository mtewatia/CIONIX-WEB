import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import geoOptimization from "@/assets/geo-optimization.png";
import uiUxDesign from "@/assets/ui-ux-design.png";
import contentProduction from "@/assets/content-production.png";
import videoProduction from "@/assets/video-production.png";
import socialMediaMarketing from "@/assets/social-media-marketing.png";
import youtubeAutomation from "@/assets/youtube-automation.png";
import emailMarketing from "@/assets/email-marketing.png";
import webAppDevelopment from "@/assets/web-app-development.png";

const services = [
  {
    image: geoOptimization,
    title: "GEO (Generative Engine Optimization)",
    description: "Optimize your content for AI-powered search engines and generative platforms to stay ahead in the evolving digital landscape.",
  },
  {
    image: uiUxDesign,
    title: "UI & UX Design",
    description: "Create intuitive, beautiful interfaces that delight users and drive engagement through human-centered design principles.",
  },
  {
    image: contentProduction,
    title: "Content Production",
    description: "Craft compelling stories and content that resonates with your audience and establishes your brand authority.",
  },
  {
    image: videoProduction,
    title: "Video Production",
    description: "Produce high-quality video content that captivates viewers and communicates your brand message effectively.",
  },
  {
    image: socialMediaMarketing,
    title: "Social Media Marketing",
    description: "Build your brand presence across social platforms with strategic campaigns and community management.",
  },
  {
    image: youtubeAutomation,
    title: "YouTube Automation",
    description: "Streamline your YouTube channel growth with automated workflows, SEO optimization, and content scheduling.",
  },
  {
    image: emailMarketing,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email campaigns and automation workflows.",
  },
  {
    image: webAppDevelopment,
    title: "Web & App Development",
    description: "Build powerful, scalable web and mobile applications that deliver exceptional user experiences.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-subtitle">What We Offer</p>
          <h2 className="section-title text-foreground">
            Provide Best Service With Our <span className="gradient-text">Tools</span>
          </h2>
          <Button variant="outline" size="lg" className="mt-6">
            Discover More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-ryse p-8 text-center group"
            >
              {/* Image */}
              <div className="mb-6 relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-48 h-48 mx-auto object-contain floating"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-heading mb-4 text-foreground group-hover:text-ryse-orange transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
