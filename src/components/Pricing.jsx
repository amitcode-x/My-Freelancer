export default function Pricing() {
  const plans = [
    {
      title: "Basic Website",
      price: "₹4,000 – ₹6,000",
      desc: "Best for small businesses & personal use",
      features: [
        "1–3 Pages",
        "Responsive Design",
        "Modern UI",
        "Contact Form",
        "Basic SEO",
      ],
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Business Website",
      price: "₹12,000 – ₹20,000",
      desc: "Perfect for growing businesses",
      features: [
        "5–8 Pages",
        "Premium UI Design",
        "Animations",
        "WhatsApp Integration",
        "SEO Optimized",
        "Deployment Support",
      ],
      popular: true,
      gradient: "from-purple-500/10 to-blue-500/10"
    },
    {
      title: "Custom / Web App",
     price: "₹30,000+",
      desc: "Advanced & custom solutions",
      features: [
        "Custom Features",
        "Admin Panel",
        "Authentication",
        "Backend & APIs",
        "Database Integration",
        "Scalable Architecture",
      ],
      gradient: "from-pink-500/10 to-purple-500/10"
    },
  ];

  return (
    <section id="pricing" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-16 sm:py-24 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
            Website Pricing &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Transparent pricing based on your requirements.
            <br className="hidden sm:block" />
            Final cost may vary depending on features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.title}
              className={`group relative backdrop-blur-sm bg-white/5 border rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-blue-400/50 lg:scale-105 shadow-xl shadow-blue-500/20"
                  : "border-white/10 hover:border-white/20"
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-semibold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Gradient Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                  {plan.title}
                </h3>

                {/* Price */}
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {plan.price}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 mb-6">
                  {plan.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li 
                      key={feature} 
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-300"
                      style={{
                        animationDelay: `${index * 150 + i * 50}ms`,
                        animation: 'fadeIn 0.4s ease-out forwards',
                        opacity: 0
                      }}
                    >
                      <span className="text-blue-400 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                      : "bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/30"
                  }`}
                >
                  Get Started
                </a>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10 sm:mt-12 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-400">
            💡 <span className="text-gray-300 font-medium">Need something custom?</span> Let's discuss your project and create a tailored solution for you.
          </p>
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}