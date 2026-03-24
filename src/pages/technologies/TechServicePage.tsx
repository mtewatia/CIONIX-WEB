import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectorHeader from "@/components/sectors/SectorHeader";
import SectorFooter from "@/components/sectors/SectorFooter";
import { techServicesData } from "@/data/techServices";

const navLinks = [
  { name: "Home", href: "/technologies" },
  { name: "Services", href: "/technologies/services" },
  { name: "Blog", href: "/technologies/blog" },
  { name: "Contact", href: "/technologies/contact" },
];

const TechServicePage = () => {
  const { serviceId } = useParams();
  const service = techServicesData.find(s => s.id === serviceId);

  if (!service) return <Navigate to="/technologies/services" replace />;

  const otherServices = techServicesData.filter(s => s.id !== serviceId);
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SectorHeader
        sectorName="Technologies"
        sectorColor="from-primary to-orange-400"
        navLinks={navLinks}
        contactHref="/technologies/contact"
        homePath="/technologies"
      />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/technologies" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/technologies/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{service.title}</span>
          </div>

          <div className="max-w-4xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-ryse-orange-light flex items-center justify-center mb-6 shadow-lg">
              <Icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6">
              {service.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
              {service.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/technologies/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/technologies/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">{service.problems.title}</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {service.problems.points.map((point, i) => (
              <div key={i} className="flex gap-4 p-5 bg-background rounded-xl border border-border">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-destructive font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">{service.solution.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{service.solution.description}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What You Get</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Features & Benefits</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.features.map((feature, i) => (
              <div key={i} className="bg-background border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-lg font-bold font-heading text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Our Process</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {service.process.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-ryse-orange-light flex items-center justify-center text-primary-foreground font-bold flex-shrink-0 shadow-lg">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-2">{step.step}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Who We Serve</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Industries & Use Cases</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {service.industries.map((industry, i) => (
              <span key={i} className="px-6 py-3 bg-background border border-border rounded-full text-foreground font-medium hover:border-primary/30 transition-colors">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Outcomes</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">What You Achieve</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {service.results.map((result, i) => (
              <div key={i} className="text-center p-6 bg-muted/50 rounded-2xl border border-border">
                <h3 className="text-xl font-bold font-heading text-primary mb-2">{result.title}</h3>
                <p className="text-muted-foreground text-sm">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-foreground text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The CIONIX Difference</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">Why CIONIX?</h2>
            <div className="space-y-4">
              {service.differentiators.map((diff, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-white/80 leading-relaxed">{diff}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-muted/50 rounded-xl border border-border px-6">
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Explore Our Other Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {otherServices.slice(0, 5).map((s) => (
              <Link
                key={s.id}
                to={`/technologies/services/${s.id}`}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <s.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-ryse-orange-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something Powerful Together
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
            Ready to transform your business with cutting-edge {service.title.toLowerCase()}? Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="white" asChild>
              <Link to="/technologies/contact">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="dark" asChild>
              <Link to="/technologies/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <SectorFooter
        sectorName="Technologies"
        description="CIONIX Technologies delivers cutting-edge web, mobile, AI, and digital marketing solutions for businesses worldwide."
        serviceLinks={techServicesData.map(s => ({ name: s.shortTitle, href: `/technologies/services/${s.id}` }))}
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

export default TechServicePage;
