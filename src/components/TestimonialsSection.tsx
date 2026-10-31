import React, { useState } from 'react';
import { Quote, ExternalLink, ShieldCheck, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS, GYM_DETAILS } from '../data/gymData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="reviews" className="relative py-24 sm:py-36 bg-[#0c0c0c] border-t border-neutral-900 overflow-hidden">
      {/* Background Lighting Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E5B842]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#E5B842]" />
              <span className="text-xs uppercase tracking-widest text-[#E5B842] font-semibold">
                Verified Community Voices
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight leading-tight">
              PROVEN BY OUR MEMBERS
            </h2>
          </div>

          {/* 134 Google Reviews Trust Badge */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800 shrink-0">
            <div className="w-12 h-12 rounded-lg bg-[#E5B842]/10 border border-[#E5B842]/30 flex items-center justify-center font-display font-extrabold text-2xl text-[#E5B842]">
              134
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider">
                <span>Google Reviews</span>
                <ShieldCheck className="w-4 h-4 text-[#E5B842]" />
              </div>
              <div className="text-[11px] text-neutral-400">Verified Member Ratings on Google Maps</div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Fury+Fitness+Vengavasal+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-[#E5B842] transition-colors"
              title="View all 134 Google Reviews"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Feature Pull-Quote Editorial Presentation */}
        <div className="relative rounded-3xl bg-neutral-950/80 border border-neutral-800/80 p-8 sm:p-14 lg:p-16 shadow-2xl">
          <Quote className="w-12 h-12 text-[#E5B842]/20 mb-6" />

          {/* Large Editorial Quotation */}
          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-tight font-bold max-w-4xl min-h-[120px] sm:min-h-[140px] flex items-center">
            "{current.quote}"
          </blockquote>

          {/* Attribution & Controls Bar */}
          <div className="mt-10 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/30 flex items-center justify-center font-display font-bold text-sm text-[#E5B842]">
                FF
              </div>
              <div>
                <div className="font-display uppercase font-bold text-base text-white tracking-wide">
                  {current.author}
                </div>
                <div className="text-xs text-neutral-400">
                  {current.role} · <span className="text-[#E5B842]">{current.source}</span>
                </div>
              </div>
            </div>

            {/* Prev / Next Review Controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-neutral-500 font-mono">
                {String(activeIndex + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={prevTestimonial}
                className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Quotations Comparison Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                activeIndex === idx
                  ? 'bg-neutral-900/90 border-[#E5B842] ring-1 ring-[#E5B842]/40'
                  : 'bg-neutral-950/40 border-neutral-800/80 hover:border-neutral-700'
              }`}
            >
              <p className="text-xs text-neutral-300 italic line-clamp-2">
                "{t.quote}"
              </p>
              <span className="text-[11px] font-display uppercase tracking-wider text-[#E5B842] font-semibold block mt-2">
                {t.author}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
