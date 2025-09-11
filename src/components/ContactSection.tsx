'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation, type Language } from '@/lib/i18n';

interface ContactSectionProps {
  language: Language;
}

export function ContactSection({ language }: ContactSectionProps) {
  const t = useTranslation(language);

  const founders = [
    { name: 'Mai Trọng Thi', role: language === 'vi' ? 'Đồng sáng lập & CEO' : 'Co-founder & CEO' },
    { name: 'Vương Đạo Nghệ', role: language === 'vi' ? 'Đồng sáng lập & CTO' : 'Co-founder & CTO' },
    { name: 'Nguyễn Tất Đạt', role: language === 'vi' ? 'Đồng sáng lập & CPO' : 'Co-founder & CPO' },
    { name: 'Phan Việt', role: language === 'vi' ? 'Đồng sáng lập & COO' : 'Co-founder & COO' }
  ];

  return (
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
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {founder.name.charAt(0)}
                        </span>
                      </div>
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
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
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
                    placeholder={language === 'vi' ? 'Nhập tin nhắn của bạn...' : 'Enter your message...'}
                    className="bg-gray-700 border-gray-600 text-white resize-none"
                  />
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  {language === 'vi' ? 'Gửi tin nhắn' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
