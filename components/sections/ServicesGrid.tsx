import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-32 bg-[#0A192F]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-16 md:mb-24 max-w-2xl text-center md:text-left mx-auto md:mx-0">
          <p className="text-[#00B4D8] font-bold tracking-widest uppercase mb-4 text-sm">
            Product Categories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Vessel Accessories & Equipment
          </h2>
          <p className="text-blue-300 text-lg">
            We supply a focused range of marine equipment necessary for day-to-day vessel operations and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const indexStr = String(index + 1).padStart(2, "0");
            
            return (
              <Link 
                key={service.id} 
                href={`/services/${service.id}`}
                className="group flex flex-col h-full bg-white border-2 border-blue-200 hover:border-[#00B4D8] border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-48 w-full bg-blue-50 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center justify-between w-[calc(100%-2rem)]">
                    <span className="font-mono text-sm text-white/80">{indexStr}</span>
                    <service.icon className="w-6 h-6 text-white/80" />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#0A192F] mb-3 leading-tight group-hover:text-[#00B4D8] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-blue-700 text-sm mb-6 flex-grow leading-relaxed">
                    {service.shortDescription}
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-semibold text-[#00B4D8] group-hover:text-[#0A192F] transition-colors">
                    View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
