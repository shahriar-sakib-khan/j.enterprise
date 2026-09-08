import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

export default function MachineryShowcase() {
  return (
    <section className="py-20 md:py-32 bg-[#0A192F]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Side */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-1 bg-[#00B4D8] block"></span>
              <p className="text-[#00B4D8] font-bold tracking-widest uppercase text-sm">
                Our Inventory
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Heavy Marine Machinery Available for Supply
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed mb-6">
              We maintain a hands-on inventory of substantial marine machinery including large-bore diesel engines, generator units, and propulsion components — sourced and inspected locally from Chattogram's active shipbreaking and vessel maintenance yards.
            </p>
            <p className="text-blue-300 text-lg leading-relaxed mb-10">
              Whether you require a complete engine for refit or major components for overhaul, our team can assess availability and coordinate shipment to your vessel's port of call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#00B4D8] text-white px-8 py-4 font-semibold hover:bg-white hover:text-[#0A192F] transition-colors group"
              >
                Enquire About This Equipment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-blue-500 text-blue-200 px-8 py-4 font-medium hover:bg-blue-900 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative">
            {/* Accent border frame */}
            <div className="absolute -top-3 -right-3 w-full h-full border-2 border-[#00B4D8]/40 rounded-sm pointer-events-none z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/images/machinery.jpg"
                alt="Large marine diesel engine available for supply – M/S. J. Enterprise inventory"
                width={800}
                height={600}
                className="w-full object-cover"
                priority
              />
              {/* Badge overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/60 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#00B4D8] flex items-center justify-center rounded-full shrink-0">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">Large-Bore Marine Diesel Engine</p>
                    <p className="text-blue-300 text-sm">Sitakunda Depot, Chattogram — Available for inspection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
