import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-cream/95 backdrop-blur-sm shadow-md py-3' : 'bg-neutral-cream py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="https://i.postimg.cc/Kz8m0Lqq/HTCreative_logo_long.png" 
            alt="HTCreative" 
            className="h-14 md:h-24 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-ui-gold ${
                location.pathname === link.path ? 'text-brand-brown font-bold' : 'text-brand-brown/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-ui-forest text-neutral-cream rounded-full font-semibold text-sm hover:bg-brand-brown transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-brown p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-brown border-t border-brand-brown overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium ${location.pathname === link.path ? 'text-brand-green' : 'text-neutral-cream'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-6 py-3 bg-brand-green text-ui-forest rounded-full font-bold text-center mt-2 hover:bg-neutral-cream transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;