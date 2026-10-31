import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandIntroSection } from './components/BrandIntroSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ProgramsSection } from './components/ProgramsSection';
import { GallerySection } from './components/GallerySection';
import { WhyUsSection } from './components/WhyUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { MessageSquare, Phone } from 'lucide-react';
import { GYM_DETAILS } from './data/gymData';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgramForModal, setSelectedProgramForModal] = useState<string>('');

  const handleOpenEnquiry = (programName?: string) => {
    setSelectedProgramForModal(programName || 'General Fitness');
    setIsModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] flex flex-col relative selection:bg-[#E5B842] selection:text-black">
      {/* Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Section 2: Cinematic Hero with 3D Dumbbell */}
        <HeroSection onOpenEnquiry={() => handleOpenEnquiry('Membership Registration')} />

        {/* Section 3: Brand Introduction */}
        <BrandIntroSection />

        {/* Section 4: Fitness Facilities */}
        <FacilitiesSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Section 5: Training Programs */}
        <ProgramsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* Section 6: Gym Experience / Gallery */}
        <GallerySection />

        {/* Section 7: Why Fury Fitness */}
        <WhyUsSection />

        {/* Section 8: Member Testimonials */}
        <TestimonialsSection />

        {/* Section 9: Call to Action */}
        <CtaSection onOpenEnquiry={() => handleOpenEnquiry('Fast-Track Transformation')} />

        {/* Section 10: Location & Contact */}
        <ContactLocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Membership / Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseEnquiry}
        initialProgram={selectedProgramForModal}
      />

      {/* Floating Action Trigger: Quick WhatsApp Button (Discreet corner placement) */}
      <aside aria-label="Quick contact buttons" className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <a
          href={`https://wa.me/${GYM_DETAILS.whatsappNumber}?text=Hi%20Fury%20Fitness%2C%20I%20am%20interested%20in%20joining%20your%20gym%20in%20Vengavasal.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-black flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-200 cursor-pointer"
          title="Direct WhatsApp with Fury Fitness"
          aria-label="Direct WhatsApp with Fury Fitness"
        >
          <MessageSquare className="w-6 h-6 fill-black text-black" />
        </a>
      </aside>
    </div>
  );
}
