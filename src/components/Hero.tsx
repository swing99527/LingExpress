import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1713127563314-5163b052cf8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMG5ldHdvcmt8ZW58MXx8fHwxNzYyMzA1MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Global Network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="mb-6 text-white">
          告别网络卡顿，专注跨境增长
        </h1>
        <p className="mb-8 text-xl text-gray-200 max-w-3xl mx-auto">
          企业级合规跨境专线，为您的出海业务保驾护航
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white"
            onClick={() => scrollToSection('contact')}
          >
            立即咨询，告别卡顿
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={() => scrollToSection('solution')}
          >
            了解解决方案
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
