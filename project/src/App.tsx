import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Organizers from './components/Organizers';
import Sponsors from './components/Sponsors';
import Registration from './components/Registration';
import Footer from './components/Footer';
import EventDetails from './components/EventDetails';

function App() {
  return (
    <Router>
      <div className="bg-brown-950 text-amber-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Events />
              <Organizers />
              <Sponsors />
              <Registration />
            </>
          } />
          <Route path="/event/:eventId" element={<EventDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;