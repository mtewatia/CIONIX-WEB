import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogById } from "@/data/blogPosts";

const sectorConfig: Record<string, { name: string; color: string; navLinks: { name: string; href: string }[]; contactHref: string; homePath: string; footerDesc: string; email: string; phone: string; location: string }> = {
  technologies: {
    name: "Technologies",
    color: "from-primary to-orange-400",
    navLinks: [
      { name: "Home", href: "/technologies" },
      { name: "Services", href: "/technologies/services" },
      { name: "Blog", href: "/technologies/blog" },
    ],
    contactHref: "/technologies/services",
    homePath: "/technologies",
    footerDesc: "CIONIX Technologies delivers cutting-edge technology solutions.",
    email: "tech@cionix.com",
    phone: "+1 (234) 567-890",
    location: "San Francisco, CA",
  },
  media: {
    name: "Media",
    color: "from-purple-500 to-pink-500",
    navLinks: [
      { name: "Home", href: "/media" },
      { name: "Services", href: "/media/services" },
      { name: "Blog", href: "/media/blog" },
      { name: "Contact", href: "/media/contact" },
    ],
    contactHref: "/media/contact",
    homePath: "/media",
    footerDesc: "CIONIX Media delivers end-to-end media production services.",
    email: "media@cionix.com",
    phone: "+1 (555) 234-5678",
    location: "Dubai, UAE",
  },
  medline: {
    name: "Medline",
    color: "from-emerald-500 to-teal-500",
    navLinks: [
      { name: "Home", href: "/medline" },
      { name: "Services", href: "/medline/services" },
      { name: "Blog", href: "/medline/blog" },
      { name: "Contact", href: "/medline/contact" },
    ],
    contactHref: "/medline/contact",
    homePath: "/medline",
    footerDesc: "CIONIX Medline provides specialized healthcare revenue solutions.",
    email: "medline@cionix.com",
    phone: "+1 (555) 345-6789",
    location: "Dubai, UAE",
  },
  realty: {
    name: "Realty",
    color: "from-blue-500 to-indigo-600",
    navLinks: [
      { name: "Home", href: "/realty" },
      { name: "Services", href: "/realty/services" },
      { name: "Blog", href: "/realty/blog" },
      { name: "Contact", href: "/realty/contact" },
    ],
    contactHref: "/realty/contact",
    homePath: "/realty",
    footerDesc: "CIONIX Realty offers expert real estate advisory services.",
    email: "realty@cionix.com",
    phone: "+1 (555) 456-7890",
    location: "Dubai, UAE",
  },
};

const SectorBlogDetail = () => {
  const { blogId } = useParams();
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const sectorKey = pathParts[1]; // technologies, media, medline, realty
  const config = sectorConfig[sectorKey];
  const post = getBlogById(blogId || "");

  const isMainSite = !config;
  const backPath = isMainSite ? "/blog" : `/${sectorKey}/blog`;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        {isMainSite ? <Header /> : (
          <SectorHeader sectorName={config.name} sectorColor={config.color} navLinks={config.navLinks} contactHref={config.contactHref} homePath={config.homePath} />
        )}
        <div className="container-custom section-padding text-center pt-32">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild><Link to={backPath}>Back to Blog</Link></Button>
        </div>
        {isMainSite ? <Footer /> : (
          <SectorFooter sectorName={config.name} description={config.footerDesc} serviceLinks={[]} quickLinks={config.navLinks.map(l => ({ name: l.name, href: l.href }))} email={config.email} phone={config.phone} location={config.location} />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {isMainSite ? <Header /> : (
        <SectorHeader sectorName={config.name} sectorColor={config.color} navLinks={config.navLinks} contactHref={config.contactHref} homePath={config.homePath} />
      )}

      <div className="relative h-[50vh] min-h-[400px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
      </div>

      <article className="container-custom -mt-32 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-2xl p-8 shadow-xl mb-8">
            <Link to={backPath} className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <span className="text-primary font-semibold">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4">{post.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t">
              <div className="flex items-center gap-3">
                <img src={post.authorImage} alt={post.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Share:</span>
                <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"><Twitter className="h-4 w-4" /></button>
                <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"><Linkedin className="h-4 w-4" /></button>
                <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"><Facebook className="h-4 w-4" /></button>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-16 prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic prose-strong:text-foreground" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="card-ryse p-8 text-center mb-16">
            <h3 className="text-2xl font-bold font-heading mb-4">Interested in Learning More?</h3>
            <p className="text-muted-foreground mb-6">Let's discuss how we can help you with your goals.</p>
            <Button size="lg" asChild>
              <Link to={isMainSite ? "/contact" : config.contactHref}>Get in Touch</Link>
            </Button>
          </div>
        </div>
      </article>

      {isMainSite ? <Footer /> : (
        <SectorFooter sectorName={config.name} description={config.footerDesc} serviceLinks={[]} quickLinks={config.navLinks.map(l => ({ name: l.name, href: l.href }))} email={config.email} phone={config.phone} location={config.location} />
      )}
    </div>
  );
};

export default SectorBlogDetail;
