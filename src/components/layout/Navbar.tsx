"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { config } from "@/config";
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  MessageCircle,
  ChevronRight,
  Send,
  Calendar
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tours & Packages", href: "/packages" },
    { name: "Craft Tour", href: "/craft-your-tour" },
    { name: "By Air", href: "/by-air" },
    { name: "Moments", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-bar */}
      <div className={`hidden lg:block transition-all duration-200 text-xs ${
        isScrolled 
          ? "bg-slate-900 text-slate-300 py-1.5 border-b border-slate-800" 
          : "bg-slate-950/80 backdrop-blur-md text-slate-200 py-2 border-b border-white/10"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0" />
              <a href={`tel:${config.phone}`} className="hover:text-brand-accent transition-colors font-medium">
                {config.phone}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span className="font-medium text-slate-300">{config.addresses.lahore}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 font-medium text-xs flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-accent" />
              <span>Weekly Departures Every Thursday & Friday</span>
            </span>
            <span className="text-slate-600">|</span>
            <Link 
              href={config.whatsappLink} 
              target="_blank" 
              className="text-brand-accent hover:opacity-80 font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Support</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 text-slate-900 border-b border-slate-200/80" 
          : "bg-gradient-to-b from-slate-950/85 via-slate-950/50 to-transparent py-3 sm:py-4 text-white"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-sm shrink-0 bg-slate-900 border border-slate-700/50 ring-2 ring-[var(--brand-primary)]/20">
              <Image
                src="/images/logo.png"
                alt="Paradise Trips & Tours Logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-base sm:text-xl font-extrabold tracking-tight leading-none ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}>
                Paradise <span className={isScrolled ? "text-brand-primary" : "text-brand-accent"}>Trips</span>
              </span>
              <span className={`text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold mt-0.5 ${
                isScrolled ? "text-slate-500" : "text-slate-300"
              }`}>
                Trips &amp; Tours
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors relative ${
                    isActive
                      ? isScrolled
                        ? "text-[var(--brand-primary-dark)] font-bold bg-[var(--brand-primary-light)]"
                        : "text-white font-bold bg-white/15"
                      : isScrolled
                      ? "text-slate-600 hover:text-brand-primary hover:bg-slate-100/70"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <Link
              href="/craft-your-tour"
              className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-all whitespace-nowrap ${
                isScrolled 
                  ? "border-slate-300 text-slate-700 hover:border-brand-primary hover:text-brand-primary hover:bg-[var(--brand-primary-light)]" 
                  : "border-white/40 text-white hover:bg-white/15 hover:border-white"
              }`}
            >
              Plan Custom Tour
            </Link>
            
            <Link
              href={config.whatsappLink}
              target="_blank"
              className="btn-brand-primary text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-sm whitespace-nowrap flex items-center gap-1.5 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2.5 rounded-xl transition-all flex items-center justify-center active:scale-95 min-w-[44px] min-h-[44px] ${
                isScrolled 
                  ? "text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200" 
                  : "text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md"
              }`}
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5 shrink-0" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-950 text-white flex flex-col justify-between p-5 sm:p-6 animate-fade-in overflow-y-auto overscroll-contain">
          {/* Mobile Drawer Header */}
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-900 border border-slate-700/50 shrink-0">
                  <Image src="/images/logo.png" alt="Paradise Trips & Tours" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-extrabold text-white leading-none">
                    Paradise <span className="text-brand-accent">Trips</span>
                  </span>
                  <span className="text-[9px] uppercase font-semibold text-slate-400 mt-0.5">
                    Central Park Lahore
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 rounded-full bg-slate-800 active:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 shrink-0" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-1.5 pt-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-xl font-medium text-base transition-colors min-h-[48px] ${
                      isActive
                        ? "bg-[var(--brand-primary-light)]/20 text-brand-accent font-bold border border-[var(--brand-primary)]/40 shadow-sm"
                        : "text-slate-300 hover:bg-slate-800/80 hover:text-white active:bg-slate-800"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Drawer Bottom CTAs */}
          <div className="pt-5 border-t border-slate-800 flex flex-col gap-3 pb-6">
            <Link
              href="/craft-your-tour"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors border border-slate-700 min-h-[46px] flex items-center justify-center"
            >
              Plan Custom Tour
            </Link>

            <Link
              href={config.whatsappLink}
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-brand-primary w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-bold text-sm shadow-md min-h-[46px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Contact on WhatsApp</span>
            </Link>

            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-1">
              <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0" />
              <span>Direct Hotline:</span>
              <a href={`tel:${config.phone}`} className="text-brand-accent font-bold hover:underline">
                {config.phone}
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <Link
                href={config.socials.instagram}
                target="_blank"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[var(--brand-primary)] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                aria-label="Instagram"
              >
                <svg width="16" height="16" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link
                href={config.socials.facebook}
                target="_blank"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[var(--brand-primary)] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                aria-label="Facebook"
              >
                <svg width="16" height="16" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
