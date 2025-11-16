import { Check, Star, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const plans = [
  {
    name: "基础方案",
    price: "699",
    period: "元/月",
    description: "解决核心网络问题，适合初创团队",
    badge: null,
    problems: [
      "网络卡顿、延迟",
      "访问海外平台慢",
      "基础IP防关联需求"
    ],
    features: [
      "企业级专线网络",
      "99.9% 可用性保障",
      "2个独立固定IP",
      "支持 5-10 台设备",
      "50Mbps 带宽",
      "智能网关硬件（租用）",
      "工作日技术支持"
    ],
    notIncluded: [
      "AI智能客服",
      "多平台数据聚合",
      "7×24h支持"
    ],
    suitable: "月GMV 10-50万的初创团队",
    cta: "立即开通"
  },
  {
    name: "专业方案",
    price: "1,699",
    period: "元/月",
    description: "网络 + 运营双重保障，适合成长团队",
    badge: "最受欢迎",
    popular: true,
    problems: [
      "所有基础方案问题",
      "客服响应慢、转化低",
      "多平台管理混乱",
      "缺乏技术支持"
    ],
    features: [
      "✓ 包含基础方案所有功能",
      "5个独立固定IP",
      "支持 10-30 台设备",
      "100Mbps 带宽",
      "AI智能客服系统",
      "多平台消息/订单聚合",
      "实时数据看板",
      "智能网关硬件（买断）",
      "7×24h 专家支持",
      "每月免费网络优化"
    ],
    notIncluded: [],
    suitable: "月GMV 50-300万的成长团队",
    cta: "免费试用7天"
  },
  {
    name: "企业方案",
    price: "定制",
    period: "咨询报价",
    description: "完全定制化，适合大型企业",
    badge: "企业首选",
    problems: [
      "所有专业方案问题",
      "大规模多店铺运营",
      "复杂业务场景",
      "特殊合规需求"
    ],
    features: [
      "✓ 包含专业方案所有功能",
      "无限独立IP（按需分配）",
      "支持 30+ 台设备",
      "200Mbps+ 带宽（可扩展）",
      "专属客户经理",
      "定制化AI训练",
      "私有化部署选项",
      "多硬件设备支持",
      "SLA 99.95% 保障",
      "现场技术支持",
      "业务增长咨询服务"
    ],
    notIncluded: [],
    suitable: "月GMV 300万+的大型企业",
    cta: "联系商务咨询"
  }
];

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            价格套餐
          </div>
          <h2 className="text-slate-900 mb-4">
            根据您的问题选择合适方案
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            我们不按设备卖，按您需要解决的问题收费
            <br />
            <span className="text-green-600">所有方案都包含硬件设备，无需额外购买</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 ${plan.popular ? 'border-4 border-blue-500 shadow-2xl scale-105' : 'border-2'} hover:shadow-xl transition-all duration-300`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm ${plan.popular ? 'bg-blue-600 text-white' : 'bg-slate-600 text-white'} flex items-center gap-1`}>
                  {plan.popular && <Star className="h-4 w-4" />}
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1 mb-2">
                  {plan.price !== "定制" && <span className="text-2xl text-slate-600">¥</span>}
                  <span className="text-slate-900">
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-slate-600 mb-2">{plan.period}</span>}
                </div>
              </div>

              {/* Problems Solved */}
              <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-100">
                <p className="text-sm text-red-900 mb-2">解决哪些问题：</p>
                <div className="space-y-1">
                  {plan.problems.map((problem, i) => (
                    <p key={i} className="text-sm text-red-700">• {problem}</p>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-blue-600' : 'text-green-600'}`} />
                    <span className={`text-slate-700 ${feature.startsWith('✓') ? '' : ''}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Not Included (if any) */}
              {plan.notIncluded.length > 0 && (
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <p className="text-sm text-slate-500 mb-2">不包含：</p>
                  <div className="space-y-1">
                    {plan.notIncluded.map((item, i) => (
                      <p key={i} className="text-sm text-slate-400">× {item}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Suitable For */}
              <div className="mb-6 p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">
                  <span className="text-slate-900">适合：</span> {plan.suitable}
                </p>
              </div>

              {/* CTA */}
              <Button 
                onClick={scrollToContact}
                className={`w-full py-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-800 hover:bg-slate-900'} text-white`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 bg-green-50 border-green-200">
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
              <div>
                <h4 className="text-green-900 mb-2">
                  7天无理由退款
                </h4>
                <p className="text-sm text-green-700">
                  不满意全额退款，零风险试用
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="text-blue-900 mb-2">
                  即开即用
                </h4>
                <p className="text-sm text-blue-700">
                  硬件包邮，快递到付，插上即用
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-purple-50 border-purple-200">
            <div className="flex items-start gap-3">
              <Star className="h-6 w-6 text-purple-600 flex-shrink-0" />
              <div>
                <h4 className="text-purple-900 mb-2">
                  按月付费，随时取消
                </h4>
                <p className="text-sm text-purple-700">
                  无长期合约，灵活调整
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Style Comparison */}
        <div className="bg-slate-50 rounded-2xl p-12">
          <h3 className="text-slate-900 text-center mb-8">
            常见问题
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <p className="text-slate-900 mb-2">
                Q: 为什么比VPN贵？
              </p>
              <p className="text-slate-600 text-sm">
                A: VPN只解决访问问题，我们解决业务问题。专线稳定性、独立IP、AI工具、专家支持，这些VPN都没有。
              </p>
            </div>
            <div>
              <p className="text-slate-900 mb-2">
                Q: 硬件设备需要额外买吗？
              </p>
              <p className="text-slate-600 text-sm">
                A: 不需要。基础方案租用，专业方案买断，企业方案可定制。
              </p>
            </div>
            <div>
              <p className="text-slate-900 mb-2">
                Q: 可以先试用吗？
              </p>
              <p className="text-slate-600 text-sm">
                A: 可以！专业方案提供7天免费试用，其他方案7天无理由退款。
              </p>
            </div>
            <div>
              <p className="text-slate-900 mb-2">
                Q: 技术支持响应多快？
              </p>
              <p className="text-slate-600 text-sm">
                A: 基础方案工作日响应，专业和企业方案30分钟内响应。
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-slate-600 mb-6">
            不确定选哪个方案？让我们帮您分析
          </p>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg"
          >
            免费咨询，获取专属方案
          </Button>
        </div>
      </div>
    </section>
  );
}