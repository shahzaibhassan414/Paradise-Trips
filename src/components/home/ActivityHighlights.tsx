"use client";

import React from "react";
import { config } from "@/config";
import { 
  Sparkles, 
  Palette, 
  Camera, 
  Flame, 
  Moon, 
  Music,
  Smile
} from "lucide-react";

export default function ActivityHighlights() {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5 text-brand-accent" />,
    Palette: <Palette className="w-5 h-5 text-brand-primary" />,
    Camera: <Camera className="w-5 h-5 text-brand-accent" />,
    Flame: <Flame className="w-5 h-5 text-brand-accent" />,
    Moon: <Moon className="w-5 h-5 text-brand-primary" />,
    Music: <Music className="w-5 h-5 text-brand-accent" />,
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle Glow shapes */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[var(--brand-primary)] opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--brand-accent)] opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
            More Than Just A Sightseeing Tour
          </h2>
          <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
            Every journey with us is enriched with curated alpine activities, acoustic sessions under the stars, high-tea over glaciers, and moments that transform travelers into lifelong friends.
          </p>
        </div>

        {/* 6 Signature Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.activities.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/90 hover:bg-slate-900 p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-brand-primary/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-brand-primary" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-md bg-[var(--brand-primary-light)] text-[var(--brand-primary-dark)] border border-brand-primary/30">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-brand-accent">
                <Smile className="w-3.5 h-3.5 text-brand-accent" />
                <span>Included on all regular departures</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
