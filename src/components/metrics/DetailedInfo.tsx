import { SentimentAnalysis } from './SentimentAnalysis';
import { Breakdown } from './Breakdown';
import { RecentArticles } from './RecentArticles';
import { PopularHashtags } from './PopularHashtags';

interface DetailedInfoProps {
  detailedInfo: any;
}

export const DetailedInfo = ({ detailedInfo }: DetailedInfoProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-semibold text-gray-300">Data Sources:</h4>
        <ul className="mt-1 text-xs text-gray-400">
          {detailedInfo.sources.map((source: string, index: number) => (
            <li key={index}>{source}</li>
          ))}
        </ul>
      </div>
      {'sentimentAnalysis' in detailedInfo && (
        <SentimentAnalysis analysis={detailedInfo.sentimentAnalysis} />
      )}
      <Breakdown breakdown={detailedInfo.breakdown} />
      {'recentArticles' in detailedInfo && (
        <RecentArticles articles={detailedInfo.recentArticles} />
      )}
      {'popularHashtags' in detailedInfo && (
        <PopularHashtags hashtags={detailedInfo.popularHashtags} />
      )}
      <div className="text-xs text-gray-500">
        Last updated: {detailedInfo.lastUpdated}
      </div>
    </div>
  );
};