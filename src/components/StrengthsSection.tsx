const strengths = [
  {
    number: "10×",
    label: "Faster Execution Cycles",
    description: "AI-assisted GEO workflows reduce turnaround from weeks to days.",
  },
  {
    number: "2–4×",
    label: "Content & Campaign Output",
    description: "Turn the same effort into significantly higher marketing throughput.",
  },
  {
    number: "40%",
    label: "Lower Growth Costs",
    description: "Replace fragmented vendors with one unified execution engine.",
  },
  {
    number: "5–10",
    label: "Hours Back Every Week",
    description: "Less coordination. Fewer approvals. More focus on leadership.",
  },
  {
    number: "25+",
    label: "Growth Capabilities",
    description: "From GEO and content to media, events, and distribution.",
  },
  {
    number: "Top",
    label: "Tier Specialists",
    description: "Work with vetted operators aligned to performance, not hype.",
  },
];

const StrengthsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ryse-dark mb-4">
            Meet the New Generation
            <br />
            <span className="text-ryse-orange">of Digital Marketing Services</span>
          </h2>
        </div>

        {/* Strengths Grid - Custom Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strengths.slice(0, 2).map((strength, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-ryse-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ryse-orange/10 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-ryse-dark mb-2 group-hover:text-ryse-orange transition-colors">
                  {strength.number}
                </div>
                <div className="text-lg font-semibold mb-4 text-ryse-orange">
                  {strength.label}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-ryse-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ryse-orange/10 group">
            <div className="text-4xl md:text-5xl font-bold text-ryse-dark mb-2 group-hover:text-ryse-orange transition-colors">
              {strengths[2].number}
            </div>
            <div className="text-lg font-semibold mb-4 text-ryse-orange">
              {strengths[2].label}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {strengths[2].description}
            </p>
          </div>

          {/* Row 2 */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-ryse-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ryse-orange/10 group">
            <div className="text-4xl md:text-5xl font-bold text-ryse-dark mb-2 group-hover:text-ryse-orange transition-colors">
              {strengths[3].number}
            </div>
            <div className="text-lg font-semibold mb-4 text-ryse-orange">
              {strengths[3].label}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {strengths[3].description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strengths.slice(4, 6).map((strength, index) => (
              <div
                key={index + 4}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-ryse-orange/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ryse-orange/10 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-ryse-dark mb-2 group-hover:text-ryse-orange transition-colors">
                  {strength.number}
                </div>
                <div className="text-lg font-semibold mb-4 text-ryse-orange">
                  {strength.label}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
