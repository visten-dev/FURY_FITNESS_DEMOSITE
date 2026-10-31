import React, { useState } from 'react';
import { ArrowRight, Flame, Dumbbell, UserCheck, Activity, HeartPulse, Check, Sparkles } from 'lucide-react';
import { PROGRAMS, Program } from '../data/gymData';

interface ProgramsSectionProps {
  onOpenEnquiry: (programTitle?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenEnquiry }) => {
  const [activeProgram, setActiveProgram] = useState<Program>(PROGRAMS[0]);

  const getProgramIcon = (id: string) => {
    switch (id) {
      case 'strength-training':
        return <Dumbbell className="w-5 h-5 text-[#E5B842]" />;
      case 'weight-loss':
        return <Flame className="w-5 h-5 text-[#E5B842]" />;
      case 'personal-training-program':
        return <UserCheck className="w-5 h-5 text-[#E5B842]" />;
      case 'conditioning':
        return <Activity className="w-5 h-5 text-[#E5B842]" />;
      default:
        return <HeartPulse className="w-5 h-5 text-[#E5B842]" />;
    }
  };

  return (
    <section id="programs" className="relative py-24 sm:py-32 bg-[#090909] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#E5B842]" />
              <span className="text-xs uppercase tracking-widest text-[#E5B842] font-semibold">
                Disciplined Disciplines
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight leading-tight">
              AREAS OF TRAINING
            </h2>
          </div>

          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-normal">
            Whether starting out or breaking plateaus, explore our core areas of training crafted to transform physical strength, composition, and longevity.
          </p>
        </div>

        {/* Interactive Lookbook: Split List on Left + Cinematic Feature Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Architectural Discipline Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
            {PROGRAMS.map((program, index) => {
              const isActive = activeProgram.id === program.id;
              const indexStr = String(index + 1).padStart(2, '0');

              return (
                <button
                  key={program.id}
                  type="button"
                  onClick={() => setActiveProgram(program)}
                  className={`group text-left p-5 sm:p-6 rounded-xl transition-all duration-200 cursor-pointer border flex items-center justify-between gap-4 ${
                    isActive
                      ? 'bg-neutral-900/90 border-[#E5B842] shadow-lg ring-1 ring-[#E5B842]/40'
                      : 'bg-neutral-950/40 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-display text-xl sm:text-2xl font-bold transition-colors ${
                        isActive ? 'text-[#E5B842]' : 'text-neutral-600 group-hover:text-neutral-400'
                      }`}
                    >
                      {indexStr}
                    </span>
                    <div>
                      <h3
                        className={`font-display text-lg sm:text-xl font-bold uppercase transition-colors ${
                          isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                        }`}
                      >
                        {program.title}
                      </h3>
                      <span className="text-xs text-neutral-400 block font-normal">
                        {program.category}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#E5B842] text-black'
                        : 'bg-neutral-900 text-neutral-400 group-hover:text-white'
                    }`}
                  >
                    {getProgramIcon(program.id)}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Heroic Photographic & Technical Details Display */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 flex flex-col justify-between shadow-2xl relative">
            {/* Top Photography Visual */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
              <img
                src={activeProgram.image}
                alt={activeProgram.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded bg-black/80 backdrop-blur-sm border border-white/10 text-xs">
                {activeProgram.isAuthentic ? (
                  <span className="text-[11px] font-semibold text-white tracking-wide flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#E5B842]" /> Authentic Fury Training Session
                  </span>
                ) : (
                  <span className="text-[11px] font-semibold text-neutral-300 tracking-wide">
                    Core Training Area
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#E5B842] font-semibold">
                    {activeProgram.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white tracking-wide">
                  {activeProgram.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {activeProgram.fullDesc}
                </p>

                {/* Key Benefits */}
                <div className="pt-4 border-t border-neutral-800/80 space-y-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block">
                    Focus & Progression:
                  </span>
                  {activeProgram.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <div className="w-4 h-4 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/30 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#E5B842]" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(activeProgram.title)}
                  className="px-6 py-3 rounded-lg bg-[#E5B842] hover:bg-[#F3C759] text-black font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Enquire For {activeProgram.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <span className="text-xs text-neutral-400">
                  Direct Coach Consultation Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
