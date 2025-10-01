import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Brand Name */}
      <div className="flex items-center space-x-2 text-2xl font-bold tracking-wide">
        <span>MovieBooking</span>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-8 text-lg">
        <li>
          <Link to="/" className="hover:text-yellow-400">Home</Link>
        </li>
        <li>
          <Link to="/movies" className="hover:text-yellow-400">Movies</Link>
        </li>
        <li>
          <Link to="/theaters" className="hover:text-yellow-400">Theaters</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </li>
      </ul>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <Link
          to="/login"
          className="px-4 py-2 border border-white rounded-md hover:bg-yellow-400 hover:text-black transition">Login
        </Link>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-6 py-6 md:hidden shadow-lg z-40">
          <Link to="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/movies" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            Movies
          </Link>
          <Link to="/theaters" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            Theaters
          </Link>
          <Link to="/contact" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 border border-white rounded-md hover:bg-yellow-400 hover:text-black transition"
            onClick={() => setIsOpen(false)}>Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
