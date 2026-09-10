"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { config } from "@/config";
import { Camera, MapPin, X, Eye } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ title: string; location: string; image: string } | null>(null);
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    { title: "Fairy Meadows & Nanga Parbat Reflection Pool", location: "Fairy Meadows", image: "/images/real_fairy_meadows.jpg", category: "mountains" },
    { title: "Shangrila Resort & Lower Kachura Lake", location: "Skardu", image: "/images/real_shangrila_skardu.jpg", category: "lakes" },
    { title: "Passu Cathedral Cones & Hunza Valley", location: "Hunza Valley", image: "/images/real_passu_hunza.jpg", category: "mountains" },
    { title: "Attabad Lake Turquoise Waters Cruise", location: "Hunza Valley", image: "/images/real_hunza_attabad.jpg", category: "lakes" },
    { title: "Deosai National Park & Sheosar Lake", location: "Deosai Plains", image: "/images/real_deosai.jpg", category: "lakes" },
    { title: "Malam Jabba Ski Resort & Pine Ridges", location: "Swat Valley", image: "/images/real_swat_malamjabba.jpg", category: "mountains" },
    { title: "Lake Saif-ul-Malook & Siri Paye", location: "Naran Kaghan", image: "/images/real_naran_saifulmalook.jpg", category: "lakes" },
    { title: "Arang Kel Fairytale Wooden Village", location: "Azad Kashmir", image: "/images/real_kashmir_neelum.jpg", category: "mountains" },
    { title: "Katora Glacial Lake & High Peaks", location: "Kumrat Valley", image: "/images/real_kumrat_katora.jpg", category: "lakes" },
    { title: "Kumrat Dense Deodar Pine Forest & River", location: "Upper Dir", image: "/images/real_kumrat_forest.jpg", category: "mountains" },
    { title: "Pak-China Border at Khunjerab Pass (4,693m)", location: "Khunjerab", image: "/images/real_khunjerab.jpg", category: "mountains" },
    { title: "Babusar Top Alpine Pass (13,700ft)", location: "Kaghan / Chilas", image: "/images/real_babusar.jpg", category: "mountains" },
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2.5 sm:mb-3">
            Moments From <span className="text-brand-accent">The Royal Trail</span>
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Unfiltered captures from our royal mountain expeditions, luxury road trips, starry campfire jams, and high-altitude valleys across Pakistan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2">
          {[
            { id: "all", label: "All Moments" },
            { id: "mountains", label: "Peaks & Meadows" },
            { id: "lakes", label: "Turquoise Lakes" },
            { id: "bonfire", label: "Campfires & Jams" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === tab.id
                  ? "bg-[var(--brand-primary)] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-slate-950 border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-primary/60 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-white">
                  <Eye className="w-4 h-4 text-brand-accent" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-xs text-brand-accent font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-bold text-sm sm:text-base leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-14 sm:mt-16 bg-slate-900 rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden border border-slate-800 shadow-md">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">Tag Us in Your Royal Adventures</h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Tag @paradise_trips_and_tours on Instagram to get featured on our community showcase and receive exclusive expedition privileges!
          </p>
          <Link
            href={config.socials.instagram}
            target="_blank"
            className="btn-brand-primary inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all"
          >
            <Camera className="w-4 h-4" />
            <span>Follow on Instagram</span>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white flex items-center justify-center transition-colors border border-slate-700"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-5 sm:p-6 bg-slate-900 flex items-center justify-between border-t border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedImage.title}</h3>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-brand-accent font-medium mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedImage.location}</span>
                </div>
              </div>

              <Link
                href="/packages"
                className="btn-brand-primary px-5 py-2.5 rounded-xl text-white font-bold text-xs uppercase tracking-wider"
              >
                Join Next Trip
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
