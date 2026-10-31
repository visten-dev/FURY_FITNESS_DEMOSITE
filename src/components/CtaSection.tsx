import React from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface CtaSectionProps {
  onOpenEnquiry: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#080808] border-t border-neutral-900 overflow-hidden">
      {/* Background imagery with dramatic cinematic scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/interior_6307e5de.jpg"
          alt="Fury Fitness Training Hall"
          className="w-full h-full object-cover opacity-20 filter contrast-125 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-[#080808]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5B842]/10 rounded-full blur-[180px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand Logo Emblem */}
        <div className="mb-6">
          <img
            src={GYM_DETAILS.logoUrl}
            alt="Fury Fitness Emblem"
            className="h-16 w-auto object-contain mx-auto"
          />
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold uppercase text-white tracking-tight leading-tight max-w-3xl">
          THE STRONGER VERSION OF YOU{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5B842] via-[#F6D878] to-[#D4AF37]">
            STARTS HERE.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed">
          Stop waiting for the perfect time. Start building your strength today at FURY FITNESS.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-10 py-4 rounded-lg bg-[#E5B842] hover:bg-[#F3C759] active:scale-95 text-black font-display font-bold text-base uppercase tracking-wider transition-all duration-200 shadow-[0_0_35px_rgba(229,184,66,0.4)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>JOIN FURY FITNESS</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 text-white font-display font-semibold text-base uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <span>CONTACT US</span>
          </a>
        </div>

        {/* Direct Phone & WhatsApp quick bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
          <a
            href={`tel:${GYM_DETAILS.phoneTel}`}
            className="flex items-center gap-2 hover:text-[#E5B842] transition-colors py-1 px-3"
          >
            <Phone className="w-3.5 h-3.5 text-[#E5B842]" />
            <span>Call Directly: {GYM_DETAILS.phone}</span>
          </a>
          <span className="hidden sm:inline text-neutral-700">·</span>
          <a
            href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Fury%20Fitness%2C%20I%20am%20ready%20to%20start%20my%20fitness%20journey.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#25D366] hover:underline py-1 px-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Enquiry: +91 78457 60207</span>
          </a>
        </div>
      </div>
    </section>
  );
};
