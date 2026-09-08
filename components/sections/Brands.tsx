import { siteConfig } from "@/lib/site-config";

export default function Brands() {
  return (
    <section className="py-20 bg-blue-950 border-y border-blue-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-1 bg-[#00B4D8] block"></span>
            <p className="text-[#00B4D8] font-bold tracking-widest uppercase text-sm">Brands We Work With</p>
            <span className="w-8 h-1 bg-[#00B4D8] block"></span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Equipment & Brands
          </h2>
          <p className="text-blue-300 text-sm max-w-xl mx-auto">
            Equipment and brand names shown are based on the company's current service information and do not imply exclusive partnership or authorization unless specified.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
          {siteConfig.brands.map((brand) => (
            <div key={brand} className="text-2xl md:text-3xl font-black tracking-tighter text-blue-200 uppercase border-b-2 border-[#00B4D8] pb-1 hover:text-white hover:border-white transition-colors">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

