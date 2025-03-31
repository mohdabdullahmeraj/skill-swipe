
import React from 'react';
import { Link } from 'react-router-dom';



function Navigation() {
  return (
    <nav className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center">
        
      </div>
      <div className="flex items-center gap-6">
        <Link to="/hackathons" className="text-gray-700 hover:text-black transition-colors duration-300">
          EVENTS
        </Link>
        <Link to="/leaderboard" className="text-gray-700 hover:text-black transition-colors duration-300">
          LEADERBOARD
        </Link>
        <Link to="/opportunities" className="text-gray-700 hover:text-black transition-colors duration-300">
          OPPORTUNITIES
        </Link>
        <button className="bg-[#D0171E] px-4 py-2 rounded-full font-medium text-white transition-all duration-300">
          SIGN UP
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-300">
          HOST
        </button>
      </div>
    </nav>
  );
}

export default Navigation;