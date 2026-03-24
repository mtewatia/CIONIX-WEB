import { Bitcoin, Landmark, Rocket, Mic2, ShoppingCart } from "lucide-react";

const industries = [
  { icon: Bitcoin, name: "Web3 & Crypto", desc: "DApps, smart contracts, tokenomics, and Web3 marketing." },
  { icon: Landmark, name: "Fintech", desc: "Secure payment platforms, banking solutions, and compliance tools." },
  { icon: Rocket, name: "SaaS Startups", desc: "MVPs, product scaling, and growth-stage engineering." },
  { icon: Mic2, name: "Coaches & Creators", desc: "Course platforms, funnels, and personal brand websites." },
  { icon: ShoppingCart, name: "E-commerce", desc: "High-converting storefronts, marketplaces, and order systems." },
];

const TechIndustries = () => (
  <section className="relative py-24 md:py-32 bg-muted/50">
    <div className="container-custom">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="section-subtitle">Industries</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
          Powering Growth Across{" "}
          <span className="gradient-text">Industries</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {industries.map((item, i) => (
          <div
            key={i}
            className="group bg-background border border-border rounded-2xl p-6 text-center hover:border-primary/25 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-md"
          >
            <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-all duration-300">
              <item.icon className="h-7 w-7 text-primary group-hover:text-ryse-orange-light transition-colors" />
            </div>
            <h3 className="text-foreground font-bold text-sm mb-2">{item.name}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechIndustries;
