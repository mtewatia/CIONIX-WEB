import { Search, Map, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover & Diagnose",
    description: "We dive deep into your brand, audience, and market to uncover opportunities and identify growth barriers.",
    color: "from-primary to-orange-400",
  },
  {
    icon: Map,
    number: "02",
    title: "Strategy & Roadmap",
    description: "We craft a custom growth strategy with clear milestones, KPIs, and a realistic timeline for success.",
    color: "from-accent to-purple-500",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Execute & Optimize",
    description: "Our team brings the strategy to life with precision execution and continuous data-driven optimization.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Scale & Grow",
    description: "We amplify what works, expand your reach, and build sustainable systems for long-term growth.",
    color: "from-blue-500 to-indigo-500",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-foreground">
            How We <span className="gradient-text">Transform Brands</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A proven four-step framework designed to take you from where you are 
            to where you want to be — strategically and sustainably.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-28 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-emerald-500 opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <div className="text-center card-white">
                  {/* Step Number */}
                  <div className={`absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-gradient-to-r ${step.color} text-card text-sm font-bold font-heading shadow-lg`}>
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 mt-4 shadow-lg`}>
                    <step.icon className="h-10 w-10 text-card" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold font-heading mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
