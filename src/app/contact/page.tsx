"use client";

import React, { useState } from "react";
import Link from "next/link";
import { config } from "@/config";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Hunza Valley");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waMsg = `✨ *NEW WEBSITE INQUIRY* ✨
*Name:* ${name}
*Phone/WhatsApp:* ${phone}
*Interested Destination:* ${destination}
*Message:* ${message || "General inquiry"}

Please reach out to me!`;

    const waUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 600);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2.5 sm:mb-3">
            Contact <span className="text-brand-accent">Paradise Trips &amp; Tours</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have inquiries about group departures, luxury VIP seats, bespoke air tours, or corporate retreats? Connect directly with our lead travel directors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Left Col: Contact Info & Offices (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Direct Support Channels</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--brand-primary-light)] text-[var(--brand-primary-dark)] flex items-center justify-center shrink-0 border border-brand-primary/20">
                  <Phone className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Call / WhatsApp Hotline</div>
                  <a href={`tel:${config.phone}`} className="text-base font-bold text-slate-900 hover:text-brand-primary transition-colors">
                    {config.phone}
                  </a>
                  <div className="text-xs text-brand-primary font-medium mt-0.5">Available 9:00 AM - 11:00 PM Daily</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--brand-primary-light)] text-[var(--brand-primary-dark)] flex items-center justify-center shrink-0 border border-brand-primary/20">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Official Inquiries</div>
                  <a href={`mailto:${config.email}`} className="text-sm font-semibold text-slate-800 hover:text-brand-primary transition-colors">
                    {config.email}
                  </a>
                </div>
              </div>

              {/* Instant WhatsApp CTA Button & Social Links */}
              <div className="pt-2 space-y-3">
                <Link
                  href={config.whatsappLink}
                  target="_blank"
                  className="btn-brand-primary w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Now</span>
                </Link>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <Link
                    href={config.socials.instagram}
                    target="_blank"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-bold transition-all"
                  >
                    <svg width="16" height="16" className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </Link>

                  <Link
                    href={config.socials.facebook}
                    target="_blank"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-bold transition-all"
                  >
                    <svg width="16" height="16" className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/>
                    </svg>
                    <span>Facebook</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Office Location Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 border border-slate-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Our Head Office</span>
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              </h3>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Lahore Head Office</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    {config.addresses.lahore}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-brand-accent text-[11px] font-semibold">
                    <span>Mon - Sun: 9:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Entity & SECP Registration */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-emerald-500/30 text-slate-800 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Govt. Registered (Pvt) Ltd</h4>
                  <p className="text-xs text-emerald-700 font-bold">
                    Registration ID: {config.registrationId}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Officially incorporated as <strong>{config.legalName}</strong> — certified tourism operator in Pakistan.
              </p>
            </div>
          </div>

          {/* Right Col: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/90">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Send Us A Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below and our team will get back to you with all answers and tailored itinerary options.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--brand-primary-light)] text-[var(--brand-primary)] flex items-center justify-center mb-3">
                    <CheckCircle className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Message Sent!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed mb-5">
                    Thank you! We have opened WhatsApp so you can instantly talk with our trip coordinator.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Shahzaib Khan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-[var(--brand-primary)]/20 text-base sm:text-sm font-medium text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0323 7266292"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-[var(--brand-primary)]/20 text-base sm:text-sm font-medium text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Interested Destination / Tour Type
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-[var(--brand-primary)]/20 text-base sm:text-sm font-medium text-slate-800 bg-white"
                    >
                      <option value="Hunza Valley & Passu Cones">Hunza Valley & Passu (5 Days)</option>
                      <option value="Skardu, Deosai & Lakes">Skardu, Deosai & Lakes (6 Days)</option>
                      <option value="Skardu By Air Luxury">Skardu By Air Luxury Escape (7 Days)</option>
                      <option value="Fairy Meadows & Nanga Parbat">Fairy Meadows & Nanga Parbat (5 Days)</option>
                      <option value="Kumrat Valley & Katora Lake">Kumrat Valley & Katora Lake (4 Days)</option>
                      <option value="Swat & Malam Jabba">Swat & Malam Jabba Weekend (3 Days)</option>
                      <option value="Custom Private Tour">Custom Private Tour (Family / Squad)</option>
                      <option value="General Inquiry">General Inquiry / Booking Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Message / Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your desired travel dates, number of people, or any questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-3 sm:py-2.5 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-[var(--brand-primary)]/20 text-base sm:text-sm font-medium text-slate-800 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-slate-900 hover:bg-[var(--brand-primary)] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all active:scale-95 min-h-[48px]"
                  >
                    <Send className="w-4 h-4 text-brand-accent" />
                    <span>Send Message via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Nationwide Operational Offices (7 Branches) */}
        <div className="mt-14 sm:mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-brand-primary font-bold uppercase tracking-wider text-xs block mb-1">
              Nationwide Presence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our 7 Operational Offices Across Pakistan
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Visit our head office in Lahore or connect with our regional branches across Multan, Haroonabad, Chishtian, Gujranwala, Sialkot, and Rawalpindi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {config.offices.map((office, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all hover:shadow-md ${
                  office.isHeadOffice
                    ? "bg-slate-900 text-white border-slate-800 shadow-sm col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-1"
                    : "bg-white text-slate-800 border-slate-200/90"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      office.isHeadOffice
                        ? "bg-brand-accent text-slate-950 font-extrabold"
                        : "bg-brand-primary/10 text-brand-primary font-semibold"
                    }`}
                  >
                    {office.type}
                  </span>
                  <MapPin
                    className={`w-4 h-4 ${
                      office.isHeadOffice ? "text-brand-accent" : "text-slate-400"
                    }`}
                  />
                </div>

                <h3
                  className={`font-extrabold text-base mb-1 ${
                    office.isHeadOffice ? "text-white" : "text-slate-900"
                  }`}
                >
                  {office.city}
                </h3>
                <p
                  className={`text-xs mb-4 leading-relaxed ${
                    office.isHeadOffice ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {office.address}
                </p>

                <div className="pt-3 border-t border-slate-200/40 flex items-center justify-between text-xs">
                  <span
                    className={`font-semibold ${
                      office.isHeadOffice ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {office.phone}
                  </span>
                  <Link
                    href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
                      `Hi Paradise Trips & Tours! I would like to inquire about visits/services at your ${office.city} office.`
                    )}`}
                    target="_blank"
                    className={`font-bold hover:underline ${
                      office.isHeadOffice ? "text-brand-accent" : "text-brand-primary"
                    }`}
                  >
                    Inquire →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
