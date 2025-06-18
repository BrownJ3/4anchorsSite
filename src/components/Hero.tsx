import React from 'react';
import { ChevronDown, Zap, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-gray-900 via-accent-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-secondary-400/20 to-secondary-600/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-accent-400/20 to-accent-600/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 bg-tech-pattern opacity-5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[calc(100vh-18rem)] sm:min-h-[calc(100vh-18rem)] lg:min-h-[calc(100vh-20rem)]">
          {/* Content - Left Side */}
          <div className="text-white animate-slide-up flex flex-col justify-center">
            {/* Excellence badge - hidden on mobile */}
            <div className="hidden sm:inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-600/30 to-secondary-600/30 rounded-full border border-primary-400/50 mb-6 backdrop-blur-sm shadow-lg w-fit">
              <Zap className="w-3 h-3 text-primary-300 mr-1.5 flex-shrink-0" />
              <span className="text-xs font-semibold text-white">Excellence</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 lg:mb-10">
              Anchor Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-300">
                Digital Future
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
              Transform your business with cutting-edge<br className="hidden lg:block" /> software solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 mb-10 sm:mb-12 lg:mb-16">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-primary-600 via-primary-700 to-accent-900 text-white px-6 py-3 rounded-full font-semibold hover:from-primary-700 hover:via-primary-800 hover:to-accent-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Start Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={scrollToServices}
                className="border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Explore
              </button>
            </div>

            {/* Simplified Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center group">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400 group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Years</div>
              </div>
              <div className="text-center group">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-gray-300 text-xs sm:text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Enhanced Anchor Visualization - Right Side */}
          <div className="flex justify-center lg:justify-end animate-fade-in mt-8 sm:mt-6 lg:mt-0">
            <div className="relative">
              <div className="w-56 sm:w-72 md:w-80 lg:w-96 h-56 sm:h-72 md:h-80 lg:h-96 relative">
                {/* Very dark navy gradient background for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-slate-950/80 rounded-full blur-3xl"></div>
                <div className="absolute inset-4 sm:inset-8 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
                <div className="absolute inset-8 sm:inset-16 bg-gradient-to-br from-slate-800/30 to-slate-950/50 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                
                {/* Main anchor container with very dark navy backdrop */}
                <div className="absolute inset-0 flex items-center justify-center animate-float">
                  <div className="relative">
                    {/* Very dark navy backdrop circles for better logo contrast */}
                    <div className="absolute inset-0 w-32 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 md:h-56 lg:h-64 bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-slate-950/90 rounded-full blur-sm"></div>
                    <div className="absolute inset-1 sm:inset-2 w-30 sm:w-44 md:w-52 lg:w-60 h-30 sm:h-44 md:h-52 lg:h-60 bg-gradient-to-br from-slate-900/95 to-slate-950/95 rounded-full"></div>
                    
                    {/* Your actual logo - with better contrast */}
                    <div className="relative z-10">
                      <img 
                        src="/anchor.png" 
                        alt="4anchors Logo" 
                        className="w-32 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 md:h-56 lg:h-64 drop-shadow-2xl transition-all duration-300 hover:scale-105 relative z-10"
                      />
                    </div>
                    
                    {/* Rotating rings around the logo */}
                    <div className="absolute inset-0 border-2 border-primary-400/40 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                    <div className="absolute inset-2 sm:inset-4 border border-secondary-400/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                  </div>
                </div>
                
                {/* Orbiting elements around your logo */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                  <div className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-lg"></div>
                  <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full shadow-lg"></div>
                  <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full shadow-lg"></div>
                  <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full shadow-lg"></div>
                </div>
                
                {/* Corner accent elements */}
                <div className="absolute top-8 sm:top-16 left-8 sm:left-16 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-br from-primary-400/60 to-primary-600/60 rounded-full animate-bounce-slow blur-sm"></div>
                <div className="absolute top-12 sm:top-20 right-12 sm:right-20 w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-br from-secondary-400/60 to-secondary-600/60 rounded-full animate-bounce-slow blur-sm" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-12 sm:bottom-20 left-12 sm:left-20 w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-br from-accent-400/60 to-accent-600/60 rounded-full animate-bounce-slow blur-sm" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-8 sm:bottom-16 right-8 sm:right-16 w-3 sm:w-5 h-3 sm:h-5 bg-gradient-to-br from-primary-500/60 to-secondary-500/60 rounded-full animate-bounce-slow blur-sm" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToServices} 
            className="group flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
          >
            <div className="animate-bounce">
              <ChevronDown size={20} className="group-hover:text-primary-400 transition-colors duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;