import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="/exevo-uploads/27727fff-09d1-4e90-b210-8fca3e49785d.jpg"
              alt="Exevo - Experiences Evolved"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed max-w-md">
              Exevo Events specializes in crafting extraordinary luxury events and unforgettable experiences for high-end clients across the automotive, corporate, and premium lifestyle sectors — delivering excellence in event management, branding, and execution.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services/events" className="hover:text-orange-400 transition-colors">Events</Link></li>
              <li><Link to="/services/exhibitions" className="hover:text-orange-400 transition-colors">Exhibitions</Link></li>
              <li><Link to="/services/activations" className="hover:text-orange-400 transition-colors">Activations</Link></li>
              <li><Link to="/services/mice-logistics" className="hover:text-orange-400 transition-colors">Mice & Logistics</Link></li>
              <li><Link to="/services/virtual-events" className="hover:text-orange-400 transition-colors">Virtual Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 praveen@exevoevents.in</li>
              <li>📞 +91 8800601740, +91 7348004900</li>
              <li>
                <a
                  href="https://g.co/kgs/1jM4NGp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-orange-400 underline underline-offset-4 hover:text-orange-500 transition-colors"
                >
                  🏢 House No 469, Second Floor  
                  <br />
                  Chirag Delhi, New Delhi (110017)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Exevo Events - Experiences Evolved. Developed by {' '}
            <a
              href="https://zarnetic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
              >
              Zarnetic.com
            </a>.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 border-t border-white/10 pt-6 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/share/1Aej2XxvUV/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-400 hover:text-orange-400 transition-colors"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://www.instagram.com/exevo.events/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-orange-400 transition-colors"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://www.linkedin.com/company/96960847/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-orange-400 transition-colors"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
