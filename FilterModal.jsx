import { useState } from 'react';
import { X, Check, ChevronDown, ChevronUp } from 'lucide-react';

const FilterModal = ({ isOpen, onClose, onApply }) => {
  const [selectedList, setSelectedList] = useState('been');
  const [sortBy, setSortBy] = useState('score');
  const [expandedSections, setExpandedSections] = useState({
    labels: false,
    goodFor: false,
    score: false
  });

  const listOptions = [
    { id: 'been', title: 'Been', subtitle: '783 restaurants', icon: '✓', selected: true },
    { id: 'wantToTry', title: 'Want to Try', subtitle: '427 restaurants', icon: '🔖', selected: false },
    { id: 'recsForYou', title: 'Recs for You', subtitle: 'Made for you!', icon: '🎯', selected: false },
    { id: 'recsFromFriends', title: 'Recs from Friends', subtitle: 'Hand-picked!', icon: '👥', selected: false },
    { id: 'trending', title: 'Trending', subtitle: 'In New York now!', icon: '📈', selected: false }
  ];

  const sortOptions = [
    { id: 'score', label: 'Score' },
    { id: 'distance', label: 'Distance' },
    { id: 'dateAdded', label: 'Date added' }
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleApply = () => {
    onApply({
      selectedList,
      sortBy,
      // Add other filter values here
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
      <div className="bg-white w-full max-h-[90vh] rounded-t-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Selected list</h2>
          <button onClick={onClose} className="p-1">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* List Selection */}
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {listOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedList(option.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-colors ${
                    selectedList === option.id
                      ? 'border-teal-600 bg-teal-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-lg">{option.icon}</span>
                    <span className="font-medium">{option.title}</span>
                    {selectedList === option.id && (
                      <Check className="w-4 h-4 text-teal-600 ml-auto" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{option.subtitle}</p>
                </button>
              ))}
            </div>

            {/* Sort By */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Sort by</h3>
              <div className="flex space-x-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSortBy(option.id)}
                    className={`px-4 py-2 rounded-full border transition-colors ${
                      sortBy === option.id
                        ? 'bg-gray-200 border-gray-300'
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <span className="text-sm font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Filters</h3>
              
              {/* Your Labels */}
              <div className="border-b border-gray-200 py-3">
                <button
                  onClick={() => toggleSection('labels')}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🏷️</span>
                    <span className="font-medium">Your labels</span>
                  </div>
                  {expandedSections.labels ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSections.labels && (
                  <div className="mt-3 pl-10">
                    <p className="text-sm text-gray-500">Label options would appear here</p>
                  </div>
                )}
              </div>

              {/* Good For */}
              <div className="border-b border-gray-200 py-3">
                <button
                  onClick={() => toggleSection('goodFor')}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">😊</span>
                    <span className="font-medium">Good For</span>
                  </div>
                  {expandedSections.goodFor ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSections.goodFor && (
                  <div className="mt-3 pl-10">
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Date night</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Business meeting</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Family dinner</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>

              {/* Score */}
              <div className="py-3">
                <button
                  onClick={() => toggleSection('score')}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">📊</span>
                    <span className="font-medium">Score</span>
                  </div>
                  {expandedSections.score ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedSections.score && (
                  <div className="mt-3 pl-10">
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">8.0+</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">7.0+</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">6.0+</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-white">
          <button
            onClick={() => {
              // Reset filters
              setSelectedList('been');
              setSortBy('score');
            }}
            className="text-teal-600 font-medium"
          >
            Clear all
          </button>
          <button
            onClick={handleApply}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;

