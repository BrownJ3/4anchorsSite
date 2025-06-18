import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users className="w-5 h-5" />, value: '25+', label: 'Developers' },
    { icon: <Award className="w-5 h-5" />, value: '98%', label: 'Satisfaction' },
    { icon: <Clock className="w-5 h-5" />, value: '10+', label: 'Years' },
    { icon: <Target className="w-5 h-5" />, value: '50+', label: 'Projects' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'Leverage cutting-edge technologies for competitive advantage.',
      icon: '🚀'
    },
    {
      title: 'Quality Assurance',
      description: 'Thoroughly tested code ensuring highest performance standards.',
      icon: '⚡'
    },
    {
      title: 'Client Partnership',
      description: 'Work as your extended team with transparent communication.',
      icon: '🤝'
    },
    {
      title: 'Scalable Solutions',
      description: 'Architectures designed to grow with your business needs.',
      icon: '📈'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 rounded-full border border-primary-200/50 mb-4">
              <span className="text-xs font-medium text-primary-700">About Us</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Anchoring Digital Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded on the principle that great software can transform businesses, 
              4anchors delivers custom solutions that anchor success.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our experienced team works collaboratively to understand your challenges 
              and create tailored solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-900 text-white px-6 py-3 rounded-full hover:from-primary-700 hover:via-primary-800 hover:to-accent-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Our Work
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-primary-600 via-primary-700 to-accent-900 rounded-2xl p-4 text-white shadow-xl">
              <div className="text-xl font-bold">10+</div>
              <div className="text-xs">Years Excellence</div>
            </div>
          </div>
        </div>

        {/* Simplified Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-4 mb-3 group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="text-primary-600 flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-xs">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simplified Values */}
        <div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 rounded-full border border-primary-200/50 mb-4">
              <span className="text-xs font-medium text-primary-700">Our Values</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Principles That Drive Excellence
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Core values that guide our work and define our commitment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simplified Team Culture */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-gray-900 via-accent-900 to-black rounded-2xl p-8 text-white text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            
            {/* Floating elements */}
            <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full animate-float"></div>
            <div className="absolute bottom-8 left-8 w-8 h-8 bg-gradient-to-br from-secondary-400/20 to-primary-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">
                Join Our Growing Team
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                We're looking for talented developers and innovators to join our mission.
              </p>
              <button className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-900 text-white px-6 py-3 rounded-full font-semibold hover:from-primary-700 hover:via-primary-800 hover:to-accent-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;