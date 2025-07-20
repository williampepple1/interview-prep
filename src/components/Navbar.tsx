import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Interview Prep Platform</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  {user.photoURL ? (
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.photoURL}
                      alt={user.displayName}
                    />
                  ) : (
                    <User className="h-8 w-8 text-gray-400" />
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {user.displayName}
                  </span>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            ) : (
              <div className="text-sm text-gray-500">
                Please sign in to access dashboards
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 