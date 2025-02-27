import React, { useState } from 'react';
import { FileText, Cpu, Zap, Lightbulb, Bolt, Utensils, Music, Gamepad2, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCoordinator {
  name: string;
  contact: string;
  image: string;
}

interface EventDetails {
  title: string;
  description: string;
  icon: React.ReactNode;
  time: string;
  coordinators: EventCoordinator[];
  rules: string[];
}

interface EventCardProps {
  event: EventDetails;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-brown-900/80 backdrop-blur-sm border border-amber-700/30 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(217,119,6,0.15)] group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Patent document background animation */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full border-2 border-amber-500/30 rounded-lg"></div>
        <div className="absolute top-4 left-4 right-4 bottom-4 border border-amber-500/20 rounded-lg"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-amber-700/30 patent-line"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-amber-700/30 patent-line"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-amber-700/20 patent-line-slow"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-amber-700/20 patent-line-slow"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-amber-700/20 patent-line-slow"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-amber-700/20 patent-line-slow"></div>
        <div className="absolute top-[10%] left-[10%] w-2 h-2 rounded-full bg-amber-500/30 patent-node"></div>
        <div className="absolute bottom-[10%] right-[10%] w-2 h-2 rounded-full bg-amber-500/30 patent-node"></div>
      </div>
      
      <div className="mb-4 text-amber-500 group-hover:text-amber-400 transition-colors duration-300">
        {event.icon}
      </div>
      <h3 className="text-xl font-cinzel text-amber-200 mb-2">{event.title}</h3>
      <p className="text-amber-100/70 font-glacial text-sm">{event.description}</p>
      
      {/* Hover overlay with timing and read more button */}
      <div className={`absolute inset-0 bg-brown-950/90 backdrop-blur-sm flex flex-col justify-center items-center p-6 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex items-center mb-4 text-amber-400">
          <Clock className="h-5 w-5 mr-2" />
          <span className="font-glacial">{event.time}</span>
        </div>
        <Link 
          to={`/event/${event.title.toLowerCase().replace(/\s+/g, '-')}`}
          className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-amber-50 font-bold rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl font-glacial tracking-wide flex items-center"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  const technicalEvents: EventDetails[] = [
    {
      title: "Paper Presentation",
      description: "Present your research papers on innovative electrical and electronics concepts.",
      icon: <FileText className="h-8 w-8" />,
      time: "10:00 AM - 12:30 PM",
      coordinators: [
        {
          name: "Arun Kumar",
          contact: "+91 9876543210",
          image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Priya Sharma",
          contact: "+91 9876543211",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Rahul Verma",
          contact: "+91 9876543212",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        }
      ],
      rules: [
        "Papers must be in IEEE format",
        "Maximum 3 members per team",
        "Presentation time: 8 minutes + 2 minutes Q&A",
        "Topics must be related to electrical or electronics engineering",
        "Plagiarism will result in disqualification"
      ]
    },
    {
      title: "Project Presentation",
      description: "Showcase your working projects and prototypes to industry experts.",
      icon: <Cpu className="h-8 w-8" />,
      time: "01:30 PM - 04:00 PM",
      coordinators: [
        {
          name: "Vikram Singh",
          contact: "+91 9876543213",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Neha Patel",
          contact: "+91 9876543214",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Karthik Rajan",
          contact: "+91 9876543215",
          image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        }
      ],
      rules: [
        "Working prototype must be demonstrated",
        "Maximum 4 members per team",
        "Presentation time: 10 minutes + 5 minutes Q&A",
        "Projects must be original and innovative",
        "Power supply will be provided, bring your own equipment"
      ]
    },
    {
      title: "CircuitXplorer",
      description: "Test your circuit design and troubleshooting skills in this hands-on challenge.",
      icon: <Zap className="h-8 w-8" />,
      time: "09:30 AM - 11:30 AM",
      coordinators: [
        {
          name: "Sanjay Mehta",
          contact: "+91 9876543216",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Ananya Reddy",
          contact: "+91 9876543217",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Rajesh Kumar",
          contact: "+91 9876543218",
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        }
      ],
      rules: [
        "Individual participation only",
        "Two rounds: Circuit design and troubleshooting",
        "Time limit: 60 minutes per round",
        "Components will be provided",
        "Participants must bring their own basic tools"
      ]
    },
    {
      title: "Ampere Arena",
      description: "Compete in this electrical quiz competition covering fundamentals to advanced concepts.",
      icon: <Lightbulb className="h-8 w-8" />,
      time: "02:00 PM - 04:00 PM",
      coordinators: [
        {
          name: "Deepak Sharma",
          contact: "+91 9876543219",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Meera Iyer",
          contact: "+91 9876543220",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Arjun Nair",
          contact: "+91 9876543221",
          image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        }
      ],
      rules: [
        "Teams of 2 members",
        "Three rounds: Preliminary, Main, and Rapid Fire",
        "Questions from basic to advanced electrical concepts",
        "Negative marking in the final round",
        "Judge's decision is final"
      ]
    },
    {
      title: "Tesla Vs Edison",
      description: "A debate competition on controversial topics in electrical engineering.",
      icon: <Bolt className="h-8 w-8" />,
      time: "11:00 AM - 01:00 PM",
      coordinators: [
        {
          name: "Vivek Menon",
          contact: "+91 9876543222",
          image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Shreya Gupta",
          contact: "+91 9876543223",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Nikhil Menon",
          contact: "+91 9876543224",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        }
      ],
      rules: [
        "Teams of 2 members",
        "Topics will be provided 30 minutes before the debate",
        "Each team gets 5 minutes for initial arguments",
        "3 minutes for rebuttal",
        "2 minutes for conclusion",
        "Judging based on content, delivery, and rebuttals"
      ]
    }
  ];

  const nonTechnicalEvents: EventDetails[] = [
    {
      title: "Watt A Biryani",
      description: "Cooking competition with an electrical engineering twist.",
      icon: <Utensils className="h-8 w-8" />,
      time: "12:00 PM - 02:00 PM",
      coordinators: [
        {
          name: "Ravi Shankar",
          contact: "+91 9876543225",
          image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Divya Krishnan",
          contact: "+91 9876543226",
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Suresh Kumar",
          contact: "+91 9876543227",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        }
      ],
      rules: [
        "Teams of 3 members",
        "Ingredients will be provided",
        "Time limit: 90 minutes",
        "Dishes must incorporate an electrical engineering theme",
        "Judging based on taste, presentation, and creativity"
      ]
    },
    {
      title: "Flux Your Talent",
      description: "Show off your non-technical talents in this open stage event.",
      icon: <Music className="h-8 w-8" />,
      time: "03:00 PM - 05:30 PM",
      coordinators: [
        {
          name: "Anjali Menon",
          contact: "+91 9876543228",
          image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Rohan Kapoor",
          contact: "+91 9876543229",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Kavya Nair",
          contact: "+91 9876543230",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        }
      ],
      rules: [
        "Individual or group performances",
        "Time limit: 5 minutes per performance",
        "Pre-registration required with performance details",
        "All types of talents welcome: singing, dancing, comedy, etc.",
        "Props and instruments must be brought by participants"
      ]
    },
    {
      title: "Mini Mania",
      description: "Fun mini-games with electrical engineering themes.",
      icon: <Gamepad2 className="h-8 w-8" />,
      time: "10:00 AM - 04:00 PM",
      coordinators: [
        {
          name: "Varun Menon",
          contact: "+91 9876543231",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Pooja Sharma",
          contact: "+91 9876543232",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
          name: "Aditya Nair",
          contact: "+91 9876543233",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        }
      ],
      rules: [
        "Open throughout the day",
        "Multiple mini-games with electrical themes",
        "Participate in as many games as you want",
        "Collect points across all games",
        "Prizes for highest point scorers at the end of the day"
      ]
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-brown-950 via-amber-950/90 to-brown-950 relative">
      {/* Circuit decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-amber-700/50"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-amber-700/50"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-amber-700/50"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-amber-700/50"></div>
        
        {/* Circuit nodes */}
        <div className="absolute top-1/3 left-1/4 h-3 w-3 rounded-full bg-amber-500"></div>
        <div className="absolute bottom-1/3 right-1/4 h-3 w-3 rounded-full bg-amber-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-mokoto text-4xl md:text-5xl text-amber-100 mb-4">EVENTS</h2>
          <div className="h-1 w-20 bg-amber-600 mx-auto"></div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-cinzel text-amber-400 mb-8 text-center">Technical Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalEvents.map((event, index) => (
              <EventCard 
                key={index}
                event={event}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-cinzel text-amber-400 mb-8 text-center">Non-Technical Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nonTechnicalEvents.map((event, index) => (
              <EventCard 
                key={index}
                event={event}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;