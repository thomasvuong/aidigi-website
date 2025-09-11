'use client';

import { useTranslation, type Language } from '@/lib/i18n';

interface AboutSectionProps {
  language: Language;
}

export function AboutSection({ language }: AboutSectionProps) {
  const t = useTranslation(language);

  const values = [
    {
      title: t.about.values.efficiency,
      icon: '⚡',
      description: language === 'vi'
        ? 'Nâng cao hiệu suất vận hành qua tự động hóa thông minh'
        : 'Enhance operational efficiency through intelligent automation'
    },
    {
      title: t.about.values.trust,
      icon: '🔒',
      description: language === 'vi'
        ? 'Đảm bảo độ tin cậy và bảo mật cao nhất cho dữ liệu công'
        : 'Ensure highest reliability and security for public data'
    },
    {
      title: t.about.values.accessibility,
      icon: '🌐',
      description: language === 'vi'
        ? 'Tạo trải nghiệm thuận tiện, dễ tiếp cận cho mọi công dân'
        : 'Create convenient, accessible experience for all citizens'
    },
    {
      title: t.about.values.sustainability,
      icon: '💡',
      description: language === 'vi'
        ? 'Giải pháp bền vững, tiết kiệm chi phí dài hạn'
        : 'Sustainable, cost-effective long-term solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t.about.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t.about.description}
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              {t.about.values.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold mb-3 text-white">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-blue-900/30 rounded-lg p-8 border border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
                <div className="text-gray-300">
                  {language === 'vi' ? 'Công nghệ AI tiên tiến' : 'Advanced AI Technologies'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">
                  {language === 'vi' ? 'Tối ưu cho tiếng Việt' : 'Vietnamese Language Optimized'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">
                  {language === 'vi' ? 'Hỗ trợ liên tục' : 'Continuous Support'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
