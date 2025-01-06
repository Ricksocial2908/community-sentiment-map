interface BreakdownProps {
  breakdown: Array<{
    source: string;
    value: string;
    sentiment?: {
      positive: string;
      negative: string;
    };
  }>;
}

export const Breakdown = ({ breakdown }: BreakdownProps) => {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-300">Breakdown:</h4>
      <ul className="mt-1 space-y-1">
        {breakdown.map((item, index) => (
          <li key={index} className="text-xs">
            <div className="flex justify-between">
              <span className="text-gray-400">{item.source}</span>
              <span className="text-gray-300">{item.value}</span>
            </div>
            {'sentiment' in item && item.sentiment && (
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
  );
};