import React from "react";

const About = () => {
  return (
    <section className="bg-gray-800 text-gray-300 py-16 rounded-xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Bagian Foto */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://via.placeholder.com/400"
            alt="About Me"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Bagian Teks */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            I am an undergraduate student and a passionate <br />
            <span className="text-indigo-500 font-semibold">
              Fullstack Developer Enthusiast
            </span>
            .
          </p>
          <p className="text-gray-400">
            I enjoy building interactive, user-friendly web applications and
            exploring new technologies in the world of software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
