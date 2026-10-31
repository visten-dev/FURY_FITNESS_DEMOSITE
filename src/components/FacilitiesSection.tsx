import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { FACILITIES, Facility } from '../data/gymData';

interface FacilitiesSectionProps {
  onOpenEnquiry: (programId?: string) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenEnquiry }) => {
  const [activeFacility, setActiveFacility] = useState<Facility>(FACILITIES[0]);

  return (
    <section id="facilities" className="relative py-24 sm:py-32 bg-[#080808] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#E5B842]" />
              <span className="text-xs uppercase tracking-widest text-[#E5B842] font-semibold">
                Engineered For Results
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight leading-tight">
              WORLD-CLASS FITNESS FACILITIES
            </h2>
          </div>

          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-normal">
            Every square foot is purposeful. From competition-spec plate-loaded machinery to Finnish sauna recovery, explore our facilities.
          </p>
        </div>

        {/* Feature Selector Tabs (Interactive & Functional) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {FACILITIES.map((facility) => {
            const isActive = activeFacility.id === facility.id;
            return (
              <button
                key={facility.id}
                type="button"
                onClick={() => setActiveFacility(facility)}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-[#E5B842] text-black shadow-[0_0_15px_rgba(229,184,66,0.25)]'
                    : 'bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 border border-neutral-800'
                }`}
              >
                <span>{facility.name}</span>
                {facility.isAuthentic && (
                  <span
                    className={`text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-black/20 text-black' : 'bg-[#E5B842]/10 text-[#E5B842]'
                    }`}
                  >
                    Gym Photo
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Heroic Panoramic Facility Panel */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Panel */}
            <div className="lg:col-span-7 relative overflow-hidden group h-[380px] lg:h-[460px] bg-neutral-900">
              <img
                src={activeFacility.image}
                alt={activeFacility.name}
                className="w-full h-full object-cover object-[center_38%] transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('gym_interior')) {
                    target.src = './images/gym_interior.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-black/80" />

              {/* Authentic Photo Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-xs">
                {activeFacility.isAuthentic ? (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E5B842]" />
                    <span className="text-[11px] font-semibold text-white tracking-wide">
                      Authentic Fury Fitness Chennai Facility
                    </span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#E5B842]" />
                    <span className="text-[11px] font-semibold text-neutral-300 tracking-wide">
                      Facility Feature Showcase
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description & Highlights Panel */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-neutral-950 border-t lg:border-t-0 lg:border-l border-neutral-800">
              <div className="space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#E5B842] font-semibold block mb-1">
                    {activeFacility.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white tracking-wide">
                    {activeFacility.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {activeFacility.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-3 border-t border-neutral-800/80">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                    Facility Highlights:
                  </span>
                  {activeFacility.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <div className="w-4 h-4 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/30 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#E5B842]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Action */}
              <div className="pt-6 mt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(activeFacility.name)}
                  className="px-5 py-2.5 rounded-lg bg-[#E5B842] hover:bg-[#F3C759] text-black font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Enquire For This Facility</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#contact"
                  className="px-3 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  Schedule A Visit
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Panoramic Facilities Strip (Click to switch active) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mt-6">
          {FACILITIES.map((facility) => {
            const isCurrent = activeFacility.id === facility.id;
            return (
              <button
                key={facility.id}
                type="button"
                onClick={() => setActiveFacility(facility)}
                className={`group text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? 'bg-neutral-900 border-[#E5B842] ring-1 ring-[#E5B842]'
                    : 'bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-2 bg-neutral-900">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('gym_interior')) {
                        target.src = './images/gym_interior.jpg';
                      }
                    }}
                  />
                </div>
                <div className="text-xs font-semibold text-white truncate">{facility.name}</div>
                <div className="text-[10px] text-neutral-400 truncate">{facility.tagline}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
