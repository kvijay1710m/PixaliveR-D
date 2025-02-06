import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md text-black py-5 px-6 text-lg font-semibold shadow-sm z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to='/'>
        <h1 className="text-2xl font-bold text-gray-700">Pixalive Research and Development</h1>
        </Link>

        {/* Navigation Links (Hidden on Mobile, Visible on Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/services" className="hover:text-gray-500">Services</Link>
          <Link to="/blog" className="hover:text-gray-500">Blog</Link>
          <Link to="/careers" className="hover:text-gray-500">Careers</Link>
          <Link to="/contact" className="hover:text-gray-500">Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li><Link to="/services" className="block px-4 py-2 hover:text-blue-600">Services</Link></li>
              <li><Link to="/blog" className="block px-4 py-2 hover:text-blue-600">Blog</Link></li>
              <li><Link to="/careers" className="block px-4 py-2 hover:text-blue-600">Careers</Link></li>
              <li><Link to="/contact" className="block px-4 py-2 hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
