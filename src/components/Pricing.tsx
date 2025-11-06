import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Check, Zap } from "lucide-react";

export function Pricing() {
  const pricingPlans = [
    {
      speed: "基础版",
      monthlyFee: "699元/月",
      features: [
        "适合初创跨境团队",
        "1个独立原生IP",
        "标准技术支持",
        "稳定低延迟连接"
      ],
      popular: false
    },
    {
      speed: "专业版",
      monthlyFee: "1699元/月",
      features: [
        "适合成长型企业",
        "1个独立原生IP",
        "优先技术支持",
        "多平台稳定运营"
      ],
      popular: true
    },
    {
      speed: "企业定制",
      monthlyFee: "咨询定制",
      features: [
        "适合大型电商团队",
        "多个独立IP可选",
        "7×24小时专属支持",
        "高并发业务保障"
      ],
      popular: false,
      isCustom: true
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-gray-900">
            透明定价，选择最适合您的方案
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            灵活的套餐选择，满足不同规模企业的跨境业务需求
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-6 ${
                plan.popular
                  ? 'border-2 border-orange-500 shadow-xl scale-105'
                  : 'border-2 hover:border-blue-300'
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-1 rounded-full flex items-center gap-1 text-sm whitespace-nowrap">
                    <Zap className="w-4 h-4" />
                    <span>最受欢迎</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-4xl text-blue-600 mb-2">{plan.speed}</div>
                <div className="text-2xl text-gray-900 mb-1">{plan.monthlyFee}</div>
                {!plan.isCustom && <div className="text-sm text-gray-500">按月付费</div>}
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-orange-500 hover:bg-orange-600'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
                onClick={scrollToContact}
              >
                选择方案
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="mb-2 text-gray-900">增加IP地址</h3>
              <p className="text-gray-600">
                默认每个套餐包含1个独立原生IP地址
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="text-2xl text-blue-600 mb-1">150元/月</div>
              <div className="text-sm text-gray-500">每增加1个IP</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>所有套餐均使用合规跨境通道，提供企业级认证设备</p>
        </div>
      </div>
    </section>
  );
}
