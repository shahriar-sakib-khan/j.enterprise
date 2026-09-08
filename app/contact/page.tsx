"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    setTimeout(() => {
      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section className="bg-[#0A192F] text-white py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Our Team
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              Request an enquiry or discuss your vessel equipment requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-32 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Contact Details Sidebar */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="bg-[#0A192F] text-white p-8 sticky top-32">
                <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center text-[#00B4D8] mb-3 font-semibold">
                      <Mail className="w-5 h-5 mr-3" />
                      Email
                    </div>
                    <a href={`mailto:${siteConfig.email}`} className="text-blue-200 hover:text-white transition-colors text-lg">
                      {siteConfig.email}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center text-[#00B4D8] mb-3 font-semibold">
                      <Phone className="w-5 h-5 mr-3" />
                      Phone
                    </div>
                    {siteConfig.phone.map((phone, i) => (
                      <div key={i} className="mb-2">
                        <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-blue-200 hover:text-white transition-colors text-lg block">
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>

                  {siteConfig.locations.map((loc, i) => (
                    <div key={i}>
                      <div className="flex items-center text-[#00B4D8] mb-3 font-semibold">
                        <MapPin className="w-5 h-5 mr-3" />
                        {loc.type}
                      </div>
                      <address className="not-italic text-blue-200 leading-relaxed">
                        {loc.address}<br />
                        {loc.street}<br />
                        {loc.city}<br />
                        {loc.country}
                      </address>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-[#0A192F] mb-4">Request an Enquiry</h2>
                <p className="text-[#0A192F]">Please provide details about your requirement and our team will respond promptly.</p>
              </div>

              {/* Success State */}
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-20 px-8 bg-[#0A192F] rounded-sm">
                  <div className="w-20 h-20 rounded-full bg-[#00B4D8]/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#00B4D8]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Enquiry Sent Successfully</h3>
                  <p className="text-blue-200 text-lg max-w-md leading-relaxed mb-8">
                    Thank you for reaching out. Our team will review your request and get back to you within 1–2 business days.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="inline-flex items-center justify-center border border-blue-600 text-blue-200 px-8 py-3 font-medium hover:bg-blue-900 transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#0A192F] mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 bg-white border border-blue-200 focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] outline-none transition-colors text-[#0A192F]"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-[#0A192F] mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 bg-white border border-blue-200 focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] outline-none transition-colors text-[#0A192F]"
                        placeholder="Company or Vessel Operator"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#0A192F] mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-white border border-blue-200 focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] outline-none transition-colors text-[#0A192F]"
                        placeholder="Email Address"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#0A192F] mb-2">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-3 bg-white border border-blue-200 focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] outline-none transition-colors text-[#0A192F]"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="vesselName" className="block text-sm font-semibold text-[#0A192F] mb-2">Vessel Name</label>
                      <input
                        type="text"
                        id="vesselName"
                        className="w-full px-4 py-3 bg-white border border-blue-200 focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] outline-none transition-colors text-[#0A192F]"
                        placeholder="Vessel Name (if applicable)"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-[#0A192F] mb-2">Service / Equipment Required *</label>
                      <select
                        id="service"
                        required
                        className="w-full px-4 py-3 bg-white border border-blue-200 focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] outline-none transition-colors appearance-none text-[#0A192F]"
                      >
                        <option value="">Select a category</option>
                        {services.map(s => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                        <option value="other">Other / General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#0A192F] mb-2">Message *</label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-blue-200 focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] outline-none transition-colors resize-y text-[#0A192F]"
                      placeholder="Provide details about your requirement..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="inline-flex items-center justify-center bg-[#0A192F] text-white px-8 py-4 font-semibold hover:bg-[#00B4D8] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Enquiry
                        <Send className="w-4 h-4 ml-3" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
