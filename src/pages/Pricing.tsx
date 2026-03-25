import { useState } from "react";
import { Check, ArrowRight, Zap, Crown, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/layout/PageHeader";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "2,500",
    period: "/month",
    description: "Perfect for startups and small businesses ready to accelerate growth.",
    features: [
      "2 marketing channels",
      "Basic GEO optimization",
      "Monthly content production",
      "Bi-weekly strategy calls",
      "Email support",
      "Monthly performance reports"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    icon: Crown,
    price: "5,000",
    period: "/month",
    description: "For scaling companies that need comprehensive growth solutions.",
    features: [
      "4 marketing channels",
      "Advanced GEO optimization",
      "Weekly content production",
      "Weekly strategy calls",
      "Priority support",
      "Real-time dashboards",
      "A/B testing & optimization",
      "Dedicated account manager"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex needs.",
    features: [
      "Unlimited channels",
      "Full GEO suite",
      "Daily content production",
      "On-demand strategy sessions",
      "24/7 dedicated support",
      "Custom integrations",
      "White-glove onboarding",
      "Quarterly business reviews",
      "Custom reporting"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader
        title="Pricing Plans"
        subtitle="Transparent pricing designed to scale with your growth. No hidden fees, no surprises."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing" }
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-medium ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="relative w-14 h-7 bg-muted rounded-full transition-colors"
            >
              <div 
                className={`absolute top-1 w-5 h-5 rounded-full bg-primary transition-all ${
                  billingCycle === "annual" ? "left-8" : "left-1"
                }`}
              />
            </button>
            <span className={`font-medium ${billingCycle === "annual" ? "text-foreground" : "text-muted-foreground"}`}>
              Annual
              <span className="ml-2 text-xs text-primary font-bold">Save 20%</span>
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`card-ryse p-8 relative ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-orange-400 text-white text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular 
                      ? "bg-gradient-to-br from-primary to-orange-400" 
                      : "bg-primary/10"
                  }`}>
                    <plan.icon className={`h-6 w-6 ${plan.popular ? "text-white" : "text-primary"}`} />
                  </div>
                  <h3 className="text-xl font-bold font-heading">{plan.name}</h3>
                </div>

                <div className="mb-4">
                  <span className="text-4xl font-bold font-heading">
                    {plan.price === "Custom" ? plan.price : `$${billingCycle === "annual" ? Math.round(parseInt(plan.price.replace(",", "")) * 0.8).toLocaleString() : plan.price}`}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>

                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <a href="mailto:info@cionix.com">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* FAQ or Additional Info */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold font-heading mb-4">Have Questions?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Not sure which plan is right for you? Schedule a free consultation and we'll help you find the perfect fit.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
