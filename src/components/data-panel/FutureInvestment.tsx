import { Hotspot } from "@/lib/types";

interface FutureInvestmentProps {
  hotspot: Hotspot;
}

export const FutureInvestment = ({ hotspot }: FutureInvestmentProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4">Future Investment Required</h3>
      <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
        <span className="text-3xl font-bold text-white">
          ${(hotspot.metrics.futureRequirements / 1000000).toFixed(1)}M
        </span>
      </div>
    </div>
  );
};