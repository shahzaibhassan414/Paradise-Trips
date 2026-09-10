"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { config, TourPackage } from "@/config";
import BookingModal from "@/components/tours/BookingModal";
import TourCard from "@/components/tours/TourCard";
import { 
  Calendar, 
  MapPin, 
  Star, 
  Clock, 
  Users, 
  Sparkles, 
  Check, 
  X, 
  ChevronRight, 
  MessageCircle, 
  ShieldCheck, 
  ArrowLeft,
  Share2,
  Phone,
  Send,
  Coffee,
  Utensils,
  Backpack,
  AlertCircle,
  Camera,
  ChevronDown,
  Compass,
  CheckCircle2
} from "lucide-react";

export default function SinglePackagePage({ params }: { params: { slug: string } }) {
  const tour = config.tours.find((t) => t.slug === params.slug);
  if (!tour) {
    notFound();
  }

  const [selectedTourForBooking, setSelectedTourForBooking] = useState<TourPackage | null>(null);
  const [selectedSharingPlan, setSelectedSharingPlan] = useState<"quad" | "triple" | "twin" | "privateCouple">("quad");
  const [selectedDate, setSelectedDate] = useState<string>(tour.upcomingDates[0] || "Every Thursday Night");
  const [selectedCity, setSelectedCity] = useState<string>(tour.departureCities[0] || "Lahore");
  const [travelersCount, setTravelersCount] = useState<number>(1);
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  const sharingLabels: Record<string, string> = {
    quad: "Quad Sharing (4 in a Room)",
    triple: "Triple Sharing (3 in a Room)",
    twin: "Twin Sharing (2 in a Room)",
    privateCouple: "Private Dedicated Couple Room",
  };

  const handleWhatsAppInquiry = () => {
    const message = `✨ *TOUR INQUIRY — ${tour.title}* ✨
📍 *Destination:* ${tour.destination}
⏱ *Duration:* ${tour.duration}
🗓 *Preferred Schedule:* ${selectedDate}
🚗 *Departure City:* ${selectedCity}
🛏 *Room Tier:* ${sharingLabels[selectedSharingPlan]}
👥 *Travelers:* ${travelersCount} Person(s)

Hello Paradise Trips & Tours! I would like to inquire about this tour, check seat availability, and finalize our booking.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${config.whatsappNumber}?text=${encoded}`, "_blank");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: tour.title,
        text: tour.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  // Other related tours
  const relatedTours = config.tours.filter((t) => t.id !== tour.id).slice(0, 3);

  return (
    <div className="bg-white min-h-screen pt-20 sm:pt-24 pb-20 sm:pb-24 text-slate-900">
      {/* 1. Breadcrumbs Header */}
      <div className="border-b border-slate-100 bg-slate-50/60 py-3 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-slate-600">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/packages" className="hover:text-slate-900 transition-colors">Expeditions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none">{tour.destination}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>
            <Link
              href="/packages"
              className="inline-flex items-center gap-1 text-brand-primary hover:underline font-bold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Tours</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* 2. Tour Title & Quick Metadata */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2.5">
            <span className="badge-brand-accent px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider">
              {tour.badge || "ROYAL EXPEDITION"}
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-primary" />
              <span>{tour.duration}</span>
            </span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              <span>{tour.destination}</span>
            </span>
            <a 
              href="#itinerary" 
              className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white px-3 py-1 rounded-md text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{tour.itinerary.length} Days Itinerary ↓</span>
            </a>
            <span className="bg-emerald-50 border border-emerald-200/80 text-emerald-800 px-3 py-1 rounded-md text-xs font-bold flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Pvt Ltd • Reg ID: {config.registrationId}</span>
            </span>
            <div className="flex items-center gap-1 text-xs font-bold text-slate-800 ml-auto">
              <Star className="w-4 h-4 text-brand-accent fill-current" />
              <span>{tour.rating.toFixed(1)}</span>
              <span className="text-slate-500 font-normal">({tour.reviewsCount} reviews)</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
            {tour.title}
          </h1>
          <p className="text-slate-600 text-xs sm:text-base lg:text-lg max-w-4xl leading-relaxed">
            {tour.subtitle}
          </p>
        </div>

        {/* 3. Airbnb-Style Photo Showcase (The Mosaic) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 mb-10 sm:mb-12 rounded-2xl overflow-hidden">
          {/* Main Large Photo */}
          <div 
            onClick={() => setActiveGalleryImage(tour.image)}
            className="md:col-span-8 relative aspect-[16/10] md:aspect-[16/11] bg-slate-900 overflow-hidden cursor-pointer group rounded-xl sm:rounded-2xl"
          >
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              priority
              quality={95}
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-xs font-semibold bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700">
                Primary Scenic Vista
              </span>
            </div>
          </div>

          {/* 2 Stacked Side Photos */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4">
            {tour.gallery.slice(1, 3).map((imgUrl, i) => (
              <div
                key={i}
                onClick={() => setActiveGalleryImage(imgUrl)}
                className="relative aspect-[4/3] md:aspect-[16/10] bg-slate-900 overflow-hidden cursor-pointer group rounded-xl sm:rounded-2xl"
              >
                <Image
                  src={imgUrl}
                  alt={`${tour.title} scene ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                
                {/* Floating "View All" pill on last image */}
                {i === 1 && (
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-slate-900/90 hover:bg-slate-900 backdrop-blur-md text-white font-bold text-xs px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5 shadow-lg">
                      <Camera className="w-3.5 h-3.5 text-brand-accent" />
                      <span>View Photos ({tour.gallery.length})</span>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Main 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* =========================================================================
              LEFT COLUMN: 6 Highlights, Narrative, Itinerary, Dining & Guidelines
              ========================================================================= */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-14">

            {/* A. 6 KEY HIGHLIGHTS SECTION (Clean, Prominent Editorial Design) */}
            <div className="border-b border-slate-200 pb-10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-brand-primary" />
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  6 Signature Highlights
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Key landmarks, mountain safaris, and exclusive activities featured in this package:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3.5 hover:border-brand-primary/50 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[var(--brand-primary)] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* B. TRIP OVERVIEW & SPECS */}
            <div className="border-b border-slate-200 pb-10 space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                About This Expedition
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {tour.overview}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block font-medium uppercase text-[10px]">Trip Type</span>
                  <span className="font-bold text-slate-900 mt-0.5 block capitalize">{tour.category} Tour</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block font-medium uppercase text-[10px]">Departures</span>
                  <span className="font-bold text-slate-900 mt-0.5 block">{tour.departureSchedule || "Weekly"}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block font-medium uppercase text-[10px]">Vehicle</span>
                  <span className="font-bold text-slate-900 mt-0.5 block">Grand Cabin / Coaster</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block font-medium uppercase text-[10px]">Guide</span>
                  <span className="font-bold text-slate-900 mt-0.5 block">Certified Mountain Lead</span>
                </div>
              </div>
            </div>

            {/* C. DETAILED DAY-BY-DAY ITINERARY */}
            <div id="itinerary" className="border-b border-slate-200 pb-10 scroll-mt-28">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-primary" />
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Complete Day-by-Day Itinerary ({tour.itinerary.length} Days)
                  </h3>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1 rounded-full shrink-0 border border-slate-200">
                  {tour.days} Days / {tour.nights} Nights
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-8">
                Carefully timed drives, landmark stops, meal intervals, and quality hotel stays:
              </p>

              <div className="relative pl-6 sm:pl-8 space-y-7 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {tour.itinerary.map((dayItem) => (
                  <div key={dayItem.day} className="relative">
                    {/* Numbered marker */}
                    <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-white text-white font-bold text-[11px] flex items-center justify-center shadow-sm">
                      {dayItem.day}
                    </div>

                    <div className="bg-slate-50/90 p-4 sm:p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors shadow-sm">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-primary">
                          Day 0{dayItem.day}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          Milestone 0{dayItem.day}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                        {dayItem.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                        {dayItem.desc}
                      </p>

                      {/* Day Inclusions Quick Tags */}
                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/60 text-[11px] font-semibold text-slate-600">
                        <span className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200">
                          <Coffee className="w-3 h-3 text-amber-600" />
                          <span>Breakfast</span>
                        </span>
                        <span className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200">
                          <Utensils className="w-3 h-3 text-teal-600" />
                          <span>Dinner &amp; BBQ</span>
                        </span>
                        <span className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200">
                          <Compass className="w-3 h-3 text-brand-primary" />
                          <span>Guided Sightseeing</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* D. FOOD MENU & DINING (From PDFs) */}
            <div className="border-b border-slate-200 pb-10">
              <div className="flex items-center gap-2 mb-2">
                <Utensils className="w-5 h-5 text-brand-accent" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Meals &amp; Dining Provided
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Hygienic, freshly prepared meals served throughout the journey.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Breakfast */}
                <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-3">
                    <Coffee className="w-4 h-4 text-amber-600" />
                    <span>Daily Breakfast</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Lahori Channa &amp; Omelet / Egg Fry</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Crispy Pratha / Naan / Fresh Roti</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Piping Hot Mountain Chai / Tea</span>
                    </li>
                  </ul>
                </div>

                {/* Dinner & BBQ */}
                <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200/80">
                  <div className="flex items-center gap-2 text-teal-900 font-bold text-sm mb-3">
                    <Utensils className="w-4 h-4 text-teal-700" />
                    <span>Grand Dinners &amp; Live BBQ</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                      <span>Chicken Karahi / Biryani / Seasonal Daal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                      <span>Live Campfire Chicken BBQ Musical Night</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                      <span>Fresh Salad, Mint Raita, Hot Roti &amp; Drinks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* E. INCLUSIONS & EXCLUSIONS */}
            <div className="border-b border-slate-200 pb-10">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-6">
                Included &amp; Excluded Services
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-3 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-teal-600" />
                    <span>Included in Tour Package</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {tour.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-3 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-rose-500" />
                    <span>Not Included</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {tour.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* F. ESSENTIAL GUIDELINES & PACKING LIST */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Backpack className="w-5 h-5 text-slate-700" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Trip Essentials &amp; Guidelines
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Warm Mountain Layers:</strong>
                  Fleece jackets, thermal inners, woolen socks, and rain poncho / umbrella for unpredictable mountain weather.
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Footwear:</strong>
                  Sturdy hiking boots or comfortable joggers with solid grip for rocky trails.
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Mandatory CNIC / Passport:</strong>
                  Original National ID Card is required for security checkpoints along the Karakoram Highway.
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Personal Care &amp; Power:</strong>
                  Personal medications, lip balm, sunscreen, and high-capacity power banks.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 text-slate-300 text-xs leading-relaxed space-y-1.5">
                <div className="flex items-center gap-2 text-brand-accent font-bold mb-1">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Room Sharing &amp; Operational Notes</span>
                </div>
                <p>
                  • <strong>Room Sharing:</strong> 4/5 person sharing provides standard 2/3 beds + comfortable mattresses. Dedicated private couple rooms are provided on couple tier.<br />
                  • <strong>Vehicle Protocol:</strong> On steep high-altitude ascents, vehicle AC is regulated to keep engine temperatures optimal. Smoking inside buses is strictly prohibited.<br />
                  • <strong>Eco Responsibility:</strong> Please do not litter on trails or glacial lakes. Leave nothing but footprints.
                </p>
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: Sleek Sticky Booking & Inquiry Card
              ========================================================================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200/90 text-slate-900 space-y-5">
              
              {/* Header Box */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary block mb-1">
                  All-Inclusive Package
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Reserve Your Spot
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Transport, hotels, guided tours &amp; meals included.
                </p>
              </div>

              {/* 1. Room / Sharing Preference */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Room Sharing Tier
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: "quad", label: "Quad (4 Sharing)" },
                    { key: "triple", label: "Triple (3 Sharing)" },
                    { key: "twin", label: "Twin (2 Sharing)" },
                    { key: "privateCouple", label: "Couple Private Room" },
                  ].map((plan) => (
                    <button
                      key={plan.key}
                      type="button"
                      onClick={() => setSelectedSharingPlan(plan.key as any)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all ${
                        selectedSharingPlan === plan.key
                          ? "border-brand-primary bg-[var(--brand-primary-light)] text-[var(--brand-primary-dark)] ring-2 ring-[var(--brand-primary)]/20 shadow-sm"
                          : "border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50"
                      }`}
                    >
                      {plan.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Departure Date */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  2. Departure Schedule
                </label>
                <div className="relative">
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-brand-primary text-xs font-semibold text-slate-800 bg-slate-50"
                  >
                    {tour.upcomingDates.map((d, i) => (
                      <option key={i} value={d}>{d}</option>
                    ))}
                  </select>
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              {/* 3. Departure City */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  3. Departure City
                </label>
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-brand-primary text-xs font-semibold text-slate-800 bg-slate-50"
                  >
                    {tour.departureCities.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              {/* 4. Number of Travelers */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  4. Travelers / Seats
                </label>
                <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Users className="w-4 h-4 text-slate-500" />
                    <span>Seats Needed:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setTravelersCount(Math.max(1, travelersCount - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center text-xs"
                    >
                      -
                    </button>
                    <span className="font-bold text-sm text-slate-900 w-6 text-center">
                      {travelersCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTravelersCount(travelersCount + 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Book via WhatsApp</span>
                </button>

                <button
                  onClick={() => setSelectedTourForBooking(tour)}
                  className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-slate-600" />
                  <span>Inquire with Form</span>
                </button>

                <a
                  href="#itinerary"
                  className="w-full py-2 text-center block text-xs font-bold text-brand-primary hover:underline"
                >
                  View Day-by-Day Itinerary ({tour.itinerary.length} Days) ↓
                </a>
              </div>

              {/* Trust & Support */}
              <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px] text-slate-600">
                <div className="flex items-center gap-2 text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200/70 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Govt. Registered Pvt Ltd (Reg: {config.registrationId})</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                  <span>Verified Family Safe &amp; Solo Female Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  <span>Direct Hotline: <strong className="text-slate-800">+92 323 7266292</strong></span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 5. Bottom Related Expeditions */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Other Popular Expeditions
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">Explore more northern valleys and alpine adventures</p>
            </div>
            <Link
              href="/packages"
              className="text-xs sm:text-sm font-bold text-brand-primary hover:underline flex items-center gap-1"
            >
              <span>View All Tours</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedTours.map((relTour) => (
              <TourCard
                key={relTour.id}
                tour={relTour}
                onBookNow={(t) => setSelectedTourForBooking(t)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox / Full Image Viewer */}
      {activeGalleryImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveGalleryImage(null)}
        >
          <div className="relative max-w-4xl w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={activeGalleryImage}
              alt="Gallery Preview"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setActiveGalleryImage(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        tour={selectedTourForBooking}
        isOpen={!!selectedTourForBooking}
        onClose={() => setSelectedTourForBooking(null)}
      />
    </div>
  );
}
