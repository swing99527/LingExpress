import { CheckCircle2, Target, Zap, Shield, BarChart3, Headphones } from "lucide-react";
import { Card } from "./ui/card";

const solutions = [
  {
    icon: Zap,
    problem: "直播卡顿、支付失败、平台访问慢",
    solution: "企业级专线网络",
    capability: "100% 解决",
    details: [
      "99.9% 网络可用性保障",
      "直播延迟 < 200ms，完全流畅",
      "支付成功率提升至 95%+",
      "平台访问速度提升 5-10 倍"
    ],
    result: "网络问题彻底消除",
    color: "blue"
  },
  {
    icon: Shield,
    problem: "多店铺IP关联，账号被封",
    solution: "独立IP池 + 智能路由",
    capability: "100% 解决",
    details: [
      "每个店铺分配独立固定IP",
      "IP地理位置与目标市场匹配",
      "支持多账号安全隔离运营",
      "防关联策略自动配置"
    ],
    result: "账号安全风险归零",
    color: "green"
  },
  {
    icon: Target,
    problem: "客户咨询响应慢，转化率低",
    solution: "实时通信保障 + AI智能客服",
    capability: "85% 解决",
    details: [
      "WhatsApp/FB消息实时送达",
      "AI自动回复常见问题（覆盖70%咨询）",
      "智能分配人工客服",
      "多语言自动翻译"
    ],
    result: "咨询转化率提升 50%+",
    color: "purple"
  },
  {
    icon: BarChart3,
    problem: "多平台管理混乱，数据分散",
    solution: "AI智能运营中心",
    capability: "70% 解决",
    details: [
      "聚合所有平台消息和订单",
      "统一库存管理，防止超卖",
      "实时数据看板，辅助决策",
      "智能广告投放分析"
    ],
    result: "运营效率提升 3 倍",
    color: "orange"
  },
  {
    icon: Headphones,
    problem: "技术问题无人解决，自己摸索",
    solution: "7×24h 专家支持",
    capability: "100% 解决",
    details: [
      "30分钟内响应所有技术问题",
      "专属技术顾问一对一指导",
      "免费网络诊断和优化建议",
      "定期业务增长培训"
    ],
    result: "技术无忧，专注业务",
    color: "teal"
  }
];

export function Solution() {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: { gradient: "from-blue-500 to-blue-600", bg: "bg-blue-50", icon: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
      green: { gradient: "from-green-500 to-green-600", bg: "bg-green-50", icon: "text-green-600", badge: "bg-green-100 text-green-700" },
      purple: { gradient: "from-purple-500 to-purple-600", bg: "bg-purple-50", icon: "text-purple-600", badge: "bg-purple-100 text-purple-700" },
      orange: { gradient: "from-orange-500 to-orange-600", bg: "bg-orange-50", icon: "text-orange-600", badge: "bg-orange-100 text-orange-700" },
      teal: { gradient: "from-teal-500 to-teal-600", bg: "bg-teal-50", icon: "text-teal-600", badge: "bg-teal-100 text-teal-700" }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="solution" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4 text-sm sm:text-base">
            LingExpress 解决方案
          </div>
          <h2 className="text-slate-900 mb-4 text-3xl sm:text-4xl lg:text-5xl">
            我们解决什么问题？能解决到什么程度？
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            <span className="text-green-600">网络问题 100% 解决 · 运营效率提升 70-85%</span>
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-16">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            const colors = getColorClasses(item.color);
            
            return (
              <Card key={index} className="p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`p-3 sm:p-4 bg-gradient-to-br ${colors.gradient} rounded-xl flex-shrink-0`}>
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                      <h3 className="text-slate-900 text-base sm:text-lg">
                        {item.solution}
                      </h3>
                      <span className={`px-2 sm:px-3 py-1 ${colors.badge} rounded-full text-xs sm:text-sm whitespace-nowrap`}>
                        {item.capability}
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm">{item.problem}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className={`h-4 w-4 sm:h-5 sm:w-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                      <p className="text-slate-700 text-xs sm:text-sm">{detail}</p>
                    </div>
                  ))}
                </div>

                {/* Result */}
                <div className={`mt-auto pt-4 sm:pt-6 border-t border-slate-200`}>
                  <div className="flex items-center gap-2">
                    <Target className={`h-4 w-4 sm:h-5 sm:w-5 ${colors.icon}`} />
                    <p className={`${colors.icon} text-sm sm:text-base`}>
                      {item.result}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* How We Do It - Secondary */}
        <div className="mt-12 sm:mt-16 bg-slate-50 rounded-2xl p-6 sm:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-slate-900 mb-4 text-2xl sm:text-3xl">
              技术领先优势
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              企业级基础设施 + AI智能技术，打造行业领先的跨境网络与运营解决方案
            </p>
          </div>

          <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
            {/* Network Layer */}
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-slate-900 text-base sm:text-lg">网络基础层</h4>
                  <p className="text-xs sm:text-sm text-slate-500">解决连接问题</p>
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-slate-600 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>企业级SDWAN专线（非VPN）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>全球30+节点智能路由</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>独立IP池 + 防关联隔离</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>智能网关硬件（即插即用）</span>
                </li>
              </ul>
            </div>

            {/* Business Layer */}
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-slate-900 text-base sm:text-lg">业务加速层</h4>
                  <p className="text-xs sm:text-sm text-slate-500">提升运营效率</p>
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-slate-600 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>AI智能客服 + 自动回复</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>多平台消息/订单聚合</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>实时数据看板 + 分析</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>智能运营助手（可选）</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-slate-500 mb-4 sm:mb-6 text-sm sm:text-base">
              硬件设备和软件系统都已准备就绪，开箱即用，无需技术人员
            </p>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              查看套餐价格 →
            </button>
          </div>
        </div>

        {/* Value Summary */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-white mb-6 sm:mb-8 text-2xl sm:text-3xl">
            综合价值
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="text-3xl sm:text-4xl mb-2">100%</div>
              <div className="text-blue-100 text-sm sm:text-base">网络问题解决</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl mb-2">3-5倍</div>
              <div className="text-blue-100 text-sm sm:text-base">运营效率提升</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl mb-2">50%+</div>
              <div className="text-blue-100 text-sm sm:text-base">转化率提升</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl mb-2">零风险</div>
              <div className="text-blue-100 text-sm sm:text-base">账号安全保障</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}