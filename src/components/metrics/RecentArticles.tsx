interface RecentArticlesProps {
  articles: Array<{
    title: string;
    date: string;
  }>;
}

export const RecentArticles = ({ articles }: RecentArticlesProps) => {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-300">Recent Articles:</h4>
      <ul className="mt-1 space-y-1">
        {articles.map((article, index) => (
          <li key={index} className="text-xs">
            <span className="text-gray-400">{article.title}</span>
            <span className="text-gray-500 ml-1">({article.date})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};