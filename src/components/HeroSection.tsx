'use client';

import { useTranslation, type Language } from '@/lib/i18n';

interface HeroSectionProps {
  language: Language;
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = useTranslation(language);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://sbscyber.com/hs-fs/hubfs/Images/BlogImages/AdobeStock_604631734.jpeg?width=8000&height=4064&name=AdobeStock_604631734.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gray-900/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            {t.hero.title}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-400">
              {language === 'vi' ? 'Sứ mệnh' : 'Mission'}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 italic">
              "{t.hero.mission}"
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              {language === 'vi' ? 'Cuộn để khám phá' : 'Scroll to Explore'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
