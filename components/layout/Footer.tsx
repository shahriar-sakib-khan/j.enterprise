import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A192F] text-slate-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative overflow-hidden rounded-full bg-white flex items-center justify-center shrink-0">
                <Image 
                  src="/logo/logo.png" 
                  alt="Logo" 
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="font-bold text-2xl tracking-tight flex flex-col text-white">
                <span>{siteConfig.businessName}</span>
                <span className="text-sm text-blue-200 uppercase tracking-widest">{siteConfig.shortName}</span>
              </div>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed max-w-sm mt-4">
              {siteConfig.description}
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="flex flex-col gap-3 text-sm text-blue-200">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="flex flex-col gap-3 text-sm text-blue-200">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="flex flex-col gap-4 text-sm text-blue-200">
              <li>
                <span className="block font-semibold text-white mb-1">Head Office:</span>
                {siteConfig.locations[0].address}, {siteConfig.locations[0].street}, {siteConfig.locations[0].city}
              </li>
              <li>
                <span className="block font-semibold text-white mb-1">Email:</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phone.map((phone, i) => (
                <li key={i}>
                  <span className="block font-semibold text-white mb-1">Phone:</span>
                  <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <p>
            &copy; {currentYear} {siteConfig.businessName} / {siteConfig.shortName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
