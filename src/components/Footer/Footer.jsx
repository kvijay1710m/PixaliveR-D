import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Grid Layout for Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Column 1 - Logo */}
          <div>
            <Link to="/" onClick={() => window.scrollTo(0, 0)} >
              <h2 className="text-2xl font-bold">Pixalive R&D</h2>
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Address</h3>
            <div className="space-y-3">
              <p className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-white text-6xl" />
                Third Floor, 35/2, Hosur Rd, Konappana Agrahara, Electronic City, Phase 2, Bengaluru, Karnataka 560100, India.
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="text-white text-xl" />
                support@pixalivernd.com
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <FaPhone className="text-white text-xl" />
                +91 98765 43210
              </p>
            </div>
          </div>


          {/* Column 3 - Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="relative group hover:text-gray-400">About Us<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="relative group hover:text-gray-400">Services<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="relative group hover:text-gray-400"> Blog<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/careers" className="relative group hover:text-gray-400">Careers  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="relative group hover:text-gray-400">Contact Us <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link to="https://www.facebook.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </Link>
              <Link to="https://www.twitter.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </Link>
              <Link to="https://www.linkedin.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Grey Line */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © 2025 Pixalive R&D. All Rights Reserved. Crafted with ❤️ & ☕ in India.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
