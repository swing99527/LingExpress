import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
        <div className="space-y-8 sm:space-y-12">
          {/* Main Message - Single Focus */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-white leading-tight text-4xl sm:text-5xl lg:text-6xl">
              跨境电商每天都在
              <br />
              <span className="text-red-400">流失订单和客户</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              网络不稳定、账号被封、运营效率低
              <br />
              <span className="text-blue-300">这些问题我们都能解决</span>
            </p>
          </div>

          {/* Single Clear CTA */}
          <div className="pt-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-12 py-6 sm:py-8 text-xl sm:text-2xl shadow-2xl hover:shadow-orange-500/50 transition-all w-full sm:w-auto"
            >
              免费诊断我的问题
              <ArrowRight className="ml-2 sm:ml-3 h-6 sm:h-7 w-6 sm:w-7" />
            </Button>
            <p className="mt-4 sm:mt-6 text-slate-300 text-base sm:text-lg">
              7天免费试用 · 不满意全额退款
            </p>
          </div>

          {/* Minimal Trust Indicator */}
          <div className="pt-8 sm:pt-12">
            <p className="text-slate-400 mb-4 text-sm sm:text-base">已帮助500+跨境电商企业解决网络与运营问题</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-xs sm:text-sm">了解具体问题</span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}