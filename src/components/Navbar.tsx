import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-[#DDE7F0] p-4 font-semibold relative'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        
        {/* --- Left Side: Logo --- */}
        <div className='flex items-center'>
          <img src="./podiaLogo.png" alt="logo" />
        </div>

        {/* --- Center: Desktop Navigation Links --- */}
        {/* Hidden on mobile (default), visible as a flex container on medium screens and up (md:) */}
        <div className='hidden md:flex items-center gap-6 text-base'>
            <a href="#" className='hover:text-blue-600'>Website</a>
            <a href="#" className='hover:text-blue-600'>Email</a>
            <a href="#" className='hover:text-blue-600'>Online store</a>
            <a href="#" className='hover:text-blue-600'>Switch to Podia</a>
            <a href="#" className='hover:text-blue-600'>Pricing</a>
        </div>

        {/* --- Right Side: Buttons and Mobile Menu Icon --- */}
        <div className='flex items-center gap-4'>
            {/* Login Button - Hidden on mobile, visible on medium screens and up */}
            <a href="#" className='hidden md:block hover:text-blue-600'>Login</a>
            
            {/* Sign Up Button - Always Visible */}
            <a href="#" className='bg-black text-white text-sm py-2 px-4 rounded-full hover:bg-gray-800 transition-colors'>
                Sign up free
            </a>

            {/* Hamburger Menu Icon - Only visible on mobile (hidden on medium screens and up) */}
            <button onClick={toggleMenu} className='md:hidden z-50'>
                {!isMenuOpen && <FiMenu size={28} />}
            </button>
        </div>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      {/* This part remains the same, as its visibility is controlled by state */}
      <div 
        className={`
          fixed top-0 left-0 w-full h-full bg-white z-40 
          transform transition-transform duration-300 ease-in-out
          flex flex-col 
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className='p-4 flex justify-between items-center border-b'>
            <h1 className='text-3xl font-bold'>podia</h1>
            <button onClick={toggleMenu}>
                <FiX size={28} />
            </button>
        </div>
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