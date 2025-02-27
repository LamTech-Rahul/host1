import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-900/90 text-amber-100 py-4 sticky top-0 z-50 backdrop-blur-sm border-b border-amber-700/50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-amber-400" />
          <span className="font-mokoto text-xl tracking-wider">CYGNUS'25</span>
        </div>
        
        <div className="hidden md:flex space-x-8 font-glacial">
          <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
          <a href="#events" className="hover:text-amber-400 transition-colors">Events</a>
          <a href="#organizers" className="hover:text-amber-400 transition-colors">Organizers</a>
          <a href="#sponsors" className="hover:text-amber-400 transition-colors">Sponsors</a>
          <a href="#register" className="hover:text-amber-400 transition-colors">Register</a>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-amber-100 focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-amber-900/95 backdrop-blur-sm border-t border-amber-700/50">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3 font-glacial">
            <a href="#home" className="py-2 hover:text-amber-400 transition-colors" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#events" className="py-2 hover:text-amber-400 transition-colors" onClick={() => setIsOpen(false)}>Events</a>
            <a href="#organizers" className="py-2 hover:text-amber-400 transition-colors" onClick={() => setIsOpen(false)}>Organizers</a>
            <a href="#sponsors" className="py-2 hover:text-amber-400 transition-colors" onClick={() => setIsOpen(false)}>Sponsors</a>
            <a href="#register" className="py-2 hover:text-amber-400 transition-colors" onClick={() => setIsOpen(false)}>Register</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;