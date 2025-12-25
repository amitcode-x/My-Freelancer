export default function About() {
  return (
    <section className="pt-32 max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <p className="text-gray-400 max-w-4xl leading-relaxed mb-10">
        I’m Amit Chauhan, a freelance software and web developer with a
        B.Tech in Artificial Intelligence & Machine Learning.
        I specialize in building modern, scalable and secure web applications
        for businesses and individuals.
      </p>

      {/* EXPERIENCE CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <p className="text-gray-400 text-sm">
            React, Tailwind CSS, Responsive UI, Performance optimization
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Backend</h3>
          <p className="text-gray-400 text-sm">
            Python, Django, REST APIs, Authentication & Security
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Database & DevOps</h3>
          <p className="text-gray-400 text-sm">
            PostgreSQL, MySQL, Git, Vercel, Netlify
          </p>
        </div>

      </div>
    </section>
  );
}
