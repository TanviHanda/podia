// src/components/Navbar.tsx

import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // The main nav container. `relative` is important for the z-index to work.
    <nav className='bg-[#DDE7F0] p-4 font-semibold relative'>
      {/* This div is the always-visible part of the navbar */}
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        
        {/* 1. Logo */}
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold z-50'>podia</h1>
        </div>

        {/* 2. Right side container for Sign Up and Menu Icon */}
        <div className='flex items-center gap-4'>
          {/* Sign Up Button - Always Visible */}
          <a href="#" className='bg-black text-white text-sm py-2 px-4 rounded-full hover:bg-gray-800 transition-colors'>
            Sign up free
          </a>
          
          {/* Hamburger Menu Icon - Always Visible */}
          {/* z-50 ensures it's above the overlay when it slides in */}
          <button onClick={toggleMenu} className='z-50'>
            {/* The icon is hidden when the menu is open because the close icon will be inside the menu */}
            {!isMenuOpen && <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* 3. Mobile Menu Overlay - Shows when isMenuOpen is true */}
      <div 
        className={`
          fixed top-0 left-0 w-full h-full bg-white z-40 
          transform transition-transform duration-300 ease-in-out
          flex flex-col 
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header inside the overlay with logo and close button */}
        <div className='p-4 flex justify-between items-center border-b'>
            <h1 className='text-3xl font-bold'>podia</h1>
            <button onClick={toggleMenu}>
                <FiX size={28} />
            </button>
        </div>

        {/* Navigation links inside the overlay */}
        <div className='flex flex-col items-start gap-6 p-8 text-lg'>
            <a href="#" className='hover:text-blue-600'>Website</a>
            <a href="#" className='hover:text-blue-600'>Email</a>
            <a href="#" className='hover:text-blue-600'>Online Store</a>
            <a href="#" className='hover:text-blue-600'>Switch to Podia</a>
            <a href="#" className='hover:text-blue-600'>Pricing</a>
            <hr className='w-full border-gray-300' />
            <a href="#" className='hover:text-blue-600'>Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;