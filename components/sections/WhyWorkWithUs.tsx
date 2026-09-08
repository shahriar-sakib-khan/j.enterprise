import { ShieldCheck, Anchor, MapPin, Wrench } from "lucide-react";

export default function WhyWorkWithUs() {
  const principles = [
    {
      title: "Marine-focused Equipment",
      description: "Our product range is specifically tailored for vessel requirements and marine environments.",
      icon: Anchor,
    },
    {
      title: "Local Maritime Presence",
      description: "Based in Chattogram, strategically located to support vessels calling at local ports and depots.",
      icon: MapPin,
    },
    {
      title: "Technical Focus",
      description: "A firm understanding of essential technical equipment, from hydraulic machinery to navigation systems.",
      icon: Wrench,
    },
    {
      title: "Reliable Sourcing",
      description: "Direct and straightforward communication for practical sourcing and supply support.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[#00B4D8] font-bold tracking-widest uppercase mb-4 text-sm">
            Service Principles
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A192F] leading-tight">
            Professional Equipment Support
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={index} className="bg-blue-50 p-8 border border-blue-100 hover:border-[#00B4D8]/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#0A192F] text-white flex items-center justify-center mb-6 group-hover:bg-[#00B4D8] transition-colors">
                  <Icon strokeWidth={1.5} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0A192F] mb-4">
                  {principle.title}
                </h3>
                <p className="text-blue-700 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
