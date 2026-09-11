"use client";

import React, { useState, useMemo } from "react";
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
  ChevronDown,
  ChevronUp,
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
  Compass,
  CheckCircle2,
  Bus,
  Award,
  Layers,
  HelpCircle,
  ChevronLeft
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
  const [galleryModalIndex, setGalleryModalIndex] = useState<number | null>(null);
  const [activeItineraryDay, setActiveItineraryDay] = useState<number>(1);
  const [itineraryViewMode, setItineraryViewMode] = useState<"timeline" | "tabbed">("timeline");
  const [expandedTimelineDay, setExpandedTimelineDay] = useState<number | null>(null);
  const [activeDetailsTab, setActiveDetailsTab] = useState<"inclusions" | "dining" | "guidelines">("inclusions");

  const sharingPlans = [
    { key: "quad" as const, label: "Quad Sharing", sub: "4 in a Room" },
    { key: "triple" as const, label: "Triple Sharing", sub: "3 in a Room" },
    { key: "twin" as const, label: "Twin Sharing", sub: "2 in a Room" },
    { key: "privateCouple" as const, label: "Private Couple", sub: "Dedicated Room" },
  ];

  const handleWhatsAppInquiry = () => {
    const planLabel = sharingPlans.find((p) => p.key === selectedSharingPlan)?.label || "Quad Sharing";
    const message = `✨ *TOUR INQUIRY — ${tour.title}* ✨
📍 *Destination:* ${tour.destination}
⏱ *Duration:* ${tour.duration}
🗓 *Selected Schedule:* ${selectedDate}
🚗 *Departure City:* ${selectedCity}
🛏 *Room Tier:* ${planLabel}
👥 *Travelers:* ${travelersCount} Person(s)

Hello Paradise Trips & Tours! I would like to inquire about this tour, check seat availability, and get the official package quotation.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${config.whatsappNumber}?text=${encoded}`, "_blank");
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: tour.title,
        text: tour.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  // Gallery items combining cover and gallery
  const allImages = useMemo(() => {
    const list = [tour.image, ...(tour.gallery || [])];
    return Array.from(new Set(list));
  }, [tour]);

  const relatedTours = config.tours.filter((t) => t.id !== tour.id).slice(0, 3);

  return (
    <div className="bg-[#fafbfc] min-h-screen pt-20 sm:pt-24 pb-24 text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      
      {/* 1. Sleek Minimal Breadcrumbs */}
      <div className="border-b border-slate-200/70 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-slate-500 font-medium">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            <Link href="/packages" className="hover:text-slate-900 transition-colors">Expeditions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            <span className="font-semibold text-slate-900 truncate max-w-[180px] sm:max-w-none">{tour.destination}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 text-xs font-semibold transition-all bg-white shadow-2xs"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-500" />
              <span>Share</span>
            </button>
            <Link
              href="/packages"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 text-[var(--brand-primary)] hover:bg-teal-100 text-xs font-bold transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Tours</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* 2. Elegant Title Header with Uncluttered Meta */}
        <div className="mb-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase bg-teal-50 text-teal-800 border border-teal-200/60">
              <Sparkles className="w-3 h-3 text-teal-600" />
              {tour.badge || "FEATURED EXPEDITION"}
            </span>

            <div className="flex items-center gap-1 text-xs font-bold text-slate-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{tour.rating.toFixed(1)}</span>
              <span className="text-slate-500 font-normal ml-0.5">({tour.reviewsCount} reviews)</span>
            </div>

            <span className="text-xs text-slate-500 hidden sm:inline">•</span>

            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{tour.destination}, Pakistan</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-3">
            {tour.title}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {tour.subtitle}
          </p>
        </div>

        {/* 3. Luxury Photo Gallery Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-10">
          {/* Main Hero Photo */}
          <div 
            onClick={() => setGalleryModalIndex(0)}
            className="md:col-span-8 relative aspect-[16/10] md:aspect-[16/10.5] bg-slate-900 rounded-2xl overflow-hidden cursor-pointer group shadow-sm border border-slate-200/60"
          >
            <Image
              src={allImages[0]}
              alt={tour.title}
              fill
              priority
              quality={95}
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-semibold bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg border border-slate-700/80">
                Scenic Destination Panorama
              </span>
            </div>
          </div>

          {/* 2 Stacked Side Photos */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3">
            {allImages.slice(1, 3).map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => setGalleryModalIndex(idx + 1)}
                className="relative aspect-[4/3] md:aspect-[16/10] bg-slate-900 rounded-2xl overflow-hidden cursor-pointer group shadow-sm border border-slate-200/60"
              >
                <Image
                  src={imgUrl}
                  alt={`${tour.title} photo ${idx + 2}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                
                {/* Floating "View All" on last grid image */}
                {idx === 1 && (
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-slate-900/90 hover:bg-slate-900 backdrop-blur-md text-white font-bold text-xs px-3.5 py-2 rounded-xl border border-slate-700 flex items-center gap-2 shadow-lg transition-transform active:scale-95">
                      <Camera className="w-4 h-4 text-amber-400" />
                      <span>{allImages.length} Photos</span>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

            {/* 4. Sticky Section Nav Strip (Smooth In-Page Anchors) */}
        <div className="sticky top-16 z-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-2.5 bg-white/95 backdrop-blur-md border-y border-slate-200 mb-10 overflow-x-auto no-scrollbar shadow-2xs">
          <div className="max-w-7xl mx-auto flex items-center gap-1 sm:gap-2 text-xs font-semibold whitespace-nowrap text-slate-600">
            <a href="#overview" className="px-3.5 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors">
              Overview
            </a>
            <a href="#highlights" className="px-3.5 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors">
              Highlights
            </a>
            <a href="#itinerary" className="px-3.5 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors">
              Itinerary
            </a>
            <a href="#details" className="px-3.5 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors">
              Inclusions &amp; Services
            </a>
          </div>
        </div>

        {/* 5. Main 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* =========================================================================
              LEFT COLUMN: Clean, Spacious, Consolidated Content Sections
              ========================================================================= */}
          <div className="lg:col-span-8 space-y-12">

            {/* A. OVERVIEW & QUICK SPECS */}
            <section id="overview" className="scroll-mt-32 space-y-6">
              
              {/* Clean 4-Card Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 text-slate-400 mb-1.5">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Duration</span>
                  </div>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 block">
                    {tour.duration}
                  </span>
                  <span className="text-[11px] text-slate-500">{tour.days} Days / {tour.nights} Nights</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 text-slate-400 mb-1.5">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Departure</span>
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 block leading-snug">
                    {tour.departureSchedule || "Weekly Fixed Departures"}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">Fixed Group Schedule</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 text-slate-400 mb-1.5">
                    <Bus className="w-4 h-4 text-teal-600" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Transport</span>
                  </div>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 block">
                    Grand Cabin / Saloon
                  </span>
                  <span className="text-[11px] text-slate-500">Luxury Air-Conditioned</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 text-slate-400 mb-1.5">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Guiding</span>
                  </div>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 block">
                    Certified Lead
                  </span>
                  <span className="text-[11px] text-slate-500">24/7 On-Ground Support</span>
                </div>
              </div>

              {/* Narrative Story */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs">
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 tracking-tight">
                  About This Journey
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {tour.overview}
                </p>
              </div>
            </section>

            {/* B. SIGNATURE HIGHLIGHTS */}
            <section id="highlights" className="scroll-mt-32 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span>Signature Highlights</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Key landmarks and memorable experiences in this tour
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-teal-500/50 hover:shadow-sm transition-all flex items-start gap-3.5 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-teal-50 border border-teal-200/70 text-teal-700 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* C. STREAMLINED DAY-BY-DAY ITINERARY */}
            <section id="itinerary" className="scroll-mt-32 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-teal-600" />
                    <span>Expedition Itinerary</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {tour.itinerary.length} Days carefully planned route &amp; milestones
                  </p>
                </div>

                {/* View Mode Switcher */}
                <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600">
                  <button
                    type="button"
                    onClick={() => setItineraryViewMode("tabbed")}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      itineraryViewMode === "tabbed"
                        ? "bg-white text-slate-900 shadow-2xs"
                        : "hover:text-slate-900"
                    }`}
                  >
                    Day-by-Day View
                  </button>
                  <button
                    type="button"
                    onClick={() => setItineraryViewMode("timeline")}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      itineraryViewMode === "timeline"
                        ? "bg-white text-slate-900 shadow-2xs"
                        : "hover:text-slate-900"
                    }`}
                  >
                    Full Timeline
                  </button>
                </div>
              </div>

              {/* MODE 1: SLEEK CONNECTED VERTICAL TIMELINE (DEFAULT) */}
              {itineraryViewMode === "timeline" ? (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs">
                  <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-teal-100">
                    {tour.itinerary.map((dayItem) => {
                      const isExpanded = expandedTimelineDay === dayItem.day || expandedTimelineDay === 999;
                      return (
                        <div key={dayItem.day} className="relative group">
                          {/* Connected Day Node */}
                          <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[var(--brand-primary)] text-white font-extrabold text-[10px] sm:text-xs flex items-center justify-center shadow-xs ring-4 ring-white">
                            {dayItem.day}
                          </div>

                          <div className="bg-slate-50/70 hover:bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/70 transition-all">
                            <button
                              type="button"
                              onClick={() => setExpandedTimelineDay(isExpanded ? null : dayItem.day)}
                              className="w-full text-left flex items-start justify-between gap-3 cursor-pointer select-none"
                            >
                              <div>
                                <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-700 block mb-0.5">
                                  Day 0{dayItem.day} • Milestone
                                </span>
                                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                                  {dayItem.title}
                                </h3>
                              </div>

                              <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-slate-700 transition-colors mt-0.5">
                                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                              </div>
                            </button>

                            {/* Full Route Details */}
                            {isExpanded && (
                              <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs sm:text-sm text-slate-600 leading-relaxed">
                                <p>{dayItem.desc}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom Quick Control */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>{tour.itinerary.length} Days Itinerary Total</span>
                    <button
                      type="button"
                      onClick={() => setExpandedTimelineDay(expandedTimelineDay === 999 ? null : 999)}
                      className="font-bold text-teal-700 hover:text-teal-900 transition-colors"
                    >
                      {expandedTimelineDay === 999 ? "Collapse All Days" : "Expand All Days"}
                    </button>
                  </div>
                </div>
              ) : (
                /* MODE 2: DAY-BY-DAY TABBED CARD */
                <div className="space-y-4">
                  {/* Horizontal Day Selector Pills */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                    {tour.itinerary.map((dayItem) => {
                      const isActive = activeItineraryDay === dayItem.day;
                      return (
                        <button
                          key={dayItem.day}
                          type="button"
                          onClick={() => setActiveItineraryDay(dayItem.day)}
                          className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                            isActive
                              ? "bg-[var(--brand-primary)] text-white shadow-sm shadow-teal-900/10 ring-2 ring-[var(--brand-primary)]/20"
                              : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80"
                          }`}
                        >
                          <span className={isActive ? "text-teal-200" : "text-slate-400"}>
                            Day {dayItem.day < 10 ? `0${dayItem.day}` : dayItem.day}
                          </span>
                          <span className="max-w-[120px] truncate hidden sm:inline">
                            {dayItem.title.split(":")[0] || dayItem.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Single Clean Active Day Card */}
                  {(() => {
                    const currentDay = tour.itinerary.find((d) => d.day === activeItineraryDay) || tour.itinerary[0];
                    if (!currentDay) return null;
                    const isFirst = currentDay.day === 1;
                    const isLast = currentDay.day === tour.itinerary.length;

                    return (
                      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-6">
                        
                        {/* Day Header */}
                        <div className="flex items-center justify-between gap-4 flex-wrap pb-4 border-b border-slate-100">
                          <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-lg bg-teal-50 border border-teal-200/70 text-[var(--brand-primary)] font-black text-xs uppercase tracking-wider">
                              Day 0{currentDay.day} of {tour.itinerary.length < 10 ? `0${tour.itinerary.length}` : tour.itinerary.length}
                            </span>
                            <span className="text-xs font-semibold text-slate-400">
                              Milestone {currentDay.day}
                            </span>
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug">
                            {currentDay.title}
                          </h3>
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            {currentDay.desc}
                          </p>
                        </div>

                        {/* Navigation Step Controls */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <button
                            type="button"
                            disabled={isFirst}
                            onClick={() => setActiveItineraryDay(Math.max(1, activeItineraryDay - 1))}
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                              isFirst
                                ? "opacity-30 cursor-not-allowed text-slate-400 bg-slate-50"
                                : "text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                            }`}
                          >
                            <ChevronLeft className="w-4 h-4" />
                            <span>Previous Day</span>
                          </button>

                          <span className="text-xs text-slate-400 font-medium">
                            {activeItineraryDay} / {tour.itinerary.length}
                          </span>

                          <button
                            type="button"
                            disabled={isLast}
                            onClick={() => setActiveItineraryDay(Math.min(tour.itinerary.length, activeItineraryDay + 1))}
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                              isLast
                                ? "opacity-30 cursor-not-allowed text-slate-400 bg-slate-50"
                                : "text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] shadow-2xs"
                            }`}
                          >
                            <span>Next Day</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>

                      </div>
                    );
                  })()}
                </div>
              )}
            </section>

            {/* D. CONSOLIDATED SERVICES & DETAILS HUB */}
            <section id="details" className="scroll-mt-32 space-y-4">
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <Layers className="w-5 h-5 text-teal-600" />
                  <span>Package Services &amp; Details</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  All inclusions, daily meals, hotel standards, and essential travel guidelines
                </p>
              </div>

              {/* Main Consolidated Card with 3 Tabs */}
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden">
                
                {/* 3 Nav Tabs */}
                <div className="flex items-center border-b border-slate-100 bg-slate-50/50 p-1.5 overflow-x-auto no-scrollbar gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveDetailsTab("inclusions")}
                    className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      activeDetailsTab === "inclusions"
                        ? "bg-white text-slate-900 shadow-2xs border border-slate-200/60"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>Inclusions &amp; Exclusions</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveDetailsTab("dining")}
                    className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      activeDetailsTab === "dining"
                        ? "bg-white text-slate-900 shadow-2xs border border-slate-200/60"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Utensils className="w-4 h-4 text-amber-500" />
                    <span>Dining &amp; BBQ Menu</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveDetailsTab("guidelines")}
                    className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      activeDetailsTab === "guidelines"
                        ? "bg-white text-slate-900 shadow-2xs border border-slate-200/60"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Backpack className="w-4 h-4 text-blue-600" />
                    <span>Packing &amp; Guidelines</span>
                  </button>
                </div>

                {/* Tab Content Body */}
                <div className="p-6 sm:p-8">
                  
                  {/* TAB 1: INCLUSIONS & EXCLUSIONS */}
                  {activeDetailsTab === "inclusions" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center gap-2 text-teal-900 font-bold text-xs uppercase tracking-wider mb-3">
                          <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>Included in Package</span>
                        </div>
                        <ul className="space-y-2.5">
                          {tour.inclusions.map((inc, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                              <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                              <span>{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-slate-700 font-bold text-xs uppercase tracking-wider mb-3">
                          <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center">
                            <X className="w-3 h-3" />
                          </div>
                          <span>Not Included</span>
                        </div>
                        <ul className="space-y-2.5">
                          {tour.exclusions.map((exc, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-500">
                              <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                              <span>{exc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: MEALS & DINING */}
                  {activeDetailsTab === "dining" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-3">
                        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                          <Coffee className="w-4 h-4 text-amber-600" />
                          <span>Daily Morning Breakfast</span>
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span>Lahori Channay &amp; Fresh Fried / Boiled Eggs</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span>Crispy Hot Prathas / Fresh Tandoori Roti</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span>Unlimited Karak Mountain Chai (Tea)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-3">
                        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                          <Utensils className="w-4 h-4 text-teal-600" />
                          <span>Grand Dinners &amp; BBQ Night</span>
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                            <span>Special Chicken Karahi / Biryani / Daal</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                            <span>Live Campfire Chicken BBQ &amp; Musical Night</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                            <span>Fresh Salad, Mint Raita, Hot Naan &amp; Drinks</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: GUIDELINES & PACKING */}
                  {activeDetailsTab === "guidelines" && (
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-teal-500" />
                            <span>Warm Clothing</span>
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Fleece jacket, thermal inners, rain poncho/umbrella, and warm socks for cool alpine evenings.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-teal-500" />
                            <span>Footwear &amp; Grip</span>
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Sturdy hiking shoes or comfortable trainers with solid non-slip grip for rocky trails.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-teal-500" />
                            <span>Original CNIC / Passport</span>
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Mandatory for security check-posts along Karakoram and northern highway routes.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-teal-500" />
                            <span>Power Bank &amp; Personal Meds</span>
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            High-capacity power bank, lip balm, sunblock, and prescribed personal medicines.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-900 text-slate-300 text-xs leading-relaxed space-y-1">
                        <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>Operational &amp; Eco-Tourism Protocol</span>
                        </div>
                        <p>
                          • <strong>Room Sharing:</strong> Quad/Triple sharing provides 2/3 beds with extra mattresses. Dedicated couple rooms are provided on couple tier.<br />
                          • <strong>Vehicle Protocol:</strong> AC is regulated during high-altitude steep mountain ascents. Strict no-smoking policy inside tourist vehicles.<br />
                          • <strong>Clean Mountains:</strong> Zero-waste eco-tourism. Please do not dispose of plastics or trash on trails.
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </section>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: Elegant, Modern Booking & Reservation Card
              ========================================================================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-900/5 border border-slate-200/90 space-y-6">
              
              {/* Reservation Header */}
              <div className="border-b border-slate-100 pb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md inline-block mb-2">
                  Official Tour Inquiry &amp; Booking
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Reserve Your Seats
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Select your sharing plan, dates, and departure city for instant confirmation and quotation.
                </p>
              </div>

              {/* 1. Room Sharing Tier (Clean 2x2 Segmented Grid) */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Room Sharing Plan
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {sharingPlans.map((plan) => {
                    const isSelected = selectedSharingPlan === plan.key;
                    return (
                      <button
                        key={plan.key}
                        type="button"
                        onClick={() => setSelectedSharingPlan(plan.key)}
                        className={`p-3 rounded-xl border text-left transition-all relative ${
                          isSelected
                            ? "border-[var(--brand-primary)] bg-teal-50/60 ring-2 ring-[var(--brand-primary)]/20 shadow-2xs"
                            : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                      >
                        <div className="font-bold text-xs text-slate-900">{plan.label}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">
                          {plan.sub}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Departure Date */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  2. Departure Schedule
                </label>
                {tour.upcomingDates.length <= 1 ? (
                  <div className="flex items-center justify-between p-3 rounded-xl border border-emerald-200/80 bg-emerald-50/60 text-xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">
                          Fixed Weekly Departure
                        </div>
                        <div className="font-bold text-xs text-slate-900 mt-0.5 truncate">
                          {tour.upcomingDates[0] || tour.departureSchedule || "Weekly Fixed Schedule"}
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-md shrink-0 border border-emerald-200/70 ml-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Locked
                    </span>
                  </div>
                ) : (
                  <div className="relative">
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] text-xs font-semibold text-slate-800 bg-slate-50/50 appearance-none outline-none cursor-pointer hover:border-slate-300 transition-colors"
                    >
                      {tour.upcomingDates.map((d, i) => (
                        <option key={i} value={d}>{d}</option>
                      ))}
                    </select>
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                )}
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
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-[var(--brand-primary)] focus:ring-1 focus:ring-[var(--brand-primary)] text-xs font-semibold text-slate-800 bg-slate-50/50 appearance-none outline-none"
                  >
                    {tour.departureCities.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              {/* 4. Number of Travelers */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  4. Travelers / Seats
                </label>
                <div className="flex items-center justify-between bg-slate-50/70 p-2.5 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span>Number of Persons:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setTravelersCount(Math.max(1, travelersCount - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center text-xs transition-colors"
                    >
                      -
                    </button>
                    <span className="font-bold text-sm text-slate-900 w-6 text-center">
                      {travelersCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTravelersCount(travelersCount + 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center text-xs transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Book via WhatsApp</span>
                </button>

                <button
                  onClick={() => setSelectedTourForBooking(tour)}
                  className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-slate-600" />
                  <span>Custom Online Booking</span>
                </button>
              </div>

              {/* Reassurance Badges */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-600">
                <div className="flex items-center gap-2 text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200/60 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Govt. Registered Pvt Ltd (Reg: {config.registrationId})</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Family &amp; Solo Female Friendly Groups</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Direct Hotline: <strong className="text-slate-800">{config.phone}</strong></span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 6. Other Popular Expeditions */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Other Popular Expeditions
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Explore more northern valleys and alpine adventures</p>
            </div>
            <Link
              href="/packages"
              className="text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1"
            >
              <span>View All Tours</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Floating Mobile Booking Bar (Clean 1-Tap Bar at Bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3.5 px-4 flex items-center justify-between shadow-lg">
        <div>
          <span className="text-[10px] text-slate-400 font-semibold block uppercase">Tour Inquiries</span>
          <span className="text-sm font-extrabold text-slate-900 truncate max-w-[150px] block">
            {tour.destination}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedTourForBooking(tour)}
            className="px-3.5 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs uppercase"
          >
            Form
          </button>
          <button
            onClick={handleWhatsAppInquiry}
            className="px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-extrabold text-xs uppercase flex items-center gap-1.5 shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Lightbox Photo Viewer with Carousel */}
      {galleryModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
          onClick={() => setGalleryModalIndex(null)}
        >
          <div 
            className="relative max-w-5xl w-full aspect-[16/10] max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[galleryModalIndex]}
              alt={`Gallery image ${galleryModalIndex + 1}`}
              fill
              className="object-contain"
            />
            
            {/* Close Button */}
            <button
              onClick={() => setGalleryModalIndex(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800 border border-slate-700 text-sm font-bold z-10 transition-colors"
            >
              ✕
            </button>

            {/* Prev Button */}
            <button
              onClick={() => setGalleryModalIndex((prev) => (prev! > 0 ? prev! - 1 : allImages.length - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800 border border-slate-700 z-10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={() => setGalleryModalIndex((prev) => (prev! < allImages.length - 1 ? prev! + 1 : 0))}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800 border border-slate-700 z-10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Caption & Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-900/80 text-white text-xs font-semibold border border-slate-700">
              {galleryModalIndex + 1} / {allImages.length}
            </div>
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
