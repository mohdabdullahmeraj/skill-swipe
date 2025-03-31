import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: "Skill Swipe made job hunting seamless! The AI-powered matching connected me with recruiters who valued my skills, and the leaderboard feature helped me stand out.",
    author: "John Smith",
    role: "BCA Graduate"
  },
  {
    text: "As a recruiter, finding top talent has never been easier. The AI-driven leaderboard helped us discover skilled candidates, making hiring more efficient and effective.",
    author: "Sarah Johnson",
    role: "HR Manager"
  },
  {
    text: "I love how the platform keeps me engaged with challenges and real-world job opportunities. It's not just about applying for jobs—it's about growing my skills.",
    author: "Mike Brown",
    role: "Software Developer"
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