import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: "Skill Swipe has transformed hackathons for us. The AI-powered team formation helped us match with the perfect teammates based on skills. The gamified experience made the whole process fun!",
    author: "John Smith",
    role: "College student (BCA)",
  },
  {
    text: "As a startup, we found exceptional talent through Skill Swipe. The platform's AI matching system helped us connect with skilled students who perfectly fit our team's needs.",
    author: "Sarah Johnson",
    role: "Startup Founder",
  },
  {
    text: "The daily missions keep me engaged and learning new skills. It’s amazing how the platform combines learning with real-world opportunities.",
    author: "Mike Brown",
    role: "Student Developer",
  },
];

function Testimonials() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          WHAT PEOPLE ARE SAYING · WHAT PEOPLE ARE SAYING · WHAT PEOPLE ARE SAYING ·
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="cursor-grab"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-2xl mx-auto text-center p-8 hover:bg-gray-900 rounded-xl shadow-md transition-all duration-300">
                <p className="text-lg mb-4">{testimonial.text}</p>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;