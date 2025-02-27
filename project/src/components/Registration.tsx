import React, { useState } from 'react';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    department: '',
    phone: '',
    events: [] as string[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, events: [...prev.events, value] };
      } else {
        return { ...prev, events: prev.events.filter(event => event !== value) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Registration successful! We will contact you soon with more details.');
    setFormData({
      name: '',
      email: '',
      college: '',
      department: '',
      phone: '',
      events: []
    });
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-brown-950 via-amber-950/90 to-brown-950 relative">
      {/* Circuit decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/2 w-px h-full bg-amber-700/50"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-amber-700/50"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-amber-700/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-mokoto text-4xl md:text-5xl text-amber-100 mb-4">REGISTER</h2>
          <div className="h-1 w-20 bg-amber-600 mx-auto"></div>
          <p className="font-glacial text-amber-200/80 mt-4 max-w-2xl mx-auto">
            Join us at CYGNUS'25 for an electrifying experience. Register now to participate in our technical and non-technical events.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="bg-brown-900/80 backdrop-blur-sm border border-amber-700/30 rounded-lg p-8"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-amber-200 mb-2 font-glacial">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-brown-800/50 border border-amber-700/50 rounded-md px-4 py-2 text-amber-100 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-amber-200 mb-2 font-glacial">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-brown-800/50 border border-amber-700/50 rounded-md px-4 py-2 text-amber-100 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="college" className="block text-amber-200 mb-2 font-glacial">College/University</label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  className="w-full bg-brown-800/50 border border-amber-700/50 rounded-md px-4 py-2 text-amber-100 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="department" className="block text-amber-200 mb-2 font-glacial">Department</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full bg-brown-800/50 border border-amber-700/50 rounded-md px-4 py-2 text-amber-100 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="phone" className="block text-amber-200 mb-2 font-glacial">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-brown-800/50 border border-amber-700/50 rounded-md px-4 py-2 text-amber-100 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
            
            <div className="mb-8">
              <label className="block text-amber-200 mb-3 font-glacial">Events Interested In</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="event1"
                    name="events"
                    value="Paper Presentation"
                    checked={formData.events.includes('Paper Presentation')}
                    onChange={handleCheckboxChange}
                    className="mr-2 h-4 w-4 accent-amber-600"
                  />
                  <label htmlFor="event1" className="text-amber-100">Paper Presentation</label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="event2"
                    name="events"
                    value="Project Presentation"
                    checked={formData.events.includes('Project Presentation')}
                    onChange={handleCheckboxChange}
                    className="mr-2 h-4 w-4 accent-amber-600"
                  />
                  <label htmlFor="event2" className="text-amber-100">Project Presentation</label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="event3"
                    name="events"
                    value="CircuitXplorer"
                    checked={formData.events.includes('CircuitXplorer')}
                    onChange={handleCheckboxChange}
                    className="mr-2 h-4 w-4 accent-amber-600"
                  />
                  <label htmlFor="event3" className="text-amber-100">CircuitXplorer</label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="event4"
                    name="events"
                    value="Ampere Arena"
                    checked={formData.events.includes('Ampere Arena')}
                    onChange={handleCheckboxChange}
                    className="mr-2 h-4 w-4 accent-amber-600"
                  />
                  <label htmlFor="event4" className="text-amber-100">Ampere Arena</label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="event5"
                    name="events"
                    value="Tesla Vs Edison"
                    checked={formData.events.includes('Tesla Vs Edison')}
                    onChange={handleCheckboxChange}
                    className="mr-2 h-4 w-4 accent-amber-600"
                  />
                  <label htmlFor="event5" className="text-amber-100">Tesla Vs Edison</label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="event6"
                    name="events"
                    value="Non-Technical Events"
                    checked={formData.events.includes('Non-Technical Events')}
                    onChange={handleCheckboxChange}
                    className="mr-2 h-4 w-4 accent-amber-600"
                  />
                  <label htmlFor="event6" className="text-amber-100">Non-Technical Events</label>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-amber-50 font-bold py-3 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl font-glacial tracking-wide"
            >
              SUBMIT REGISTRATION
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;