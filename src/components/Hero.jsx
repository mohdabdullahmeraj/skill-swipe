import React from "react";
import { FaHeart, FaPlay, FaMapMarkerAlt, FaShare } from "react-icons/fa";
import megaphone from "../assets/megaphone.png";

function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-8">
      {/* Left Section: Text Content */}
      <div className="text-center md:text-left">
        <h1 className="text-6xl font-bold tracking-tight leading-tight">
          skill
        </h1>
        <h1 className="text-[#D0171E] text-6xl font-bold tracking-tight leading-tight">
          swipe
        </h1>
        <h1 className="text-6xl font-bold mb-4 tracking-tight leading-tight">excel</h1>
        <p className="text-xl mb-8">
        Connect with top recruiters, showcase your skills, and climb the leaderboard—all on one platform designed to match talent with the right opportunities.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200">
          GET STARTED
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="flex justify-center md:justify-end">
        <img src={megaphone} alt="Megaphone" className="max-w-full h-auto" />
      </div>
    </section>
  );
}

export default Hero;
