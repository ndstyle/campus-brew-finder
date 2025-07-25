import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getTagColor = (tag) => {
    const colors = {
      'quiet': 'bg-green-100 text-green-800',
      'loud': 'bg-red-100 text-red-800',
      'study-friendly': 'bg-blue-100 text-blue-800',
      'group study': 'bg-purple-100 text-purple-800',
      'strong wifi': 'bg-emerald-100 text-emerald-800',
      'weak wifi': 'bg-orange-100 text-orange-800',
      'power outlets': 'bg-indigo-100 text-indigo-800',
      'outdoor seating': 'bg-teal-100 text-teal-800',
      'comfortable seating': 'bg-cyan-100 text-cyan-800',
      'good lighting': 'bg-amber-100 text-amber-800',
      '24/7': 'bg-violet-100 text-violet-800',
      'open late': 'bg-pink-100 text-pink-800',
      'good coffee': 'bg-brown-100 text-brown-800',
      'good pastries': 'bg-rose-100 text-rose-800',
      'local roasts': 'bg-lime-100 text-lime-800',
      'late night snacks': 'bg-slate-100 text-slate-800'
    };
    return colors[tag] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-3 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header with user info and coffee shop */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <img
            src={review.user.avatar}
            alt={review.user.username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-900 text-sm">
                @{review.user.username}
              </span>
              <span className="text-gray-400 text-xs">•</span>
              <span className="text-gray-500 text-xs">{review.timestamp}</span>
            </div>
            <div className="font-semibold text-gray-900 text-base mt-0.5">
              {review.coffeeShop}
            </div>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-1 mb-3">
        {renderStars(review.rating)}
        <span className="text-sm font-medium text-gray-700 ml-1">
          {review.rating}/5
        </span>
      </div>

      {/* Tags */}
      {review.tags && review.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {review.tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Review text */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {review.reviewText}
      </p>
    </div>
  );
};

export default ReviewCard;

