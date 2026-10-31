import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageSquare, Send, Dumbbell, AlertCircle } from 'lucide-react';
import { GYM_DETAILS, PROGRAMS } from '../data/gymData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialProgram = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('General Fitness');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialProgram) {
      setSelectedProgram(initialProgram);
    }
  }, [initialProgram]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Fury Fitness, I want to join / enquire about ${selectedProgram} at your Vengavasal gym. My name is ${name || 'Fitness Enthusiast'}. ${notes}`
    );
    window.open(`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#121212] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/30 flex items-center justify-center mx-auto">
              <CheckCircle className="w-9 h-9 text-[#E5B842]" />
            </div>
            <h3 className="font-display text-2xl uppercase font-bold text-white tracking-wide">
              APPLICATION RECEIVED
            </h3>
            <p className="text-sm text-neutral-300 max-w-sm mx-auto font-normal">
              Thanks <strong className="text-white">{name}</strong>. Our trainer at Fury Fitness Vengavasal will call you at <strong className="text-[#E5B842]">{phone}</strong> to confirm your slot.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#25D366] text-black font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white text-xs font-medium cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#E5B842]/10 border border-[#E5B842]/30 flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-[#E5B842]" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E5B842] block">
                  Fury Fitness · Chennai
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide">
                  JOIN FURY FITNESS
                </h3>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-[#E5B842] focus:outline-none text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 07845760207"
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-[#E5B842] focus:outline-none text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Interested Training Area
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-[#E5B842] focus:outline-none text-white text-sm cursor-pointer"
                >
                  {PROGRAMS.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                  <option value="General Gym Membership">General Gym Membership</option>
                  <option value="Facility Tour & Pricing">Facility Tour & Pricing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Notes or Preferred Time
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Morning timings, weight loss goals"
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-[#E5B842] focus:outline-none text-white text-sm"
                />
              </div>

              <div className="pt-3 space-y-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-lg bg-[#E5B842] hover:bg-[#F3C759] text-black font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(229,184,66,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SUBMIT REGISTRATION</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-[#25D366] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Enquiry</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
