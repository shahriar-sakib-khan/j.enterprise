import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-[650px] md:min-h-[750px] flex items-center pt-20">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[#0A192F]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 25, 47, 0.9) 0%, rgba(10, 25, 47, 0.7) 100%), url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2670&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[#00B4D8] font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
            {siteConfig.shortName}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Marine Equipment & Vessel Support
          </h1>
          <p className="text-lg md:text-xl text-blue-200 mb-10 max-w-2xl leading-relaxed">
            Supplying vital vessel accessories and marine equipment for operational requirements in Chattogram and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-[#00B4D8] text-white px-8 py-4 font-medium hover:bg-white hover:text-[#0A192F] transition-colors text-center"
            >
              Request an Enquiry
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center border border-slate-400 text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors group text-center"
            >
              Explore Services 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
