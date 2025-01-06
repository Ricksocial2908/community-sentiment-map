interface PopularHashtagsProps {
  hashtags: string[];
}

export const PopularHashtags = ({ hashtags }: PopularHashtagsProps) => {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-300">Popular Hashtags:</h4>
      <div className="mt-1 flex flex-wrap gap-1">
        {hashtags.map((hashtag, index) => (
          <span key={index} className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
            {hashtag}
          </span>
        ))}
      </div>
    </div>
  );
};