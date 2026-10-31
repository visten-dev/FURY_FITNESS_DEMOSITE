import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Navigation,
  Send,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { GYM_DETAILS, OPERATING_HOURS, PROGRAMS } from '../data/gymData';

export const ContactLocationSection: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'General Fitness',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Live Open/Closed Status for Chennai (IST = UTC+5:30)
  const [isOpenNow, setIsOpenNow] = useState<boolean | null>(null);
  const [todayHoursStr, setTodayHoursStr] = useState<string>('');

  useEffect(() => {
    try {
      // Calculate India Standard Time
      const now = new Date();
      const utcOffset = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcOffset + 3600000 * 5.5);
      const dayOfWeek = istTime.getDay(); // 0 is Sunday, 1 is Monday...
      const currentHour = istTime.getHours();
      const currentMinute = istTime.getMinutes();
      const currentTimeVal = currentHour * 60 + currentMinute;

      // Monday is 1, Sunday is 0
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const todayName = dayNames[dayOfWeek];
      const todayConfig = OPERATING_HOURS.find((h) => h.day === todayName);

      if (todayConfig) {
        setTodayHoursStr(`${todayConfig.day}: ${todayConfig.hours}`);
        const openVal = todayConfig.openHour * 60 + todayConfig.openMinute;
        const closeVal = todayConfig.closeHour * 60 + todayConfig.closeMinute;
        setIsOpenNow(currentTimeVal >= openVal && currentTimeVal < closeVal);
      }
    } catch {
      // Graceful fallback
      setIsOpenNow(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      setFormError('Please provide a valid 10-digit mobile number for communication.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Fury Fitness! My name is ${formData.name || 'a visitor'}. I would like to inquire about ${formData.program} at your Vengavasal gym. ${formData.message}`
    );
    window.open(`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0c0c0c] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#E5B842]" />
              <span className="text-xs uppercase tracking-widest text-[#E5B842] font-semibold">
                Visit & Connect
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold uppercase text-white tracking-tight leading-tight">
              LOCATION & CONTACT
            </h2>
          </div>

          {/* Dynamic Opening Hours Pill */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isOpenNow ? 'bg-emerald-500' : 'bg-amber-500'
              }`}
            />
            <span className="font-semibold text-white">
              {isOpenNow ? 'Gym Open Now' : 'Closed Right Now'}
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-400">{todayHoursStr}</span>
          </div>
        </div>

        {/* 2-Column Split: Info & Map on Left, Functional Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business Details & Google Map */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6">
              {/* Gym Name & Official Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E5B842]/10 border border-[#E5B842]/30 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#E5B842]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide">
                    FURY FITNESS
                  </h3>
                  <address className="not-italic text-sm text-neutral-300 mt-2 space-y-1 font-normal leading-relaxed">
                    <p className="font-medium text-white">{GYM_DETAILS.address.line1}</p>
                    <p>{GYM_DETAILS.address.street}</p>
                    <p>
                      {GYM_DETAILS.address.area}, {GYM_DETAILS.address.city},{' '}
                      {GYM_DETAILS.address.state} – {GYM_DETAILS.address.pincode}
                    </p>
                  </address>
                </div>
              </div>

              {/* Action Buttons: Directions & Call */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-neutral-800">
                <a
                  href={`tel:${GYM_DETAILS.phoneTel}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-white font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E5B842]" />
                  <span>Call 078457 60207</span>
                </a>

                <a
                  href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Fury%20Fitness%2C%20I%20would%20like%20to%20enquire%20about%20gym%20membership.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-xs text-[#25D366] font-semibold transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={GYM_DETAILS.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#E5B842] hover:bg-[#F3C759] text-xs text-black font-display font-bold uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Directions</span>
                </a>
              </div>

              {/* Operating Hours Table */}
              <div className="pt-4 border-t border-neutral-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5B842]">
                  <Clock className="w-4 h-4" />
                  <span>Weekly Operating Schedule</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {OPERATING_HOURS.map((oh) => (
                    <div
                      key={oh.day}
                      className="flex items-center justify-between p-2 rounded bg-neutral-900/60 border border-neutral-800/60"
                    >
                      <span className="font-medium text-neutral-300">{oh.day}</span>
                      <span className="text-neutral-400 font-mono text-[11px]">{oh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Container */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 h-64 sm:h-72 shadow-xl">
              <iframe
                title="Fury Fitness Google Map Location"
                src="https://maps.google.com/maps?q=Fury%20Fitness%2C%20Mambakkam%20Main%20Road%2C%20Vengavasal%2C%20Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-neutral-300 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E5B842]" />
                <span>VGP Layout, Vengavasal</span>
                <a
                  href={GYM_DETAILS.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E5B842] font-semibold underline flex items-center gap-0.5 ml-1"
                >
                  Open Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact & Enquiry Form */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl">
            <div className="space-y-3 mb-8">
              <span className="text-xs uppercase tracking-widest text-[#E5B842] font-semibold">
                Direct Trainer Enquiry
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white tracking-wide">
                SEND AN ENQUIRY
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                Leave your details below to schedule an in-person facility tour, discuss membership options, or book a consultation with our coaches.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-neutral-900/90 border border-[#E5B842]/40 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#E5B842]/10 border border-[#E5B842]/30 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-[#E5B842]" />
                </div>
                <h4 className="font-display text-2xl uppercase font-bold text-white tracking-wide">
                  Enquiry Received
                </h4>
                <p className="text-sm text-neutral-300 max-w-sm mx-auto font-normal">
                  Thank you, <strong className="text-white">{formData.name}</strong>. The Fury Fitness team at Vengavasal will contact you at <strong className="text-[#E5B842]">{formData.phone}</strong> shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#25D366] text-black font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', program: 'General Fitness', message: '' });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white text-xs font-medium cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {formError && (
                  <div className="p-3.5 rounded-lg bg-red-950/60 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-[#E5B842] focus:outline-none text-white text-sm transition-colors"
                  />
                </div>

                {/* Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-[#E5B842] focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-[#E5B842] focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Program Interest */}
                <div>
                  <label htmlFor="program" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Primary Area of Interest
                  </label>
                  <select
                    id="program"
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-[#E5B842] focus:outline-none text-white text-sm transition-colors cursor-pointer"
                  >
                    {PROGRAMS.map((p) => (
                      <option key={p.id} value={p.title} className="bg-neutral-900 text-white">
                        {p.title} ({p.category})
                      </option>
                    ))}
                    <option value="General Gym Membership" className="bg-neutral-900 text-white">
                      General Gym Membership
                    </option>
                    <option value="Facility Tour & Pricing" className="bg-neutral-900 text-white">
                      Facility Tour & Pricing
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Message or Questions (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your fitness background, timing preference, or questions..."
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-[#E5B842] focus:outline-none text-white text-sm transition-colors resize-none"
                  />
                </div>

                {/* Submit button & WhatsApp option */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg bg-[#E5B842] hover:bg-[#F3C759] text-black font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(229,184,66,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Details...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Gym Enquiry</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 pt-2">
                    <span>Or reach out immediately via</span>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="text-[#25D366] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Chat
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
