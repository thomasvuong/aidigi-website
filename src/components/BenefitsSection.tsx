'use client';

import { useTranslation, type Language } from '@/lib/i18n';

interface BenefitsSectionProps {
  language: Language;
}

export function BenefitsSection({ language }: BenefitsSectionProps) {
  const t = useTranslation(language);

  const benefits = [
    {
      icon: '👥',
      title: language === 'vi' ? 'Lãnh đạo' : 'Leaders',
      description: t.benefits.leaders,
      color: 'blue'
    },
    {
      icon: '🏛️',
      title: language === 'vi' ? 'Cán bộ' : 'Civil Servants',
      description: t.benefits.staff,
      color: 'green'
    },
    {
      icon: '🏠',
      title: language === 'vi' ? 'Người dân' : 'Citizens',
      description: t.benefits.citizens,
      color: 'purple'
    }
  ];

  const stats = [
    {
      value: '60%',
      label: t.benefits.stats.faster,
      icon: '⚡'
    },
    {
      value: '40%',
      label: t.benefits.stats.savings,
      icon: '💰'
    },
    {
      value: '90%',
      label: t.benefits.stats.satisfaction,
      icon: '😊'
    }
  ];

  const technologies = [
    {
      name: 'Machine Learning',
      description: language === 'vi'
        ? 'Học máy tiên tiến cho dự đoán và phân tích'
        : 'Advanced machine learning for prediction and analysis',
      progress: 95
    },
    {
      name: 'Natural Language Processing',
      description: language === 'vi'
        ? 'Xử lý ngôn ngữ tự nhiên tối ưu cho tiếng Việt'
        : 'Natural language processing optimized for Vietnamese',
      progress: 98
    },
    {
      name: 'Computer Vision',
      description: language === 'vi'
        ? 'Thị giác máy tính cho xử lý tài liệu'
        : 'Computer vision for document processing',
      progress: 90
    },
    {
      name: 'Process Automation',
      description: language === 'vi'
        ? 'Tự động hóa quy trình hành chính'
        : 'Administrative process automation',
      progress: 92
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t.benefits.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'vi'
                ? 'Kết quả thực tế từ việc triển khai AIDIGI trong hệ thống hành chính công'
                : 'Real results from implementing AIDIGI in public administration systems'
              }
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 text-center group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-8 border border-blue-800 mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              {language === 'vi' ? 'Số liệu Thống kê' : 'Impact Statistics'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Capabilities */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              {language === 'vi' ? 'Năng lực Công nghệ' : 'Technology Capabilities'}
            </h3>
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-white">{tech.name}</h4>
                    <span className="text-blue-400 font-bold">{tech.progress}%</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{tech.description}</p>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${tech.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose AIDIGI */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-8 text-white">
              {language === 'vi' ? 'Tại sao chọn AIDIGI?' : 'Why Choose AIDIGI?'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-blue-400 mb-2">
                  {language === 'vi' ? 'Công nghệ AI tiên tiến nhất' : 'Advanced AI Technologies'}
                </h4>
                <p className="text-sm text-gray-400">
                  {language === 'vi'
                    ? 'Ứng dụng các công nghệ AI mới nhất và phù hợp nhất'
                    : 'Apply the latest and most suitable AI technologies'
                  }
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-green-400 mb-2">
                  {language === 'vi' ? 'Chuyên gia giàu kinh nghiệm' : 'Experienced Experts'}
                </h4>
                <p className="text-sm text-gray-400">
                  {language === 'vi'
                    ? 'Đội ngũ chuyên gia đa lĩnh vực và đa vùng'
                    : 'Cross-domain and regional expert team'
                  }
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-purple-400 mb-2">
                  {language === 'vi' ? 'Tối ưu cho tiếng Việt' : 'Vietnamese Optimization'}
                </h4>
                <p className="text-sm text-gray-400">
                  {language === 'vi'
                    ? 'Được thiết kế và tối ưu đặc biệt cho ngôn ngữ tiếng Việt'
                    : 'Specially designed and optimized for Vietnamese language'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
