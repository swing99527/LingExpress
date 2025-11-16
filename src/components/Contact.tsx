import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import wechatQR from "figma:asset/de6bf7ac200b7d647eb97380aafd7c672063a8ff.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    problem: "",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.phone || !formData.problem) {
      toast.error("请填写姓名、联系电话和遇到的问题");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("https://formsubmit.co/ajax/lingexpress@cyber-router.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          姓名: formData.name,
          公司: formData.company,
          联系电话: formData.phone,
          主要问题: formData.problem,
          需求描述: formData.requirements,
          来源: "LingExpress 官网"
        })
      });

      if (!response.ok) {
        throw new Error("网络请求失败");
      }

      toast.success("提交成功！我们的专家会在30分钟内联系您");
      setFormData({
        name: "",
        company: "",
        phone: "",
        problem: "",
        requirements: ""
      });
    } catch (error) {
      toast.error("提交失败，请稍后再试或通过邮箱联系我们");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleProblemChange = (value: string) => {
    setFormData({
      ...formData,
      problem: value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">
            免费诊断您的业务问题
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            告诉我们您遇到的问题，获取专属解决方案
            <br />
            <span className="text-yellow-300">30分钟内专家回复 · 7天免费试用 · 不满意全额退款</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="联系 LingExpress 获取跨境网络方案">
              <div>
                <Label htmlFor="problem" className="text-white">
                  您遇到的主要问题 <span className="text-orange-400">*</span>
                </Label>
                <Select onValueChange={handleProblemChange} value={formData.problem}>
                  <SelectTrigger className="mt-2 bg-white/10 border-white/30 text-white">
                    <SelectValue placeholder="请选择您遇到的主要问题" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="直播卡顿">TikTok/YouTube直播卡顿掉线</SelectItem>
                    <SelectItem value="支付失败">PayPal/Stripe支付成功率低</SelectItem>
                    <SelectItem value="IP关联">多店铺IP关联被封</SelectItem>
                    <SelectItem value="客服响应">客户咨询响应慢，转化低</SelectItem>
                    <SelectItem value="平台访问">平台访问慢，运营效率低</SelectItem>
                    <SelectItem value="多平台管理">多平台管理混乱</SelectItem>
                    <SelectItem value="其他">其他问题</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="name" className="text-white">
                  姓名 <span className="text-orange-400">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="请输入您的姓名"
                  className="mt-2 bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-white">
                  公司名称 / 业务类型
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="例如：独立站卖家、TikTok直播团队等"
                  className="mt-2 bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white">
                  联系电话/微信 <span className="text-orange-400">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="请输入您的手机号或微信号"
                  className="mt-2 bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="requirements" className="text-white">
                  补充说明（可选）
                </Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="例如：月GMV多少、团队规模、目前用什么解决方案等"
                  className="mt-2 bg-white/10 border-white/30 text-white placeholder:text-gray-400 min-h-24"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                size="lg"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? "提交中..." : "提交，获取免费诊断方案"}
              </Button>
              <p className="text-xs text-blue-200">
                提交即表示您同意我们的
                <a href="/privacy-policy.html" className="underline mx-1 text-white">
                  隐私政策
                </a>
                ，我们将严格保护您的业务信息。
              </p>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/10 backdrop-blur-lg border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-white">邮件咨询</h4>
                  <p className="text-blue-200">
                    24小时内回复
                  </p>
                  <p className="text-white mt-1">
                    <a href="mailto:lingexpress@cyber-router.com" className="hover:underline">
                      lingexpress@cyber-router.com
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-lg border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-white">微信咨询（推荐）</h4>
                  <p className="text-blue-200 mb-3">
                    扫码添加专属顾问，立即沟通
                  </p>
                  <div className="w-32 h-32 bg-white rounded-lg overflow-hidden">
                    <img
                      src={wechatQR}
                      alt="LingExpress 客服顾问微信二维码"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6">
              <p className="text-lg mb-3">🎁 限时优惠</p>
              <div className="space-y-2 text-white">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>专业方案 7天免费试用</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>所有方案首月 8折优惠</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>免费赠送网络优化服务</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}