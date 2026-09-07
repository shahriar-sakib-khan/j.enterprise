import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import MarineVisual from "@/components/sections/MarineVisual";
import Brands from "@/components/sections/Brands";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${siteConfig.businessName}, providing marine equipment and vessel accessories.`,
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-[#0A192F] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About the Company
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Based in Chattogram, {siteConfig.businessName} provides vital vessel accessories and equipment to support marine operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-3xl font-bold text-[#0A192F] mb-6">
                  Company Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Legal Name</h3>
                    <p className="text-lg font-medium text-[#2A2A2A]">{siteConfig.businessName}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Operating As</h3>
                    <p className="text-lg font-medium text-[#2A2A2A]">{siteConfig.shortName}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Proprietor</h3>
                    <p className="text-lg font-medium text-[#2A2A2A]">{siteConfig.proprietor}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Head Office</h3>
                    <p className="text-lg font-medium text-[#2A2A2A]">Chattogram, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8 prose prose-lg max-w-none text-gray-600">
              <p className="text-xl text-[#0A192F] font-medium leading-relaxed mb-8">
                {siteConfig.businessName} ({siteConfig.shortName}) focuses on the supply and sourcing of essential marine equipment for commercial vessels, maritime operations, and industrial applications.
              </p>
              
              <p>
                Strategically located in Chattogram, a major maritime hub, we understand the operational urgency required by ship owners, managers, and marine engineers. Our presence includes a dedicated depot in Sitakunda and a head office in the Agrabad Commercial Area, allowing us to maintain close proximity to major port operations and vessel maintenance facilities.
              </p>

              <h3 className="text-2xl font-bold text-[#0A192F] mt-12 mb-6">Business Focus</h3>
              
              <p>
                We specialize in technical vessel accessories across key categories including:
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-8 list-none pl-0">
                <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-[#00B4D8] before:mr-3">Navigation Equipment</li>
                <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-[#00B4D8] before:mr-3">Vessel Hydraulic Equipment</li>
                <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-[#00B4D8] before:mr-3">Sling Pumps & Oil Separators</li>
                <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-[#00B4D8] before:mr-3">Air Compressors</li>
                <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-[#00B4D8] before:mr-3">Diesel Engines & Generator Sets</li>
                <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-[#00B4D8] before:mr-3">Freezer Machine Accessories</li>
              </ul>

              <p>
                Our philosophy is straightforward: provide clear communication, reliable technical equipment, and practical sourcing support for the maritime industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MarineVisual />
      <Brands />
    </div>
  );
}
