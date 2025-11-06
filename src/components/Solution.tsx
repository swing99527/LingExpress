import { Card } from "./ui/card";
import { Zap, Shield, Globe, Cpu, Brain, BarChart3, Link as LinkIcon } from "lucide-react";

export function Solution() {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-gray-900">
            双层架构解决方案，从根源解决问题
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            从网络基础到业务应用，全面保障并提升您的出海业务
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Network Layer */}
          <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full mb-4">
                第一层
              </div>
              <h3 className="mb-2 text-gray-900">
                网络基础层：LingExpress G102 智能网关
              </h3>
              <p className="text-gray-600">
                解决所有网络问题的基石
              </p>
            </div>

            {/* Product Image Placeholder */}
            <div className="mb-6 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Cpu className="w-16 h-16 text-white" />
              </div>
              <p className="mt-4 text-gray-700">LingExpress G102</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 text-gray-900">极致稳定</h4>
                  <p className="text-sm text-gray-600">
                    低时延 30-50ms，低抖动 ≤5ms，专线级体验
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 text-gray-900">绝对合规</h4>
                  <p className="text-sm text-gray-600">
                    企业级安全认证，合规可靠有保障
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 text-gray-900">安全隔离</h4>
                  <p className="text-sm text-gray-600">
                    独立原生海外IP，杜绝账号关联风险
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 text-gray-900">智能易用</h4>
                  <p className="text-sm text-gray-600">
                    即插即用，自动识别优先保障关键业务流量
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Business Layer */}
          <Card className="p-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full mb-4">
                第二层
              </div>
              <h3 className="mb-2 text-gray-900">
                业务加速层：灵思AI一体机
              </h3>
              <p className="text-gray-600">
                在稳定网络之上，用AI工具为业务增长赋能
              </p>
            </div>

            {/* AI Interface Placeholder */}
            <div className="mb-6 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto bg-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Brain className="w-16 h-16 text-white" />
              </div>
              <p className="mt-4 text-gray-700">灵思AI一体机</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 text-gray-900">AI助手</h4>
                  <p className="text-sm text-gray-600">
                    直播数据分析、智能回复，赋能运营
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 text-gray-900">数据整合</h4>
                  <p className="text-sm text-gray-600">
                    多店铺订单、库存、客服数据统一管理
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <LinkIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 text-gray-900">无缝对接</h4>
                  <p className="text-sm text-gray-600">
                    ERP/OMS与海外平台数据交换稳定实时
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 text-gray-900">移动办公</h4>
                  <p className="text-sm text-gray-600">
                    手机端AI小助手，随时随地查询处理业务
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl">
            <p className="text-lg">
              专属合规跨境通道 | 稳定·安全·高效
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
