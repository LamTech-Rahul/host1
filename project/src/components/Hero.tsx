import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Circuit background with overlay */}
      <div className="absolute inset-0 bg-circuit-pattern bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brown-950/90 via-amber-900/80 to-brown-950/90"></div>
      
      {/* Circuit lines decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-amber-700/30"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-amber-700/30"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-amber-700/30"></div>
        <div className="absolute left-1/4 top-0 h-full w-px bg-amber-700/30"></div>
        <div className="absolute left-2/4 top-0 h-full w-px bg-amber-700/30"></div>
        <div className="absolute left-3/4 top-0 h-full w-px bg-amber-700/30"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-block mb-4 px-6 py-2 border-2 border-amber-500/50 rounded-md bg-brown-950/50 backdrop-blur-sm">
          <h2 className="font-glacial text-amber-400 tracking-widest">NATIONAL LEVEL SYMPOSIUM</h2>
        </div>
        
        <h1 className="font-mokoto text-5xl md:text-7xl lg:text-8xl text-amber-100 mb-6 tracking-wider leading-tight">
          CYGNUS<span className="text-amber-500">'25</span>
        </h1>
        
        <p className="font-cinzel text-xl md:text-2xl text-amber-200 mb-8 max-w-3xl mx-auto">
          Exploring the Frontiers of Electrical & Electronics Engineering
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 text-amber-100 font-glacial">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-amber-500" />
            <span>22.04.2025</span>
          </div>
          <div className="hidden md:block h-4 w-px bg-amber-700/50"></div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-amber-500" />
            <span>09:30 AM</span>
          </div>
          <div className="hidden md:block h-4 w-px bg-amber-700/50"></div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-amber-500" />
            <span>Crescent Institute of Science & Technology</span>
          </div>
        </div>
        
        <a 
          href="#register" 
          className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-amber-50 font-bold rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl font-glacial tracking-wide"
        >
          REGISTER NOW
        </a>
      </div>
    </section>
  );
};

export default Hero;