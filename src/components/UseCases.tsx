import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { Video, ShoppingCart, Factory, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function UseCases() {
  const useCases = [
    {
      id: "live",
      label: "电商直播带货",
      icon: Video,
      image: "https://images.unsplash.com/photo-1651711912897-e90fa4c1f597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwc3RyZWFtaW5nJTIwYnJvYWRjYXN0fGVufDF8fHx8MTc2MjMxODg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "保障高清流畅互动，提升用户体验与转化率",
      benefits: [
        "直播画面高清稳定，无马赛克和卡顿",
        "实时互动零延迟，弹幕评论即时响应",
        "多平台同步直播，轻松覆盖全球市场",
        "支付流程丝般顺滑，减少订单流失"
      ]
    },
    {
      id: "multi-platform",
      label: "多平台店铺运营",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1760013767150-da8e4ded6286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIzMzE4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "独立IP安全运营，ERP/订单实时同步",
      benefits: [
        "每个店铺独立IP，杜绝账号关联风险",
        "订单库存实时同步，避免超卖和漏单",
        "多平台数据整合，统一后台高效管理",
        "客服系统快速响应，提升客户满意度"
      ]
    },
    {
      id: "factory",
      label: "工厂出海转型",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1758269445774-61a540a290a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjIzMTQwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "保障B2B视频会议，赋能工厂直播卖货",
      benefits: [
        "高清视频会议，展示样品和生产实力",
        "工厂直播带货，直连海外消费者",
        "远程展示生产进度，增强客户信任",
        "ERP系统与海外平台无缝对接"
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-gray-900">
            满足您多样化的跨境业务场景
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            无论是电商直播、多平台运营，还是工厂转型，我们都能提供专业的网络解决方案
          </p>
        </div>

        <Tabs defaultValue="live" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-2 mb-8 bg-transparent">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white border-2 data-[state=active]:border-blue-600 py-4"
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {useCase.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <ImageWithFallback
                      src={useCase.image}
                      alt={`${useCase.label}跨境网络解决方案案例展示图`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="mb-6 text-gray-900">
                      {useCase.title}
                    </h3>
                    <div className="space-y-4">
                      {useCase.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
