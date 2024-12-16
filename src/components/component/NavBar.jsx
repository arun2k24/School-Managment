import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700  text-white p-4 shadow-lg w-screen flex flex-wrap justify-between items-center  ">
      <h2 className='font-bold text-white text-lg md:text-2xl'>RayanInternational School</h2>
      <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 lg:space-x-8 text-sm md:text-lg">
        <li>
          <Link to="/" className="text-white hover:text-orange-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/academics" className="text-white hover:text-orange-300">
            Academics
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="text-white hover:text-orange-300">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-orange-300">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="text-white hover:text-orange-300">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:text-orange-300">
           Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="text-white hover:text-orange-300">
           Register
          </Link>
        </li>
       
        
       
        
      </ul>
    </nav>
  );
}

export default Navbar;