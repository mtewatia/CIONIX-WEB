import { Bitcoin, Landmark, Rocket, Mic2, ShoppingCart } from "lucide-react";

const industries = [
  { icon: Bitcoin, name: "Web3 & Crypto", desc: "DApps, smart contracts, tokenomics, and Web3 marketing." },
  { icon: Landmark, name: "Fintech", desc: "Secure payment platforms, banking solutions, and compliance tools." },
  { icon: Rocket, name: "SaaS Startups", desc: "MVPs, product scaling, and growth-stage engineering." },
  { icon: Mic2, name: "Coaches & Creators", desc: "Course platforms, funnels, and personal brand websites." },
  { icon: ShoppingCart, name: "E-commerce", desc: "High-converting storefronts, marketplaces, and order systems." },
];

const TechIndustries = () => (
  <section className="relative py-24 md:py-32 bg-[#0a0b14]">
    <div className="container-custom">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-purple-400 text-sm uppercase tracking-widest font-semibold mb-4">Industries</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
          Powering Growth Across{" "}
          <span className="bg-gradient-to-r from-purple-400 to-primary bg-clip-text text-transparent">Industries</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {industries.map((item, i) => (
          <div
            key={i}
            className="group bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 text-center hover:border-purple-500/25 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-purple-500/15 to-primary/15 flex items-center justify-center mb-4 group-hover:from-purple-500/25 group-hover:to-primary/25 transition-all duration-300">
              <item.icon className="h-7 w-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
            </div>
            <h3 className="text-white font-bold text-sm mb-2">{item.name}</h3>
            <p className="text-white/35 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechIndustries;
