import React from 'react';
import { Trophy, Target, Flame, Users, CheckCircle2 } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const BrandIntroSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0c0c0c] border-t border-neutral-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#E5B842]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#E5B842]" />
            <span className="text-xs uppercase tracking-widest text-[#E5B842] font-semibold">
              The Fury Ethos
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase text-white tracking-tight leading-tight max-w-4xl">
            MORE THAN A GYM.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5B842] via-[#F6D878] to-[#D4AF37]">
              A CULTURE OF STRENGTH.
            </span>
          </h2>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Authentic Photography Collage */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="relative group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 aspect-[4/3]">
              <img
                src="./images/athletes_flexing.jpg"
                alt="Fury Fitness Athletes & Coaches"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('gyme_a2d033ce')) {
                    target.src = './images/gyme_a2d033ce.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] uppercase tracking-wider text-[#E5B842] font-semibold block mb-1">
                  Authentic Facility · Fury Family
                </span>
                <p className="text-sm sm:text-base font-semibold text-white">
                  Built on sweat, brotherhood, and relentless dedication inside the gym.
                </p>
              </div>
            </div>

            {/* Secondary Championship Achievement Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 aspect-[4/5] sm:aspect-auto sm:h-52">
                <img
                  src="./images/championship_podium.jpg"
                  alt="State Championship Winners at Fury Fitness"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('achievmnet_ba180390')) {
                      target.src = './images/achievmnet_ba180390.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-1.5 text-[#E5B842] mb-1">
                    <Trophy className="w-3.5 h-3.5 fill-[#E5B842]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Tournament Proven</span>
                  </div>
                  <p className="text-xs text-neutral-200 font-medium line-clamp-2">
                    State-level podium achievements guided by our coaching discipline.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-neutral-800/80 bg-neutral-950/60 flex flex-col justify-center space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#E5B842]/10 border border-[#E5B842]/20 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-[#E5B842]" />
                </div>
                <h4 className="font-display text-xl uppercase font-bold text-white tracking-wide">
                  Real Progression
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  No quick-fix gimmicks. We teach movement biomechanics, progressive overload, and lifestyle consistency that withstands time.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Principles */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 bg-neutral-950/40 p-8 sm:p-10 rounded-2xl border border-neutral-800/60">
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-neutral-200 font-light leading-relaxed">
                Located in the heart of <strong className="text-white font-semibold">Vengavasal, Chennai</strong>, FURY FITNESS was forged on an uncompromising belief: that physical transformation is earned through consistent daily discipline, smart training systems, and a motivating community.
              </p>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Whether your aspiration is building raw competition strength, achieving sustainable weight loss, or boosting your vitality, you train in an environment where distraction gives way to focus and every rep is purposeful.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-800/80">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-display text-base uppercase font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B842]" />
                  <span>Uncompromised Atmosphere</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Clean, high-energy environment with focused members and trainers who lead by personal example.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-display text-base uppercase font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B842]" />
                  <span>Biomechanical Accuracy</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Precision plate-loaded and free-weight systems minimizing joint wear while maximizing muscular activation.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-display text-base uppercase font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B842]" />
                  <span>134+ Community Backing</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Loved and recommended by 134+ verified Google review patrons across South Chennai.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-display text-base uppercase font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B842]" />
                  <span>Affordable Excellence</span>
                </div>
                <p className="text-xs text-neutral-400">
                  World-class gym standards accessible to every ambitious trainee without inflated corporate markups.
                </p>
              </div>
            </div>

            {/* Location Quote */}
            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-medium text-neutral-200">
                  Mambakkam Main Road, VGP Layout, Vengavasal, Chennai – 600100
                </span>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 text-xs font-display font-bold uppercase tracking-wider text-[#E5B842] hover:text-black hover:bg-[#E5B842] border border-[#E5B842]/40 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Visit Gym
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
