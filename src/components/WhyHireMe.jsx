export default function WhyHireMe() {
  const features = [
    { icon: "💎", title: "Clean & Scalable Code" },
    { icon: "💬", title: "Clear Communication" },
    { icon: "⚡", title: "On-Time Delivery" },
    { icon: "🛠️", title: "Post-Delivery Support" }
  ];

  return (
    <section className="relative bg-gradient-to-br  py-20 overflow-hidden">
      
      {/* Simple Background Blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Why Hire <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <ul className="grid md:grid-cols-2 gap-6">
          {features.map((item, i) => (
            <li 
              key={i}
              className="group backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {item.title}
                </h4>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="backdrop-blur-md bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-full border border-white/30 hover:border-white/40 hover:scale-105 transition-all duration-300">
            Let's Work Together →
          </button>
        </div>
      </div>
    </section>
  );
}