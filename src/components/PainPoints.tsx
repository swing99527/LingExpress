import { Card } from "./ui/card";
import { Video, CreditCard, ShieldAlert, Users } from "lucide-react";

export function PainPoints() {
  const painPoints = [
    {
      icon: Video,
      title: "直播卡顿掉线",
      description: "观众流失转化难",
      details: "直播画面马赛克、音画不同步、弹幕延迟，导致观众流失、转化率低"
    },
    {
      icon: CreditCard,
      title: "支付转圈失败",
      description: "订单白白流失",
      details: "支付页面加载缓慢、超时失败，导致订单流失，现金流受损"
    },
    {
      icon: ShieldAlert,
      title: "IP关联风险",
      description: "多账号运营心惊胆战",
      details: "IP不稳定或关联，易被平台风控判定为异常登录，导致封号"
    },
    {
      icon: Users,
      title: "跨国沟通延迟",
      description: "客户体验差、商机错失",
      details: "视频会议延迟、掉线，影响样品确认和合同谈判的信任感"
    }
  ];

  return (
    <section id="pain-points" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-gray-900">
            您的出海业务，是否正被网络拖后腿？
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            跨境电商和外向型工厂在出海过程中，常常面临这些网络难题
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-shadow border-2 hover:border-orange-500/50"
              >
                <div className="mb-4 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="mb-2 text-gray-900">
                  {point.title}
                </h3>
                <p className="text-orange-600 mb-3">
                  {point.description}
                </p>
                <p className="text-sm text-gray-600">
                  {point.details}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
