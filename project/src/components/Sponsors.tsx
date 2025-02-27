import React from 'react';
import { Zap, Cpu, Lightbulb, Bolt, Wifi } from 'lucide-react';

const Sponsors: React.FC = () => {
  const sponsors = [
    { name: "ElectroTech Solutions", icon: <Zap className="h-10 w-10" /> },
    { name: "CircuitMaster Inc.", icon: <Cpu className="h-10 w-10" /> },
    { name: "PowerGrid Systems", icon: <Bolt className="h-10 w-10" /> },
    { name: "InnoVolt Technologies", icon: <Lightbulb className="h-10 w-10" /> },
    { name: "WirelessWave Networks", icon: <Wifi className="h-10 w-10" /> }
  ];

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-brown-950 via-amber-950/90 to-brown-950 relative">
      {/* Circuit decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-amber-700/50"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-amber-700/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-mokoto text-4xl md:text-5xl text-amber-100 mb-4">SPONSORS</h2>
          <div className="h-1 w-20 bg-amber-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="bg-brown-900/80 backdrop-blur-sm border border-amber-700/30 rounded-lg p-6 flex flex-col items-center justify-center hover:border-amber-500/50 transition-all duration-300 aspect-square"
            >
              <div className="text-amber-500 mb-4">
                {sponsor.icon}
              </div>
              <h3 className="text-lg font-cinzel text-amber-200 text-center">{sponsor.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;