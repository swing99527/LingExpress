import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Check, X, Zap, Activity, Shield, Briefcase } from "lucide-react";

export function Comparison() {
  const comparisonData = [
    {
      metric: "响应速度（时延）",
      icon: Zap,
      vpn: { value: "150-200ms", status: "bad", desc: "忽高忽低" },
      lingexpress: { value: "30-50ms", status: "good", desc: "稳定快速" }
    },
    {
      metric: "画面流畅度（抖动）",
      icon: Activity,
      vpn: { value: "20-30ms", status: "bad", desc: "忽快忽慢" },
      lingexpress: { value: "2-5ms", status: "good", desc: "稳定流畅" }
    },
    {
      metric: "账号安全性（合规）",
      icon: Shield,
      vpn: { value: "高风险", status: "bad", desc: "易被封号" },
      lingexpress: { value: "合规备案", status: "good", desc: "独立IP安全" }
    },
    {
      metric: "推荐用途",
      icon: Briefcase,
      vpn: { value: "临时浏览", status: "bad", desc: "轻量使用" },
      lingexpress: { value: "核心生产业务", status: "good", desc: "专业保障" }
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-gray-900">
            为什么跨境专线是您的唯一正确选择？
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            带宽大 ≠ 体验好。跨境业务的核心是低时延和低抖动，这正是专线的强项
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-1/4">对比指标</TableHead>
                <TableHead className="w-3/8 text-center bg-gray-200">
                  <div className="flex items-center justify-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    <span>普通 VPN</span>
                  </div>
                </TableHead>
                <TableHead className="w-3/8 text-center bg-blue-600 text-white">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>LingExpress 专线</span>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => {
                const Icon = row.icon;
                return (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-gray-600" />
                        </div>
                        <span>{row.metric}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center bg-red-50/50">
                      <div className="py-2">
                        <div className="text-red-600 mb-1">{row.vpn.value}</div>
                        <div className="text-sm text-gray-500">{row.vpn.desc}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center bg-blue-50/50">
                      <div className="py-2">
                        <div className="text-blue-600 mb-1">{row.lingexpress.value}</div>
                        <div className="text-sm text-gray-600">{row.lingexpress.desc}</div>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl shadow-lg">
            <p className="text-xl">
              做正经生意，用专业网络 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
