import React from 'react';
import { WHY_FURY_POINTS } from '../data/gymData';
import { Trophy, CheckCircle, Shield, ArrowRight } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-36 bg-[#080808] border-t border-neutral-900 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#E5B842]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Editorial Manifesto & Proof */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#E5B842]" />
                <span className="text-xs uppercase tracking-widest text-[#E5B842] font-semibold">
                  The Fury Manifesto
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-display font-extrabold uppercase text-white tracking-tight leading-[0.95]">
                YOUR GOALS.{' '}
                <span className="text-neutral-400 block">OUR ENVIRONMENT.</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5B842] via-[#F6D878] to-[#D4AF37] block">
                  YOUR TRANSFORMATION.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed pt-2">
                We eliminate the noise. No hollow promises or trendy fads—just world-class biomechanical equipment, unyielding coaching accountability, and an environment that fuels progression.
              </p>
            </div>

            {/* Proof Anchor: Authentic Tournament Proven Card */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E5B842]/10 border border-[#E5B842]/30 flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 text-[#E5B842]" />
                </div>
                <div>
                  <span className="text-[11px] font-display uppercase tracking-wider text-[#E5B842] font-bold block">
                    Proven In Competition
                  </span>
                  <span className="text-xs text-neutral-300 font-medium">
                    State Championship Honors & Powerlifting Records
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Our athletes and everyday lifters consistently test their limits under bar, demonstrating that genuine discipline yields undeniable physical results.
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Staggered Principles (Zero repetitive AI cards) */}
          <div className="lg:col-span-7 divide-y divide-neutral-800/80">
            {WHY_FURY_POINTS.map((pillar) => (
              <div
                key={pillar.number}
                className="py-8 first:pt-0 last:pb-0 group transition-colors"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#E5B842]/40 group-hover:text-[#E5B842] transition-colors shrink-0">
                    {pillar.number}
                  </span>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-[#E5B842] transition-colors tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
