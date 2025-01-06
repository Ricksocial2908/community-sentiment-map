interface RecommendationsListProps {
  highCost: string[];
  mediumCost: string[];
  lowCost: string[];
}

export const RecommendationsList = ({ highCost, mediumCost, lowCost }: RecommendationsListProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
          <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
          High Investment Priority
        </h3>
        <ul className="space-y-2">
          {highCost.map((rec, index) => (
            <li key={index} className="text-gray-300 pl-5 border-l border-red-500/30">
              {rec}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
          <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
          Medium Investment Priority
        </h3>
        <ul className="space-y-2">
          {mediumCost.map((rec, index) => (
            <li key={index} className="text-gray-300 pl-5 border-l border-yellow-500/30">
              {rec}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
          <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
          Low Investment Priority
        </h3>
        <ul className="space-y-2">
          {lowCost.map((rec, index) => (
            <li key={index} className="text-gray-300 pl-5 border-l border-green-500/30">
              {rec}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};