import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import SectorBlogSection from "@/components/sectors/SectorBlogSection";
import MediaHero from "@/components/media/MediaHero";
import MediaWhatWeDo from "@/components/media/MediaWhatWeDo";
import MediaServicesGrid from "@/components/media/MediaServicesGrid";
import MediaProcess from "@/components/media/MediaProcess";
import MediaResults from "@/components/media/MediaResults";
import MediaDifferentiator from "@/components/media/MediaDifferentiator";
import MediaWhyUs from "@/components/media/MediaWhyUs";
import MediaTargetAudience from "@/components/media/MediaTargetAudience";
import MediaFinalCTA from "@/components/media/MediaFinalCTA";
import MediaFloatingCTA from "@/components/media/MediaFloatingCTA";
import { getBlogsBySector } from "@/data/blogPosts";

const navLinks = [
  { name: "Home", href: "/media" },
  {
    name: "Services",
    href: "/media/services",
    children: [
      { name: "YouTube Automation", href: "/media/services" },
      { name: "Video Production", href: "/media/services" },
      { name: "Content Production", href: "/media/services" },
      { name: "Podcast Production", href: "/media/services" },
    ],
  },
  { name: "Blog", href: "/media/blog" },
  { name: "Contact", href: "/media/contact" },
];

const MediaHome = () => {
  return (
    <div className="min-h-screen bg-[#080818]">
      <SectorHeader
        sectorName="Media"
        sectorColor="from-purple-500 to-pink-500"
        navLinks={navLinks}
        contactHref="/media/contact"
        homePath="/media"
        headerBg="bg-[#0a0a1a]"
      />

      <MediaHero />
      <MediaWhatWeDo />
      <MediaServicesGrid />
      <MediaProcess />
      <MediaResults />
      <MediaDifferentiator />
      <MediaWhyUs />
      <MediaTargetAudience />

      <SectorBlogSection
        posts={getBlogsBySector("media")}
        sectorPath="/media"
        accentColor="from-purple-500 to-pink-500"
        accentText="text-purple-400"
      />

      <MediaFinalCTA />
      <MediaFloatingCTA />

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
