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
  const [isTempModalOpen, setIsTempModalOpen] = useState(false);
  const [permPwd, setPermPwd] = useState('');
  const [lifetimeMin, setLifetimeMin] = useState(45);
  const [genPass, setGenPass] = useState<string | null>(null);
  const [error, setError] = useState('');

  function generateCode(length = 8) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let out = '';
    for (let i = 0; i < length; i++) out += chars[Math.floor(Math.random() * chars.length)];
    return out;
  }

  return (
    <>
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
            <Button
              className="bg-white text-gray-900 hover:bg-gray-100"
              onClick={() => {
                setError('');
                setGenPass(null);
                setPermPwd('');
                setLifetimeMin(45);
                setIsTempModalOpen(true);
              }}
            >
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
    {isTempModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="bg-gray-900 border border-gray-800 rounded-lg w-full max-w-md">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
            <h3 className="text-white font-semibold">{language === 'vi' ? 'Tạo mật khẩu tạm thời' : 'Generate Temporary Password'}</h3>
            <button className="text-gray-400 hover:text-white" onClick={() => setIsTempModalOpen(false)}>✕</button>
          </div>
          <div className="p-5 space-y-4">
            {!genPass ? (
              <>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">{language === 'vi' ? 'Xác thực bằng mật khẩu cố định' : 'Authenticate with permanent password'}</label>
                  <input
                    type="password"
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"
                    value={permPwd}
                    onChange={(e) => setPermPwd(e.target.value)}
                    placeholder={language === 'vi' ? 'Nhập mật khẩu cố định' : 'Enter permanent password'}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">{language === 'vi' ? 'Thời hạn (phút)' : 'Lifetime (minutes)'}</label>
                  <input
                    type="number"
                    min={5}
                    max={480}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"
                    value={lifetimeMin}
                    onChange={(e) => setLifetimeMin(Number(e.target.value))}
                  />
                </div>
                {error && <div className="text-red-400 text-sm">{error}</div>}
                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      if (permPwd !== 'orihara') {
                        setError(language === 'vi' ? 'Mật khẩu cố định không đúng' : 'Invalid permanent password');
                        return;
                      }
                      const code = generateCode();
                      const expiresAt = Date.now() + lifetimeMin * 60 * 1000;
                      try {
                        if (typeof window !== 'undefined') {
                          localStorage.setItem('aidigi_temp_pass', code);
                          localStorage.setItem('aidigi_temp_exp', String(expiresAt));
                        }
                        setGenPass(code);
                      } catch {}
                    }}
                  >
                    {language === 'vi' ? 'Tạo mật khẩu' : 'Generate'}
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800"
                    onClick={() => setIsTempModalOpen(false)}
                  >
                    {language === 'vi' ? 'Đóng' : 'Close'}
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="text-gray-300 text-sm">
                  {language === 'vi' ? 'Mật khẩu tạm thời' : 'Temporary password'}
                </div>
                <div className="text-white text-2xl font-mono tracking-widest">{genPass}</div>
                <div className="text-gray-400 text-sm">
                  {language === 'vi' ? 'Hết hạn sau' : 'Expires in'} ~ {lifetimeMin} {language === 'vi' ? 'phút' : 'minutes'}
                </div>
                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      if (navigator.clipboard) navigator.clipboard.writeText(genPass);
                    }}
                  >
                    {language === 'vi' ? 'Sao chép' : 'Copy'}
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800"
                    onClick={() => setIsTempModalOpen(false)}
                  >
                    {language === 'vi' ? 'Xong' : 'Done'}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )}
    </>
  );
}
