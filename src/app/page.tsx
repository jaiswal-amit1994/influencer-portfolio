"use client"

import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import AboutSection from '@/components/AboutSection';
import BrandCollaborations from '@/components/BrandCollaborations';
import ContactSection from '@/components/ContactSection';
import Hero from '@/components/Hero';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';

export default function Page() {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    
    // Optionally clean up on unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div>
      <Hero />
      <AboutSection />
      <PortfolioSection />
      <BrandCollaborations />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
