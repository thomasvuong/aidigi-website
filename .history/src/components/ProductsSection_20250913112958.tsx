'use client';

import { useTranslation, type Language } from '@/lib/i18n';

interface ProductsSectionProps {
  language: Language;
}

export function ProductsSection({ language }: ProductsSectionProps) {
  const t = useTranslation(language);

  const platforms = [
    {
      title: t.products.platform.title,
      description: t.products.platform.description,
      icon: '🔗',
      features: language === 'vi'
        ? ['Tích hợp dữ liệu', 'Đồ thị tri thức', 'LLM + RAG', 'RPA & Automation']
        : ['Data Integration', 'Knowledge Graphs', 'LLM + RAG', 'RPA & Automation']
    },
    {
      title: t.products.leaders.title,
      description: t.products.leaders.description,
      icon: '📊',
      features: language === 'vi'
        ? ['KPI Dashboard', 'Mô phỏng chính sách', 'Cảnh báo rủi ro', 'Phân tích liên ngành']
        : ['KPI Dashboards', 'Policy Simulation', 'Risk Alerts', 'Cross-agency Insights']
    },
    {
      title: t.products.staff.title,
      description: t.products.staff.description,
      icon: '🤖',
      features: language === 'vi'
        ? ['Xác thực tài liệu', 'Tự động điền form', 'Phân bổ công việc', 'Chatbot pháp lý']
        : ['Document Validation', 'Auto-complete Forms', 'Work Allocation', 'Legal Chatbots']
    },
    {
      title: t.products.citizens.title,
      description: t.products.citizens.description,
      icon: '👥',
      features: language === 'vi'
        ? ['Hướng dẫn tự nhiên', 'Theo dõi hồ sơ', 'Nhắc nhở thông minh', 'Hỗ trợ 24/7']
        : ['Natural Guidance', 'Case Tracking', 'Smart Reminders', '24/7 Support']
    }
  ];

  return (
    <section id="platform" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t.products.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'vi'
                ? 'Các giải pháp AI toàn diện cho từng nhóm đối tượng trong hệ thống hành chính công'
                : 'Comprehensive AI solutions for every stakeholder in public administration'
              }
            </p>
          </div>

          {/* Platform Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                      {platform.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {platform.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {platform.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-gray-400"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stack */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-white">
              {language === 'vi' ? 'Công nghệ & Kiến trúc' : 'Technology & Architecture'}
            </h3>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">ML</span>
                  </div>
                  <div className="text-sm text-gray-300">Machine Learning</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">LLM</span>
                  </div>
                  <div className="text-sm text-gray-300">Large Language Models</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">CV</span>
                  </div>
                  <div className="text-sm text-gray-300">Computer Vision</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">RPA</span>
                  </div>
                  <div className="text-sm text-gray-300">Process Automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
