import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Products",
  description: `Vessel accessories and marine equipment provided by ${siteConfig.businessName}.`,
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="bg-[#0A192F] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Services & Products
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Technical equipment and vessel accessories for marine operations, maintenance, and industrial requirements.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-[#00B4D8] font-semibold hover:text-white transition-colors group"
            >
              <span className="border-b-2 border-[#00B4D8] group-hover:border-white pb-1 mr-2 transition-colors">
                Discuss Your Requirement
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <ServicesGrid />
    </div>
  );
}
