import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What makes GrowthForge different from other marketing agencies?",
    answer: "We combine AI-powered workflows with human expertise to deliver results 10x faster than traditional agencies. Our unified approach means you get strategy, execution, and optimization from one team—no fragmented vendors or communication gaps."
  },
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer: "GEO is the practice of optimizing your content to appear in AI-generated responses from platforms like ChatGPT, Google AI Overviews, and Perplexity. As more users turn to AI for answers, GEO ensures your brand is cited and recommended by these systems."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients see initial momentum within 30-60 days, with significant results by 90 days. Our rapid activation approach focuses on quick wins while building long-term, compounding growth systems."
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We work with companies at all stages—from funded startups to enterprise organizations. Our flexible pricing tiers are designed to scale with your needs, and we tailor our approach based on your stage and goals."
  },
  {
    question: "What's included in your monthly retainer?",
    answer: "Our retainers include strategy, execution, and optimization across your chosen channels. This covers everything from content production and campaign management to analytics, reporting, and ongoing optimization. No hidden fees or surprise charges."
  },
  {
    question: "Can I start with just one service and expand later?",
    answer: "Absolutely. Many clients start with a focused engagement—like GEO or content production—and expand as they see results. Our modular approach makes it easy to add channels and capabilities over time."
  },
  {
    question: "How do you measure and report on performance?",
    answer: "You'll have access to real-time dashboards showing key metrics across all channels. We also provide weekly or bi-weekly strategy calls (depending on your plan) and monthly performance reviews with actionable insights."
  },
  {
    question: "What's your minimum contract length?",
    answer: "We recommend a 3-month minimum to allow time for proper strategy execution and optimization. However, we offer flexible terms for clients with specific project-based needs."
  }
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Header */}
          <div className="lg:col-span-2">
            <p className="section-subtitle">FAQ</p>
            <h2 className="section-title text-foreground">
              Questions? <span className="gradient-text">We've Got Answers</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Everything you need to know about working with GrowthForge. Can't find what you're looking for? Reach out to our team.
            </p>
            <Button asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 border-none shadow-sm data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
