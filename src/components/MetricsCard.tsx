import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

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
          sources: ["Twitter Analysis", "LinkedIn Engagement", "Community Forums"],
          breakdown: [
            { source: "Social Media", value: "78%", sentiment: { positive: "82%", negative: "18%" } },
            { source: "Direct Feedback", value: "92%", sentiment: { positive: "95%", negative: "5%" } },
            { source: "Forum Activity", value: "85%", sentiment: { positive: "88%", negative: "12%" } }
          ],
          sentimentAnalysis: {
            positive: {
              percentage: "88%",
              topTopics: ["Community Programs", "STEM Education", "Job Creation", "Environmental Initiatives"]
            },
            negative: {
              percentage: "12%",
              topTopics: ["Traffic Concerns", "Construction Noise", "Parking"]
            }
          },
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
          popularHashtags: ["#AWS", "#AWSdatacentres", "#AWSinCommunities", "#CloudComputing", "#Sustainability"],
          recentArticles: [
            { title: "AWS Expands Community Investment in Northern Virginia", date: "2024-03-10" },
            { title: "Sustainable Data Centers: AWS Leading the Way", date: "2024-03-08" },
            { title: "Community Impact: AWS Educational Programs", date: "2024-03-05" }
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
            {'sentimentAnalysis' in detailedInfo && (
              <div>
                <h4 className="text-sm font-semibold text-gray-300">Sentiment Analysis:</h4>
                <div className="mt-2 space-y-2">
                  <div>
                    <div className="flex justify-between text-xs">
                      <span className="text-green-400">Positive: {detailedInfo.sentimentAnalysis.positive.percentage}</span>
                      <span className="text-red-400">Negative: {detailedInfo.sentimentAnalysis.negative.percentage}</span>
                    </div>
                    <div className="mt-1 bg-gray-700 h-2 rounded-full">
                      <div 
                        className="bg-green-500 h-full rounded-l-full"
                        style={{ width: detailedInfo.sentimentAnalysis.positive.percentage }}
                      />
                    </div>
                  </div>
                  <div className="text-xs">
                    <p className="text-gray-300 font-semibold mt-1">Top Positive Topics:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {detailedInfo.sentimentAnalysis.positive.topTopics.map((topic, index) => (
                        <span key={index} className="px-2 py-1 rounded-full bg-green-500/20 text-green-300">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 font-semibold mt-2">Top Concerns:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {detailedInfo.sentimentAnalysis.negative.topTopics.map((topic, index) => (
                        <span key={index} className="px-2 py-1 rounded-full bg-red-500/20 text-red-300">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div>
              <h4 className="text-sm font-semibold text-gray-300">Breakdown:</h4>
              <ul className="mt-1 space-y-1">
                {detailedInfo.breakdown.map((item, index) => (
                  <li key={index} className="text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">{item.source}</span>
                      <span className="text-gray-300">{item.value}</span>
                    </div>
                    {'sentiment' in item && (
                      <div className="mt-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-green-400">+{item.sentiment.positive}</span>
                          <span className="text-red-400">-{item.sentiment.negative}</span>
                        </div>
                        <div className="mt-1 bg-gray-700 h-1 rounded-full">
                          <div 
                            className="bg-green-500 h-full rounded-l-full"
                            style={{ width: item.sentiment.positive }}
                          />
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {'recentArticles' in detailedInfo && (
              <div>
                <h4 className="text-sm font-semibold text-gray-300">Recent Articles:</h4>
                <ul className="mt-1 space-y-1">
                  {detailedInfo.recentArticles.map((article, index) => (
                    <li key={index} className="text-xs">
                      <span className="text-gray-400">{article.title}</span>
                      <span className="text-gray-500 ml-1">({article.date})</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {'popularHashtags' in detailedInfo && (
              <div>
                <h4 className="text-sm font-semibold text-gray-300">Popular Hashtags:</h4>
                <div className="mt-1 flex flex-wrap gap-1">
                  {detailedInfo.popularHashtags.map((hashtag, index) => (
                    <span key={index} className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                      {hashtag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="text-xs text-gray-500">
              Last updated: {detailedInfo.lastUpdated}
            </div>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};
