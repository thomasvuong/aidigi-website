'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AuthModal } from '@/components/AuthModal';
import { useTranslation, type Language } from '@/lib/i18n';

interface DemosSectionProps {
  language: Language;
}

export function DemosSection({ language }: DemosSectionProps) {
  const t = useTranslation(language);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState<null | number>(null);

  const demos = [
    {
      title: t.demos.demo1,
      description: language === 'vi'
        ? 'Tự động xử lý và phê duyệt giấy phép hành chính với AI'
        : 'Automated processing and approval of administrative licenses with AI',
      image: 'https://thumbs.dreamstime.com/b/digital-government-online-public-services-technology-man-using-laptop-icons-systems-ai-cloud-law-transformation-370410903.jpg',
      url: 'https://www.trituesonhantao/demos/UBNDAL', // This is the special demo from user requirements
      isExternal: true
    },
    {
      title: t.demos.demo2,
      description: language === 'vi'
        ? 'Kiểm tra tính hợp lệ và xác thực tài liệu tự động'
        : 'Automated document validity checking and verification',
      image: 'https://www.itrportal.com/assets/components/phpthumbof/cache/bigstock-digital-transformation-change-412358392%281%29.7bf076f1aa0636fef32dc8d7253de333.jpg',
      url: '/demo/document-validation',
      isExternal: false
    },
    {
      title: t.demos.demo3,
      description: language === 'vi'
        ? 'Trợ lý AI tư vấn thủ tục cho công dân 24/7'
        : '24/7 AI assistant for citizen procedure consultation',
      image: 'https://cloudinary.hbs.edu/hbsit/image/upload/s--rYmzoOvr--/f_auto,c_fill,h_375,w_750,/v20200101/6924D8414269166EA10A67361534E92D.jpg',
      url: '/demo/citizen-assistant',
      isExternal: false
    },
    {
      title: t.demos.demo4,
      description: language === 'vi'
        ? 'Mô phỏng và dự đoán tác động của các chính sách mới'
        : 'Simulation and prediction of new policy impacts',
      image: 'https://thumbs.dreamstime.com/b/digital-government-online-public-services-technology-man-using-laptop-icons-systems-ai-cloud-law-transformation-370410903.jpg',
      url: '/demo/policy-simulator',
      isExternal: false
    },
    {
      title: t.demos.demo5,
      description: language === 'vi'
        ? 'Tích hợp và phân tích dữ liệu từ nhiều cơ quan'
        : 'Integration and analysis of multi-agency data',
      image: 'https://cloudinary.hbs.edu/hbsit/image/upload/s--rYmzoOvr--/f_auto,c_fill,h_375,w_750,/v20200101/6924D8414269166EA10A67361534E92D.jpg',
      url: '/demo/Cross-Agency-Data-Integration/index.html',
      isExternal: false
    }
  ];

  const handleDemoClick = (index: number) => {
    const demo = demos[index];
    if (demo.isExternal) {
      // For the external demo, directly open the URL after authentication
      setSelectedDemo(index);
      setIsAuthModalOpen(true);
    } else {
      // For static export, skip auth and go directly to demo
      window.location.href = demo.url;
    }
  };

  const handleAuthSuccess = () => {
    if (selectedDemo !== null) {
      const demo = demos[selectedDemo];
      if (demo.isExternal) {
        window.open(demo.url, '_blank');
      } else {
        // For internal demos, redirect to the static page
        window.location.href = demo.url;
      }
      setIsAuthModalOpen(false);
      setSelectedDemo(null);
    }
  };

  return (
    <section id="demos" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t.demos.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.demos.subtitle}
            </p>
          </div>

          {/* Demos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 group cursor-pointer"
                onClick={() => handleDemoClick(index)}
              >
                <div className="relative">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {language === 'vi' ? 'Demo' : 'Demo'}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {demo.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>🔒</span>
                      <span>{language === 'vi' ? 'Yêu cầu xác thực' : 'Auth Required'}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-gray-600 text-gray-300 hover:bg-blue-500 hover:border-blue-500"
                    >
                      {language === 'vi' ? 'Truy cập' : 'Access'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Demo Features */}
          <div className="mt-16 text-center">
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-white">
                {language === 'vi' ? 'Tính năng bảo mật Demo' : 'Demo Security Features'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">🔑</span>
                  <span className="text-gray-300">
                    {language === 'vi' ? 'Xác thực mật khẩu' : 'Password Authentication'}
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">👆</span>
                  <span className="text-gray-300">
                    {language === 'vi' ? 'Vân tay sinh trực học' : 'Fingerprint Recognition'}
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl">👤</span>
                  <span className="text-gray-300">
                    {language === 'vi' ? 'Nhận diện khuôn mặt' : 'Face Recognition'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => {
          setIsAuthModalOpen(false);
          setSelectedDemo(null);
        }}
        onSuccess={handleAuthSuccess}
        language={language}
        demoTitle={selectedDemo !== null ? demos[selectedDemo].title : ''}
      />
    </section>
  );
}
