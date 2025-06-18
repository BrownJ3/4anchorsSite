import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Moved closer together */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              {/* Your actual anchor logo - 33% larger */}
              <img 
                src="/anchor.png" 
                alt="4anchors Logo" 
                className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                style={{ width: '84px', height: '84px' }}
              />
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" style={{ width: '84px', height: '84px' }}></div>
            </div>
            
            <div className="flex flex-col">
              <span className={`text-3xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                4anchors
              </span>
              <span className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                isScrolled ? 'text-primary-600' : 'text-primary-200'
              }`}>
                Software Solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50' 
                    : 'text-white hover:text-primary-200'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* CTA Button */}
            <div className="ml-6 flex items-center space-x-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-900 text-white px-6 py-2.5 rounded-full font-semibold hover:from-primary-700 hover:via-primary-800 hover:to-accent-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Project
              </button>
              
              {/* Consultation dropdown hint */}
              <div className="relative group">
                <button className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-primary-600' 
                    : 'text-gray-300 hover:text-white'
                }`}>
                  <span className="text-sm font-medium">Free Consultation</span>
                  <ChevronDown size={16} />
                </button>
                
                {/* Dropdown */}
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4">
                    <div className="text-sm font-semibold text-gray-900 mb-2">30-min Strategy Call</div>
                    <div className="text-xs text-gray-600 mb-3">Discuss your project requirements and get expert advice</div>
                    <button 
                      onClick={() => scrollToSection('#contact')}
                      className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl mx-4 mb-4 shadow-xl border border-gray-100 animate-slide-down">
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300"
                >
                  Start Project
                </button>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full border-2 border-primary-600 text-primary-600 px-4 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;