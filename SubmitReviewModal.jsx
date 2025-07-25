import { useState, useRef, useEffect } from 'react';
import { X, Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { availableTags } from '../data/mockReviews';

const SubmitReviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    coffeeShop: '',
    rating: 0,
    tags: [],
    reviewText: ''
  });
  
  const [showCoffeeShopSuggestions, setShowCoffeeShopSuggestions] = useState(false);
  const [showTagsDropdown, setShowTagsDropdown] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  
  const coffeeShopInputRef = useRef(null);
  const tagsDropdownRef = useRef(null);

  // Mock coffee shop suggestions
  const coffeeShopSuggestions = [
    "The Study Grind",
    "Campus Brew Co.",
    "Midnight Oil Café",
    "Bean There Coffee",
    "Grind & Study",
    "Coffee Corner",
    "The Daily Grind",
    "Espresso Express"
  ];

  const filteredSuggestions = coffeeShopSuggestions.filter(shop =>
    shop.toLowerCase().includes(formData.coffeeShop.toLowerCase())
  );

  const isFormValid = () => {
    return formData.coffeeShop.trim() !== '' &&
           formData.rating > 0 &&
           formData.tags.length > 0 &&
           formData.reviewText.trim() !== '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      onSubmit(formData);
      // Reset form
      setFormData({
        coffeeShop: '',
        rating: 0,
        tags: [],
        reviewText: ''
      });
      onClose();
    }
  };

  const handleStarClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleTagToggle = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const handleCoffeeShopSelect = (shop) => {
    setFormData(prev => ({ ...prev, coffeeShop: shop }));
    setShowCoffeeShopSuggestions(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (coffeeShopInputRef.current && !coffeeShopInputRef.current.contains(event.target)) {
        setShowCoffeeShopSuggestions(false);
      }
      if (tagsDropdownRef.current && !tagsDropdownRef.current.contains(event.target)) {
        setShowTagsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Write a Review</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Coffee Shop Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Coffee Shop Name *
            </label>
            <div className="relative" ref={coffeeShopInputRef}>
              <input
                type="text"
                value={formData.coffeeShop}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, coffeeShop: e.target.value }));
                  setShowCoffeeShopSuggestions(true);
                }}
                onFocus={() => setShowCoffeeShopSuggestions(true)}
                placeholder="Enter coffee shop name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              
              {showCoffeeShopSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                  {filteredSuggestions.map((shop, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleCoffeeShopSelect(shop)}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-100 last:border-b-0"
                    >
                      {shop}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Star Rating */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Rating *
            </label>
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }, (_, index) => {
                const starValue = index + 1;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleStarClick(starValue)}
                    onMouseEnter={() => setHoverRating(starValue)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        starValue <= (hoverRating || formData.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                );
              })}
              {formData.rating > 0 && (
                <span className="ml-2 text-sm text-gray-600">
                  {formData.rating}/5
                </span>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Tags * (Select all that apply)
            </label>
            <div className="relative" ref={tagsDropdownRef}>
              <button
                type="button"
                onClick={() => setShowTagsDropdown(!showTagsDropdown)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-left flex items-center justify-between"
              >
                <span className="text-gray-500">
                  {formData.tags.length > 0 
                    ? `${formData.tags.length} tag${formData.tags.length > 1 ? 's' : ''} selected`
                    : 'Select tags'
                  }
                </span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              
              {showTagsDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                  {availableTags.map((tag, index) => (
                    <label
                      key={index}
                      className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    >
                      <input
                        type="checkbox"
                        checked={formData.tags.includes(tag)}
                        onChange={() => handleTagToggle(tag)}
                        className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm">{tag}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            
            {/* Selected tags display */}
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleTagToggle(tag)}
                      className="ml-1 text-blue-600 hover:text-blue-800"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Review Text */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Your Review *
            </label>
            <textarea
              value={formData.reviewText}
              onChange={(e) => setFormData(prev => ({ ...prev, reviewText: e.target.value }))}
              placeholder="Share your experience at this coffee shop..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              required
            />
            <div className="text-xs text-gray-500 text-right">
              {formData.reviewText.length}/500
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!isFormValid()}
              className={`flex-1 ${
                isFormValid()
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Submit Review
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitReviewModal;

