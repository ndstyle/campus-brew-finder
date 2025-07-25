import { useState } from 'react';
import { MapPin, List, Map, Filter, ChevronDown, Heart, MessageCircle, Share, Users } from 'lucide-react';
import BottomNavigation from './BottomNavigation';
import FilterModal from './FilterModal';

const FeedPage = ({ schoolSlug }) => {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'map'
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterApply = (filters) => {
    console.log('Applied filters:', filters);
    // Handle filter application logic here
  };

  // Mock data for featured lists
  const featuredLists = [
    {
      id: 1,
      title: 'NYC Best Pastrami Search',
      image: '/api/placeholder/150/100',
      progress: '3 of 5',
      visited: true
    },
    {
      id: 2,
      title: 'Top 10 Late Night NYC',
      image: '/api/placeholder/150/100',
      progress: '3 of 10',
      visited: true
    },
    {
      id: 3,
      title: 'Top 10 Brunch Restaurants',
      image: '/api/placeholder/150/100',
      progress: '5 of 10',
      visited: false
    }
  ];

  // Mock data for feed items
  const feedItems = [
    {
      id: 1,
      user: {
        name: 'Emily',
        avatar: '/api/placeholder/40/40'
      },
      action: 'ranked',
      restaurant: 'da Umberto',
      details: 'with Eliot Frost, Me',
      location: 'Chelsea, New York',
      rating: 8.0,
      favoriteDishe: 'chicken parm',
      likes: 2,
      timeAgo: '2 minutes ago'
    },
    {
      id: 2,
      user: {
        name: 'Eliot',
        avatar: '/api/placeholder/40/40'
      },
      action: 'ranked',
      restaurant: 'Pastrami Queen',
      location: 'Upper East Side, New York',
      rating: 8.5,
      notes: 'One of the best pastrami sandwiches in the city!',
      timeAgo: '5 minutes ago'
    }
  ];

  // Mock map pins data
  const mapPins = [
    { id: 1, lat: 40.7589, lng: -73.9851, rating: 8.0, color: 'green' },
    { id: 2, lat: 40.7614, lng: -73.9776, rating: 7.6, color: 'green' },
    { id: 3, lat: 40.7505, lng: -73.9934, rating: 9.1, color: 'green' },
    // Add more pins as needed
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">You</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-medium">Been</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2">
              <Share className="w-5 h-5" />
            </button>
            <button className="p-2">
              <Users className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center justify-center mb-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                viewMode === 'list' 
                  ? 'bg-white text-black shadow-sm' 
                  : 'text-gray-600'
              }`}
            >
              <List className="w-4 h-4" />
              <span className="font-medium">List</span>
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                viewMode === 'map' 
                  ? 'bg-white text-black shadow-sm' 
                  : 'text-gray-600'
              }`}
            >
              <Map className="w-4 h-4" />
              <span className="font-medium">Map</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-3 px-4 pb-4">
          <button 
            onClick={() => setShowFilters(true)}
            className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filters</span>
            <span className="bg-teal-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </button>
          
          <button className="flex items-center space-x-1 bg-gray-100 px-3 py-2 rounded-full">
            <span className="text-sm font-medium">City</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          <button className="flex items-center space-x-1 bg-gray-100 px-3 py-2 rounded-full">
            <span className="text-sm font-medium">Cuisine</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          <button className="flex items-center space-x-1 bg-gray-100 px-3 py-2 rounded-full">
            <span className="text-sm font-medium">$, $$</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'map' ? (
        /* Map View */
        <div className="relative h-96 bg-gray-100">
          {/* Placeholder for map */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Map className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Interactive Map View</p>
              <p className="text-sm text-gray-400">Map pins with ratings would appear here</p>
            </div>
          </div>
          
          {/* Mock map pins */}
          <div className="absolute top-20 left-20 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            7.2
          </div>
          <div className="absolute top-32 right-24 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            8.1
          </div>
          <div className="absolute bottom-20 left-32 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            9.4
          </div>
        </div>
      ) : (
        /* List View */
        <div className="px-4">
          {/* Featured Lists */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">FEATURED LISTS</h2>
              <button className="text-teal-600 text-sm font-medium">See all</button>
            </div>
            
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {featuredLists.map((list) => (
                <div key={list.id} className="flex-shrink-0 w-40">
                  <div className="bg-gray-200 rounded-lg h-24 mb-2 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Image</span>
                  </div>
                  <h3 className="font-medium text-sm mb-1 line-clamp-2">{list.title}</h3>
                  <p className="text-xs text-gray-500">You've been to {list.progress}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feed */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">YOUR FEED</h2>
            
            <div className="space-y-6">
              {feedItems.map((item) => (
                <div key={item.id} className="border-b border-gray-100 pb-4">
                  {/* User Info */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium">{item.user.name[0]}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{item.user.name}</span>
                        <span className="text-gray-500">{item.action}</span>
                        <span className="font-medium">{item.restaurant}</span>
                        {item.details && (
                          <span className="text-gray-500">{item.details}</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{item.location}</p>
                    </div>
                    <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm font-medium">
                      {item.rating}
                    </div>
                  </div>

                  {/* Content */}
                  {item.favoriteDishe && (
                    <div className="mb-3">
                      <p className="text-sm">
                        <span className="font-medium">Favorite Dishes:</span> {item.favoriteDishe}
                      </p>
                    </div>
                  )}

                  {item.notes && (
                    <div className="mb-3">
                      <p className="text-sm">
                        <span className="font-medium">Notes:</span> {item.notes}
                      </p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500">
                        <Heart className="w-4 h-4" />
                        {item.likes && <span className="text-sm">{item.likes} likes</span>}
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500">
                        <Share className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-xs text-gray-400">{item.timeAgo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <BottomNavigation currentPage="feed" />
      
      <FilterModal 
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        onApply={handleFilterApply}
      />
    </div>
  );
};

export default FeedPage;

