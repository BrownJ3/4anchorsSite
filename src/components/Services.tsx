import React from 'react';
import { Code, Smartphone, Globe, Database, Cloud, Cog } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Custom Software',
      description: 'Tailored solutions built from the ground up to meet your specific business requirements.',
      features: ['Full-stack development', 'Legacy modernization', 'API integration']
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Web Applications',
      description: 'Modern, responsive web applications that deliver exceptional user experiences.',
      features: ['React/Vue.js development', 'Progressive Web Apps', 'E-commerce platforms']
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that engage users.',
      features: ['iOS & Android apps', 'Cross-platform solutions', 'Mobile-first design']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database Solutions',
      description: 'Robust database architecture for secure, scalable data operations.',
      features: ['Database design', 'Data migration', 'Performance tuning']
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and DevOps solutions.',
      features: ['AWS/Azure/GCP', 'Containerization', 'CI/CD pipelines']
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: 'System Integration',
      description: 'Seamless integration of systems to create unified workflows.',
      features: ['API development', 'Third-party integrations', 'Workflow automation']
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 rounded-full border border-primary-200/50 mb-4">
            <span className="text-xs font-medium text-primary-700">Our Expertise</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Software Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your ideas into powerful, scalable solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-primary-600 mb-4 group-hover:text-secondary-600 transition-colors duration-300 transform group-hover:scale-110">
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                <ul className="space-y-1.5">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                      <div className="w-1 h-1 bg-accent-500 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Simplified CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-gray-900 via-accent-900 to-black rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            
            {/* Floating elements */}
            <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full animate-float"></div>
            <div className="absolute bottom-8 left-8 w-8 h-8 bg-gradient-to-br from-secondary-400/20 to-primary-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform?
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                Let's discuss how our expert team can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-900 text-white px-6 py-3 rounded-full font-semibold hover:from-primary-700 hover:via-primary-800 hover:to-accent-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Project
                </button>
                <button
                  onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  View Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;