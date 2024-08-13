import React from 'react';
import { NavLink } from 'react-router-dom';
import { Pi } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Pi className="h-8 w-8" />
          <span className="text-2xl font-bold">Pythagora</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><NavLink to="/" className="hover:text-indigo-200 transition-colors">Home</NavLink></li>
            <li><NavLink to="/theorems" className="hover:text-indigo-200 transition-colors">Theorems</NavLink></li>
            <li><NavLink to="/philosophy" className="hover:text-indigo-200 transition-colors">Philosophy</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-indigo-200 transition-colors">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;