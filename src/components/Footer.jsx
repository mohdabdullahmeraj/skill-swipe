import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="container mx-auto px-4 py-16 text-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* About Us */}
        <div className="min-h-[150px]">
          <h3 className="font-bold mb-4">ABOUT US</h3>
          <p className="text-sm text-gray-700">
            Skill Swipe connects students, startups, and professionals through exciting events, smart team formation, and engaging challenges to streamline hackathons and lead to top talent—fostering direct access opportunities for all.
          </p>
        </div>

        {/* Legal */}
        <div className="min-h-[150px]">
          <h3 className="font-bold mb-4">LEGAL</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy" className="text-sm text-gray-700 hover:text-black transition-colors duration-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sm text-gray-700 hover:text-black transition-colors duration-300">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="min-h-[150px]">
          <h3 className="font-bold mb-4">SOCIALS</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors duration-300">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors duration-300">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors duration-300">
                X
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors duration-300">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Help & Support */}
        <div className="min-h-[150px]">
          <h3 className="font-bold mb-4">HELP AND SUPPORT</h3>
          <p className="text-sm text-gray-700">
            Plot A2, Block C, Sector 125 Noida - 201303 Delhi NCR
          </p>
          <p className="text-sm text-gray-700">
            Email: <a href="mailto:info@abs.edu.in" className="hover:text-black">info@abs.edu.in</a>
          </p>
          <p className="text-sm text-gray-700">
            Phone: <a href="tel:+919650334486" className="hover:text-black">+91 9650334486</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
