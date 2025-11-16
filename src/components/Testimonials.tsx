import { Star, Quote } from "lucide-react";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "张总",
    role: "TikTok直播团队负责人",
    company: "月GMV 300万+",
    avatar: "https://images.unsplash.com/photo-1700954343841-2134b33d569d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    rating: 5,
    quote: "用了LingExpress后，直播再也没卡过。最重要的是他们的AI客服帮我们节省了2个客服人力，转化率还提升了30%。",
    problem: "直播卡顿严重，每次损失上万",
    result: "直播零卡顿，转化率提升30%"
  },
  {
    name: "李经理",
    role: "独立站运营",
    company: "月销 150万",
    avatar: "https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    rating: 5,
    quote: "之前用VPN，支付成功率只有60%多，客户投诉很多。换成LingExpress专线后，支付成功率稳定在95%以上，客户体验好太多了。",
    problem: "支付失败率高，客户流失",
    result: "支付成功率提升至95%+"
  },
  {
    name: "王老板",
    role: "多店铺运营",
    company: "12个Amazon店铺",
    avatar: "https://images.unsplash.com/photo-1700668644152-fb93dc76be4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    rating: 5,
    quote: "最怕的就是IP关联被封号。LingExpress给每个店铺分配独立IP，运营了半年，一个店铺都没出问题。技术支持也很专业。",
    problem: "IP关联风险，店铺被封",
    result: "12个店铺安全运营，零封号"
  },
  {
    name: "陈总",
    role: "跨境电商公司CEO",
    company: "团队30人",
    avatar: "https://images.unsplash.com/photo-1738566061505-556830f8b8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    rating: 5,
    quote: "之前公司用了5、6个不同的工具，成本高还难管理。LingExpress一站式解决了网络、客服、数据分析的问题，团队效率至少提升了一倍。",
    problem: "多工具成本高，管理混乱",
    result: "成本降低40%，效率翻倍"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4 text-sm sm:text-base">
            客户见证
          </div>
          <h2 className="text-slate-900 mb-4 text-3xl sm:text-4xl lg:text-5xl">
            真实客户，真实效果
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            他们和您遇到同样的问题，现在已经解决了
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-2">
              {/* Quote Icon */}
              <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-blue-200 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 mb-6 text-base sm:text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Problem & Result */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="text-xs text-slate-500 mb-1">遇到的问题</p>
                  <p className="text-sm text-red-600">{testimonial.problem}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">解决效果</p>
                  <p className="text-sm text-green-600">{testimonial.result}</p>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-slate-900 text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-slate-600">{testimonial.role}</p>
                  <p className="text-xs text-slate-500">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block p-6 sm:p-8 bg-white rounded-2xl shadow-lg max-w-4xl w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl text-blue-600 mb-2">500+</div>
                <div className="text-slate-600 text-sm sm:text-base">企业客户</div>
              </div>
              <div className="hidden sm:block h-16 w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl text-blue-600 mb-2">4.9/5</div>
                <div className="text-slate-600 text-sm sm:text-base">客户满意度</div>
              </div>
              <div className="hidden sm:block h-16 w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl text-blue-600 mb-2">98%</div>
                <div className="text-slate-600 text-sm sm:text-base">续费率</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              加入500+成功的跨境电商企业，让业务增长不再受网络限制
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}