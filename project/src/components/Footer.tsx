import React from 'react';
import { Zap, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-950 text-amber-100 border-t border-amber-900/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-amber-500" />
              <span className="font-mokoto text-xl tracking-wider text-amber-100">CYGNUS'25</span>
            </div>
            <p className="font-glacial text-amber-200/70 mb-6">
              National Level Symposium on Electrical and Electronics Engineering
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-cinzel text-xl text-amber-400 mb-4">Contact Us</h3>
            <ul className="space-y-3 font-glacial">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-500 mt-0.5" />
                <span>cygnus25@crescent.education</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-amber-500 mt-0.5" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                <span>Department of EEE, Crescent Institute of Science & Technology, Chennai</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-cinzel text-xl text-amber-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 font-glacial">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#events" className="hover:text-amber-400 transition-colors">Events</a>
              </li>
              <li>
                <a href="#organizers" className="hover:text-amber-400 transition-colors">Organizers</a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-amber-400 transition-colors">Sponsors</a>
              </li>
              <li>
                <a href="#register" className="hover:text-amber-400 transition-colors">Register</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-amber-900/30 text-center font-glacial text-amber-200/50 text-sm">
          <p>© 2025 CYGNUS. Department of Electrical and Electronics Engineering, Crescent Institute of Science & Technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;