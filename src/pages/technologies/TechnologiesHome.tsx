import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import TechHero from "@/components/technologies/TechHero";
import TechStats from "@/components/technologies/TechStats";
import TechServices from "@/components/technologies/TechServices";
import TechWhyChoose from "@/components/technologies/TechWhyChoose";
import TechDifferentiator from "@/components/technologies/TechDifferentiator";
import TechStack from "@/components/technologies/TechStack";
import TechIndustries from "@/components/technologies/TechIndustries";
import TechBlog from "@/components/technologies/TechBlog";
import TechFinalCTA from "@/components/technologies/TechFinalCTA";

const navLinks = [
  { name: "Home", href: "/technologies" },
  { name: "Services", href: "/technologies/services" },
  { name: "Blog", href: "/technologies/blog" },
  { name: "Contact", href: "/technologies/contact" },
];

const TechnologiesHome = () => {
  return (
    <div className="min-h-screen bg-[#07080f] overflow-x-hidden">
      <SectorHeader
        sectorName="Technologies"
        sectorColor="from-purple-500 to-primary"
        navLinks={navLinks}
        contactHref="/technologies/contact"
        homePath="/technologies"
      />

      <TechHero />
      <TechStats />
      <TechServices />
      <TechWhyChoose />
      <TechDifferentiator />
      <TechStack />
      <TechIndustries />
      <TechBlog />
      <TechFinalCTA />

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
