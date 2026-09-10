"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { config, TourPackage } from "@/config";
import TourCard from "@/components/tours/TourCard";
import BookingModal from "@/components/tours/BookingModal";
import { 
  Search, 
  Compass,
} from "lucide-react";

function PackagesContent() {
  const searchParams = useSearchParams();
  const initialDest = searchParams.get("dest") || "";
  const initialCat = searchParams.get("cat") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [selectedDest, setSelectedDest] = useState(initialDest);
  const [sortBy, setSortBy] = useState<"featured" | "duration-desc" | "duration-asc">("featured");
  const [selectedTourForBooking, setSelectedTourForBooking] = useState<TourPackage | null>(null);

  useEffect(() => {
    if (initialCat) setSelectedCategory(initialCat);
    if (initialDest) setSelectedDest(initialDest);
  }, [initialCat, initialDest]);

  // Filtering
  const filteredTours = config.tours.filter((tour) => {
    const matchesSearch = 
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = 
      selectedCategory === "all" || tour.category === selectedCategory;

    const matchesDest = 
      !selectedDest || tour.destination.toLowerCase().includes(selectedDest.toLowerCase());

    return matchesSearch && matchesCategory && matchesDest;
  });

  // Sorting
  const sortedTours = [...filteredTours].sort((a, b) => {
    if (sortBy === "duration-desc") return b.days - a.days;
    if (sortBy === "duration-asc") return a.days - b.days;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            All Upcoming Royal Expeditions
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Browse our scheduled group road departures, weekend getaways, and alpine trekking expeditions across Pakistan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls & Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200/90 mb-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Live Search Input */}
            <div className="md:col-span-5 relative">
              <input
                type="text"
                placeholder="Search by tour title, valley, or landmark..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-3 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-[var(--brand-primary)]/20 text-base sm:text-sm font-medium text-slate-800"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 sm:top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3.5 sm:top-3 text-slate-400 hover:text-slate-600 text-xs font-bold w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Destination Dropdown */}
            <div className="md:col-span-4 relative">
              <select
                value={selectedDest}
                onChange={(e) => setSelectedDest(e.target.value)}
                aria-label="Filter by destination"
                className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-primary text-base sm:text-sm font-semibold text-slate-800 cursor-pointer"
              >
                <option value="">All Mountain Destinations</option>
                <option value="Skardu">Skardu, Shangrila &amp; Deosai</option>
                <option value="Hunza">Hunza Valley &amp; Passu Cones</option>
                <option value="Fairy Meadows">Fairy Meadows &amp; Nanga Parbat</option>
                <option value="Swat">Swat Valley &amp; Malam Jabba</option>
                <option value="Naran">Naran, Kaghan &amp; Shogran</option>
                <option value="Kashmir">Azad Kashmir &amp; Neelum Valley</option>
                <option value="Kumrat">Kumrat Valley &amp; Katora Lake</option>
              </select>
            </div>

            {/* Sort By Dropdown */}
            <div className="md:col-span-3 relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort tours"
                className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-primary text-base sm:text-sm font-semibold text-slate-800 cursor-pointer"
              >
                <option value="featured">Sort: Featured First</option>
                <option value="duration-desc">Duration: Longest (8-4 Days)</option>
                <option value="duration-asc">Duration: Shortest (3-5 Days)</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-3 border-t border-slate-100 hide-scrollbar py-1">
            {[
              { id: "all", label: "All Tours", count: config.tours.length },
              { id: "group", label: "Group Expeditions", count: config.tours.filter(t => t.category === "group").length },
              { id: "weekend", label: "Weekend Escapes", count: config.tours.filter(t => t.category === "weekend").length },
              { id: "trekking", label: "Alpine Treks", count: config.tours.filter(t => t.category === "trekking").length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95 ${
                  selectedCategory === tab.id
                    ? "bg-[var(--brand-primary)] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  selectedCategory === tab.id
                    ? "bg-white/20 text-white"
                    : "bg-white text-slate-600 border border-slate-200"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Filters Chips & Count */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Showing <strong className="text-slate-900">{sortedTours.length}</strong> {sortedTours.length === 1 ? "tour package" : "tour packages"}
            </span>

            {/* Active filter pills */}
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--brand-primary-light)] text-[var(--brand-primary-dark)] text-xs font-bold">
                <span>Type: {selectedCategory}</span>
                <button onClick={() => setSelectedCategory("all")} className="hover:opacity-75 font-black">✕</button>
              </span>
            )}
            {selectedDest && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--brand-primary-light)] text-[var(--brand-primary-dark)] text-xs font-bold">
                <span>Dest: {selectedDest}</span>
                <button onClick={() => setSelectedDest("")} className="hover:opacity-75 font-black">✕</button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--brand-primary-light)] text-[var(--brand-primary-dark)] text-xs font-bold">
                <span>&ldquo;{searchQuery}&rdquo;</span>
                <button onClick={() => setSearchQuery("")} className="hover:opacity-75 font-black">✕</button>
              </span>
            )}
          </div>

          {(searchQuery || selectedDest || selectedCategory !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDest("");
                setSelectedCategory("all");
              }}
              className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1"
            >
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {sortedTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sortedTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onBookNow={(t) => setSelectedTourForBooking(t)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 sm:p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
            <Compass className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">No matching tours found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Try changing your search term or filter settings, or craft a custom trip according to your schedule.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDest("");
                setSelectedCategory("all");
              }}
              className="btn-brand-primary px-6 py-2.5 rounded-xl text-white font-bold text-xs uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <BookingModal
        tour={selectedTourForBooking}
        isOpen={!!selectedTourForBooking}
        onClose={() => setSelectedTourForBooking(null)}
      />
    </div>
  );
}

export default function PackagesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-slate-600">Loading tours catalog...</div>}>
      <PackagesContent />
    </Suspense>
  );
}
