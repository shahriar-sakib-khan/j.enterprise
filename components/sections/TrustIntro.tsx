import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function TrustIntro() {
  return (
    <section className="py-20 md:py-32 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="relative h-[400px] md:h-[600px] w-full rounded-sm overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2574&auto=format&fit=crop"
              alt="Marine Equipment and Vessel Operations"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-2 h-full bg-[#00B4D8]"></div>
          </div>

          <div className="pl-0 lg:pl-10">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-1 bg-[#00B4D8] block"></span>
              <p className="text-[#00B4D8] font-bold tracking-widest uppercase text-sm">
                About {siteConfig.shortName}
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A192F] leading-tight mb-8">
              Marine equipment support for vessel operations
            </h2>
            
            <div className="space-y-6 text-slate-200 text-lg mb-10 leading-relaxed">
              <p>
                Based in Chattogram, <strong className="text-[#0A192F] font-semibold">{siteConfig.businessName}</strong> provides vital vessel accessories and equipment to support marine operations.
              </p>
              <p>
                Operating as {siteConfig.shortName}, we supply a wide range of specialized marine equipment including navigation systems, hydraulic machinery, pumps, and engine components, focusing on operational reliability.
              </p>
            </div>
            
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center bg-[#0A192F] text-white px-8 py-4 font-medium hover:bg-[#00B4D8] transition-colors group shadow-md"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
