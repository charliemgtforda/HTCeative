import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-brown text-neutral-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="https://i.postimg.cc/Kz8m0Lqq/HTCreative_logo_long.png" 
                alt="HTCreative" 
                className="h-12 w-auto object-contain brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-neutral-warm/80 max-w-xs">
              Copywriting and concept development that makes brands remarkable and remembered.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-neutral-cream">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:heather@htcreative.net"
                className="flex items-center gap-3 text-neutral-warm/80 hover:text-ui-gold transition-colors"
              >
                <Mail size={18} />
                heather@htcreative.net
              </a>
              <a
                href="tel:9126678824"
                className="flex items-center gap-3 text-neutral-warm/80 hover:text-ui-gold transition-colors"
              >
                <Phone size={18} />
                912.667.8824
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-neutral-cream">Menu</h4>
            <ul className="space-y-2">
              <li><Link to="/work" className="text-neutral-warm/80 hover:text-ui-gold">Work</Link></li>
              <li><Link to="/services" className="text-neutral-warm/80 hover:text-ui-gold">Services</Link></li>
              <li><Link to="/about" className="text-neutral-warm/80 hover:text-ui-gold">About</Link></li>
              <li><Link to="/contact" className="text-neutral-warm/80 hover:text-ui-gold">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-taupe/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-warm/50">
          <p>&copy; {new Date().getFullYear()} HTCreative. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made in Richmond Hill, GA.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;