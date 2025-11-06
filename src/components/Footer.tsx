import { Separator } from "./ui/separator";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-white text-xl">LingExpress</span>
                <span className="text-sm text-gray-400">灵思跨境专线</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              企业级合规跨境专线解决方案提供商
            </p>
            <p className="text-sm text-gray-500">
              为跨境电商和外向型企业提供稳定、合规、智能的网络服务
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#pain-points" className="hover:text-blue-400 transition-colors">
                  业务痛点
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-blue-400 transition-colors">
                  解决方案
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors">
                  价格套餐
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  联系我们
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">核心优势</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>企业级安全认证</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>合规专线通道</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>7×24小时服务</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {currentYear} LingExpress. 版权所有
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy.html" className="hover:text-blue-400 transition-colors">
              隐私政策
            </a>
            <a href="/terms-of-service.html" className="hover:text-blue-400 transition-colors">
              服务条款
            </a>
            <a href="/compliance.html" className="hover:text-blue-400 transition-colors">
              合规声明
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
