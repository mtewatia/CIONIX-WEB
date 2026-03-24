import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import TechUrgencyBanner from "@/components/technologies/TechUrgencyBanner";
import TechHero from "@/components/technologies/TechHero";
import TechStats from "@/components/technologies/TechStats";
import TechServices from "@/components/technologies/TechServices";
import TechMidCTA from "@/components/technologies/TechMidCTA";
import TechTestimonials from "@/components/technologies/TechTestimonials";
import TechWhyChoose from "@/components/technologies/TechWhyChoose";
import TechDifferentiator from "@/components/technologies/TechDifferentiator";
import TechStack from "@/components/technologies/TechStack";
import TechIndustries from "@/components/technologies/TechIndustries";
import TechBlog from "@/components/technologies/TechBlog";
import TechFinalCTA from "@/components/technologies/TechFinalCTA";
import TechFloatingCTA from "@/components/technologies/TechFloatingCTA";

const navLinks = [
  { name: "Home", href: "/technologies" },
  { name: "Services", href: "/technologies/services" },
  { name: "Blog", href: "/technologies/blog" },
  { name: "Contact", href: "/technologies/contact" },
];

const TechnologiesHome = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <TechUrgencyBanner />
      <SectorHeader
        sectorName="Technologies"
        sectorColor="from-primary to-ryse-orange-light"
        navLinks={navLinks}
        contactHref="/technologies/contact"
        homePath="/technologies"
      />

      <TechHero />
      <TechStats />
      <TechServices />
      <TechMidCTA />
      <TechTestimonials />
      <TechWhyChoose />
      <TechDifferentiator />
      <TechStack />
      <TechIndustries />
      <TechBlog />
      <TechFinalCTA />
      <TechFloatingCTA />

      <SectorFooter
        sectorName="Technologies"
        description="CIONIX Technologies delivers AI-driven web, mobile, and digital solutions for businesses worldwide."
        serviceLinks={[
          { name: "Web Development", href: "/technologies/services" },
          { name: "Mobile Apps", href: "/technologies/services" },
          { name: "GEO Optimization", href: "/technologies/services" },
          { name: "AI & Automation", href: "/technologies/services" },
          { name: "Cloud & DevOps", href: "/technologies/services" },
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
