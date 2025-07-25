import { useState } from 'react';
import { ArrowLeft, Share2, Settings, Coffee, MapPin, ThumbsUp, TrendingUp } from 'lucide-react';

const UserProfilePage = () => {
  const [isPublic, setIsPublic] = useState(true);

  // Mock user data
  const userData = {
    username: 'coffee_lover_23',
    name: 'Alex Johnson',
    university: 'Stanford University',
    joinedDate: 'September 2023',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face',
    stats: {
      totalRecommendations: 12,
      cafesVisited: 8,
      helpfulVotes: 45
    },
    tasteProfile: {
      preferences: [
        { tag: 'Quiet', strength: 90 },
        { tag: 'Strong WiFi', strength: 85 },
        { tag: 'Study-Friendly', strength: 80 },
        { tag: 'Good Coffee', strength: 75 },
        { tag: 'Aesthetic Interior', strength: 60 },
        { tag: 'Outdoor Seating', strength: 40 }
      ],
      topMoods: [
        { mood: 'Solo study grind', count: 8 },
        { mood: 'Catch up with friends', count: 3 },
        { mood: 'Cute first date', count: 1 }
      ]
    },
    recentActivity: [
      {
        id: 1,
        type: 'recommendation',
        cafe: 'The Study Grind',
        recommended: true,
        timestamp: '2 days ago'
      },
      {
        id: 2,
        type: 'recommendation',
        cafe: 'Campus Brew Co.',
        recommended: true,
        timestamp: '1 week ago'
      },
      {
        id: 3,
        type: 'recommendation',
        cafe: 'Midnight Oil Café',
        recommended: true,
        timestamp: '2 weeks ago'
      }
    ]
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${userData.name}'s Coffee Profile`,
        text: `Check out ${userData.name}'s coffee recommendations on RateUrCoffee!`,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Profile link copied to clipboard!');
    }
  };

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
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 px-3 py-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium">Share Profile</span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 sm:px-6">
        {/* Profile Header */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-start space-x-4">
            <img
              src={userData.avatar}
              alt={userData.name}
              className="w-20 h-20 rounded-full"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                {userData.name}
              </h1>
              <p className="text-gray-600 mb-2">@{userData.username}</p>
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{userData.university}</span>
              </div>
              <p className="text-sm text-gray-500">
                Member since {userData.joinedDate}
              </p>
            </div>
            
            {/* Privacy Toggle */}
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-gray-600">Public Profile</span>
                <button
                  onClick={() => setIsPublic(!isPublic)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isPublic ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isPublic ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <p className="text-xs text-gray-500">
                {isPublic ? 'Visible to everyone' : 'Private'}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {userData.stats.totalRecommendations}
              </div>
              <div className="text-sm text-gray-600">Recommendations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {userData.stats.cafesVisited}
              </div>
              <div className="text-sm text-gray-600">Cafés Visited</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {userData.stats.helpfulVotes}
              </div>
              <div className="text-sm text-gray-600">Helpful Votes</div>
            </div>
          </div>
        </div>

        {/* Coffee Taste Map */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Your Coffee Taste Map
          </h2>
          <p className="text-gray-600 mb-6">
            Based on your recommendations, here's what you love in a coffee shop:
          </p>

          {/* Preference Bars */}
          <div className="space-y-4 mb-6">
            {userData.tasteProfile.preferences.map((pref, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">
                    {pref.tag}
                  </span>
                  <span className="text-sm text-gray-600">
                    {pref.strength}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${pref.strength}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Top Moods */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Your Coffee Moods
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {userData.tasteProfile.topMoods.map((mood, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {mood.count}
                  </div>
                  <div className="text-sm text-gray-700">
                    {mood.mood}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Recent Activity
          </h2>
          
          <div className="space-y-4">
            {userData.recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`p-2 rounded-full ${
                  activity.recommended ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {activity.recommended ? (
                    <ThumbsUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <Coffee className="w-4 h-4 text-red-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    {activity.recommended ? 'Recommended' : 'Did not recommend'}{' '}
                    <span className="font-medium">{activity.cafe}</span>
                  </p>
                  <p className="text-xs text-gray-500">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              View All Activity
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfilePage;

