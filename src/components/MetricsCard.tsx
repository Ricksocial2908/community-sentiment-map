import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface MetricsCardProps {
  label: string;
  value: string | number;
  trend?: "up" | "down";
  className?: string;
}

export const MetricsCard = ({ label, value, trend, className }: MetricsCardProps) => {
  // Get detailed information based on the metric label
  const getDetailedInfo = (label: string) => {
    switch (label) {
      case "Community Sentiment":
        return {
          sources: ["Twitter Analysis", "LinkedIn Engagement", "Community Forums"],
          breakdown: [
            { source: "Social Media", value: "78%" },
            { source: "Direct Feedback", value: "92%" },
            { source: "Forum Activity", value: "85%" }
          ],
          lastUpdated: "2024-03-15"
        };
      case "Articles Published":
        return {
          sources: ["Academic Journals", "Tech Blogs", "News Outlets"],
          breakdown: [
            { source: "Research Papers", value: "45" },
            { source: "Industry Reports", value: "73" },
            { source: "News Articles", value: "47" }
          ],
          lastUpdated: "2024-03-14"
        };
      case "Students in Programs":
        return {
          sources: ["University Registrars", "Online Learning Platforms"],
          breakdown: [
            { source: "Undergraduate", value: "1,200" },
            { source: "Graduate", value: "800" },
            { source: "Certificate Programs", value: "800" }
          ],
          lastUpdated: "2024-03-13"
        };
      case "Investment to Date":
        return {
          sources: ["Financial Reports", "Investment Records", "Grant Database"],
          breakdown: [
            { source: "Private Investment", value: "$8.5M" },
            { source: "Government Grants", value: "$4.2M" },
            { source: "Research Funding", value: "$3.3M" }
          ],
          lastUpdated: "2024-03-12"
        };
      default:
        return null;
    }
  };

  const detailedInfo = getDetailedInfo(label);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className={cn(
          "p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10",
          "transition-all duration-300 hover:scale-105 cursor-pointer",
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
      </HoverCardTrigger>
      {detailedInfo && (
        <HoverCardContent className="w-80 bg-gray-900/95 border border-white/10 text-white backdrop-blur-xl">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-300">Data Sources:</h4>
              <ul className="mt-1 text-xs text-gray-400">
                {detailedInfo.sources.map((source, index) => (
                  <li key={index}>{source}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300">Breakdown:</h4>
              <ul className="mt-1 space-y-1">
                {detailedInfo.breakdown.map((item, index) => (
                  <li key={index} className="flex justify-between text-xs">
                    <span className="text-gray-400">{item.source}</span>
                    <span className="text-gray-300">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-xs text-gray-500">
              Last updated: {detailedInfo.lastUpdated}
            </div>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};