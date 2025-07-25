import { useState } from 'react';
import { Menu, Star, MapPin, Users, Coffee, Smartphone, Download, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import UniversitySearch from './UniversitySearch';
import AuthModal from './AuthModal';

const LandingPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, logout, login } = useAuth();

  const handleSearch = (university) => {
    // Navigate to school page
    window.location.href = `/school/${university.slug}`;
  };

  const handleAuthSuccess = (userData) => {
    login(userData);
  };

  const handleLogout = () => {
    logout();
  };

  // Mock data for Track section
  const mockReviews = [
    {
      id: 1,
      coffeeshop: "Blue Bottle Coffee",
      rating: 5,
      tags: ["quiet", "study-friendly", "good wifi"],
      timestamp: "2 days ago"
    },
    {
      id: 2,
      coffeeshop: "Philz Coffee",
      rating: 4,
      tags: ["open late", "strong coffee"],
      timestamp: "1 week ago"
    },
    {
      id: 3,
      coffeeshop: "Coupa Café",
      rating: 5,
      tags: ["outdoor seating", "cozy"],
      timestamp: "2 weeks ago"
    }
  ];

  // Mock data for Share section
  const mockFeed = [
    {
      user: "Sarah M.",
      university: "Stanford",
      coffeeshop: "Green Library Café",
      rating: 5,
      comment: "Perfect for late night study sessions!"
    },
    {
      user: "Alex K.",
      university: "Harvard",
      coffeeshop: "Thinking Cup",
      rating: 4,
      comment: "Great espresso and quiet atmosphere"
    },
    {
      user: "Emma L.",
      university: "MIT",
      coffeeshop: "Voltage Coffee",
      rating: 5,
      comment: "Best cold brew near campus"
    }
  ];

  // Mock data for Discover section
  const mockCoffeeShops = [
    {
      name: "The Study Grind",
      tags: ["quiet", "study spot"],
      rating: 4.8,
      color: "bg-green-500"
    },
    {
      name: "Midnight Oil",
      tags: ["open late", "24/7"],
      rating: 4.6,
      color: "bg-blue-500"
    },
    {
      name: "Espresso Central",
      tags: ["cold brew", "strong coffee"],
      rating: 4.9,
      color: "bg-purple-500"
    },
    {
      name: "Campus Brew",
      tags: ["cozy", "outdoor seating"],
      rating: 4.7,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <div className="flex-1"></div>
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  {user.avatar}
                </div>
                <span className="text-sm font-medium text-gray-700">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </button>
          )}
          <button className="p-2">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 text-center max-w-md mx-auto mb-16">
        <div className="mb-16">
          <h1 className="text-4xl font-light text-gray-700 mb-4 tracking-wide">
            rateurcoffee
          </h1>
          <p className="text-lg text-gray-500 font-light">
            find the best coffee on campus
          </p>
        </div>

        <div className="mb-12">
          <p className="text-blue-500 text-lg font-light underline">
            explore the best coffee near you
          </p>
        </div>

        {!showSearch ? (
          <button
            onClick={() => setShowSearch(true)}
            className="w-full bg-black text-white py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            search your university
          </button>
        ) : (
          <div className="w-full">
            <UniversitySearch onSearch={handleSearch} />
          </div>
        )}
      </section>

      {/* Track Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Track Your Coffee Journey
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Track every coffee shop you've visited on campus.
              </p>
              <p className="text-lg text-gray-600">
                Rate them. Tag them. Never forget your favorite place.
              </p>
              {!user && (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Sign Up to Start Tracking
                </button>
              )}
            </div>
            
            {/* Mock Profile Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4 text-white font-semibold">
                  {user ? user.avatar : 'You'}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {user ? `${user.name}'s Reviews` : 'Your Reviews'}
                  </h3>
                  <p className="text-sm text-gray-500">12 coffee shops visited</p>
                </div>
              </div>
              
              <div className="space-y-4 max-h-64 overflow-y-auto">
                {mockReviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{review.coffeeshop}</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {review.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">{review.timestamp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              {/* Mock Phone/Feed */}
              <div className="bg-gray-900 rounded-3xl p-4 max-w-sm mx-auto">
                <div className="bg-white rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Campus Coffee Feed</h3>
                    <Users className="w-5 h-5 text-gray-500" />
                  </div>
                  
                  <div className="space-y-4">
                    {mockFeed.map((post, index) => (
                      <div key={index} className="border-b border-gray-100 pb-3">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3 text-white text-xs font-medium">
                            {post.user[0]}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{post.user}</p>
                            <p className="text-xs text-gray-500">{post.university}</p>
                          </div>
                        </div>
                        <p className="text-sm font-medium mb-1">{post.coffeeshop}</p>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < post.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-gray-600">{post.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Share With Your Community
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Share your favorite study spots with your classmates.
              </p>
              <p className="text-lg text-gray-600">
                Let others know where to find a cozy seat and good brew.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Discover Coffee Gems
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Discover the most loved cafes near your campus.
              </p>
              <p className="text-lg text-gray-600">
                Study vibes, late night spots, espresso legends — all rated by students like you.
              </p>
            </div>
            
            {/* Mock Map/Cards */}
            <div className="relative">
              <div className="bg-gray-200 rounded-2xl h-80 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 opacity-50"></div>
                
                {/* Mock Map Pins */}
                {mockCoffeeShops.map((shop, index) => (
                  <div
                    key={index}
                    className={`absolute ${shop.color} text-white rounded-lg p-3 shadow-lg transform hover:scale-105 transition-transform cursor-pointer`}
                    style={{
                      top: `${20 + (index * 15)}%`,
                      left: `${15 + (index * 20)}%`,
                    }}
                  >
                    <div className="text-xs font-semibold mb-1">{shop.name}</div>
                    <div className="flex items-center mb-1">
                      <Star className="w-3 h-3 fill-current mr-1" />
                      <span className="text-xs">{shop.rating}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {shop.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-white bg-opacity-20 px-1 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="absolute bottom-4 left-4 text-gray-600">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Footer */}
      <section className="px-6 py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Coffee className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-2xl font-bold mb-4">Coming Soon to iOS & Android</h2>
          <p className="text-gray-300 mb-8">
            Get ready to discover the best coffee on your campus with our mobile app.
          </p>
          
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg opacity-50">
              <Smartphone className="w-6 h-6" />
              <span className="text-sm">App Store</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg opacity-50">
              <Download className="w-6 h-6" />
              <span className="text-sm">Google Play</span>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default LandingPage;

