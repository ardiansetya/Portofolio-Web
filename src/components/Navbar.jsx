import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-300 fixed shadow-md w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">MyPortfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#project" className="hover:text-white">
            Project
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <a
            href="#home"
            className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a
            href="#about"
            className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={() => setIsOpen(false)}>
            About
          </a>
          <a
            href="#project"
            className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={() => setIsOpen(false)}>
            Project
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
