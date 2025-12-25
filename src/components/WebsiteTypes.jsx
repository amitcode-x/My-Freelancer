import { useState } from 'react';

export default function WebsiteTypes() {
  const [showAll, setShowAll] = useState(false);
  
  const websites = [
    {
      title: "Business Website",
      desc: "Professional websites for small businesses, coaching centers, gyms, clinics and local brands.",
      icon: "💼"
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolios for developers, designers and freelancers to showcase skills & projects.",
      icon: "🎨"
    },
    {
      title: "E-commerce Website",
      desc: "Online stores with product listing, cart, checkout and admin management system.",
      icon: "🛒"
    },
    {
      title: "Admin Dashboard",
      desc: "Secure dashboards with analytics, user management and role-based access.",
      icon: "📊"
    },
    {
      title: "Management Systems",
      desc: "Hospital, School, Task, Inventory and custom management systems.",
      icon: "⚙️"
    },
    {
      title: "Custom Web App",
      desc: "Tailor-made web applications based on your business requirements.",
      icon: "🚀"
    },
  ];

  const displayedWebsites = showAll ? websites : websites.slice(0, 4);

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            What Type of{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Websites I Build
            </span>
          </h3>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            From simple landing pages to complex web applications
          </p>
        </div>

        {/* Cards Grid - Mobile: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedWebsites.map((item, index) => (
            <div
              key={item.title}
              className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Icon */}
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h4 className="text-base sm:text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2">
                {item.desc}
              </p>

              {/* Hover Gradient Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More/Less Button */}
        {websites.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="backdrop-blur-sm bg-white/5 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300"
            >
              {showAll ? '↑ Show Less' : '↓ View More'}
            </button>
          </div>
        )}
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