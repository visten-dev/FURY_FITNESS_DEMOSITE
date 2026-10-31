import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface NavbarProps {
  onOpenEnquiry: (programId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Programs', href: '#programs' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark & Original Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B842]"
            >
              <img
                src={GYM_DETAILS.logoUrl}
                alt="Fury Fitness Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-white group-hover:text-[#E5B842] transition-colors leading-none">
                  FURY FITNESS
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#E5B842] font-semibold leading-tight">
                  Chennai · Vengavasal
                </span>
              </div>
            </a>

            {/* Zone 2: Nav Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-300 hover:text-[#E5B842] transition-colors duration-200 whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E5B842] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action CTA & Quick Contact */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${GYM_DETAILS.phoneTel}`}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900/80 border border-neutral-800 rounded-lg transition-colors whitespace-nowrap"
                title="Call Fury Fitness"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5B842]" />
                <span>078457 60207</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenEnquiry()}
                className="px-5 py-2.5 text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-black bg-[#E5B842] hover:bg-[#F3C759] active:scale-95 transition-all duration-200 rounded-lg shadow-[0_0_20px_rgba(229,184,66,0.3)] hover:shadow-[0_0_25px_rgba(229,184,66,0.5)] whitespace-nowrap shrink-0"
              >
                JOIN NOW
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#0f0f0f] border-l border-neutral-800 p-6 flex flex-col justify-between z-50 animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <img
                    src={GYM_DETAILS.logoUrl}
                    alt="Fury Fitness"
                    className="h-8 w-auto object-contain"
                  />
                  <span className="font-display font-bold text-lg text-white">FURY FITNESS</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-white rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-3 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-neutral-300 hover:text-[#E5B842] py-2 border-b border-neutral-900 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-neutral-800">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 text-center text-sm font-display font-bold uppercase tracking-wider text-black bg-[#E5B842] hover:bg-[#F3C759] rounded-lg shadow-lg"
              >
                JOIN FURY FITNESS
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${GYM_DETAILS.phoneTel}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-200 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E5B842]" /> Call
                </a>
                <a
                  href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Fury%20Fitness%2C%20I%20would%20like%20to%20enquire%20about%20gym%20membership`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-xs text-[#25D366] font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
