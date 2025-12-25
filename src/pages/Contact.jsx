export default function Contact() {
  return (
    <section className="pt-32 max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-400 mb-12 max-w-2xl">
        Have a project idea or want to work together?  
        Feel free to reach out — I usually reply within 24 hours.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {/* EMAIL CARD */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-400 mb-4">
            Best for detailed discussion
          </p>
          <p className="text-blue-400">
            amitchauhan6599@gmail.com
          </p>
        </div>

        {/* WHATSAPP CARD */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
          <p className="text-gray-400 mb-4">
            Quick response & instant chat
          </p>
          <a
            href="https://wa.me/919918804522"
            target="_blank"
            className="text-green-400"
          >
            Chat on WhatsApp →
          </a>
        </div>

        {/* LOCATION CARD */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-400 mb-4">
            Available for remote work
          </p>
          <p className="text-gray-300">India (Remote)</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Let’s build something great 🚀
        </h2>
        <p className="text-gray-400 mb-6">
          Ready to start your project?
        </p>
        <a
          href="mailto:amitchauhan6599@gmail.com"
          className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
