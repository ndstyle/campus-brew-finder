import { Home, FileText, User } from 'lucide-react';

const TabNavigation = ({ currentTab, onTabChange }) => {
  const tabs = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      path: '/'
    },
    {
      id: 'reviews',
      label: 'My Reviews',
      icon: FileText,
      path: '/me'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      path: '/profile'
    }
  ];

  const handleTabClick = (tab) => {
    onTabChange(tab.id);
    // In a real app, this would use React Router
    if (tab.path === '/') {
      window.location.href = '/';
    } else {
      window.location.href = tab.path;
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="max-w-md mx-auto">
        <div className="flex">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`flex-1 flex flex-col items-center justify-center py-2 px-1 transition-colors duration-200 ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon 
                  className={`w-6 h-6 mb-1 ${
                    isActive ? 'fill-current' : ''
                  }`} 
                />
                <span className={`text-xs font-medium ${
                  isActive ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default TabNavigation;

