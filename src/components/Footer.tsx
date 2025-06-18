import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-accent-900 to-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-secondary-400/10 to-primary-400/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            {/* Logo - Matching navbar style */}
            <div className="flex items-center space-x-2 group cursor-pointer mb-6">
              <div className="relative">
                {/* Your actual anchor logo - matching navbar size */}
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
                <span className="text-3xl font-bold tracking-tight text-white">
                  4anchors
                </span>
                <span className="text-sm font-medium tracking-wider uppercase text-primary-200">
                  Software Solutions
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Anchoring your digital success with custom software solutions that 
              drive growth, efficiency, and innovation across industries.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-primary-600/20 to-secondary-600/20 p-2 rounded-lg group-hover:from-primary-600/30 group-hover:to-secondary-600/30 transition-all duration-300">
                  <Mail className="w-4 h-4 text-primary-400" />
                </div>
                <a href="mailto:hello@4-anchors.com" className="text-gray-300 hover:text-white transition-colors">
                  hello@4-anchors.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-primary-600/20 to-secondary-600/20 p-2 rounded-lg group-hover:from-primary-600/30 group-hover:to-secondary-600/30 transition-all duration-300">
                  <Phone className="w-4 h-4 text-primary-400" />
                </div>
                <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-primary-600/20 to-secondary-600/20 p-2 rounded-lg group-hover:from-primary-600/30 group-hover:to-secondary-600/30 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                'Custom Software Development',
                'Web Applications',
                'Mobile Development',
                'Cloud Services',
                'System Integration',
                'Technical Consulting'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm hover:text-white transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} 4anchors. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;