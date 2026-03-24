import { Globe, Smartphone, Bot, Search, BarChart3, Cloud } from "lucide-react";

export interface TechServiceData {
  id: string;
  icon: any;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    headline: string;
    subheadline: string;
  };
  problems: {
    title: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
  };
  features: {
    title: string;
    icon: string;
    description: string;
  }[];
  process: {
    step: string;
    description: string;
  }[];
  industries: string[];
  results: {
    title: string;
    description: string;
  }[];
  differentiators: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const techServicesData: TechServiceData[] = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    shortTitle: "Web Dev",
    metaTitle: "Web Development Services | CIONIX Technologies",
    metaDescription: "High-performance, SEO-ready websites and custom web applications built with React, Next.js, and modern frameworks. Scale faster with CIONIX.",
    hero: {
      headline: "Websites That Don't Just Look Good — They Perform",
      subheadline: "We build high-performance, SEO-optimized web applications using React, Next.js, and modern architectures that convert visitors into customers and scale with your business.",
    },
    problems: {
      title: "Challenges Businesses Face",
      points: [
        "Slow-loading websites causing high bounce rates and lost revenue — every second of delay costs you 7% in conversions.",
        "Outdated tech stacks that can't handle growth, breaking under traffic spikes and leaving customers frustrated.",
        "Poor SEO architecture that keeps your brand invisible on search engines despite great content and offerings.",
        "Fragmented codebases making updates expensive, slow, and risky — every change feels like defusing a bomb.",
        "No mobile optimization in a world where 60%+ of traffic comes from smartphones and tablets.",
      ],
    },
    solution: {
      title: "How CIONIX Solves This",
      description: "We engineer web applications from the ground up with performance, scalability, and SEO baked into the architecture — not bolted on as an afterthought. Using React, Next.js, and server-side rendering, we deliver sub-second load times, perfect Lighthouse scores, and codebases that your team can actually maintain. Every project includes responsive design, accessibility compliance, and a deployment pipeline that lets you ship updates with confidence.",
    },
    features: [
      { title: "Sub-Second Load Times", icon: "⚡", description: "Server-side rendering, code splitting, and edge caching deliver blazing-fast experiences that keep users engaged." },
      { title: "SEO-First Architecture", icon: "🔍", description: "Semantic HTML, structured data, and optimized meta tags ensure search engines love your site as much as users do." },
      { title: "Scalable Infrastructure", icon: "📈", description: "From 100 to 10 million users — our architectures grow with your business without expensive rewrites." },
      { title: "Custom Web Applications", icon: "🛠️", description: "SaaS platforms, dashboards, portals, and marketplaces built exactly to your specifications." },
      { title: "Progressive Web Apps", icon: "📱", description: "App-like experiences in the browser with offline support, push notifications, and home screen installation." },
      { title: "API-First Development", icon: "🔗", description: "RESTful and GraphQL APIs that integrate seamlessly with your existing tools and third-party services." },
    ],
    process: [
      { step: "Discovery & Strategy", description: "We audit your current digital presence, define business goals, map user journeys, and create a technical roadmap aligned with your growth targets." },
      { step: "Design & Planning", description: "Wireframes, UI/UX design, and interactive prototypes — validated with real user feedback before a single line of code is written." },
      { step: "Development", description: "Agile sprints with weekly demos. React/Next.js frontend, robust backend APIs, and continuous integration from day one." },
      { step: "Testing & Deployment", description: "Automated testing, performance audits, security scanning, and zero-downtime deployment to production." },
      { step: "Ongoing Support", description: "Post-launch monitoring, performance optimization, feature updates, and dedicated technical support." },
    ],
    industries: ["SaaS Startups", "E-commerce", "Fintech", "Enterprise", "Web3 & Crypto", "Coaches & Creators"],
    results: [
      { title: "3x Faster Load Times", description: "Optimized architectures that dramatically reduce page load times and improve Core Web Vitals." },
      { title: "40% Higher Conversions", description: "Performance-driven design and UX optimization that turns more visitors into paying customers." },
      { title: "50% Lower Maintenance Cost", description: "Clean, modular codebases that are easier and cheaper to maintain and extend over time." },
      { title: "99.9% Uptime", description: "Enterprise-grade infrastructure and monitoring that keeps your application running around the clock." },
    ],
    differentiators: [
      "AI-first approach — we integrate intelligent features from chatbots to personalization engines",
      "GEO-optimized content architecture so your site ranks in AI search results, not just Google",
      "Scalable from MVP to enterprise without costly rewrites or migrations",
      "Long-term partnership mindset — we're invested in your success beyond launch day",
    ],
    faqs: [
      { question: "What technologies do you use for web development?", answer: "We primarily use React, Next.js, TypeScript, Node.js, and PostgreSQL. Our stack is chosen for performance, developer experience, and long-term maintainability. We also work with Python, GraphQL, and various cloud platforms depending on project needs." },
      { question: "How long does a typical web development project take?", answer: "A standard website takes 4-8 weeks. Complex web applications range from 8-16 weeks depending on features, integrations, and scope. We provide detailed timelines during the discovery phase." },
      { question: "Do you provide ongoing maintenance after launch?", answer: "Absolutely. We offer flexible maintenance plans that include security updates, performance monitoring, bug fixes, and feature enhancements. Most clients stay with us long-term." },
      { question: "Can you rebuild our existing website without losing SEO rankings?", answer: "Yes. We carefully plan migrations with proper redirects, preserve URL structures where possible, and implement enhanced SEO that typically improves rankings post-migration." },
      { question: "What's your pricing model for web development?", answer: "We offer both fixed-price projects and monthly retainers. Pricing depends on complexity, features, and timeline. Book a free consultation to get a detailed estimate for your specific project." },
    ],
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    metaTitle: "Mobile App Development | CIONIX Technologies",
    metaDescription: "Build high-performance iOS and Android apps with cross-platform and native development. Engage users and scale your mobile presence with CIONIX.",
    hero: {
      headline: "Mobile Apps That Users Love and Businesses Rely On",
      subheadline: "We design and develop iOS, Android, and cross-platform mobile applications that drive engagement, retention, and revenue — built for performance at scale.",
    },
    problems: {
      title: "Challenges Businesses Face",
      points: [
        "High development costs from maintaining separate iOS and Android codebases with duplicated effort.",
        "Poor app performance leading to negative reviews, low ratings, and users abandoning your app within days.",
        "Complex backend requirements that slow down development and create security vulnerabilities.",
        "Low user retention — 77% of users abandon apps within 3 days of installation without proper engagement strategies.",
        "Difficulty standing out in crowded app stores with millions of competing applications.",
      ],
    },
    solution: {
      title: "How CIONIX Solves This",
      description: "We build mobile applications using Flutter and React Native for cross-platform efficiency, or Swift/Kotlin for native performance — depending on what your product demands. Every app ships with a scalable cloud backend, real-time analytics, and engagement features like push notifications and in-app messaging. Our design-first approach ensures your app feels premium from the first tap.",
    },
    features: [
      { title: "Cross-Platform Excellence", icon: "📱", description: "One codebase for iOS and Android using Flutter or React Native — ship faster without sacrificing quality." },
      { title: "Native Performance", icon: "⚡", description: "60fps animations, instant transitions, and smooth interactions that feel indistinguishable from native apps." },
      { title: "Scalable Backend", icon: "☁️", description: "Cloud-native backends with real-time sync, offline support, and automatic scaling for millions of users." },
      { title: "Engagement Engine", icon: "🔔", description: "Push notifications, in-app messaging, and behavioral triggers that keep users coming back." },
      { title: "App Store Optimization", icon: "🚀", description: "Strategic ASO including keyword optimization, screenshot design, and review management for maximum visibility." },
      { title: "Analytics & Insights", icon: "📊", description: "Built-in analytics tracking user behavior, conversion funnels, and retention metrics for data-driven decisions." },
    ],
    process: [
      { step: "Discovery & Strategy", description: "Market research, competitor analysis, feature prioritization, and technical architecture planning aligned with your business model." },
      { step: "Design & Planning", description: "User flow mapping, wireframes, high-fidelity mockups, and interactive prototypes tested with real users before development begins." },
      { step: "Development", description: "Agile development with bi-weekly releases. Cross-platform or native builds with continuous integration and automated testing." },
      { step: "Testing & Deployment", description: "Device testing across 50+ screen sizes, performance profiling, security audits, and managed app store submissions." },
      { step: "Ongoing Support", description: "Crash monitoring, OS update compatibility, feature releases, and dedicated support to keep your app thriving." },
    ],
    industries: ["SaaS Startups", "E-commerce", "Fintech", "Enterprise", "Healthcare", "On-Demand Services"],
    results: [
      { title: "4.8+ Star Ratings", description: "Performance-optimized apps that earn and maintain top ratings on both app stores." },
      { title: "60% Cost Reduction", description: "Cross-platform development cuts costs while maintaining native-quality experiences." },
      { title: "3x User Retention", description: "Engagement strategies and smooth UX that keep users active and coming back." },
      { title: "50% Faster Time-to-Market", description: "Proven frameworks and agile processes that get your app in users' hands faster." },
    ],
    differentiators: [
      "AI-powered features like smart recommendations, voice interfaces, and predictive user experiences",
      "Cross-platform development that saves 40-60% compared to separate native builds",
      "Scalable cloud backends that grow from hundreds to millions of users seamlessly",
      "Post-launch growth partnership — we optimize retention, engagement, and monetization continuously",
    ],
    faqs: [
      { question: "Should I build a native or cross-platform app?", answer: "Cross-platform (Flutter/React Native) is ideal for most business apps — it saves 40-60% in costs. Native development is recommended for hardware-intensive apps, games, or when platform-specific features are critical. We'll advise the best approach during discovery." },
      { question: "How much does mobile app development cost?", answer: "Simple apps start around $15K-30K, mid-complexity apps $30K-75K, and complex enterprise apps $75K+. We provide detailed estimates after understanding your requirements in a free consultation." },
      { question: "Do you handle app store submission?", answer: "Yes. We manage the entire submission process for both Apple App Store and Google Play, including compliance with guidelines, metadata optimization, and handling any review rejections." },
      { question: "Can you integrate with our existing backend?", answer: "Absolutely. We regularly integrate with existing APIs, databases, and third-party services. If you need a new backend, we build that too with scalable cloud architecture." },
      { question: "How long does it take to build a mobile app?", answer: "An MVP typically takes 8-12 weeks. Full-featured apps range from 12-24 weeks. We use agile methodology with bi-weekly releases so you see progress continuously." },
    ],
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI & Automation",
    shortTitle: "AI & Automation",
    metaTitle: "AI & Automation Solutions | CIONIX Technologies",
    metaDescription: "Custom AI chatbots, workflow automation, and intelligent business systems. Reduce costs, boost efficiency, and scale operations with CIONIX AI solutions.",
    hero: {
      headline: "Automate the Repetitive. Amplify the Strategic.",
      subheadline: "We build custom AI solutions — from intelligent chatbots to end-to-end workflow automation — that eliminate manual bottlenecks, reduce costs by up to 60%, and free your team to focus on what matters.",
    },
    problems: {
      title: "Challenges Businesses Face",
      points: [
        "Manual, repetitive processes consuming hundreds of employee hours per month that could be automated.",
        "Customer support teams overwhelmed by volume, leading to slow response times and frustrated customers.",
        "Inability to extract actionable insights from growing data volumes sitting unused in spreadsheets and databases.",
        "High operational costs from labor-intensive workflows that don't scale with business growth.",
        "Competitors gaining an edge with AI-powered products while you're stuck with legacy processes.",
      ],
    },
    solution: {
      title: "How CIONIX Solves This",
      description: "We design and deploy AI systems tailored to your specific business workflows — not off-the-shelf tools with limited customization. Our solutions range from conversational AI that handles 80% of customer queries to intelligent automation pipelines that process data, generate reports, and trigger actions without human intervention. We integrate with your existing tools (Slack, HubSpot, Salesforce, custom APIs) so adoption is seamless.",
    },
    features: [
      { title: "Custom AI Chatbots", icon: "🤖", description: "Conversational AI trained on your business data that handles customer queries, qualifies leads, and books appointments 24/7." },
      { title: "Workflow Automation", icon: "⚙️", description: "End-to-end process automation — from data entry to complex multi-step workflows — eliminating manual bottlenecks." },
      { title: "Predictive Analytics", icon: "📊", description: "Machine learning models that forecast trends, identify risks, and surface opportunities from your business data." },
      { title: "Document Processing", icon: "📄", description: "AI-powered extraction and processing of invoices, contracts, and forms — turning unstructured data into structured insights." },
      { title: "Intelligent CRM Automation", icon: "💼", description: "Smart lead scoring, automated follow-ups, and personalized outreach sequences powered by AI." },
      { title: "Custom AI Integrations", icon: "🔗", description: "Connect AI capabilities to your existing stack — Slack, HubSpot, Salesforce, ERPs, and custom platforms." },
    ],
    process: [
      { step: "Discovery & Strategy", description: "We audit your workflows, identify automation opportunities, calculate ROI potential, and prioritize implementations by business impact." },
      { step: "Design & Planning", description: "Solution architecture, data pipeline design, AI model selection, and integration mapping with your existing tools." },
      { step: "Development", description: "Iterative development with weekly demos. Custom model training, workflow building, and thorough integration testing." },
      { step: "Testing & Deployment", description: "Rigorous testing with real data, edge case handling, failsafe mechanisms, and phased rollout to minimize disruption." },
      { step: "Ongoing Support", description: "Model retraining, performance monitoring, workflow optimization, and continuous improvement based on real-world usage data." },
    ],
    industries: ["SaaS Startups", "E-commerce", "Fintech", "Enterprise", "Healthcare", "Professional Services"],
    results: [
      { title: "60% Cost Reduction", description: "Automation eliminates manual labor costs and reduces human error across business operations." },
      { title: "80% Queries Automated", description: "AI chatbots handle the majority of customer interactions without human intervention." },
      { title: "10x Faster Processing", description: "Automated workflows process data and execute tasks in seconds instead of hours." },
      { title: "24/7 Operations", description: "AI systems work around the clock — no breaks, no overtime, no inconsistency." },
    ],
    differentiators: [
      "Custom-trained AI models on your specific business data — not generic one-size-fits-all solutions",
      "Seamless integration with your existing tools so adoption is frictionless for your team",
      "ROI-focused approach — every automation is prioritized by measurable business impact",
      "Continuous optimization — our AI systems learn and improve from real-world usage over time",
    ],
    faqs: [
      { question: "What kind of tasks can AI automate for my business?", answer: "Almost any repetitive, rule-based process: customer support, lead qualification, data entry, invoice processing, report generation, email responses, appointment scheduling, and much more. We identify the highest-impact opportunities during our discovery phase." },
      { question: "How long does it take to implement an AI solution?", answer: "A basic chatbot can be deployed in 2-4 weeks. Complex workflow automation takes 4-8 weeks. Enterprise AI integrations may take 8-16 weeks. We deliver in phases so you see value quickly." },
      { question: "Will AI replace our employees?", answer: "No — AI augments your team by handling repetitive tasks, freeing them for strategic, creative, and relationship-driven work. Most clients see improved job satisfaction alongside cost savings." },
      { question: "What data do you need to build an AI solution?", answer: "It depends on the solution. Chatbots need your FAQ data and conversation logs. Predictive models need historical business data. We work with whatever data you have and can help structure it for AI readiness." },
      { question: "How secure is my data with AI systems?", answer: "Enterprise-grade security is non-negotiable. We use encrypted data pipelines, access controls, and can deploy on-premise or in your private cloud. All solutions comply with GDPR, HIPAA, and SOC 2 standards as needed." },
    ],
  },
  {
    id: "geo-optimization",
    icon: Search,
    title: "GEO (Generative Engine Optimization)",
    shortTitle: "GEO",
    metaTitle: "GEO Optimization — Rank in AI Search | CIONIX Technologies",
    metaDescription: "Get your brand discovered in ChatGPT, Google AI Overviews, Perplexity, and Gemini. CIONIX pioneering GEO strategies for AI-first search visibility.",
    hero: {
      headline: "Your Competitors Are Invisible in AI Search. You Won't Be.",
      subheadline: "Generative Engine Optimization (GEO) is the future of discoverability. We position your brand to appear in AI-generated answers across ChatGPT, Google AI Overviews, Perplexity, and Gemini — where your next customers are already searching.",
    },
    problems: {
      title: "Challenges Businesses Face",
      points: [
        "AI search engines like ChatGPT and Perplexity are becoming primary research tools — and your brand doesn't appear in their answers.",
        "Traditional SEO strategies alone can't influence how AI models reference, cite, or recommend your business.",
        "Zero-click searches are rising — users get answers directly from AI without ever visiting your website.",
        "Competitors who optimize for AI search early will dominate mindshare in your industry for years to come.",
        "No internal expertise to understand how large language models source, rank, and surface information.",
      ],
    },
    solution: {
      title: "How CIONIX Solves This",
      description: "We've pioneered GEO strategies that influence how AI models perceive and reference your brand. Through structured data optimization, entity building, authoritative content creation, and citation network development, we ensure your business appears when AI tools generate answers about your industry. This isn't guesswork — it's systematic, data-driven optimization based on how LLMs actually source and rank information.",
    },
    features: [
      { title: "AI Search Visibility Audit", icon: "🔍", description: "Comprehensive analysis of how AI models currently perceive, reference, and recommend your brand vs. competitors." },
      { title: "Entity & Knowledge Graph Optimization", icon: "🧠", description: "Build your brand's entity presence so AI models recognize you as an authoritative source in your domain." },
      { title: "AI-Optimized Content Strategy", icon: "✍️", description: "Content engineered to be cited by AI — structured, authoritative, and designed for machine comprehension." },
      { title: "Citation Network Development", icon: "🔗", description: "Strategic placement across sources that AI models trust — academic references, industry publications, and high-authority domains." },
      { title: "Structured Data Implementation", icon: "📋", description: "Advanced schema markup and structured data that helps AI models accurately understand and surface your content." },
      { title: "Ongoing GEO Monitoring", icon: "📊", description: "Track your AI search presence across ChatGPT, Perplexity, Gemini, and Google AI Overviews with regular reporting." },
    ],
    process: [
      { step: "Discovery & Strategy", description: "We analyze your current AI search visibility, map competitor presence, identify high-value query opportunities, and create a prioritized GEO roadmap." },
      { step: "Design & Planning", description: "Content strategy, entity mapping, structured data planning, and citation source identification tailored to your industry and target audience." },
      { step: "Development", description: "Content creation, schema implementation, entity optimization, and systematic citation building across AI-trusted sources." },
      { step: "Testing & Deployment", description: "Verify AI model responses, validate structured data, test entity recognition, and monitor initial results across platforms." },
      { step: "Ongoing Support", description: "Monthly AI search monitoring, content updates, strategy refinement, and adaptation to evolving AI search algorithms." },
    ],
    industries: ["SaaS Startups", "Professional Services", "Fintech", "E-commerce", "Healthcare", "Web3 & Crypto"],
    results: [
      { title: "AI Search Presence", description: "Your brand appears in AI-generated answers where competitors are invisible." },
      { title: "First-Mover Advantage", description: "Early GEO adoption creates compounding visibility that's difficult for competitors to replicate." },
      { title: "Higher Quality Leads", description: "Users who discover you through AI search have higher intent and convert at 2-3x traditional channels." },
      { title: "Future-Proof Visibility", description: "As AI search grows, your early investment compounds — building authority that lasts." },
    ],
    differentiators: [
      "Pioneers in GEO — we've been optimizing for AI search since before it had a name",
      "Proprietary monitoring tools that track your brand's presence across all major AI platforms",
      "Combined SEO + GEO approach that maximizes visibility in both traditional and AI search",
      "Data-driven methodology based on how LLMs actually source, rank, and surface information",
    ],
    faqs: [
      { question: "What is GEO and how is it different from SEO?", answer: "GEO (Generative Engine Optimization) focuses on how AI search engines like ChatGPT, Perplexity, and Google AI Overviews surface and cite your brand. Unlike traditional SEO which optimizes for search engine rankings, GEO ensures your brand appears in AI-generated answers — an entirely different discovery channel." },
      { question: "Which AI search engines does GEO target?", answer: "We optimize for ChatGPT, Google AI Overviews (SGE), Perplexity, Gemini, Claude, and emerging AI search tools. Our strategies are platform-agnostic because they focus on how all LLMs source information." },
      { question: "How long does it take to see GEO results?", answer: "Initial improvements in AI search visibility typically appear within 4-8 weeks. Significant, sustained presence usually develops over 3-6 months as entity authority builds. GEO is a compounding investment — the earlier you start, the stronger your position becomes." },
      { question: "Can GEO replace traditional SEO?", answer: "No — GEO complements SEO. Traditional SEO remains critical for organic search traffic. GEO adds a new discovery layer as more users shift to AI-powered search. We recommend a combined strategy for maximum visibility." },
      { question: "How do you measure GEO success?", answer: "We track AI citation frequency, brand mention quality, entity recognition accuracy, and referral traffic from AI platforms. Monthly reports show your visibility trends across all major AI search engines." },
    ],
  },
  {
    id: "digital-marketing",
    icon: BarChart3,
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    metaTitle: "Digital Marketing Services | CIONIX Technologies",
    metaDescription: "ROI-driven SEO, paid advertising, and content marketing strategies that generate qualified leads and accelerate revenue growth. Partner with CIONIX.",
    hero: {
      headline: "Marketing That Generates Revenue, Not Just Reports",
      subheadline: "We build and execute data-driven marketing strategies — SEO, paid ads, content, and analytics — focused on one metric that matters: your revenue growth.",
    },
    problems: {
      title: "Challenges Businesses Face",
      points: [
        "Spending thousands on ads with no clear ROI — money going out but qualified leads not coming in.",
        "Content creation that gets zero traction — blog posts, social media, and emails that nobody reads or engages with.",
        "SEO efforts that haven't moved the needle in months — competitors outranking you for your most valuable keywords.",
        "No unified marketing strategy — disconnected campaigns across channels that don't work together or compound.",
        "Analytics dashboards full of vanity metrics that don't correlate with actual business revenue.",
      ],
    },
    solution: {
      title: "How CIONIX Solves This",
      description: "We don't do 'spray and pray' marketing. Every campaign starts with deep audience research, competitive analysis, and clear revenue targets. We build integrated strategies where SEO, paid ads, and content marketing work together — each channel amplifying the others. Our proprietary analytics framework tracks the full customer journey from first touch to closed deal, so every dollar is accountable.",
    },
    features: [
      { title: "Technical & Content SEO", icon: "🔍", description: "Comprehensive SEO covering technical audits, content optimization, link building, and local search to dominate organic rankings." },
      { title: "Paid Advertising", icon: "💰", description: "Google Ads, Meta Ads, LinkedIn Ads — precision-targeted campaigns with continuous optimization for maximum ROAS." },
      { title: "Content Marketing", icon: "✍️", description: "Strategic content creation — blogs, whitepapers, case studies, and videos — that attract, educate, and convert your ideal customers." },
      { title: "Conversion Rate Optimization", icon: "📈", description: "A/B testing, landing page optimization, and funnel analysis that squeeze more revenue from your existing traffic." },
      { title: "Marketing Automation", icon: "⚙️", description: "Email sequences, lead nurturing workflows, and behavioral triggers that convert leads on autopilot." },
      { title: "Analytics & Attribution", icon: "📊", description: "Full-funnel tracking and multi-touch attribution so you know exactly which channels and campaigns drive revenue." },
    ],
    process: [
      { step: "Discovery & Strategy", description: "Market research, audience analysis, competitive audit, and development of a unified marketing strategy with clear KPIs and revenue targets." },
      { step: "Design & Planning", description: "Campaign architecture, content calendars, ad creative development, and landing page design — all aligned with your brand and goals." },
      { step: "Development", description: "Campaign launch across all channels — SEO implementation, ad deployment, content publishing, and automation workflow activation." },
      { step: "Testing & Deployment", description: "A/B testing, bid optimization, content performance analysis, and continuous refinement based on real-time data." },
      { step: "Ongoing Support", description: "Monthly strategy reviews, performance reporting, budget reallocation, and proactive recommendations to accelerate growth." },
    ],
    industries: ["SaaS Startups", "E-commerce", "Fintech", "Professional Services", "Coaches & Creators", "Enterprise"],
    results: [
      { title: "3x Lead Generation", description: "Integrated strategies that generate 3x more qualified leads than single-channel approaches." },
      { title: "40% Lower CAC", description: "Optimized campaigns and conversion funnels that reduce customer acquisition costs significantly." },
      { title: "5x Content ROI", description: "Strategic content that ranks, converts, and continues generating leads for years." },
      { title: "Full Revenue Attribution", description: "Know exactly which marketing dollars drive revenue — no more guessing." },
    ],
    differentiators: [
      "AI-enhanced campaigns — we use AI for audience targeting, ad copy generation, and predictive budget allocation",
      "GEO integration — our marketing strategies include AI search visibility alongside traditional SEO",
      "Revenue-focused metrics — we track pipeline and revenue, not just impressions and clicks",
      "Full-stack marketing team — strategists, creatives, analysts, and developers working as one unit",
    ],
    faqs: [
      { question: "How is CIONIX different from other marketing agencies?", answer: "We're technologists who do marketing, not the other way around. Our strategies are powered by AI, data analytics, and custom-built tools that most agencies don't have. We also integrate GEO (AI search optimization) into every strategy — a channel most agencies don't even know exists." },
      { question: "What's your minimum marketing budget?", answer: "We recommend a minimum ad spend of $3K/month for paid campaigns to generate statistically significant data for optimization. Our management fees start at $2K/month. We'll help you allocate budget for maximum ROI during the strategy phase." },
      { question: "How quickly will I see results from SEO?", answer: "SEO is a compounding investment. Initial improvements in rankings typically appear in 2-3 months, with significant traffic growth in 4-6 months. Paid campaigns can generate leads within the first week of launch." },
      { question: "Do you create content in-house?", answer: "Yes. Our content team includes strategists, writers, designers, and video producers. We create blog posts, case studies, social media content, email campaigns, ad creatives, and video content — all in-house for quality control and brand consistency." },
      { question: "Can you work alongside our internal marketing team?", answer: "Absolutely. We frequently work as an extension of in-house teams — filling capability gaps, providing strategic direction, or handling execution on specific channels. We adapt to whatever structure works best for you." },
    ],
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    shortTitle: "Cloud & DevOps",
    metaTitle: "Cloud & DevOps Services | CIONIX Technologies",
    metaDescription: "Enterprise cloud architecture, CI/CD pipelines, and managed infrastructure on AWS, Azure, and GCP. Secure, scalable, and cost-optimized with CIONIX.",
    hero: {
      headline: "Infrastructure That Scales When You Do — Not Against You",
      subheadline: "We architect, migrate, and manage cloud infrastructure on AWS, Azure, and GCP — with CI/CD pipelines, container orchestration, and 24/7 monitoring that keeps your applications fast, secure, and cost-efficient.",
    },
    problems: {
      title: "Challenges Businesses Face",
      points: [
        "Cloud bills spiraling out of control — paying for resources you don't need and architectures that weren't designed for cost efficiency.",
        "Deployments that are manual, slow, and terrifying — every release feels like it might break production.",
        "Security vulnerabilities from misconfigured cloud services, exposed credentials, and no consistent security baseline.",
        "Applications that crash under traffic spikes because infrastructure can't auto-scale to meet demand.",
        "No disaster recovery plan — a single outage could mean hours of downtime and significant revenue loss.",
      ],
    },
    solution: {
      title: "How CIONIX Solves This",
      description: "We design cloud architectures using Infrastructure as Code (Terraform, Pulumi) so your infrastructure is version-controlled, reproducible, and auditable. Our CI/CD pipelines automate testing and deployment, reducing release cycles from days to minutes. Kubernetes orchestration handles auto-scaling, while comprehensive monitoring and alerting catch issues before users do. Every architecture is designed for security, cost optimization, and fault tolerance from day one.",
    },
    features: [
      { title: "Cloud Architecture Design", icon: "☁️", description: "Right-sized, cost-optimized architectures on AWS, Azure, or GCP — designed for your specific workload patterns." },
      { title: "CI/CD Pipeline Automation", icon: "🔄", description: "Automated build, test, and deployment pipelines that ship code safely — from commit to production in minutes." },
      { title: "Container Orchestration", icon: "🐳", description: "Docker and Kubernetes deployments with auto-scaling, self-healing, and zero-downtime rolling updates." },
      { title: "Infrastructure as Code", icon: "📝", description: "Terraform and Pulumi configurations that make your infrastructure reproducible, version-controlled, and auditable." },
      { title: "Security & Compliance", icon: "🔒", description: "Hardened configurations, secrets management, network policies, and compliance frameworks (SOC 2, HIPAA, GDPR)." },
      { title: "24/7 Monitoring & Alerts", icon: "📡", description: "Comprehensive observability with metrics, logs, and traces — proactive alerting catches issues before users notice." },
    ],
    process: [
      { step: "Discovery & Strategy", description: "Infrastructure audit, workload analysis, cost review, and creation of a cloud strategy aligned with your performance, security, and budget requirements." },
      { step: "Design & Planning", description: "Architecture design, IaC planning, CI/CD pipeline design, security baseline definition, and migration roadmap if applicable." },
      { step: "Development", description: "Infrastructure provisioning, pipeline implementation, container configuration, monitoring setup, and security hardening." },
      { step: "Testing & Deployment", description: "Load testing, failover testing, security scanning, disaster recovery validation, and phased production cutover." },
      { step: "Ongoing Support", description: "24/7 monitoring, incident response, cost optimization reviews, security patching, and infrastructure evolution as your needs grow." },
    ],
    industries: ["SaaS Startups", "Fintech", "Enterprise", "E-commerce", "Healthcare", "Web3 & Crypto"],
    results: [
      { title: "40% Cost Reduction", description: "Right-sized resources, reserved instances, and auto-scaling eliminate cloud waste." },
      { title: "99.99% Uptime", description: "Redundant, fault-tolerant architectures with automated failover and disaster recovery." },
      { title: "10x Faster Deployments", description: "CI/CD automation reduces deployment time from hours to minutes with zero-downtime releases." },
      { title: "Enterprise Security", description: "Hardened infrastructure meeting SOC 2, HIPAA, and GDPR compliance requirements." },
    ],
    differentiators: [
      "AI-powered monitoring that predicts issues before they impact users — not just reactive alerting",
      "Cost optimization built into every architecture — we've saved clients millions in cloud spend",
      "Platform-agnostic expertise across AWS, Azure, and GCP — we recommend what's best for you, not what's easiest for us",
      "DevOps culture, not just tools — we train your team and build processes that stick",
    ],
    faqs: [
      { question: "Which cloud platform do you recommend?", answer: "It depends on your specific needs. AWS has the broadest service offering, Azure integrates best with Microsoft ecosystems, and GCP excels in data analytics and machine learning. We're certified across all three and will recommend what's genuinely best for your workload." },
      { question: "Can you migrate our existing infrastructure to the cloud?", answer: "Yes. We handle lift-and-shift, re-platforming, and full re-architecting migrations. We create detailed migration plans with risk mitigation, testing protocols, and rollback procedures to ensure zero data loss and minimal downtime." },
      { question: "How do you handle cloud security?", answer: "Security is embedded in every layer — network policies, IAM configurations, secrets management, encryption at rest and in transit, vulnerability scanning, and compliance auditing. We follow CIS benchmarks and can achieve SOC 2, HIPAA, and GDPR compliance." },
      { question: "What does 24/7 monitoring include?", answer: "Infrastructure metrics (CPU, memory, disk, network), application performance monitoring (APM), log aggregation and analysis, custom alerts with escalation policies, incident response, and monthly performance reports." },
      { question: "How much can cloud optimization save us?", answer: "Most companies are overspending on cloud by 30-50%. Through right-sizing, reserved instances, spot instances, auto-scaling, and architecture optimization, we typically reduce cloud bills by 30-40% while improving performance." },
    ],
  },
];
