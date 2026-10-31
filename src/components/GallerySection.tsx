import React, { useState } from 'react';
import { Maximize2, ShieldCheck, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#080808] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#E5B842]" />
              <span className="text-xs uppercase tracking-widest text-[#E5B842] font-semibold">
                Atmosphere & Reality
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight leading-tight">
              THE FURY EXPERIENCE
            </h2>
          </div>

          {/* Filter Tabs (Interactive) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'facility', label: 'Facility & Gear' },
              { id: 'training', label: 'Training Action' },
              { id: 'championship', label: 'Champions & Culture' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#E5B842] text-black shadow-md'
                    : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredItems.map((item, index) => {
            // Asymmetric layout span sizing
            let colSpan = 'lg:col-span-4';
            if (index % 5 === 0) colSpan = 'lg:col-span-8 sm:col-span-2';
            else if (index % 5 === 1) colSpan = 'lg:col-span-4';
            else if (index % 5 === 2) colSpan = 'lg:col-span-6';
            else if (index % 5 === 3) colSpan = 'lg:col-span-6';

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-950 aspect-[4/3] sm:aspect-auto sm:h-80 cursor-pointer shadow-lg ${colSpan}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Authentic vs Feature Tag */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm border border-white/10 text-[10px]">
                  {item.isAuthentic ? (
                    <>
                      <ShieldCheck className="w-3 h-3 text-[#E5B842]" />
                      <span className="font-semibold text-white tracking-wide">Authentic Fury Facility</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3 h-3 text-neutral-400" />
                      <span className="font-medium text-neutral-300">Feature Highlight</span>
                    </>
                  )}
                </div>

                {/* Expand icon */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5B842] block mb-1">
                    {item.categoryLabel}
                  </span>
                  <h4 className="text-sm sm:text-base font-display uppercase font-bold text-white group-hover:text-[#E5B842] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2 font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2 text-neutral-400 hover:text-white bg-neutral-900/80 border border-neutral-800 rounded-full cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={prevLightbox}
            className="absolute left-4 sm:left-8 z-50 p-3 text-neutral-400 hover:text-white bg-neutral-900/80 border border-neutral-800 rounded-full cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextLightbox}
            className="absolute right-4 sm:right-8 z-50 p-3 text-neutral-400 hover:text-white bg-neutral-900/80 border border-neutral-800 rounded-full cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] rounded-xl overflow-hidden border border-neutral-800 bg-black">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="mt-4 text-center max-w-xl">
              <div className="flex items-center justify-center gap-2 mb-1">
                {filteredItems[lightboxIndex].isAuthentic && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5B842] bg-[#E5B842]/10 border border-[#E5B842]/20 px-2 py-0.5 rounded">
                    Authentic Chennai Photograph
                  </span>
                )}
                <span className="text-xs text-neutral-400">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
              <h3 className="text-lg font-display uppercase font-bold text-white">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                {filteredItems[lightboxIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
