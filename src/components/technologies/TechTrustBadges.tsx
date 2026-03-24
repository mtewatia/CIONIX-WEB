import { Shield, Award, Clock } from "lucide-react";

const badges = [
  { icon: Shield, text: "SOC 2 Compliant" },
  { icon: Award, text: "Top-Rated on Clutch" },
  { icon: Clock, text: "Avg. 48hr Response" },
];

const TechTrustBadges = () => (
  <div className="flex flex-wrap items-center justify-center gap-6 mt-10 animate-fade-up animation-delay-500">
    {badges.map((b, i) => (
      <div key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
        <b.icon className="h-4 w-4 text-primary" />
        <span>{b.text}</span>
      </div>
    ))}
  </div>
);

export default TechTrustBadges;
