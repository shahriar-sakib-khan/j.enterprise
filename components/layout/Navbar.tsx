"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Our Stock", href: "/stock" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0A192F]/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 relative overflow-hidden rounded-full bg-white flex items-center justify-center shrink-0">
              <Image 
                src="/logo/logo.png" 
                alt="Logo" 
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="font-bold text-xl md:text-2xl text-white tracking-tight flex flex-col drop-shadow-md">
              <span>{siteConfig.businessName}</span>
              <span className="text-xs text-blue-200 uppercase tracking-widest">{siteConfig.shortName}</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white hover:text-[#00B4D8] transition-colors drop-shadow-md"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#00B4D8] text-white px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-[#0A192F] transition-colors shadow-md"
            >
              Request an Enquiry
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white drop-shadow-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0A192F] shadow-lg border-t border-blue-800 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white py-2 border-b border-blue-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#00B4D8] text-white px-5 py-3 text-center font-medium mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request an Enquiry
          </Link>
        </div>
      )}
    </header>
  );
}
