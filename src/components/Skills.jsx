import { useState } from 'react';

export default function Skills() {
  const [showAll, setShowAll] = useState(false);
  
  const skills = [
    { name: "React", color: "from-blue-400 to-cyan-400" },
    { name: "JavaScript", color: "from-yellow-400 to-orange-400" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-blue-500" },
    { name: "Python", color: "from-blue-500 to-yellow-400" },
    { name: "Django", color: "from-green-400 to-emerald-500" },
    { name: "PostgreSQL", color: "from-blue-600 to-indigo-500" },
    { name: "REST APIs", color: "from-purple-400 to-pink-400" },
    { name: "Git & GitHub", color: "from-gray-400 to-gray-600" },
  ];

  const displayedSkills = showAll ? skills : skills.slice(0, 4);

  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-16 sm:py-20 overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h3>
          <p className="text-sm sm:text-base text-gray-400">
            Tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid - Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {displayedSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default"
              style={{
                animationDelay: `${index * 80}ms`,
                animation: 'fadeIn 0.5s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Skill Name */}
              <span className="relative z-10 text-sm sm:text-base font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl`}></div>
            </div>
          ))}
        </div>

        {/* View More/Less Button */}
        {skills.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="backdrop-blur-sm bg-white/5 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300"
            >
              {showAll ? '↑ Show Less' : '↓ View More'}
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-xs sm:text-sm text-gray-400 mb-4">
            Always learning and exploring new technologies
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .delay-150 {
          animation-delay: 150ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </section>
  );
}