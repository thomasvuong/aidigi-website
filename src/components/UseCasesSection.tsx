'use client';

import { useTranslation, type Language } from '@/lib/i18n';

interface UseCasesSectionProps {
  language: Language;
}

export function UseCasesSection({ language }: UseCasesSectionProps) {
  const t = useTranslation(language);

  const useCases = [
    {
      title: language === 'vi' ? 'Cấp phép & Giấy phép' : 'Licensing & Permits',
      description: language === 'vi'
        ? 'Tự động hóa quy trình cấp phép kinh doanh, giấy phép xây dựng, và các loại giấy tờ hành chính khác với AI'
        : 'Automate business licensing, construction permits, and other administrative document processes with AI',
      icon: '📋',
      features: language === 'vi'
        ? ['Xử lý hồ sơ tự động', 'Kiểm tra tính hợp lệ', 'Phê duyệt thông minh', 'Theo dõi tiến độ']
        : ['Automated processing', 'Validity checking', 'Smart approval', 'Progress tracking']
    },
    {
      title: language === 'vi' ? 'Thuế & Trợ cấp' : 'Taxation & Subsidies',
      description: language === 'vi'
        ? 'Quản lý hiệu quả hệ thống thuế và trợ cấp với phân tích dữ liệu thông minh và xử lý tự động'
        : 'Efficiently manage tax and subsidy systems with intelligent data analysis and automated processing',
      icon: '💰',
      features: language === 'vi'
        ? ['Tính thuế tự động', 'Phát hiện gian lận', 'Phân tích rủi ro', 'Báo cáo thông minh']
        : ['Automated calculation', 'Fraud detection', 'Risk analysis', 'Smart reporting']
    },
    {
      title: language === 'vi' ? 'Phân tích Phản hồi Công dân' : 'Citizen Feedback Analysis',
      description: language === 'vi'
        ? 'Thu thập và phân tích ý kiến phản hồi từ công dân để cải thiện chất lượng dịch vụ công'
        : 'Collect and analyze citizen feedback to improve public service quality',
      icon: '💬',
      features: language === 'vi'
        ? ['Phân tích cảm xúc', 'Phân loại chủ đề', 'Báo cáo xu hướng', 'Đề xuất cải tiến']
        : ['Sentiment analysis', 'Topic classification', 'Trend reporting', 'Improvement suggestions']
    },
    {
      title: language === 'vi' ? 'Tối ưu Quản lý Nhân sự' : 'Public Workforce Optimization',
      description: language === 'vi'
        ? 'Tối ưu hóa phân bổ nhân lực và nâng cao hiệu suất làm việc trong cơ quan hành chính'
        : 'Optimize workforce allocation and enhance productivity in administrative agencies',
      icon: '👥',
      features: language === 'vi'
        ? ['Phân bổ công việc', 'Đánh giá hiệu suất', 'Dự đoán nhu cầu', 'Đào tạo thông minh']
        : ['Work allocation', 'Performance evaluation', 'Demand forecasting', 'Smart training']
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t.useCases.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'vi'
                ? 'Các ứng dụng thực tế của AIDIGI trong việc cải thiện hiệu quả hành chính công'
                : 'Real-world applications of AIDIGI in improving public administration efficiency'
              }
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {useCase.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Flow */}
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              {language === 'vi' ? 'Quy trình Triển khai' : 'Deployment Process'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h4 className="font-semibold text-white mb-2">
                  {language === 'vi' ? 'Khảo sát' : 'Assessment'}
                </h4>
                <p className="text-sm text-gray-400">
                  {language === 'vi'
                    ? 'Đánh giá hiện trạng và yêu cầu'
                    : 'Current state and requirements evaluation'
                  }
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h4 className="font-semibold text-white mb-2">
                  {language === 'vi' ? 'PoC' : 'Proof of Concept'}
                </h4>
                <p className="text-sm text-gray-400">
                  {language === 'vi'
                    ? 'Xây dựng mô hình thử nghiệm'
                    : 'Build and test prototype model'
                  }
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h4 className="font-semibold text-white mb-2">
                  {language === 'vi' ? 'Triển khai giai đoạn' : 'Phased Rollout'}
                </h4>
                <p className="text-sm text-gray-400">
                  {language === 'vi'
                    ? 'Triển khai từng giai đoạn'
                    : 'Gradual implementation phases'
                  }
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h4 className="font-semibold text-white mb-2">
                  {language === 'vi' ? 'Mở rộng & Chuyển giao' : 'Scale-up & Handoff'}
                </h4>
                <p className="text-sm text-gray-400">
                  {language === 'vi'
                    ? 'Mở rộng toàn bộ hệ thống'
                    : 'Full system expansion'
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
