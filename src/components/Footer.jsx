import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Pythagora's Legacy. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-400">
          "All is number." - Pythagoras
        </p>
      </div>
    </footer>
  );
};

export default Footer;