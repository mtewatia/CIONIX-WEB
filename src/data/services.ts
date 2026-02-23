import geoOptimization from "@/assets/geo-optimization.png";
import uiUxDesign from "@/assets/ui-ux-design.png";
import contentProduction from "@/assets/content-production.png";
import videoProduction from "@/assets/video-production.png";
import socialMediaMarketing from "@/assets/social-media-marketing.png";
import youtubeAutomation from "@/assets/youtube-automation.png";
import emailMarketing from "@/assets/email-marketing.png";
import webAppDevelopment from "@/assets/web-app-development.png";

export const services = [
  {
    id: "geo-optimization",
    image: geoOptimization,
    title: "GEO (Generative Engine Optimization)",
    shortTitle: "GEO Optimization",
    description: "Optimize your content for AI-powered search engines and generative platforms to stay ahead in the evolving digital landscape.",
    fullDescription: "In the age of AI-driven search, traditional SEO isn't enough. Our GEO (Generative Engine Optimization) service positions your brand to be prominently featured in AI-generated responses from ChatGPT, Google's AI Overviews, Perplexity, and other generative platforms.",
    features: [
      "AI search visibility audits",
      "Content optimization for generative platforms",
      "Entity and knowledge graph optimization",
      "Structured data implementation",
      "AI citation building strategies",
      "Performance tracking across AI platforms"
    ],
    benefits: [
      "Appear in AI-generated search results",
      "Future-proof your digital presence",
      "Capture high-intent traffic from AI platforms",
      "Build authority in the AI search ecosystem"
    ]
  },
  {
    id: "ui-ux-design",
    image: uiUxDesign,
    title: "UI & UX Design",
    shortTitle: "UI/UX Design",
    description: "Create intuitive, beautiful interfaces that delight users and drive engagement through human-centered design principles.",
    fullDescription: "Great design is invisible—it just works. Our UI/UX design team creates digital experiences that feel intuitive, look stunning, and drive measurable business results through deep user research and iterative design processes.",
    features: [
      "User research and persona development",
      "Information architecture design",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Design system creation"
    ],
    benefits: [
      "Increase user engagement and retention",
      "Reduce development costs with clear specifications",
      "Improve conversion rates",
      "Create consistent brand experiences"
    ]
  },
  {
    id: "content-production",
    image: contentProduction,
    title: "Content Production",
    shortTitle: "Content Production",
    description: "Craft compelling stories and content that resonates with your audience and establishes your brand authority.",
    fullDescription: "Content is the foundation of modern marketing. Our content production team combines strategic thinking with creative excellence to produce content that educates, entertains, and converts—across every format and channel.",
    features: [
      "Content strategy development",
      "Blog posts and articles",
      "Whitepapers and ebooks",
      "Case studies and success stories",
      "Infographics and visual content",
      "Content calendar management"
    ],
    benefits: [
      "Establish thought leadership",
      "Drive organic traffic growth",
      "Generate qualified leads",
      "Build trust with your audience"
    ]
  },
  {
    id: "video-production",
    image: videoProduction,
    title: "Video Production",
    shortTitle: "Video Production",
    description: "Produce high-quality video content that captivates viewers and communicates your brand message effectively.",
    fullDescription: "Video is the most engaging content format. Our video production team creates everything from short-form social content to full-scale brand films, ensuring your message reaches audiences in the most impactful way possible.",
    features: [
      "Brand films and documentaries",
      "Product demos and tutorials",
      "Social media video content",
      "Animation and motion graphics",
      "Live streaming production",
      "Video editing and post-production"
    ],
    benefits: [
      "Increase engagement by up to 80%",
      "Improve message retention",
      "Boost social media performance",
      "Create shareable brand assets"
    ]
  },
  {
    id: "social-media-marketing",
    image: socialMediaMarketing,
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    description: "Build your brand presence across social platforms with strategic campaigns and community management.",
    fullDescription: "Social media is where brands become communities. We develop comprehensive social strategies that build authentic connections, drive engagement, and turn followers into loyal customers through consistent, compelling content.",
    features: [
      "Platform strategy and optimization",
      "Content creation and scheduling",
      "Community management",
      "Influencer partnerships",
      "Paid social advertising",
      "Analytics and reporting"
    ],
    benefits: [
      "Build brand awareness",
      "Drive website traffic",
      "Generate leads and sales",
      "Create loyal brand advocates"
    ]
  },
  {
    id: "youtube-automation",
    image: youtubeAutomation,
    title: "YouTube Automation",
    shortTitle: "YouTube Automation",
    description: "Streamline your YouTube channel growth with automated workflows, SEO optimization, and content scheduling.",
    fullDescription: "YouTube is the world's second-largest search engine. Our YouTube automation services help you scale your video presence efficiently with AI-powered tools, optimized workflows, and data-driven strategies for sustainable channel growth.",
    features: [
      "Channel setup and optimization",
      "Video SEO and keyword research",
      "Thumbnail design and A/B testing",
      "Content scheduling automation",
      "Analytics and performance tracking",
      "Monetization strategy"
    ],
    benefits: [
      "Scale video production efficiently",
      "Improve video discoverability",
      "Grow subscribers consistently",
      "Maximize revenue potential"
    ]
  },
  {
    id: "email-marketing",
    image: emailMarketing,
    title: "Email Marketing",
    shortTitle: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email campaigns and automation workflows.",
    fullDescription: "Email remains the highest-ROI marketing channel. We design and execute email marketing programs that nurture relationships, drive conversions, and keep your brand top-of-mind through strategic automation and personalization.",
    features: [
      "Email strategy development",
      "Automation workflow design",
      "Template design and copywriting",
      "List segmentation and management",
      "A/B testing and optimization",
      "Deliverability management"
    ],
    benefits: [
      "Achieve 42x average ROI",
      "Nurture leads at scale",
      "Drive repeat purchases",
      "Build customer loyalty"
    ]
  },
  {
    id: "web-app-development",
    image: webAppDevelopment,
    title: "Web & App Development",
    shortTitle: "Web Development",
    description: "Build powerful, scalable web and mobile applications that deliver exceptional user experiences.",
    fullDescription: "Your digital product is often your first impression. We build fast, scalable, and beautiful web and mobile applications using modern technologies and best practices, ensuring your digital presence matches your ambition.",
    features: [
      "Custom web application development",
      "Mobile app development (iOS/Android)",
      "E-commerce solutions",
      "API development and integration",
      "Performance optimization",
      "Maintenance and support"
    ],
    benefits: [
      "Launch faster with agile development",
      "Scale seamlessly as you grow",
      "Reduce technical debt",
      "Deliver exceptional user experiences"
    ]
  }
];

export type Service = typeof services[0];
