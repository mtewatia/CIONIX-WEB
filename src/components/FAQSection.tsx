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
    question: "What does CIONIX specialize in?",
    answer: "CIONIX specializes in IT services and media-driven growth, helping businesses build digital platforms, scale content, and generate revenue through technology and content systems."
  },
  {
    question: "What services do you offer?",
    answer: "We offer IT Services (web/app development, marketing, UI/UX), Video Production & Media (content, YouTube, brand films), Healthcare Solutions (medical billing & RCM), and Real Estate Consultancy (investment & advisory)."
  },
  {
    question: "Can I hire you only for IT or media services?",
    answer: "Yes. Most clients start with IT or media services, and expand into other areas as their business grows."
  },
  {
    question: "Do you build custom solutions or use templates?",
    answer: "We build fully customized solutions tailored to your business goals, ensuring better performance, scalability, and long-term growth."
  },
  {
    question: "Do you help with growth and marketing after development?",
    answer: "Yes. We combine development + content + marketing, so your business not only gets built but also attracts traffic, leads, and revenue."
  },
  {
    question: "How do I get started?",
    answer: "Simply click \"Book Consultation\" on the website. Our team will review your requirements and get back to you with the next steps."
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