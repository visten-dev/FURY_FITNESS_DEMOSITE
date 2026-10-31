import React from 'react';
import { MapPin, Phone, Clock, ArrowUp, MessageSquare, ExternalLink } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-neutral-900 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-neutral-900">
          {/* Brand Info & Original Logo */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <img
                src={GYM_DETAILS.logoUrl}
                alt="Fury Fitness Brand Identity"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="font-display font-bold text-2xl tracking-wider text-white block leading-none">
                  FURY FITNESS
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#E5B842] font-semibold">
                  Vengavasal · Chennai
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              Built by discipline. Defined by strength. A dedicated fitness facility in Vengavasal committed to genuine physical conditioning, strength, and transformation.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`tel:${GYM_DETAILS.phoneTel}`}
                className="p-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-[#E5B842] transition-colors"
                title="Call 078457 60207"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${GYM_DETAILS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={GYM_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 transition-colors"
                title="Open Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-base uppercase font-bold text-white tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-[#E5B842] transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E5B842] transition-colors">
                  About Fury Fitness
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#E5B842] transition-colors">
                  Gym Facilities
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#E5B842] transition-colors">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E5B842] transition-colors">
                  Atmosphere & Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#E5B842] transition-colors">
                  Verified Reviews (134)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E5B842] transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Address Summary */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display text-base uppercase font-bold text-white tracking-wider">
              Timings & Location
            </h4>
            <div className="text-sm space-y-2 text-neutral-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#E5B842] shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white">Mon – Sat: 5:00 AM – 10:00 PM</div>
                  <div className="text-xs text-neutral-400">Sunday: 6:00 AM – 1:00 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <MapPin className="w-4 h-4 text-[#E5B842] shrink-0 mt-0.5" />
                <address className="not-italic text-xs text-neutral-400 leading-relaxed">
                  2nd Floor, No. 1/554, Mambakkam Main Road, VGP Layout, Vengavasal, Chennai, Tamil Nadu – 600100
                </address>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${GYM_DETAILS.phoneTel}`}
                  className="text-xs text-[#E5B842] font-semibold hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" /> Tel: 078457 60207
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} FURY FITNESS. All rights reserved. Vengavasal, Chennai.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-600">Unleash Your Inner Strength</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
