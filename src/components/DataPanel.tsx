import { MetricsCard } from "./MetricsCard";
import { RecommendationsList } from "./RecommendationsList";
import { PDFReport } from "./PDFReport";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Hotspot } from "@/lib/types";

interface DataPanelProps {
  hotspot: Hotspot | null;
  isVisible: boolean;
}

export const DataPanel = ({ hotspot, isVisible }: DataPanelProps) => {
  if (!hotspot) return null;

  return (
    <div className={`
      fixed right-0 top-0 h-full w-1/2 bg-gray-900/95 backdrop-blur-xl
      transform transition-transform duration-500 ease-in-out
      border-l border-white/10 overflow-y-auto
      ${isVisible ? 'translate-x-0' : 'translate-x-full'}
    `}>
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">{hotspot.name}</h2>
          <p className="text-gray-400">{hotspot.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <MetricsCard
            title="Community Sentiment"
            value={hotspot.metrics.sentiment}
            trend={hotspot.metrics.sentimentTrend}
            description="Overall community satisfaction score"
          />
          <MetricsCard
            title="Engagement Rate"
            value={hotspot.metrics.engagement}
            trend={hotspot.metrics.engagementTrend}
            description="Community participation level"
          />
          <MetricsCard
            title="Resource Access"
            value={hotspot.metrics.resourceAccess}
            trend={hotspot.metrics.resourceTrend}
            description="Access to essential resources"
          />
          <MetricsCard
            title="Infrastructure"
            value={hotspot.metrics.infrastructure}
            trend={hotspot.metrics.infrastructureTrend}
            description="Quality of local infrastructure"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Key Recommendations</h3>
          <RecommendationsList recommendations={hotspot.recommendations} />
        </div>

        <div className="flex justify-between items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">View Detailed Report</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <PDFReport hotspot={hotspot} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};