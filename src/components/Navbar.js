import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link 
            to="/" 
            className="text-white font-bold hover:text-blue-300 transition-colors text-4xl"
          >
            Home
          </Link>
          <Link 
            to="/product" 
            className="text-white font-bold hover:text-blue-300 transition-colors text-4xl"
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className="text-white font-bold hover:text-blue-300 transition-colors text-4xl"
          >
            About Us
          </Link>
        </div>
        <Link 
          to="/cart" 
          className="text-white font-bold hover:text-blue-300 transition-colors text-4xl"
        >
         🛒 Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;