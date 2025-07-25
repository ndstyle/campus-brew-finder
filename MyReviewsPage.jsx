import { useState } from 'react';
import { Coffee, Edit3, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import ReviewCard from './ReviewCard';
import TabNavigation from './TabNavigation';

const MyReviewsPage = () => {
  // Mock user reviews data
  const [userReviews, setUserReviews] = useState([
    {
      id: 1,
      user: {
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
        username: "you"
      },
      coffeeShop: "The Study Grind",
      university: "New York University",
      rating: 5,
      tags: ["quiet", "strong wifi", "study-friendly"],
      reviewText: "Perfect spot for cramming! The wifi is super fast and they have tons of outlets. Coffee is great too - their oat milk latte is my go-to. Gets busy around finals but worth the wait.",
      timestamp: "2 days ago"
    },
    {
      id: 2,
      user: {
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
        username: "you"
      },
      coffeeShop: "Campus Brew Co.",
      university: "New York University",
      rating: 4,
      tags: ["outdoor seating", "group study", "good coffee"],
      reviewText: "Love the outdoor patio here! Great for group projects when the weather's nice. Their house blend is solid and the baristas are super friendly.",
      timestamp: "1 week ago"
    },
    {
      id: 3,
      user: {
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
        username: "you"
      },
      coffeeShop: "Bean There Coffee",
      university: "Harvard University",
      rating: 3,
      tags: ["loud", "good pastries", "expensive"],
      reviewText: "Coffee is decent but pretty pricey for students. The pastries are amazing though. Can get really loud during peak hours.",
      timestamp: "2 weeks ago"
    }
  ]);

  const handleEditReview = (reviewId) => {
    // In a real app, this would open an edit modal
    console.log('Edit review:', reviewId);
  };

  const handleDeleteReview = (reviewId) => {
    // In a real app, this would show a confirmation dialog
    setUserReviews(prev => prev.filter(review => review.id !== reviewId));
  };

  const MyReviewCard = ({ review }) => {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-3 shadow-sm hover:shadow-md transition-shadow duration-200">
        {/* Header with coffee shop and university */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-gray-900 text-base">
              {review.coffeeShop}
            </h3>
            <p className="text-sm text-gray-500">at {review.university}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleEditReview(review.id)}
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label="Edit review"
            >
              <Edit3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleDeleteReview(review.id)}
              className="text-gray-400 hover:text-red-600 transition-colors"
              aria-label="Delete review"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 ${
                index < review.rating 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm font-medium text-gray-700 ml-1">
            {review.rating}/5
          </span>
          <span className="text-gray-400 text-xs ml-2">•</span>
          <span className="text-gray-500 text-xs">{review.timestamp}</span>
        </div>

        {/* Tags */}
        {review.tags && review.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {review.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
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

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex items-center space-x-3">
            <Coffee className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">My Reviews</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-4 sm:px-6">
        {/* Stats */}
        <div className="mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">{userReviews.length}</div>
                <div className="text-sm text-gray-500">Reviews</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {userReviews.length > 0 
                    ? (userReviews.reduce((sum, review) => sum + review.rating, 0) / userReviews.length).toFixed(1)
                    : '0'
                  }
                </div>
                <div className="text-sm text-gray-500">Avg Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {new Set(userReviews.map(review => review.university)).size}
                </div>
                <div className="text-sm text-gray-500">Universities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-0">
          {userReviews.length > 0 ? (
            userReviews.map((review) => (
              <MyReviewCard key={review.id} review={review} />
            ))
          ) : (
            <div className="text-center py-12">
              <Coffee className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No reviews yet
              </h3>
              <p className="text-gray-600 mb-4">
                Start reviewing coffee shops to see them here!
              </p>
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Find Coffee Shops
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Tab Navigation */}
      <TabNavigation currentTab="reviews" onTabChange={() => {}} />
    </div>
  );
};

export default MyReviewsPage;

