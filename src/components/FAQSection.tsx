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
    question: "What sectors does CIONIX operate in?",
    answer: "CIONIX operates across four key sectors: Real Estate Consultancy, IT Services (Web Development, App Development, GEO, Digital Marketing), Video Production & Entertainment (Content Production, YouTube Management), and Healthcare (Medical Billing for USA doctors and healthcare IT)."
  },
  {
    question: "Will each sector have its own dedicated website?",
    answer: "Yes! Each sector will soon have its own specialized website with in-depth information, case studies, and sector-specific resources. This main site serves as the central hub for CIONIX's complete offerings."
  },
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer: "GEO is the practice of optimizing your content to appear in AI-generated responses from platforms like ChatGPT, Google AI Overviews, and Perplexity. It's part of our IT Services sector and ensures your brand is visible in the AI search ecosystem."
  },
  {
    question: "How does your Medical Billing service work?",
    answer: "Our Healthcare division provides end-to-end medical billing services for USA-based physicians. We handle claims processing, revenue cycle management, compliance, denial management, and reporting — all with HIPAA-compliant processes."
  },
  {
    question: "Can I engage CIONIX for services across multiple sectors?",
    answer: "Absolutely. That's one of our key advantages. Whether you need a website built, a marketing campaign, a property consultation, and medical billing — we handle it all under one roof with dedicated specialists per sector."
  },
  {
    question: "Where is CIONIX based?",
    answer: "CIONIX Innovations Services LLC operates internationally with teams serving clients across North America, the Middle East, Europe, and South Asia. Our distributed model allows us to provide 24/7 support across time zones."
  },
  {
    question: "How do I get started with CIONIX?",
    answer: "Simply reach out through our contact page or schedule a free consultation. We'll understand your needs, recommend the right sector team, and create a tailored plan for your project."
  },
  {
    question: "What makes CIONIX different from single-sector agencies?",
    answer: "Unlike niche agencies, CIONIX offers cross-sector synergy. Your real estate client can get a website, marketing, video content, and billing solutions — all coordinated by one team that understands your business holistically."
  }
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <p className="section-subtitle">FAQ</p>
            <h2 className="section-title text-foreground">
              Questions? <span className="gradient-text">We've Got Answers</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Everything you need to know about working with CIONIX. Can't find what you're looking for? Reach out to our team.
            </p>
            <Button asChild>
              <Link to="/pricing">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

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