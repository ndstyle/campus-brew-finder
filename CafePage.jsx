import { useState } from 'react';
import { ArrowLeft, MapPin, Clock, ThumbsUp, ThumbsDown, Heart, Share2, MoreVertical, MessageCircle, CheckCircle, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { getCafeById } from '../data/mockCafes';

const CafePage = ({ cafeId }) => {
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);
  const [userRecommendation, setUserRecommendation] = useState(null); // null, true, or false
  const [userReview, setUserReview] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const { user } = useAuth();

  const cafe = getCafeById(cafeId);

  if (!cafe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Café not found</h2>
          <p className="text-gray-600">The café you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const recommendationPercentage = Math.round(
    (cafe.recommendations.recommended / cafe.recommendations.total) * 100
  );

  const handleBack = () => {
    window.history.back();
  };

  const handleRecommend = (recommend) => {
    if (!user) {
      // Show login modal or redirect to login
      alert('Please sign in to leave a recommendation');
      return;
    }
    
    setUserRecommendation(recommend);
    setShowReviewForm(true);
    // In a real app, this would submit to the backend
    console.log(`User ${recommend ? 'recommends' : 'does not recommend'} ${cafe.name}`);
  };

  const handleSubmitReview = () => {
    if (!user || userRecommendation === null) return;
    
    // In a real app, this would submit to the backend
    console.log('Submitting review:', {
      cafeId,
      userId: user.id,
      recommended: userRecommendation,
      review: userReview
    });
    
    setShowReviewForm(false);
    setUserReview('');
    // Show success message
    alert('Thank you for your review!');
  };

  const handleHelpful = (reviewId) => {
    if (!user) {
      alert('Please sign in to mark reviews as helpful');
      return;
    }
    // In a real app, this would make an API call
    console.log(`User ${user.id} marked review ${reviewId} as helpful`);
  };

  const displayedRecommendations = showAllRecommendations 
    ? cafe.recentRecommendations 
    : cafe.recentRecommendations.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </button>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 sm:px-6">
        {/* Photo Gallery */}
        {cafe.photos && cafe.photos.length > 0 && (
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src={cafe.photos[0]}
                alt={cafe.name}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              {cafe.photos[1] && (
                <div className="grid grid-rows-2 gap-4">
                  <img
                    src={cafe.photos[1]}
                    alt={cafe.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {cafe.photos.length > 2 && (
                    <div className="relative">
                      <img
                        src={cafe.photos[2] || cafe.photos[1]}
                        alt={cafe.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      {cafe.photos.length > 3 && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                          <span className="text-white font-semibold">
                            +{cafe.photos.length - 2} more
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Café Info */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{cafe.name}</h1>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{cafe.address}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>{cafe.hours}</span>
              </div>
            </div>
            
            {/* Recommendation Score */}
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">
                {recommendationPercentage}%
              </div>
              <div className="text-sm text-gray-500">recommend</div>
              <div className="text-xs text-gray-400 mt-1">
                {cafe.recommendations.total} reviews
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            {cafe.description}
          </p>

          {/* Tags */}
          {cafe.tags && cafe.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {cafe.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* User Recommendation Section */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Would you recommend this place?
            </h3>
            
            {user ? (
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <button
                    onClick={() => handleRecommend(true)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                      userRecommendation === true
                        ? 'bg-green-50 border-green-300 text-green-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span className="font-medium">Yes, recommend</span>
                    {userRecommendation === true && <CheckCircle className="w-4 h-4" />}
                  </button>
                  
                  <button
                    onClick={() => handleRecommend(false)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                      userRecommendation === false
                        ? 'bg-red-50 border-red-300 text-red-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <ThumbsDown className="w-4 h-4" />
                    <span className="font-medium">No, don't recommend</span>
                    {userRecommendation === false && <CheckCircle className="w-4 h-4" />}
                  </button>
                </div>
                
                {showReviewForm && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3 text-white text-sm font-semibold">
                        {user.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.university}</p>
                      </div>
                    </div>
                    <textarea
                      value={userReview}
                      onChange={(e) => setUserReview(e.target.value)}
                      placeholder="Tell others why you would or wouldn't recommend this place..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                      rows={3}
                    />
                    <div className="flex justify-end space-x-2 mt-3">
                      <button 
                        onClick={() => setShowReviewForm(false)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={handleSubmitReview}
                        disabled={!userReview.trim()}
                        className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="flex items-center justify-center mb-3">
                  <User className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-3">Sign in to share your recommendation</p>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              What students are saying
            </h2>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <ThumbsUp className="w-4 h-4 text-green-600" />
                <span>{cafe.recommendations.recommended} recommend</span>
              </div>
              <div className="flex items-center space-x-1">
                <ThumbsDown className="w-4 h-4 text-red-500" />
                <span>{cafe.recommendations.notRecommended} don't recommend</span>
              </div>
            </div>
          </div>

          {/* Recommendations List */}
          <div className="space-y-6">
            {displayedRecommendations.map((rec) => (
              <div key={rec.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {rec.user.avatar}
                  </div>
                  <div className="flex-1">
                    {/* User Info Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-gray-900">
                            {rec.user.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {rec.user.username}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span>{rec.user.year}</span>
                          <span>•</span>
                          <span>{rec.user.major}</span>
                          <span>•</span>
                          <span>{rec.user.university}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                          <span>{rec.user.reviewCount} reviews</span>
                          <span>•</span>
                          <span>{rec.user.helpfulVotes} helpful votes</span>
                          <span>•</span>
                          <span>Joined {new Date(rec.user.joinedDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className={`flex items-center space-x-1 ${
                        rec.recommended ? 'text-green-600' : 'text-red-500'
                      }`}>
                        {rec.recommended ? (
                          <ThumbsUp className="w-4 h-4" />
                        ) : (
                          <ThumbsDown className="w-4 h-4" />
                        )}
                        <span className="text-sm font-medium">
                          {rec.recommended ? 'Recommends' : 'Not recommended'}
                        </span>
                      </div>
                    </div>
                    
                    {/* Review Content */}
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {rec.reason}
                    </p>
                    
                    {/* Tags */}
                    {rec.tags && rec.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {rec.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Review Actions */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{rec.timestamp}</span>
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => handleHelpful(rec.id)}
                          className="flex items-center space-x-1 hover:text-teal-600 transition-colors"
                        >
                          <ThumbsUp className="w-3 h-3" />
                          <span>Helpful ({rec.helpful})</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors">
                          <MessageCircle className="w-3 h-3" />
                          <span>Reply</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors">
                          <Share2 className="w-3 h-3" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {cafe.recentRecommendations.length > 3 && !showAllRecommendations && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllRecommendations(true)}
                className="text-teal-600 hover:text-teal-800 font-medium"
              >
                Show all {cafe.recentRecommendations.length} recommendations
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CafePage;

