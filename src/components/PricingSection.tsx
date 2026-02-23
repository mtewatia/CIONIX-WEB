import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type BillingPeriod = "quarterly" | "semi-annual" | "annual";

const plans = [
  {
    name: "Get started plan",
    hours: "40h",
    monthlyPrice: 2000,
    hourlyRate: 50,
  },
  {
    name: "Boost plan",
    hours: "80h",
    monthlyPrice: 3500,
    hourlyRate: 44,
  },
  {
    name: "Full force plan",
    hours: "160h",
    monthlyPrice: 6000,
    hourlyRate: 38,
  },
];

const includedFeatures = [
  "Access to all our services",
  "Access to the entire marketing team",
  "Dedicated marketing strategist",
  "Dedicated project manager",
  "Customized work plan",
  "Detailed monthly reports",
  "Weekly calls",
  "24/5 timezone coverage",
];

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("quarterly");
  const [selectedPlan, setSelectedPlan] = useState<number>(1); // Boost plan by default

  const getDiscount = (period: BillingPeriod) => {
    switch (period) {
      case "semi-annual":
        return 0.1;
      case "annual":
        return 0.2;
      default:
        return 0;
    }
  };

  const getMonths = (period: BillingPeriod) => {
    switch (period) {
      case "semi-annual":
        return 6;
      case "annual":
        return 12;
      default:
        return 3;
    }
  };

  const calculateMonthlyPrice = (basePrice: number) => {
    const discount = getDiscount(billingPeriod);
    return Math.round(basePrice * (1 - discount));
  };

  const calculateTotalPrice = (basePrice: number) => {
    const months = getMonths(billingPeriod);
    const discountedMonthly = calculateMonthlyPrice(basePrice);
    return discountedMonthly * months;
  };

  const calculateHourlyRate = (baseRate: number) => {
    const discount = getDiscount(billingPeriod);
    return Math.round(baseRate * (1 - discount));
  };

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-subtitle">Pricing Plans</p>
          <h2 className="section-title text-foreground">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h2>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-muted rounded-full p-1.5">
            <button
              onClick={() => setBillingPeriod("quarterly")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "quarterly"
                  ? "bg-gradient-to-r from-ryse-orange to-ryse-orange-light text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setBillingPeriod("semi-annual")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "semi-annual"
                  ? "bg-gradient-to-r from-ryse-orange to-ryse-orange-light text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Semi-annual <span className={`ml-1 ${billingPeriod === "semi-annual" ? "text-foreground" : "text-ryse-orange"}`}>10% off</span>
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "annual"
                  ? "bg-gradient-to-r from-ryse-orange to-ryse-orange-light text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual <span className={`ml-1 ${billingPeriod === "annual" ? "text-foreground" : "text-ryse-orange"}`}>20% off</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => {
            const isSelected = selectedPlan === index;
            return (
              <button
                key={index}
                className={`rounded-2xl p-6 transition-all duration-300 hover:scale-105 text-left w-full ${
                  isSelected
                    ? "bg-gradient-to-b from-ryse-dark to-ryse-dark-light text-white shadow-2xl shadow-ryse-orange/20 transform md:-translate-y-2"
                    : "card-ryse hover:shadow-lg hover:shadow-ryse-orange/10"
                }`}
                onClick={() => setSelectedPlan(index)}
              >
                {/* Plan Badge */}
                <div className="flex justify-center mb-6">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium ${
                    isSelected
                      ? "bg-gradient-to-r from-ryse-orange to-ryse-orange-light text-white"
                      : "bg-ryse-orange/10 text-ryse-orange border border-ryse-orange/20"
                  }`}>
                    {plan.name}
                  </span>
                </div>

                {/* Hours */}
                <div className="text-center mb-4">
                  <span className={`text-5xl font-bold font-heading ${
                    isSelected ? "gradient-text" : "text-foreground"
                  }`}>
                    {plan.hours}
                  </span>
                  <span className={`ml-1 ${isSelected ? "text-white/60" : "text-muted-foreground"}`}>/ mo</span>
                </div>

                {/* Pricing */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-3">
                    <span className={isSelected ? "text-white/60" : "text-muted-foreground"}>
                      ${calculateMonthlyPrice(plan.monthlyPrice).toLocaleString()}<span className="text-sm">/ mo</span>
                    </span>
                    <span className="font-semibold text-ryse-orange">
                      ${calculateHourlyRate(plan.hourlyRate)}<span className={`text-sm font-normal ${isSelected ? "text-white/60" : "text-muted-foreground"}`}>/ hr</span>
                    </span>
                  </div>
                  <div className={`text-sm ${isSelected ? "text-white/40" : "text-muted-foreground/60"}`}>
                    Total: ${calculateTotalPrice(plan.monthlyPrice).toLocaleString()} / {getMonths(billingPeriod)} months
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* All Plans Include */}
        <div className="card-ryse !p-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold font-heading text-foreground">All plans include:</h3>
            </div>
            <div className="md:col-span-3">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-ryse-orange/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-ryse-orange" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;