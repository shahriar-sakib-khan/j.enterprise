import { siteConfig } from "@/lib/site-config";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

export default function Locations() {
  return (
    <section className="py-20 md:py-32 bg-[#0A192F] text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[#00B4D8] font-bold tracking-widest uppercase mb-4 text-sm">
            Our Presence
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Chattogram Operations
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {siteConfig.locations.map((location, index) => (
            <div key={index} className="bg-[#112240] p-8 md:p-10 border border-blue-800/50 relative overflow-hidden">
              <Building2 className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-[#00B4D8]">
                  <MapPin className="w-6 h-6 mr-3" />
                  {location.type}
                </h3>
                
                <address className="not-italic text-lg text-blue-200 leading-relaxed mb-8">
                  {location.address}<br />
                  {location.street}<br />
                  {location.city}<br />
                  {location.country}
                </address>

                {/* Adding contact details directly in the location card for easier access */}
                <div className="space-y-3 pt-6 border-t border-blue-800">
                  <div className="flex items-center text-blue-200 hover:text-white transition-colors">
                    <Mail className="w-5 h-5 mr-4 text-[#00B4D8]" />
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </div>
                  {index === 0 && siteConfig.phone.map((phone, i) => (
                    <div key={i} className="flex items-center text-blue-200 hover:text-white transition-colors">
                      <Phone className="w-5 h-5 mr-4 text-[#00B4D8]" />
                      <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>{phone}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
