import { cn } from "@/lib/utils";

interface MetricsCardProps {
  label: string;
  value: string | number;
  trend?: "up" | "down";
  className?: string;
}

export const MetricsCard = ({ label, value, trend, className }: MetricsCardProps) => {
  return (
    <div className={cn(
      "p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10",
      "transition-all duration-300 hover:scale-105",
      className
    )}>
      <p className="text-sm font-medium text-gray-400">{label}</p>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-white">{value}</p>
        {trend && (
          <span className={cn(
            "ml-2 text-sm",
            trend === "up" ? "text-green-400" : "text-red-400"
          )}>
            {trend === "up" ? "↑" : "↓"}
          </span>
        )}
      </div>
    </div>
  );
};