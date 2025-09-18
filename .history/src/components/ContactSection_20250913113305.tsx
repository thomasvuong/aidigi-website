
'use client';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation, type Language } from '@/lib/i18n';

interface ContactSectionProps {
  language: Language;
}

export function ContactSection({ language }: ContactSectionProps) {
  const t = useTranslation(language);
  const [preview, setPreview] = useState<null | { src: string; alt: string }>(null);
  // Read prefill from URL (subject/message)
  const [prefill, setPrefill] = useState<{ subject?: string; message?: string } | null>(null);
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.replace(/^#/, '');
    const [anchor, query] = hash.includes('?') ? hash.split('?') : ['', ''];
    if (anchor === 'contact') {
      const params = new URLSearchParams(query);
      const subject = params.get('subject') || undefined;
      const message = params.get('message') || undefined;
      if (subject || message) setPrefill({ subject, message });
      // ensure we scroll into view when arriving with hash
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const founders = [
    { name: 'Mai Trọng Thi', role: language === 'vi' ? 'Đồng sáng lập & CEO' : 'Co-founder & CEO', avatar: '/images/mai-trong-thi.jpg' },
    { name: 'Vương Đạo Nghệ', role: language === 'vi' ? 'Đồng sáng lập & CTO' : 'Co-founder & CTO', avatar: '/images/vuong-dao-nghe.jpg' },
    { name: 'Nguyễn Tất Đạt', role: language === 'vi' ? 'Đồng sáng lập & Strategic Advisor' : 'Co-founder & Strategic Advisor', avatar: '/images/nguyen-tat-dat.jpg' },
    { name: 'Phan Việt', role: language === 'vi' ? 'Đồng sáng lập & COO' : 'Co-founder & COO', avatar: '/images/phan-viet.jpg' }
  ];

  return (
    <>
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t.contact.title}
            </h2>
            <p className="text-xl text-blue-400 font-medium mb-4">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Company Info */}
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  {language === 'vi' ? 'Thông tin Liên hệ' : 'Contact Information'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <a
                        href={`mailto:${t.contact.email}`}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {t.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">
                        {language === 'vi' ? 'Điện thoại' : 'Phone'}
                      </div>
                      <a
                        href={`tel:${t.contact.phone}`}
                        className="text-white hover:text-green-400 transition-colors"
                      >
                        {t.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">🏢</span>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">
                        {language === 'vi' ? 'Địa chỉ' : 'Address'}
                      </div>
                      <div className="text-white">
                        {language === 'vi' ? 'Việt Nam' : 'Vietnam'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founders */}
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  {language === 'vi' ? 'Đội ngũ Sáng lập' : 'Founding Team'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {founders.map((founder, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {founder.avatar ? (
                        <img
                          src={founder.avatar}
                          alt={founder.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-full object-cover object-center border border-gray-600 cursor-zoom-in"
                          loading="lazy"
                          onClick={() => setPreview({ src: founder.avatar!, alt: founder.name })}
                        />
                      ) : (
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{founder.name.charAt(0)}</span>
                        </div>
                      )}
                      <div>
                        <div className="text-white font-medium">{founder.name}</div>
                        <div className="text-gray-400 text-sm">{founder.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-900/30 rounded-lg p-6 border border-blue-800">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">
                  {language === 'vi' ? 'Tài nguyên & Hỗ trợ' : 'Resources & Support'}
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-300">
                    ✓ {language === 'vi' ? 'Đào tạo cán bộ' : 'Training programs'}
                  </div>
                  <div className="text-gray-300">
                    ✓ {language === 'vi' ? 'Tài liệu API' : 'API documentation'}
                  </div>
                  <div className="text-gray-300">
                    ✓ {language === 'vi' ? 'Cổng developer' : 'Developer portal'}
                  </div>
                  <div className="text-gray-300">
                    ✓ {language === 'vi' ? 'Hỗ trợ 24/7' : '24/7 support'}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="send-message" className="bg-gray-800 rounded-lg p-8 border border-gray-700 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">
                {language === 'vi' ? 'Gửi tin nhắn' : 'Send Message'}
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {language === 'vi' ? 'Họ và tên' : 'Full Name'}
                    </label>
                    <Input
                      placeholder={language === 'vi' ? 'Nhập họ và tên' : 'Enter your name'}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder={language === 'vi' ? 'Nhập email' : 'Enter your email'}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {language === 'vi' ? 'Chủ đề' : 'Subject'}
                  </label>
                  <Input
                    defaultValue={prefill?.subject}
                    placeholder={language === 'vi' ? 'Nhập chủ đề' : 'Enter subject'}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {language === 'vi' ? 'Tin nhắn' : 'Message'}
                  </label>
                  <Textarea
                    rows={6}
                    defaultValue={prefill?.message || (language === 'vi' ? 'Xin chào AIDIGI,\n\nTôi muốn yêu cầu quyền truy cập xem demo.\n\nTrân trọng.' : 'Hello AIDIGI,\n\nI would like to request access to view the demo.\n\nBest regards.')}
                    placeholder={language === 'vi' ? 'Nhập tin nhắn của bạn...' : 'Enter your message...'}
                    className="bg-gray-700 border-gray-600 text-white resize-none"
                  />
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    // Basic mailto fallback to vuongdaonghe.com (per request)
                    if (typeof window !== 'undefined') {
                      const form = (e.currentTarget.closest('form') as HTMLFormElement) || undefined;
                      const name = form?.querySelector('input[placeholder*="Họ và tên"], input[placeholder*="Full Name"]') as HTMLInputElement | null;
                      const email = form?.querySelector('input[type="email"]') as HTMLInputElement | null;
                      const subjectInput = form?.querySelector('input[placeholder*="Chủ đề"], input[placeholder*="Subject"]') as HTMLInputElement | null;
                      const messageInput = form?.querySelector('textarea') as HTMLTextAreaElement | null;
                      const subject = subjectInput?.value || (language === 'vi' ? 'Yêu cầu truy cập demo AIDIGI' : 'Request demo access AIDIGI');
                      const details = `\n\nName: ${name?.value || ''}\nEmail: ${email?.value || ''}`;
                      const body = encodeURIComponent(`${messageInput?.value || ''}${details}`);
                      const mailto = `mailto:contact@vuongdaonghe.com?subject=${encodeURIComponent(subject)}&body=${body}`;
                      window.location.href = mailto;
                    }
                  }}
                >
                  {language === 'vi' ? 'Gửi tin nhắn' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {preview && (
      <div
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        onClick={() => setPreview(null)}
      >
        <div className="max-w-[90vw] max-h-[90vh]">
          <img
            src={preview.src}
            alt={preview.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>
    )}
    </>
  );
}
