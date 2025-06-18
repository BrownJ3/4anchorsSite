import React from 'react';
import { ExternalLink, Search, FileText, Code2, Rocket } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Enterprise ERP System',
      description: 'Custom enterprise resource planning solution for manufacturing company.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      category: 'Enterprise',
      results: '40% efficiency increase'
    },
    {
      title: 'Healthcare Platform',
      description: 'HIPAA-compliant patient management with telemedicine capabilities.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Python', 'MongoDB', 'Docker'],
      category: 'Healthcare',
      results: '60% faster scheduling'
    },
    {
      title: 'E-commerce Mobile App',
      description: 'Cross-platform mobile app for retail chain with loyalty program.',
      image: 'https://images.pexels.com/photos/4968388/pexels-photo-4968388.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Stripe'],
      category: 'Mobile',
      results: '150% mobile sales increase'
    },
    {
      title: 'Financial Dashboard',
      description: 'Real-time financial data visualization for investment management.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'D3.js'],
      category: 'Finance',
      results: '30% faster decisions'
    },
    {
      title: 'Supply Chain AI',
      description: 'AI-powered supply chain management with predictive analytics.',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'React'],
      category: 'AI/ML',
      results: '25% cost reduction'
    },
    {
      title: 'Learning Platform',
      description: 'Comprehensive online learning with interactive content.',
      image: 'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'GraphQL', 'Prisma'],
      category: 'Education',
      results: '200% engagement boost'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      icon: <Search className="w-8 h-8" />,
      description: 'Deep dive into your requirements, goals, and technical constraints.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      step: '02',
      title: 'Planning',
      icon: <FileText className="w-8 h-8" />,
      description: 'Strategic roadmap with detailed architecture and timeline.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      step: '03',
      title: 'Development',
      icon: <Code2 className="w-8 h-8" />,
      description: 'Agile development with continuous testing and feedback.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      step: '04',
      title: 'Deployment',
      icon: <Rocket className="w-8 h-8" />,
      description: 'Seamless launch with ongoing support and optimization.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section id="portfolio" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 rounded-full border border-primary-200/50 mb-4">
            <span className="text-xs font-medium text-primary-700">Success Stories</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proven Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore successful projects that showcase impactful software solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-900 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-3">
                  <div className="text-xs font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-700 to-accent-900">
                    Result: {project.results}
                  </div>
                  
                  <button className="text-primary-600 hover:text-primary-700 text-xs font-semibold flex items-center group">
                    View Case Study
                    <ExternalLink size={12} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Redesigned Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 rounded-full border border-primary-200/50 mb-4">
              <span className="text-xs font-medium text-primary-700">Our Process</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proven Methodology
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our structured approach ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((phase, index) => (
              <div key={index} className="relative group">
                {/* Connection line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
                )}
                
                <div className="relative z-10">
                  {/* Icon container */}
                  <div className={`${phase.bgColor} rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300 border border-gray-100`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${phase.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                        {phase.icon}
                      </div>
                      <div className={`bg-gradient-to-r ${phase.color} text-white text-sm font-bold px-3 py-1 rounded-full`}>
                        {phase.step}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {phase.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process benefits */}
          <div className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Why Our Process Works
              </h4>
              <p className="text-gray-600">
                Proven methodology that delivers results consistently
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-xl p-4 mb-3 shadow-sm">
                  <div className="text-2xl font-bold text-primary-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">On-Time Delivery</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-4 mb-3 shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-4 mb-3 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;