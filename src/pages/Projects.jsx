export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      desc: "Full-featured online store with cart, checkout and admin panel.",
      tech: "React, Context API, Tailwind",
      icon: "🛍️",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Hospital Management System",
      desc: "Patient, doctor, appointment and billing management system.",
      tech: "Django, PostgreSQL, REST API",
      icon: "🏥",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Task Management System",
      desc: "Task creation, status tracking and user authentication.",
      tech: "MERN Stack",
      icon: "✅",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Portfolio Website",
      desc: "Personal branding website for freelancers and developers.",
      tech: "React, Vite, Tailwind",
      icon: "💼",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className="relative pt-20 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            Real-world projects showcasing my expertise in full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                {/* Icon & Title Row */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-1">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Tech:</span>
                  <span className={`text-xs sm:text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.tech}
                  </span>
                </div>

                {/* View Details Link */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-400 group-hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                    <span>View Details</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 rounded-tr-2xl blur-xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/10 hover:border-white/30 transform hover:scale-105 transition-all duration-300"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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