'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProductsSection } from '@/components/ProductsSection';
import { DemosSection } from '@/components/DemosSection';
import { UseCasesSection } from '@/components/UseCasesSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { type Language } from '@/lib/i18n';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <ProductsSection language={language} />
        <DemosSection language={language} />
        <UseCasesSection language={language} />
        <BenefitsSection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
