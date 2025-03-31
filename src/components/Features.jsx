import React from 'react';
import { FaPlay } from 'react-icons/fa';

const features = [
  { title: "AI-Driven Team Formation", image: "ai-team.svg" },
  { title: "Gamified Team Matching", image: "gamified-team.svg" },
  { title: "Daily Missions & Leaderboards", image: "leaderboards.svg" },
  { title: "AI Virtual Assistant", image: "ai-assistant.svg" },
  { title: "Daily Event Updates", image: "hiring.svg" },
  { title: "Schedule System", image: "startup.svg" },
];

function Features() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute w-full whitespace-nowrap animate-marquee text-lg text-gray-500 font-bold">
        FEATURES · FEATURES · FEATURES · FEATURES · FEATURES
      </div>
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                index % 2 === 0 ? 'bg-white hover:shadow-lg' : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
              <img src={feature.image} alt={feature.title} className="w-full h-32 object-contain" />
              <button className="mt-4 flex items-center gap-2 hover:opacity-80 transition-opacity duration-300">
                Learn more
                <FaPlay className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
