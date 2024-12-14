import React from "react";

const Hero = () => {
  return (
    <section className="h-screen bg-gray-900 text-gray-300 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Welcome To {' '}
          <span className="text-indigo-500">My Portfolio</span>
        </h1>
       
        <a
          href="#projects"
          className="inline-block bg-indigo-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300">
          See My Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
