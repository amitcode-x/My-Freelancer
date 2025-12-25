import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">
              Amit Chauhan
            </h2>
            <p className="text-sm leading-relaxed">
              Freelance Software & Web Developer building fast, scalable
              and modern web applications.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Website Development</li>
              <li>React Frontend</li>
              <li>Python / Django Backend</li>
              <li>API Integration</li>
              <li>Deployment & Hosting</li>
            </ul>
          </div>

          {/* CONTACT + ICONS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} /> amitchauhan6599@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> WhatsApp Available
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> India (Remote)
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/" target="_blank" className="hover:text-white">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" className="hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* NEWSLETTER / CTA */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-lg font-semibold">
              Get Free Consultation
            </h3>
            <p className="text-sm text-gray-400">
              Have an idea? Let’s discuss your project.
            </p>
          </div>

          <a
            href="/contact"
            className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Contact Me <Send size={16} />
          </a>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>
            © {new Date().getFullYear()} Amit Chauhan. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
