"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { stockInventory, stockCategories, StockItem } from "@/lib/stock-data";
import { ArrowRight, Settings2, CheckCircle2 } from "lucide-react";

export default function StockPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStock = activeCategory === "All"
    ? stockInventory
    : stockInventory.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#EFF6FF] pt-24 pb-16">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold text-[#0A192F] mb-4">Our Available Stock</h1>
          <p className="text-lg text-[#0A192F]/80">
            Browse our current inventory of heavy marine machinery, genuine spare parts, and specialized equipment. 
            All items are inspected and ready for immediate dispatch from our Sitakunda depot.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {stockCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[#0A192F] text-white"
                  : "bg-white text-[#0A192F] hover:bg-blue-100 border border-blue-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stock Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStock.map((item: StockItem) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-blue-100 group flex flex-col">
              {/* Image Container */}
              <div className="relative h-64 w-full bg-blue-50 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#0A192F] shadow-sm">
                  {item.category}
                </div>
                <div className="absolute top-4 right-4 bg-[#0A192F] px-3 py-1 rounded-full text-xs font-semibold text-[#00B4D8] shadow-sm flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {item.condition}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {item.brand && (
                  <p className="text-xs font-bold text-[#00B4D8] uppercase tracking-wider mb-2">
                    {item.brand}
                  </p>
                )}
                <h3 className="text-xl font-bold text-[#0A192F] mb-3">{item.name}</h3>
                <p className="text-sm text-[#0A192F]/70 mb-6 line-clamp-2">
                  {item.description}
                </p>

                {/* Specs */}
                <div className="bg-[#EFF6FF] rounded-lg p-4 mb-6 mt-auto">
                  <div className="flex items-center gap-2 mb-3 text-[#0A192F] font-semibold text-sm">
                    <Settings2 className="w-4 h-4 text-[#00B4D8]" />
                    Key Specifications
                  </div>
                  <dl className="space-y-2 text-sm">
                    {Object.entries(item.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-blue-100 pb-1 last:border-0 last:pb-0">
                        <dt className="text-[#0A192F]/60">{key}</dt>
                        <dd className="font-medium text-[#0A192F] text-right ml-4">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* CTA */}
                <Link 
                  href={`/contact?subject=Enquiry regarding ${encodeURIComponent(item.name)} (ID: ${item.id})`}
                  className="flex items-center justify-center gap-2 w-full bg-[#0A192F] text-white py-3 rounded-lg font-semibold hover:bg-[#112240] transition-colors"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {filteredStock.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-[#0A192F] mb-2">No items found</h3>
            <p className="text-[#0A192F]/60">We currently don't have any stock matching this category online. Please contact us for our full inventory.</p>
          </div>
        )}

      </div>
    </main>
  );
}
