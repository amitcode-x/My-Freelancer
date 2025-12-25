export default function CTA() {
  return (
    <section className="relative  py-16 overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      
      {/* Compact Glassmorphism Card */}
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-10 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-300">
          
          <div className="relative">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Have a Project in <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mind?</span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 mb-6">
              Let's work together to build something fast, scalable and professional.
            </p>

            {/* CTA Button */}
            <a
              href="/contact"
              className="inline-block backdrop-blur-md bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Contact Me →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}