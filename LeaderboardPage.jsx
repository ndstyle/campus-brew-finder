import { useState } from 'react';
import { Trophy, Medal, Award, Coffee, Star, MapPin } from 'lucide-react';
import BottomNavigation from './BottomNavigation';

const LeaderboardPage = () => {
  const [activeTab, setActiveTab] = useState('reviews');

  // Mock leaderboard data
  const reviewLeaders = [
    {
      id: 1,
      name: "Sarah Chen",
      username: "@sarahc_coffee",
      university: "Stanford University",
      reviewCount: 127,
      avatar: "SC",
      badge: "Coffee Connoisseur",
      recentReview: "Blue Bottle Coffee - Perfect for morning study sessions!"
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      username: "@alexr_reviews",
      university: "UC Berkeley",
      reviewCount: 98,
      avatar: "AR",
      badge: "Campus Explorer",
      recentReview: "Philz Coffee - Amazing custom blends and cozy atmosphere"
    },
    {
      id: 3,
      name: "Emma Thompson",
      username: "@emma_coffee",
      university: "Harvard University",
      reviewCount: 84,
      avatar: "ET",
      badge: "Study Spot Finder",
      recentReview: "Thinking Cup - Great wifi and quiet corners for studying"
    },
    {
      id: 4,
      name: "Michael Kim",
      username: "@mikekim_java",
      university: "MIT",
      reviewCount: 76,
      avatar: "MK",
      badge: "Late Night Reviewer",
      recentReview: "Voltage Coffee - Best espresso near campus, open until 2am"
    },
    {
      id: 5,
      name: "Jessica Wang",
      username: "@jess_caffeine",
      university: "Stanford University",
      reviewCount: 69,
      avatar: "JW",
      badge: "Coffee Enthusiast",
      recentReview: "Coupa Café - Love their outdoor seating and strong coffee"
    },
    {
      id: 6,
      name: "David Park",
      username: "@david_brews",
      university: "UCLA",
      reviewCount: 58,
      avatar: "DP",
      badge: "Quality Reviewer",
      recentReview: "Stumptown Coffee - Exceptional single-origin beans"
    },
    {
      id: 7,
      name: "Rachel Green",
      username: "@rachel_java",
      university: "NYU",
      reviewCount: 52,
      avatar: "RG",
      badge: "Campus Coffee Guide",
      recentReview: "Joe Coffee - Perfect spot for group study sessions"
    },
    {
      id: 8,
      name: "James Wilson",
      username: "@james_coffee",
      university: "Columbia",
      reviewCount: 47,
      avatar: "JW",
      badge: "Coffee Explorer",
      recentReview: "Irving Farm - Great atmosphere and reliable wifi"
    }
  ];

  const getRankIcon = (position) => {
    switch (position) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-gray-500 font-bold">#{position}</span>;
    }
  };

  const getRankColor = (position) => {
    switch (position) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500";
      case 3:
        return "bg-gradient-to-r from-amber-400 to-amber-600";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900 text-center">Leaderboard</h1>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('reviews')}
            className={`flex-1 py-3 px-4 text-center font-medium ${
              activeTab === 'reviews'
                ? 'text-teal-600 border-b-2 border-teal-600'
                : 'text-gray-500'
            }`}
          >
            Most Reviews
          </button>
          <button
            onClick={() => setActiveTab('recent')}
            className={`flex-1 py-3 px-4 text-center font-medium ${
              activeTab === 'recent'
                ? 'text-teal-600 border-b-2 border-teal-600'
                : 'text-gray-500'
            }`}
          >
            Most Active
          </button>
        </div>
      </div>

      {/* Leaderboard Content */}
      <div className="px-4 py-6">
        {/* Top 3 Podium */}
        <div className="mb-8">
          <div className="flex items-end justify-center space-x-4 mb-6">
            {/* 2nd Place */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-lg font-bold">{reviewLeaders[1].avatar}</span>
              </div>
              <div className="bg-gray-300 text-gray-800 px-3 py-6 rounded-t-lg min-h-20">
                <Medal className="w-6 h-6 text-gray-500 mx-auto mb-1" />
                <p className="text-sm font-semibold">{reviewLeaders[1].name.split(' ')[0]}</p>
                <p className="text-xs">{reviewLeaders[1].reviewCount} reviews</p>
              </div>
            </div>

            {/* 1st Place */}
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center mb-2 mx-auto border-4 border-yellow-400">
                <span className="text-xl font-bold">{reviewLeaders[0].avatar}</span>
              </div>
              <div className="bg-yellow-400 text-yellow-900 px-4 py-8 rounded-t-lg min-h-24">
                <Trophy className="w-8 h-8 text-yellow-700 mx-auto mb-1" />
                <p className="text-sm font-bold">{reviewLeaders[0].name.split(' ')[0]}</p>
                <p className="text-xs">{reviewLeaders[0].reviewCount} reviews</p>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-lg font-bold">{reviewLeaders[2].avatar}</span>
              </div>
              <div className="bg-amber-400 text-amber-900 px-3 py-6 rounded-t-lg min-h-20">
                <Award className="w-6 h-6 text-amber-700 mx-auto mb-1" />
                <p className="text-sm font-semibold">{reviewLeaders[2].name.split(' ')[0]}</p>
                <p className="text-xs">{reviewLeaders[2].reviewCount} reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Rankings */}
        <div className="space-y-3">
          {reviewLeaders.map((user, index) => (
            <div
              key={user.id}
              className={`${getRankColor(index + 1)} rounded-lg p-4 shadow-sm ${
                index < 3 ? 'border-2' : 'bg-white border border-gray-200'
              } ${
                index === 0 ? 'border-yellow-400' :
                index === 1 ? 'border-gray-400' :
                index === 2 ? 'border-amber-400' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                {/* Rank */}
                <div className="flex items-center justify-center w-10">
                  {getRankIcon(index + 1)}
                </div>

                {/* Avatar */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                  index === 0 ? 'bg-yellow-600' :
                  index === 1 ? 'bg-gray-500' :
                  index === 2 ? 'bg-amber-600' :
                  'bg-teal-500'
                }`}>
                  {user.avatar}
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className={`font-semibold ${index < 3 ? 'text-white' : 'text-gray-900'}`}>
                      {user.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      index < 3 ? 'bg-white bg-opacity-20 text-white' : 'bg-teal-100 text-teal-800'
                    }`}>
                      {user.badge}
                    </span>
                  </div>
                  <p className={`text-sm ${index < 3 ? 'text-white text-opacity-80' : 'text-gray-600'}`}>
                    {user.username} • {user.university}
                  </p>
                  <p className={`text-xs mt-1 ${index < 3 ? 'text-white text-opacity-70' : 'text-gray-500'}`}>
                    Latest: {user.recentReview}
                  </p>
                </div>

                {/* Review Count */}
                <div className="text-right">
                  <div className={`flex items-center space-x-1 ${index < 3 ? 'text-white' : 'text-gray-900'}`}>
                    <Coffee className="w-4 h-4" />
                    <span className="font-bold text-lg">{user.reviewCount}</span>
                  </div>
                  <p className={`text-xs ${index < 3 ? 'text-white text-opacity-80' : 'text-gray-500'}`}>
                    reviews
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Stats</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-teal-600">2,847</div>
              <div className="text-sm text-gray-500">Total Reviews</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">156</div>
              <div className="text-sm text-gray-500">Coffee Shops</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">43</div>
              <div className="text-sm text-gray-500">Universities</div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation currentPage="leaderboard" />
    </div>
  );
};

export default LeaderboardPage;

