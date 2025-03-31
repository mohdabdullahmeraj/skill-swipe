import React from "react";

function Mission() {
  return (
    <section className="container mx-auto px-6 py-16 ">
    <p className="text-xl font-normal">
  Empowering Students to <span className="text-[#D0171E] text-xl">Lead the Future</span>
</p>
    <div className="flex flex-col ">
      <h2 className="text-4xl mt-4 leading-snug text-left flex flex-col">
        <span className="inline-block ">Connecting students with top organizations,</span>
        <span className="inline-block ">offering a platform to showcase skills,</span>
        <span className="inline-block ">collaborate, and discover opportunities.</span>
      </h2>
    </div>
    <button className="mt-8 border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300">
      Learn More
    </button>
  </section>
  
  );
}

export default Mission;
