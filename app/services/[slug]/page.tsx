import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.id === resolvedParams.slug);
  if (!service) return { title: "Service Not Found" };
  return { title: service.title, description: service.shortDescription };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.id === resolvedParams.slug);

  if (!service) notFound();

  const Icon = service.icon;

  return (
    <div className="pt-20 bg-[#0A192F] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#112240] border-b border-blue-900 py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center text-sm text-blue-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white font-medium">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0A192F] text-white py-20 md:py-24 relative overflow-hidden border-b border-blue-900">
        <Icon className="absolute -right-12 -bottom-12 w-64 h-64 text-white/5" strokeWidth={1} />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-[#00B4D8]/20 flex items-center justify-center mb-8 border border-[#00B4D8]/30">
              <Icon className="w-8 h-8 text-[#00B4D8]" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {service.title}
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed mb-10 max-w-2xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 bg-[#0A192F]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold text-white mb-6">Equipment Overview</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                {siteConfig.shortName} provides reliable sourcing and supply for {service.title.toLowerCase()}. We understand the critical nature of marine equipment and focus on supporting the operational requirements of commercial vessels.
              </p>
              
              <div className="bg-[#112240] p-8 border border-blue-800 my-10">
                <h3 className="text-xl font-bold text-white mt-0 mb-4">Request this Equipment</h3>
                <p className="text-blue-200 text-base mb-6">
                  For specific availability, technical requirements, or to place an enquiry for {service.title.toLowerCase()}, please contact our team directly.
                </p>
                <Link 
                  href={`/contact?service=${service.id}`}
                  className="inline-flex items-center justify-center bg-[#00B4D8] text-white px-6 py-3 font-semibold hover:bg-white hover:text-[#0A192F] transition-colors"
                >
                  Send an Enquiry
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-[#112240] border border-blue-800 p-8 sticky top-32">
                <h3 className="text-xl font-bold text-white mb-6">Other Categories</h3>
                <ul className="space-y-4">
                  {services.filter(s => s.id !== service.id).map(s => (
                    <li key={s.id}>
                      <Link 
                        href={`/services/${s.id}`}
                        className="group flex items-center text-blue-200 hover:text-[#00B4D8] transition-colors py-1"
                      >
                        <s.icon className="w-5 h-5 mr-3 text-blue-400 group-hover:text-[#00B4D8] transition-colors shrink-0" />
                        <span className="font-medium">{s.title}</span>
                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
