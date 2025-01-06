import { Hotspot } from "@/lib/types";
import { getLocationSpecificProjects } from "./utils";

interface InvestmentBreakdownProps {
  hotspot: Hotspot;
}

export const InvestmentBreakdown = ({ hotspot }: InvestmentBreakdownProps) => {
  const investmentBreakdown = getLocationSpecificProjects(hotspot.name);

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4">Community Investment Breakdown</h3>
      <div className="space-y-3">
        {investmentBreakdown.map((item, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
            <div className="flex justify-between items-center mb-1">
              <div className="space-y-2 w-full">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{item.category}</span>
                  <span className="text-white font-semibold">
                    ${(item.amount / 1000000).toFixed(1)}M
                  </span>
                </div>
                <p className="text-sm text-gray-400">{item.description}</p>
                <div className="mt-2 space-y-1">
                  {item.subProjects.map((subProject, idx) => (
                    <div key={idx} className="text-sm text-gray-400 pl-4 border-l border-gray-700">
                      {subProject}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 bg-gray-700 h-2 rounded-full">
              <div 
                className="bg-blue-500 h-full rounded-full"
                style={{ width: `${(item.amount / hotspot.metrics.investmentToDate) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};