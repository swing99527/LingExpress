import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import wechatQR from "figma:asset/de6bf7ac200b7d647eb97380aafd7c672063a8ff.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone) {
      toast.error("请填写姓名和联系电话");
      return;
    }

    // In a real application, this would send data to a backend
    toast.success("提交成功！我们会尽快与您联系");
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      phone: "",
      requirements: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">
            立即开始，让您的出海业务畅通无阻！
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            填写下方表单，获取免费网络诊断和专属解决方案
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  公司名称
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="请输入您的公司名称"
                  className="mt-2 bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white">
                  联系电话 <span className="text-orange-400">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="请输入您的联系电话"
                  className="mt-2 bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="requirements" className="text-white">
                  需求描述
                </Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="请简单描述您的业务场景和需求"
                  className="mt-2 bg-white/10 border-white/30 text-white placeholder:text-gray-400 min-h-32"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                提交，获取免费网络诊断
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/10 backdrop-blur-lg border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-white">电话咨询</h4>
                  <p className="text-blue-200">
                    工作日 9:00-18:00
                  </p>
                  <p className="text-white mt-1">400-XXX-XXXX</p>
                </div>
              </div>
            </Card>

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
                  <p className="text-white mt-1">contact@lingexpress.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-lg border-white/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-white">微信咨询</h4>
                  <p className="text-blue-200 mb-3">
                    扫码添加专属顾问
                  </p>
                  <div className="w-32 h-32 bg-white rounded-lg overflow-hidden">
                    <img 
                      src={wechatQR} 
                      alt="微信二维码" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-center">
              <p className="text-lg mb-2">🎁 限时优惠</p>
              <p className="text-white">
                现在咨询，享受首月8折优惠
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
