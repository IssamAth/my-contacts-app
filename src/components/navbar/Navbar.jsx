import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 h-16">
      <div className=" mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-lg">My Contacts App</div>

       

        
      </div>
    </nav>
  );
};

export default Navbar;