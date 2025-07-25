import { Home, List, Plus, Trophy, User } from 'lucide-react';

const BottomNavigation = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'feed', icon: Home, label: 'Feed', path: '/feed' },
    { id: 'lists', icon: List, label: 'Your Lists', path: '/lists' },
    { id: 'search', icon: Plus, label: 'Search', path: '/search', isCenter: true },
    { id: 'leaderboard', icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' }
  ];

  const handleNavClick = (item) => {
    if (item.path) {
      window.location.href = item.path;
    }
    if (onNavigate) {
      onNavigate(item.id);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-pb">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`flex flex-col items-center justify-center p-2 min-w-0 flex-1 ${
                item.isCenter 
                  ? 'bg-teal-600 text-white rounded-full mx-2 aspect-square max-w-12' 
                  : isActive 
                    ? 'text-teal-600' 
                    : 'text-gray-500'
              }`}
            >
              <Icon 
                className={`${
                  item.isCenter ? 'w-6 h-6' : 'w-5 h-5'
                } mb-1`} 
              />
              {!item.isCenter && (
                <span className="text-xs font-medium truncate">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;

