import { useState } from 'react';

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  
  const services = [
    {
      title: "Website Development",
      desc: "Modern, responsive and fast-loading websites for businesses and individuals.",
      icon: "🌐",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend with React",
      desc: "Interactive user interfaces using React, Tailwind CSS and best practices.",
      icon: "⚛️",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Backend with Python / Django",
      desc: "Secure backend systems with authentication, APIs and business logic.",
      icon: "🐍",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "API Integration",
      desc: "Integration of third-party APIs like payment gateways, email & analytics.",
      icon: "🔌",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Bug Fixing & Optimization",
      desc: "Fixing bugs, improving performance and optimizing existing applications.",
      icon: "🔧",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Deployment & Hosting",
      desc: "Deploying websites on Vercel, Netlify or cloud platforms with domain setup.",
      icon: "🚀",
      gradient: "from-indigo-500 to-purple-500"
    },
  ];

  const displayedServices = showAll ? services : services.slice(0, 4);

  return (
    <section id="services" className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h3>
          <p className="text-sm sm:text-base text-gray-400 max-w-3xl">
            I provide end-to-end web development services — from planning and
            development to deployment and maintenance.
          </p>
        </div>

        {/* Services Grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {displayedServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl`}></div>
            </div>
          ))}
        </div>

        {/* View More/Less Button */}
        {services.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="backdrop-blur-sm bg-white/5 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300"
            >
              {showAll ? '↑ Show Less' : '↓ View More'}
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-14">
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              Not sure which service you need?
            </p>
            <a
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}