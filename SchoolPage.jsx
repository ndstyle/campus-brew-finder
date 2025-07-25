import { useState } from 'react';
import { ArrowLeft, Search, Filter, Plus, Coffee, Heart, BookOpen } from 'lucide-react';
import CafeCard from './CafeCard';
import { getCafesByUniversity } from '../data/mockCafes';
import { universities } from '../data/universities';

const SchoolPage = ({ schoolSlug }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedMood, setSelectedMood] = useState('');

  // Get university info
  const university = universities.find(u => u.slug === schoolSlug);
  const universityName = university ? university.name : 'University';

  // Get cafés for this university
  const cafes = getCafesByUniversity(schoolSlug);

  // Mood-based filter mappings
  const moodFilters = [
    {
      id: 'study',
      name: 'Solo study grind',
      icon: BookOpen,
      tags: ['Great for Studying', 'Quiet', 'Strong WiFi', 'Study-Friendly'],
      color: 'blue'
    },
    {
      id: 'social',
      name: 'Catch up with friends',
      icon: Coffee,
      tags: ['Social Atmosphere', 'Outdoor Seating', 'Good Coffee', 'Group Study'],
      color: 'green'
    },
    {
      id: 'date',
      name: 'Cute first date',
      icon: Heart,
      tags: ['Aesthetic Interior', 'Good Coffee', 'Trendy', 'Quiet'],
      color: 'pink'
    }
  ];

  // Filter cafés based on search, mood, and filters
  const filteredCafes = cafes.filter(cafe => {
    const matchesSearch = cafe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cafe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cafe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Mood filter
    let matchesMood = true;
    if (selectedMood) {
      const mood = moodFilters.find(m => m.id === selectedMood);
      if (mood) {
        matchesMood = mood.tags.some(tag => cafe.tags.includes(tag));
      }
    }
    
    // Tag filters
    const matchesFilters = selectedFilters.length === 0 || 
                          selectedFilters.some(filter => cafe.tags.includes(filter));
    
    return matchesSearch && matchesMood && matchesFilters;
  });

  // Sort cafés by recommendation percentage
  const sortedCafes = filteredCafes.sort((a, b) => {
    const aPercentage = (a.recommendations.recommended / a.recommendations.total) * 100;
    const bPercentage = (b.recommendations.recommended / b.recommendations.total) * 100;
    return bPercentage - aPercentage;
  });

  const handleBack = () => {
    window.history.back();
  };

  const handleCafeClick = (cafe) => {
    // Navigate to café page
    window.location.href = `/cafe/${cafe.id}`;
  };

  const availableFilters = [
    'Great for Studying', 'Strong WiFi', 'Quiet', 'Open Late',
    'Outdoor Seating', 'Local Roasts', 'Social Atmosphere', 'Good Coffee',
    '24/7', 'Late Night', 'Study-Friendly', 'Aesthetic Interior',
    'Good Pastries', 'Trendy', 'Cheap'
  ];

  const toggleFilter = (filter) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const selectMood = (moodId) => {
    setSelectedMood(selectedMood === moodId ? '' : moodId);
    // Clear individual filters when selecting a mood
    if (selectedMood !== moodId) {
      setSelectedFilters([]);
    }
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    setSelectedMood('');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </button>
            
            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900">{universityName}</h1>
              <p className="text-sm text-gray-600">Coffee shops near campus</p>
            </div>
          </div>

          {/* Mood-based Quick Filters */}
          <div className="mt-4 mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">What's your mood?</p>
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {moodFilters.map((mood) => {
                const Icon = mood.icon;
                const isSelected = selectedMood === mood.id;
                return (
                  <button
                    key={mood.id}
                    onClick={() => selectMood(mood.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-colors whitespace-nowrap ${
                      isSelected
                        ? `bg-${mood.color}-50 border-${mood.color}-300 text-${mood.color}-700`
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{mood.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, tags, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-colors ${
                showFilters || selectedFilters.length > 0
                  ? 'bg-blue-50 border-blue-300 text-blue-700'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">
                {selectedFilters.length > 0 ? `Tags (${selectedFilters.length})` : 'Tags'}
              </span>
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex flex-wrap gap-2">
                {availableFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleFilter(filter)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedFilters.includes(filter)
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active Filters Display */}
          {(selectedMood || selectedFilters.length > 0 || searchQuery) && (
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Active filters:</span>
                {selectedMood && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {moodFilters.find(m => m.id === selectedMood)?.name}
                  </span>
                )}
                {selectedFilters.map(filter => (
                  <span key={filter} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {filter}
                  </span>
                ))}
                {searchQuery && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                    "{searchQuery}"
                  </span>
                )}
              </div>
              <button
                onClick={clearAllFilters}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 sm:px-6">
        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            {sortedCafes.length} coffee shop{sortedCafes.length !== 1 ? 's' : ''} found
            {(selectedMood || selectedFilters.length > 0 || searchQuery) && (
              <span> matching your criteria</span>
            )}
          </p>
        </div>

        {/* Café List */}
        <div className="space-y-0">
          {sortedCafes.length > 0 ? (
            sortedCafes.map((cafe) => (
              <CafeCard 
                key={cafe.id} 
                cafe={cafe} 
                onClick={handleCafeClick}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No coffee shops found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search, mood, or filters to find more options.
              </p>
              <button
                onClick={clearAllFilters}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-50"
        aria-label="Add a new coffee shop"
        onClick={() => {
          // In a real app, this would open a modal to add a new café
          alert('Add new coffee shop feature coming soon!');
        }}
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SchoolPage;

