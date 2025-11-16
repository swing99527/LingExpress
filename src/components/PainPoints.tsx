import { Video, CreditCard, Users, TrendingDown, Clock, AlertTriangle } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const painPoints = [
  {
    icon: Video,
    title: "直播卡顿，观众秒退",
    image: "https://images.unsplash.com/photo-1651711912897-e90fa4c1f597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    problem: "TikTok/YouTube直播画面卡顿、声音延迟",
    impact: "单场流失15-30%观众，直播权重下降",
    lostValue: "¥5,000 - ¥50,000",
    color: "red"
  },
  {
    icon: CreditCard,
    title: "支付失败，订单丢失",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    problem: "PayPal/Stripe支付页面加载慢或超时",
    impact: "支付成功率从85%降至60%",
    lostValue: "月损失200-1000单",
    color: "orange"
  },
  {
    icon: AlertTriangle,
    title: "IP关联，账号被封",
    image: "https://images.unsplash.com/photo-1761422458790-6096feb000d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    problem: "同一IP登录多个店铺，被平台识别关联",
    impact: "账号限流降权甚至永久封禁",
    lostValue: "¥50,000 - ¥500,000+",
    color: "red"
  },
  {
    icon: Clock,
    title: "客服响应慢，客户流失",
    image: "https://images.unsplash.com/photo-1657056272603-0da051a1474d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    problem: "WhatsApp/FB消息延迟，客户等待过长",
    impact: "咨询转化率从30%降至15%",
    lostValue: "月流失100-500客户",
    color: "yellow"
  },
  {
    icon: TrendingDown,
    title: "平台访问慢，效率低",
    image: "https://images.unsplash.com/photo-1762341112870-1eb70d45b23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    problem: "Amazon/Shopify后台卡顿，上传慢",
    impact: "产品上架慢，错过销售窗口",
    lostValue: "效率降低40-60%",
    color: "blue"
  },
  {
    icon: Users,
    title: "多平台管理混乱",
    image: "https://images.unsplash.com/photo-1678995632928-298d05d41671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    problem: "同时管理多个平台，消息遗漏订单延迟",
    impact: "库存数据不同步，超卖或缺货",
    lostValue: "增加3-5人成本",
    color: "purple"
  }
];

export function PainPoints() {
  const getColorClasses = (color: string) => {
    const colors = {
      red: {
        bg: "bg-red-50",
        border: "border-red-200",
        icon: "text-red-600",
        badge: "bg-red-500 text-white"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        icon: "text-orange-600",
        badge: "bg-orange-500 text-white"
      },
      yellow: {
        bg: "bg-yellow-50",
        border: "border-yellow-200",
        icon: "text-yellow-600",
        badge: "bg-yellow-500 text-white"
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "text-blue-600",
        badge: "bg-blue-500 text-white"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        icon: "text-purple-600",
        badge: "bg-purple-500 text-white"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="problems" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full mb-4 text-sm sm:text-base">
            真实业务场景
          </div>
          <h2 className="text-slate-900 mb-4 text-3xl sm:text-4xl lg:text-5xl">
            这些问题，每天都在吞噬您的利润
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            500+跨境电商企业最头疼的6大问题
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            const colors = getColorClasses(point.color);
            
            return (
              <Card key={index} className={`overflow-hidden border-2 ${colors.border} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
                {/* Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <ImageWithFallback
                    src={point.image}
                    alt={point.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 p-2 sm:p-3 ${colors.badge} rounded-lg shadow-lg`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Title */}
                  <h3 className="text-slate-900 mb-3 text-lg sm:text-xl">
                    {point.title}
                  </h3>

                  {/* Problem */}
                  <p className="text-slate-600 mb-3 leading-relaxed text-sm sm:text-base">
                    {point.problem}
                  </p>

                  {/* Impact */}
                  <p className="text-xs sm:text-sm text-slate-500 mb-4">
                    {point.impact}
                  </p>

                  {/* Lost Value */}
                  <div className={`pt-4 border-t ${colors.border}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-slate-600">平均损失</span>
                      <span className={`px-2 sm:px-3 py-1 ${colors.badge} rounded-full text-xs sm:text-sm`}>
                        {point.lostValue}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="inline-block p-6 sm:p-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-2xl text-white max-w-3xl">
            <p className="text-2xl sm:text-3xl mb-4">
              这些问题加起来，每月让您损失多少？
            </p>
            <p className="text-lg sm:text-xl mb-6 text-red-100">
              平均每月损失 <span className="text-yellow-300">20%-40%</span> 的潜在收入
            </p>
            <button 
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors text-base sm:text-lg shadow-lg w-full sm:w-auto"
            >
              查看解决方案 →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}