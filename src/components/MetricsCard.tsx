import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { DetailedInfo } from "./metrics/DetailedInfo";

interface MetricsCardProps {
  label: string;
  value: string | number;
  trend?: "up" | "down";
  className?: string;
}

export const MetricsCard = ({ label, value, trend, className }: MetricsCardProps) => {
  const getDetailedInfo = (label: string) => {
    switch (label) {
      case "Community Sentiment":
        return {
          sources: ["Local Social Media Analysis", "Community Forums", "Direct Feedback"],
          breakdown: [
            { source: "Social Media", value: "78%", sentiment: { positive: "82%", negative: "18%" } },
            { source: "Direct Feedback", value: "92%", sentiment: { positive: "95%", negative: "5%" } },
            { source: "Forum Activity", value: "85%", sentiment: { positive: "88%", negative: "12%" } }
          ],
          sentimentAnalysis: {
            positive: {
              percentage: "88%",
              topTopics: ["Local Job Creation", "Community Programs", "Environmental Impact", "Skills Development"]
            },
            negative: {
              percentage: "12%",
              topTopics: ["Infrastructure Impact", "Construction Timeline", "Local Traffic"]
            }
          },
          lastUpdated: "2024-03-15"
        };
      case "Articles Published":
        return {
          sources: ["Local News Outlets", "Regional Tech Blogs", "Community Publications"],
          breakdown: [
            { source: "Local News", value: "45" },
            { source: "Regional Reports", value: "73" },
            { source: "Community Updates", value: "47" }
          ],
          popularHashtags: ["#LocalTech", "#CommunityGrowth", "#RegionalDevelopment", "#LocalJobs", "#Sustainability"],
          recentArticles: [
            { title: "Local Community Benefits from Tech Investment", date: "2024-03-10" },
            { title: "Regional Economic Impact Study Results", date: "2024-03-08" },
            { title: "Community Skills Development Program Launch", date: "2024-03-05" }
          ],
          lastUpdated: "2024-03-14"
        };
      case "Students in Programs":
        return {
          sources: ["Local Universities", "Community Colleges", "Technical Schools"],
          breakdown: [
            { source: "Local Universities", value: "1,200" },
            { source: "Technical Programs", value: "800" },
            { source: "Community Training", value: "800" }
          ],
          lastUpdated: "2024-03-13"
        };
      case "Investment to Date":
        return {
          sources: ["Local Development Records", "Regional Investment Data", "Community Projects"],
          breakdown: [
            { source: "Infrastructure", value: "$8.5M" },
            { source: "Community Programs", value: "$4.2M" },
            { source: "Skills Development", value: "$3.3M" }
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
          <DetailedInfo detailedInfo={detailedInfo} />
        </HoverCardContent>
      )}
    </HoverCard>
  );
};