import { Video, ShoppingBag, Store, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

const useCases = [
  {
    icon: Video,
    type: "直播电商团队",
    scale: "月GMV 100万+",
    mainProblems: [
      "TikTok/YouTube直播经常卡顿掉线",
      "观众互动延迟，影响转化",
      "直播间权重下降，流量减少"
    ],
    ourSolution: [
      "专线保障直播零卡顿",
      "实时互动延迟<200ms",
      "AI智能客服处理重复咨询"
    ],
    results: [
      "直播观看时长提升 40%",
      "转化率提升 25-35%",
      "人力成本降低 30%"
    ],
    roi: "3个月回本",
    color: "red"
  },
  {
    icon: ShoppingBag,
    type: "独立站卖家",
    scale: "月销 50-200万",
    mainProblems: [
      "PayPal/Stripe支付成功率低",
      "海外客户咨询响应慢",
      "广告投放数据分析滞后"
    ],
    ourSolution: [
      "支付通道稳定性保障",
      "WhatsApp消息实时送达+AI客服",
      "实时数据看板，快速调整投放"
    ],
    results: [
      "支付成功率提升至 95%+",
      "客服响应时间缩短 70%",
      "广告ROI提升 40%"
    ],
    roi: "2个月回本",
    color: "blue"
  },
  {
    icon: Store,
    type: "多店铺运营商",
    scale: "5-20个店铺",
    mainProblems: [
      "IP关联导致店铺被封",
      "多平台管理混乱，效率低",
      "数据分散，无法统一决策"
    ],
    ourSolution: [
      "每店铺独立IP，完全隔离",
      "聚合所有平台消息和订单",
      "统一数据看板，智能分析"
    ],
    results: [
      "账号安全风险归零",
      "运营效率提升 3-5倍",
      "管理成本降低 50%"
    ],
    roi: "1个月回本",
    color: "green"
  },
  {
    icon: TrendingUp,
    type: "成长型电商公司",
    scale: "团队 10-50人",
    mainProblems: [
      "网络不稳定影响全团队效率",
      "缺乏技术支持，问题无人解决",
      "多个工具成本高，还不好用"
    ],
    ourSolution: [
      "企业级专线，全员稳定高速",
      "7×24h专家支持，30分钟响应",
      "一站式解决方案，降低成本"
    ],
    results: [
      "全员工作效率提升 60%",
      "技术问题快速解决",
      "工具成本降低 40%"
    ],
    roi: "1.5个月回本",
    color: "purple"
  }
];

export function UseCases() {
  const getColorClasses = (color: string) => {
    const colors = {
      red: { gradient: "from-red-500 to-pink-500", border: "border-red-200", badge: "bg-red-100 text-red-700" },
      blue: { gradient: "from-blue-500 to-cyan-500", border: "border-blue-200", badge: "bg-blue-100 text-blue-700" },
      green: { gradient: "from-green-500 to-emerald-500", border: "border-green-200", badge: "bg-green-100 text-green-700" },
      purple: { gradient: "from-purple-500 to-indigo-500", border: "border-purple-200", badge: "bg-purple-100 text-purple-700" }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="use-cases" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            客户类型与解决方案
          </div>
          <h2 className="text-slate-900 mb-4">
            不同类型客户，不同问题，精准解决
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            看看您属于哪种类型，我们能帮您解决什么问题
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const colors = getColorClasses(useCase.color);
            
            return (
              <Card key={index} className={`p-8 border-2 ${colors.border} hover:shadow-2xl transition-all duration-300`}>
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-br ${colors.gradient} rounded-xl`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-slate-900 mb-1">
                      {useCase.type}
                    </h3>
                    <p className="text-sm text-slate-500">{useCase.scale}</p>
                  </div>
                </div>

                {/* Main Problems */}
                <div className="mb-6">
                  <h4 className="text-slate-900 mb-3">
                    核心痛点：
                  </h4>
                  <div className="space-y-2">
                    {useCase.mainProblems.map((problem, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-600">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>{problem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our Solution */}
                <div className="mb-6">
                  <h4 className="text-slate-900 mb-3">
                    我们的解决方案：
                  </h4>
                  <div className="space-y-2">
                    {useCase.ourSolution.map((solution, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-600">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="text-green-900 mb-3">
                    实际效果：
                  </h4>
                  <div className="space-y-2">
                    {useCase.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-2 text-green-700">
                        <span className="mt-1">📈</span>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI */}
                <div className={`pt-4 border-t ${colors.border} flex items-center justify-between`}>
                  <span className="text-slate-600">投资回报周期</span>
                  <span className={`px-4 py-2 ${colors.badge} rounded-full`}>
                    {useCase.roi}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-white rounded-2xl shadow-lg max-w-3xl">
            <h3 className="text-slate-900 mb-4">
              找不到您的业务类型？
            </h3>
            <p className="text-slate-600 mb-6">
              每个跨境电商企业的情况都不同，让我们的专家为您量身定制解决方案
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              免费咨询我的业务 →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}