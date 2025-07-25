import { MapPin, Clock, ThumbsUp, ThumbsDown } from 'lucide-react';

const CafeCard = ({ cafe, onClick }) => {
  const recommendationPercentage = Math.round(
    (cafe.recommendations.recommended / cafe.recommendations.total) * 100
  );

  const handleClick = () => {
    if (onClick) {
      onClick(cafe);
    }
  };

  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 p-4 mb-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
      onClick={handleClick}
    >
      {/* Header with name and recommendation percentage */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-lg mb-1">
            {cafe.name}
          </h3>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{cafe.address}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span>{cafe.hours}</span>
          </div>
        </div>
        
        {/* Recommendation Score */}
        <div className="text-right">
          <div className="text-2xl font-bold text-green-600">
            {recommendationPercentage}%
          </div>
          <div className="text-xs text-gray-500">
            recommend
          </div>
        </div>
      </div>

      {/* Photo */}
      {cafe.photos && cafe.photos.length > 0 && (
        <div className="mb-3">
          <img
            src={cafe.photos[0]}
            alt={cafe.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Description */}
      <p className="text-gray-700 text-sm mb-3 leading-relaxed">
        {cafe.description}
      </p>

      {/* Tags */}
      {cafe.tags && cafe.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {cafe.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Recommendation Stats */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-green-600">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-sm font-medium">
              {cafe.recommendations.recommended}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-red-500">
            <ThumbsDown className="w-4 h-4" />
            <span className="text-sm font-medium">
              {cafe.recommendations.notRecommended}
            </span>
          </div>
        </div>
        
        <div className="text-sm text-gray-500">
          {cafe.recommendations.total} total reviews
        </div>
      </div>

      {/* Recent Recommendation Preview */}
      {cafe.recentRecommendations && cafe.recentRecommendations.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-start space-x-3">
            <img
              src={cafe.recentRecommendations[0].user.avatar}
              alt={cafe.recentRecommendations[0].user.username}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm font-medium text-gray-900">
                  @{cafe.recentRecommendations[0].user.username}
                </span>
                <span className="text-xs text-gray-500">
                  {cafe.recentRecommendations[0].user.year}
                </span>
                <div className={`flex items-center space-x-1 ${
                  cafe.recentRecommendations[0].recommended 
                    ? 'text-green-600' 
                    : 'text-red-500'
                }`}>
                  {cafe.recentRecommendations[0].recommended ? (
                    <ThumbsUp className="w-3 h-3" />
                  ) : (
                    <ThumbsDown className="w-3 h-3" />
                  )}
                  <span className="text-xs font-medium">
                    {cafe.recentRecommendations[0].recommended ? 'Recommends' : 'Not recommended'}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {cafe.recentRecommendations[0].reason}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">
                  {cafe.recentRecommendations[0].timestamp}
                </span>
                <span className="text-xs text-gray-500">
                  {cafe.recentRecommendations[0].helpful} found helpful
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CafeCard;

