import React from 'react';
import { Users } from 'lucide-react';

interface OrganizerProps {
  name: string;
  role: string;
  image?: string;
}

const OrganizerCard: React.FC<OrganizerProps> = ({ name, role, image }) => {
  return (
    <div className="bg-brown-900/80 backdrop-blur-sm border border-amber-700/30 rounded-lg p-6 text-center hover:border-amber-500/50 transition-all duration-300">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-amber-800/50 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <Users className="h-10 w-10 text-amber-500" />
        )}
      </div>
      <h3 className="text-lg font-cinzel text-amber-200 mb-1">{name}</h3>
      <p className="text-amber-100/70 font-glacial text-sm">{role}</p>
    </div>
  );
};

const Organizers: React.FC = () => {
  const facultyCoordinators = [
    {
      name: "Dr. S. Shanmuga Vadivu",
      role: "ASST PROFESSOR, FACULTY COORDINATOR"
    },
    {
      name: "Dr. S. Jennathu Beevi",
      role: "HOD-EEE, CONVENOR"
    },
    {
      name: "Dr. C. Tharini",
      role: "DEAN-SECS, CONVENOR"
    }
  ];

  const studentCoordinators = [
    {
      name: "Sumayathul Haire",
      role: "TREASURER"
    },
    {
      name: "Jahangeer J",
      role: "JOINT SECRETARY"
    },
    {
      name: "Shams Tabrez Hussain",
      role: "GENERAL SECRETARY"
    }
  ];

  return (
    <section id="organizers" className="py-20 bg-gradient-to-b from-brown-950 via-amber-950/90 to-brown-950 relative">
      {/* Circuit decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-px h-full bg-amber-700/50"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-amber-700/50"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-amber-700/50"></div>
        
        {/* Circuit nodes */}
        <div className="absolute top-1/2 left-1/3 h-3 w-3 rounded-full bg-amber-500"></div>
        <div className="absolute top-1/2 right-1/3 h-3 w-3 rounded-full bg-amber-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-mokoto text-4xl md:text-5xl text-amber-100 mb-4">ORGANIZERS</h2>
          <div className="h-1 w-20 bg-amber-600 mx-auto"></div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-cinzel text-amber-400 mb-8 text-center">Faculty Coordinators</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facultyCoordinators.map((coordinator, index) => (
              <OrganizerCard 
                key={index}
                name={coordinator.name}
                role={coordinator.role}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-cinzel text-amber-400 mb-8 text-center">Student Coordinators</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentCoordinators.map((coordinator, index) => (
              <OrganizerCard 
                key={index}
                name={coordinator.name}
                role={coordinator.role}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;