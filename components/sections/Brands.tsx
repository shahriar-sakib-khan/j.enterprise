import { siteConfig } from "@/lib/site-config";

export default function Brands() {
  return (
    <section className="py-20 bg-[#F8F9FA] border-y border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-[#0A192F] mb-4">
            Equipment & Brands
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Equipment and brand names shown are based on the company's current service information and do not imply exclusive partnership or authorization unless specified.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-60 grayscale">
          {siteConfig.brands.map((brand) => (
            <div key={brand} className="text-2xl md:text-3xl font-black tracking-tighter text-[#0A192F] uppercase">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
