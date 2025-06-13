import AboutSection from '@/components/AboutSection'
import BrandCollaborations from '@/components/BrandCollaborations'
import ContactSection from '@/components/ContactSection'
import Hero from '@/components/Hero'
import PortfolioSection from '@/components/PortfolioSection'
import ServicesSection from '@/components/ServicesSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <PortfolioSection />
      <BrandCollaborations />
      <ServicesSection />
      <ContactSection />
    </div>
  )
}
