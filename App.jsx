import { useState, useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './components/LandingPage';
import FeedPage from './components/FeedPage';
import UserProfilePage from './components/UserProfilePage';
import LeaderboardPage from './components/LeaderboardPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageParams, setPageParams] = useState({});

  useEffect(() => {
    // Simple client-side routing based on URL path
    const path = window.location.pathname;
    
    if (path === '/') {
      setCurrentPage('home');
    } else if (path.startsWith('/school/')) {
      const schoolSlug = path.replace('/school/', '');
      setCurrentPage('feed');
      setPageParams({ schoolSlug });
    } else if (path === '/feed') {
      setCurrentPage('feed');
    } else if (path === '/lists') {
      setCurrentPage('lists');
    } else if (path === '/search') {
      setCurrentPage('search');
    } else if (path === '/leaderboard') {
      setCurrentPage('leaderboard');
    } else if (path === '/profile' || path === '/me') {
      setCurrentPage('profile');
    } else {
      setCurrentPage('home');
    }

    // Listen for browser navigation
    const handlePopState = () => {
      window.location.reload();
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Render the appropriate page based on current route
  const renderPage = () => {
    switch (currentPage) {
      case 'feed':
        return <FeedPage schoolSlug={pageParams.schoolSlug} />;
      case 'lists':
        return (
          <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-semibold mb-2">Your Lists</h1>
              <p className="text-gray-500">Coming soon...</p>
            </div>
          </div>
        );
      case 'search':
        return (
          <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-semibold mb-2">Search</h1>
              <p className="text-gray-500">Coming soon...</p>
            </div>
          </div>
        );
      case 'leaderboard':
        return <LeaderboardPage />;
      case 'profile':
        return <UserProfilePage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <AuthProvider>
      <div className="App">
        {renderPage()}
      </div>
    </AuthProvider>
  );
}

export default App;

