import { Card } from "./ui/card";
import { CheckCircle2, ClipboardCheck, Rocket, BarChart3, ArrowRight } from "lucide-react";

export function Deployment() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "需求确认",
      description: "深入了解您的业务场景和网络需求",
      timeline: "第1-2天"
    },
    {
      icon: Rocket,
      title: "开通试点",
      description: "快速部署G102设备，开通专属通道",
      timeline: "第3-5天"
    },
    {
      icon: BarChart3,
      title: "效果对比",
      description: "A/B测试对比，验证性能提升",
      timeline: "第6-10天"
    },
    {
      icon: CheckCircle2,
      title: "全量上线",
      description: "全面切换，持续优化保障",
      timeline: "第11-14天"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-gray-900">
            我们承诺，专业护航
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            两周快速上线，全程专业团队支持，让您的跨境业务快速起飞
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-green-400 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-6 bg-white hover:shadow-xl transition-shadow border-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-3">
                      {step.timeline}
                    </div>
                    <h3 className="mb-2 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-blue-400" />
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
            <h4 className="mb-3 text-gray-900">明确的KPI承诺</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>直播首帧时间 {'<'} 2秒</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>卡顿率 {'<'} 1%</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>支付成功率 {'>'} 99.5%</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
            <h4 className="mb-3 text-gray-900">SLA服务保障</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>网络可用性 99.9%</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>7×24小时技术支持</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>故障响应时间 {'<'} 30分钟</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
            <h4 className="mb-3 text-gray-900">专业团队支持</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>专属客户经理一对一服务</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>定期业务优化建议</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>免费网络诊断与咨询</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
