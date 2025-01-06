interface SentimentAnalysisProps {
  analysis: {
    positive: {
      percentage: string;
      topTopics: string[];
    };
    negative: {
      percentage: string;
      topTopics: string[];
    };
  };
}

export const SentimentAnalysis = ({ analysis }: SentimentAnalysisProps) => {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-300">Sentiment Analysis:</h4>
      <div className="mt-2 space-y-2">
        <div>
          <div className="flex justify-between text-xs">
            <span className="text-green-400">Positive: {analysis.positive.percentage}</span>
            <span className="text-red-400">Negative: {analysis.negative.percentage}</span>
          </div>
          <div className="mt-1 bg-gray-700 h-2 rounded-full">
            <div 
              className="bg-green-500 h-full rounded-l-full"
              style={{ width: analysis.positive.percentage }}
            />
          </div>
        </div>
        <div className="text-xs">
          <p className="text-gray-300 font-semibold mt-1">Top Positive Topics:</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {analysis.positive.topTopics.map((topic, index) => (
              <span key={index} className="px-2 py-1 rounded-full bg-green-500/20 text-green-300">
                {topic}
              </span>
            ))}
          </div>
          <p className="text-gray-300 font-semibold mt-2">Top Concerns:</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {analysis.negative.topTopics.map((topic, index) => (
              <span key={index} className="px-2 py-1 rounded-full bg-red-500/20 text-red-300">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};