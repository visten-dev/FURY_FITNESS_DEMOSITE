import React from 'react';
import { ArrowRight, ChevronDown, MapPin, Clock, Star, ShieldCheck } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';
import { ThreeHeroDumbbell } from './ThreeHeroDumbbell';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-8 overflow-hidden bg-[#080808]">
      {/* Cinematic Studio Glow & Atmospheric Beams */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] bg-[#E5B842]/10 rounded-full blur-[170px]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-red-600/8 rounded-full blur-[180px]" />
        {/* Athletic precision grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Subtle top-to-bottom cinematic vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#080808]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold Sports Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8 z-20">
            {/* Athletic Brand Sub-Kicker */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#E5B842]" />
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-300 font-semibold">
                <span className="text-[#E5B842]">FURY FITNESS</span>
                <span className="text-neutral-600">/</span>
                <span>{GYM_DETAILS.tagline}</span>
              </div>
            </div>

            {/* Massive Display Headline */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-extrabold uppercase text-white tracking-[-0.01em] leading-[0.92]">
                BUILT BY DISCIPLINE.
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#E5B842] via-[#F6D878] to-[#D4AF37] tracking-[-0.01em] leading-[0.92]">
                DEFINED BY STRENGTH.
              </h2>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed text-wrap">
              {GYM_DETAILS.heroSubtext}
            </p>

            {/* High-Intent Athletic Action Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E5B842] hover:bg-[#F3C759] active:scale-95 text-black font-display font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-[0_0_35px_rgba(229,184,66,0.35)] hover:shadow-[0_0_45px_rgba(229,184,66,0.55)] flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>START YOUR JOURNEY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>

              <a
                href="#facilities"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 text-white font-display font-semibold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 hover:border-[#E5B842]/50"
              >
                <span>EXPLORE THE GYM</span>
              </a>
            </div>

            {/* Clean Unboxed Metadata Strip (Zero-Pill Discipline) */}
            <div className="pt-6 border-t border-neutral-800/80 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5B842] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Vengavasal, Chennai</div>
                  <div className="text-[11px] text-neutral-400">Mambakkam Main Road</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E5B842] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Mon – Sat: 5AM – 10PM</div>
                  <div className="text-[11px] text-neutral-400">Sunday: 6AM – 1PM</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Star className="w-4 h-4 text-[#E5B842] shrink-0 mt-0.5 fill-[#E5B842]" />
                <div>
                  <div className="font-semibold text-white">134 Google Reviews</div>
                  <div className="text-[11px] text-[#E5B842]">Verified Trainees</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Seamless 3D Olympic Rig Visualizer (No AI box border) */}
          <div className="lg:col-span-5 relative w-full h-[420px] sm:h-[500px] lg:h-[580px] flex items-center justify-center">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-radial from-[#E5B842]/10 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />

            {/* 3D Visualizer */}
            <ThreeHeroDumbbell className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Athletic Ticker Marquee Strip */}
      <div className="relative z-10 w-full border-y border-neutral-800/80 bg-neutral-950/90 py-3.5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-6 text-[11px] sm:text-xs font-display uppercase tracking-widest text-neutral-400 whitespace-nowrap overflow-x-auto no-scrollbar">
          <span className="text-[#E5B842] font-bold flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" /> OFFICIAL GYM FACILITY
          </span>
          <span className="text-neutral-700">/</span>
          <span>VENGAVASAL · CHENNAI 600100</span>
          <span className="text-neutral-700">/</span>
          <span className="text-white font-semibold">134+ VERIFIED MEMBER REVIEWS</span>
          <span className="text-neutral-700">/</span>
          <span>OLYMPIC WEIGHTLIFTING</span>
          <span className="text-neutral-700">/</span>
          <span className="text-[#E5B842]">TAMIL NADU STATE TOURNAMENT MEDALISTS</span>
          <span className="text-neutral-700">/</span>
          <span>FINNISH SAUNA RECOVERY</span>
        </div>
      </div>
    </section>
  );
};
