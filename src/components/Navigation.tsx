import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import React from 'react';
import { useLanguage } from '../App';

const NAV_LABELS = {
  en: [
    { name: 'About', path: '/about' },
    { name: 'Specialties', path: '/academics' },
    { name: 'Students', path: '/research' },
    { name: 'Applicants', path: '/admissions' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ],
  kz: [
    { name: 'Біз туралы', path: '/about' },
    { name: 'Мамандықтар', path: '/academics' },
    { name: 'Студенттер', path: '/research' },
    { name: 'Талапкерлерге', path: '/admissions' },
    { name: 'Жаңалықтар', path: '/news' },
    { name: 'Байланыс', path: '/contact' },
  ],
  ru: [
    { name: 'О нас', path: '/about' },
    { name: 'Специальности', path: '/academics' },
    { name: 'Студенты', path: '/research' },
    { name: 'Абитуриентам', path: '/admissions' },
    { name: 'Новости', path: '/news' },
    { name: 'Контакты', path: '/contact' },
  ],
};

const PLACEHOLDER = {
  en: 'Search Bolashak...',
  kz: 'Bolashak іздеу...',
  ru: 'Поиск по Bolashak...'
};

const Navigation = () => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = NAV_LABELS[language] || NAV_LABELS.en;

  const isActive = (path: string) => location.pathname === path || (path === '/' && location.pathname === '/');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out font-helvetica ${
      isScrolled 
        ? 'bg-red-700/95 shadow-2xl backdrop-blur-lg w-full max-w-6xl rounded-2xl border border-red-600/20' 
        : 'bg-black/10 backdrop-blur-sm w-full max-w-4xl rounded-full border border-white/20'
    }`}>
      <div className="px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          {/* Centered navigation, logo removed */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative group px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isScrolled 
                    ? `${isActive(item.path) ? 'text-white' : 'text-red-100 hover:text-white'}` 
                    : `${isActive(item.path) ? 'text-white' : 'text-white/90 hover:text-white'}`
                }`}
              >
                <span>{item.name}</span>
                <span
                  className={`absolute bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${
                    isActive(item.path) ? 'scale-x-100' : ''
                  } ${isScrolled ? 'bg-white' : 'bg-white'}`}
                ></span>
              </Link>
            ))}
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isScrolled ? 'text-red-100 hover:text-white hover:bg-red-600' : 'text-white hover:bg-white/20'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Language Switcher */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center space-x-2">
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="bg-white/80 text-red-700 font-bold rounded-full px-4 py-1 shadow-md border-2 border-red-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300 hover:bg-white"
            >
              <option value="en">EN</option>
              <option value="kz">KZ</option>
              <option value="ru">RU</option>
            </select>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-red-100 hover:text-white hover:bg-red-600' : 'text-white hover:bg-white/20'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-fade-in">
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder={PLACEHOLDER[language]}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-900 font-georgia shadow-lg"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative group block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl ${
                    isScrolled
                      ? `${isActive(item.path) ? 'text-white' : 'text-red-100 hover:text-white'}`
                      : `${isActive(item.path) ? 'text-white' : 'text-white/90 hover:text-white'}`
                  }`}
                >
                  <span>{item.name}</span>
                  <span
                    className={`absolute bottom-1.5 left-4 right-4 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${
                      isActive(item.path) ? 'scale-x-100' : ''
                    } ${isScrolled ? 'bg-white' : 'bg-white'}`}
                  ></span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

Navigation.defaultProps = {
  language: 'en',
  setLanguage: () => {},
};

export default Navigation;
