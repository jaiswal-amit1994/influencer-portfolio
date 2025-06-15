"use client"

import { useState, useEffect } from 'react';
import Preloader from "@/components/Preloader";
import LocomotiveScroll from 'locomotive-scroll';
import AboutSection from '@/components/AboutSection';
import BrandCollaborations from '@/components/BrandCollaborations';
import ContactSection from '@/components/ContactSection';
import Hero from '@/components/Hero';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';

export default function Page() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const scroll = new LocomotiveScroll();

    // Optionally clean up on unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <Preloader />
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <Hero />
        <AboutSection />
        <PortfolioSection />
        <BrandCollaborations />
        <ServicesSection />
        <ContactSection />
      </div>
    </>
  );
}
