'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/lib/i18n';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function Header({ language, setLanguage }: HeaderProps) {
  const t = useTranslation(language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-white">AIDIGI</span>
            <span className="text-sm text-gray-400 ml-2">
              {language === 'vi' ? 'Trí Tuệ Số Nhân Tạo' : 'AI DIGITAL'}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#platform" className="text-gray-300 hover:text-white transition-colors">
              {t.nav.platform}
            </a>
            <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">
              {t.nav.solutions}
            </a>
            <a href="#demos" className="text-gray-300 hover:text-white transition-colors">
              {t.nav.demos}
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          {/* Language Switcher & CTA */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-800 rounded-md p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded ${
                  language === 'en'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('vi')}
                className={`px-3 py-1 text-sm rounded ${
                  language === 'vi'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                VI
              </button>
            </div>
            <Button className="bg-white text-gray-900 hover:bg-gray-100">
              {t.nav.getStarted}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#platform" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.platform}
              </a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.solutions}
              </a>
              <a href="#demos" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.demos}
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.about}
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.contact}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
