import { Hotspot } from "@/lib/types";
import { MetricsCard } from "./MetricsCard";
import { RecommendationsList } from "./RecommendationsList";

interface DataPanelProps {
  hotspot: Hotspot | null;
  isVisible: boolean;
}

export const DataPanel = ({ hotspot, isVisible }: DataPanelProps) => {
  if (!hotspot) return null;

  const getLocationSpecificProjects = (location: string) => {
    const projectsByLocation = {
      "US East (N. Virginia)": [
        { category: "Think Big Space Program", amount: hotspot.metrics.investmentToDate * 0.3, description: "Educational space exploration center" },
        { category: "Local STEM Initiatives", amount: hotspot.metrics.investmentToDate * 0.25, description: "Supporting K-12 STEM programs" },
        { category: "District Heating Project", amount: hotspot.metrics.investmentToDate * 0.2, description: "Sustainable heating infrastructure" },
        { category: "Community Tech Hub", amount: hotspot.metrics.investmentToDate * 0.15, description: "Public access technology center" },
        { category: "Digital Literacy Programs", amount: hotspot.metrics.investmentToDate * 0.1, description: "Adult education initiatives" }
      ],
      "US West (Oregon)": [
        { category: "Renewable Energy Initiative", amount: hotspot.metrics.investmentToDate * 0.35, description: "Solar and wind power projects" },
        { category: "Forest Conservation", amount: hotspot.metrics.investmentToDate * 0.25, description: "Local ecosystem protection" },
        { category: "Tech Apprenticeships", amount: hotspot.metrics.investmentToDate * 0.2, description: "Youth career development" },
        { category: "Innovation Lab", amount: hotspot.metrics.investmentToDate * 0.2, description: "Community research center" }
      ],
      "Europe (Ireland)": [
        { category: "Green Energy Projects", amount: hotspot.metrics.investmentToDate * 0.3, description: "Sustainable power solutions" },
        { category: "Digital Skills Academy", amount: hotspot.metrics.investmentToDate * 0.25, description: "Technology education center" },
        { category: "Community Broadband", amount: hotspot.metrics.investmentToDate * 0.25, description: "Rural internet access" },
        { category: "Local Tech Startups", amount: hotspot.metrics.investmentToDate * 0.2, description: "Entrepreneurship support" }
      ],
      "Asia Pacific (Tokyo)": [
        { category: "Smart City Initiative", amount: hotspot.metrics.investmentToDate * 0.3, description: "Urban technology integration" },
        { category: "STEM Education Center", amount: hotspot.metrics.investmentToDate * 0.25, description: "Youth technology programs" },
        { category: "Disaster Resilience", amount: hotspot.metrics.investmentToDate * 0.25, description: "Community safety infrastructure" },
        { category: "Innovation Hub", amount: hotspot.metrics.investmentToDate * 0.2, description: "Research and development center" }
      ]
    };

    return projectsByLocation[location as keyof typeof projectsByLocation] || [
      { category: "Technology Education", amount: hotspot.metrics.investmentToDate * 0.3, description: "Local learning programs" },
      { category: "Community Infrastructure", amount: hotspot.metrics.investmentToDate * 0.3, description: "Digital access improvements" },
      { category: "Sustainability Projects", amount: hotspot.metrics.investmentToDate * 0.2, description: "Environmental initiatives" },
      { category: "Innovation Support", amount: hotspot.metrics.investmentToDate * 0.2, description: "Local tech development" }
    ];
  };

  const investmentBreakdown = getLocationSpecificProjects(hotspot.name);

  return (
    <div className={`
      fixed right-0 top-0 h-full w-[600px] bg-gray-900/95 backdrop-blur-xl
      transform transition-transform duration-500 ease-in-out
      border-l border-white/10 overflow-y-auto
      ${isVisible ? 'translate-x-0' : 'translate-x-full'}
    `}>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-white mb-6">{hotspot.name}</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <MetricsCard
            label="Community Sentiment"
            value={`${hotspot.metrics.sentiment}%`}
            trend={hotspot.metrics.sentiment > 50 ? "up" : "down"}
          />
          <MetricsCard
            label="Articles Published"
            value={hotspot.metrics.articles}
          />
          <MetricsCard
            label="Students in Programs"
            value={hotspot.metrics.studentsEnrolled.toLocaleString()}
          />
          <MetricsCard
            label="Investment to Date"
            value={`$${(hotspot.metrics.investmentToDate / 1000000).toFixed(1)}M`}
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Community Investment Breakdown</h3>
          <div className="space-y-3">
            {investmentBreakdown.map((item, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
                <div className="flex justify-between items-center mb-1">
                  <div>
                    <span className="text-gray-300">{item.category}</span>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                  <span className="text-white font-semibold">
                    ${(item.amount / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="mt-2 bg-gray-700 h-2 rounded-full">
                  <div 
                    className="bg-blue-500 h-full rounded-full"
                    style={{ width: `${(item.amount / hotspot.metrics.investmentToDate) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Future Investment Required</h3>
          <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
            <span className="text-3xl font-bold text-white">
              ${(hotspot.metrics.futureRequirements / 1000000).toFixed(1)}M
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Recommendations</h3>
          <RecommendationsList
            highCost={hotspot.recommendations.highCost}
            mediumCost={hotspot.recommendations.mediumCost}
            lowCost={hotspot.recommendations.lowCost}
          />
        </div>
      </div>
    </div>
  );
};