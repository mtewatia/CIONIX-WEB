import { useEffect, useRef, useState } from "react";
import { Compass, Target, Layers, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discovery & Consultation",
    description: "We understand your industry, goals, and challenges through in-depth consultation — whether it's a property deal, tech project, media campaign, or healthcare operation.",
    gradient: "from-primary to-orange-400",
  },
  {
    number: "02",
    icon: Target,
    title: "Strategy & Planning",
    description: "Our sector specialists craft a tailored roadmap with clear milestones, deliverables, and KPIs aligned to your business objectives.",
    gradient: "from-accent to-purple-500",
  },
  {
    number: "03",
    icon: Layers,
    title: "Execution & Delivery",
    description: "Dedicated teams execute with precision — from development sprints and billing cycles to production shoots and property assessments.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Growth & Optimization",
    description: "We continuously measure, optimize, and scale outcomes across every sector to ensure long-term success and ROI.",
    gradient: "from-blue-500 to-indigo-500",
  },
];

const ProcessRoadmap = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep((prev) => Math.max(prev, index));
            }
          });
        },
        { threshold: 0.4, rootMargin: "-10% 0px -10% 0px" }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm uppercase tracking-wider mb-4">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-foreground">
            Our Proven <span className="gradient-text">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A consistent framework applied across every sector for predictable, scalable results.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-1 bg-muted/50 rounded-full">
            <div 
              className="w-full bg-gradient-to-b from-primary via-accent to-emerald-500 rounded-full transition-all duration-700 ease-out"
              style={{ 
                height: `${activeStep >= 0 ? ((activeStep + 1) / steps.length) * 100 : 0}%` 
              }}
            />
          </div>

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => {
              const isActive = index <= activeStep;
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className={`
                    relative flex flex-col lg:flex-row gap-6 lg:gap-10
                    transition-all duration-500 ease-out
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-40 translate-y-4"}
                  `}
                >
                  <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:w-[120px] shrink-0">
                    <div
                      className={`
                        relative w-16 h-16 lg:w-[120px] lg:h-[120px] rounded-2xl lg:rounded-3xl
                        flex items-center justify-center
                        transition-all duration-500 ease-out
                        ${isActive 
                          ? `bg-gradient-to-br ${step.gradient} shadow-xl` 
                          : "bg-muted/50"
                        }
                      `}
                    >
                      <Icon 
                        className={`
                          w-8 h-8 lg:w-12 lg:h-12 transition-colors duration-500
                          ${isActive ? "text-white" : "text-muted-foreground"}
                        `} 
                      />
                      <div 
                        className={`
                          absolute -top-2 -right-2 lg:-top-3 lg:-right-3
                          w-8 h-8 lg:w-10 lg:h-10 rounded-full
                          flex items-center justify-center
                          text-xs lg:text-sm font-bold font-heading
                          transition-all duration-500
                          ${isActive 
                            ? "bg-background text-foreground shadow-lg" 
                            : "bg-muted text-muted-foreground"
                          }
                        `}
                      >
                        {step.number}
                      </div>
                      {isActive && (
                        <div 
                          className={`absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br ${step.gradient} opacity-30 blur-xl -z-10`} 
                        />
                      )}
                    </div>
                  </div>

                  <div
                    className={`
                      flex-1 p-6 lg:p-8 rounded-2xl lg:rounded-3xl
                      transition-all duration-500 ease-out
                      ${isActive 
                        ? "bg-card shadow-xl border border-border/50" 
                        : "bg-muted/30 border border-transparent"
                      }
                    `}
                  >
                    <h3
                      className={`
                        text-xl lg:text-2xl font-bold font-heading mb-3
                        transition-colors duration-500
                        ${isActive ? "text-foreground" : "text-muted-foreground"}
                      `}
                    >
                      {step.title}
                    </h3>
                    <div 
                      className={`
                        h-1 rounded-full mb-4 transition-all duration-500
                        ${isActive 
                          ? `w-20 bg-gradient-to-r ${step.gradient}` 
                          : "w-12 bg-muted"
                        }
                      `}
                    />
                    <p
                      className={`
                        text-base lg:text-lg leading-relaxed
                        transition-colors duration-500
                        ${isActive ? "text-muted-foreground" : "text-muted-foreground/60"}
                      `}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessRoadmap;
