import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Users, FileText } from 'lucide-react';

// This would typically come from an API or database
const getEventData = (eventId: string) => {
  const allEvents = [
    {
      id: "paper-presentation",
      title: "Paper Presentation",
      description: "Present your research papers on innovative electrical and electronics concepts.",
      time: "10:00 AM - 12:30 PM",
      venue: "Main Auditorium, Block A",
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
      id: "project-presentation",
      title: "Project Presentation",
      description: "Showcase your working projects and prototypes to industry experts.",
      time: "01:30 PM - 04:00 PM",
      venue: "Innovation Lab, Block C",
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
      id: "circuitxplorer",
      title: "CircuitXplorer",
      description: "Test your circuit design and troubleshooting skills in this hands-on challenge.",
      time: "09:30 AM - 11:30 AM",
      venue: "Electronics Lab, Block B",
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
      id: "ampere-arena",
      title: "Ampere Arena",
      description: "Compete in this electrical quiz competition covering fundamentals to advanced concepts.",
      time: "02:00 PM - 04:00 PM",
      venue: "Seminar Hall, Block A",
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
      id: "tesla-vs-edison",
      title: "Tesla Vs Edison",
      description: "A debate competition on controversial topics in electrical engineering.",
      time: "11:00 AM - 01:00 PM",
      venue: "Conference Room, Block D",
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
    },
    {
      id: "watt-a-biryani",
      title: "Watt A Biryani",
      description: "Cooking competition with an electrical engineering twist.",
      time: "12:00 PM - 02:00 PM",
      venue: "Cafeteria, Block E",
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
      id: "flux-your-talent",
      title: "Flux Your Talent",
      description: "Show off your non-technical talents in this open stage event.",
      time: "03:00 PM - 05:30 PM",
      venue: "Open Air Theatre",
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
      id: "mini-mania",
      title: "Mini Mania",
      description: "Fun mini-games with electrical engineering themes.",
      time: "10:00 AM - 04:00 PM",
      venue: "Recreation Area, Block F",
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

  return allEvents.find(event => event.id === eventId);
};

const EventDetails: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (eventId) {
      // In a real app, this would be an API call
      const data = getEventData(eventId);
      setEvent(data);
      setLoading(false);
    }
  }, [eventId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-amber-500">Loading event details...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-cinzel text-amber-400 mb-4">Event Not Found</h2>
        <p className="text-amber-100 mb-6">Sorry, we couldn't find the event you're looking for.</p>
        <Link 
          to="/" 
          className="flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-amber-50 font-bold rounded-md transition-colors duration-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 relative">
      {/* Circuit decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-amber-700/50 patent-line"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-amber-700/50 patent-line"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-amber-700/50 patent-line"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-amber-700/50 patent-line"></div>
        
        {/* Circuit nodes */}
        <div className="absolute top-1/3 left-1/4 h-3 w-3 rounded-full bg-amber-500 patent-node"></div>
        <div className="absolute bottom-1/3 right-1/4 h-3 w-3 rounded-full bg-amber-500 patent-node"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center mb-8 text-amber-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>
        
        <div className="bg-brown-900/80 backdrop-blur-sm border border-amber-700/30 rounded-lg p-8 mb-8">
          <h1 className="font-mokoto text-3xl md:text-4xl text-amber-100 mb-4">{event.title}</h1>
          <p className="font-glacial text-amber-200/80 text-lg mb-6">{event.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-amber-500 mr-3" />
              <div>
                <h3 className="font-cinzel text-amber-300 text-sm">Time</h3>
                <p className="font-glacial">{event.time}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-amber-500 mr-3" />
              <div>
                <h3 className="font-cinzel text-amber-300 text-sm">Venue</h3>
                <p className="font-glacial">{event.venue}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-brown-900/80 backdrop-blur-sm border border-amber-700/30 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-amber-500 mr-3" />
              <h2 className="font-cinzel text-2xl text-amber-200">Rules & Regulations</h2>
            </div>
            
            <ul className="space-y-3 font-glacial">
              {event.rules.map((rule: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span className="text-amber-100/90">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-brown-900/80 backdrop-blur-sm border border-amber-700/30 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-amber-500 mr-3" />
              <h2 className="font-cinzel text-2xl text-amber-200">Event Coordinators</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {event.coordinators.map((coordinator: any, index: number) => (
                <div key={index} className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-amber-600/30">
                    <img 
                      src={coordinator.image} 
                      alt={coordinator.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-amber-300">{coordinator.name}</h3>
                    <p className="font-glacial text-amber-100/70 text-sm">{coordinator.contact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/#register" 
            className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-amber-50 font-bold rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl font-glacial tracking-wide"
          >
            REGISTER FOR THIS EVENT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;