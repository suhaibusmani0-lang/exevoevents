import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/exevo-uploads/27727fff-09d1-4e90-b210-8fca3e49785d.jpg" 
                alt="Exevo - Experiences Evolved" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/') ? 'text-orange-500' : 'text-black hover:text-orange-500'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/services') ? 'text-orange-500' : 'text-black hover:text-orange-500'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/portfolio" 
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/portfolio') ? 'text-orange-500' : 'text-black hover:text-orange-500'
                }`}
              >
                Portfolio
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive('/about') ? 'text-orange-500' : 'text-black hover:text-orange-500'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-2 rounded-full hover:from-orange-500 hover:to-orange-700 transition-all transform hover:scale-105 font-medium"
              >
                Get Quote
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-orange-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/') ? 'text-orange-500' : 'text-black hover:text-orange-500'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/services') ? 'text-orange-500' : 'text-black hover:text-orange-500'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/portfolio') ? 'text-orange-500' : 'text-black hover:text-orange-500'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-base font-medium ${
                isActive('/about') ? 'text-orange-500' : 'text-black hover:text-orange-500'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-base font-medium text-black hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
