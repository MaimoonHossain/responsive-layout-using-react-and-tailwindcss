// Navbar.js
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
  const [animation, setAnimation] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const animationClass = isSidebarOpen
      ? '-translate-x-0'
      : 'translate-x-full';
    setAnimation(animationClass);
  }, [isSidebarOpen]);
  return (
    <div>
      <nav className='bg-[#0C0C0C] p-4 h-14 w-full '>
        <div
          className={`container mx-auto md:flex justify-center space-x-10 hidden`}
        >
          <a href='/#' className='text-white font-medium text-lg '>
            Home
          </a>
          <a href='/#' className='text-white font-medium text-lg'>
            About
          </a>
          <a href='/#' className='text-white font-medium text-lg'>
            Blog
          </a>
          <a href='/#' className='text-white font-medium text-lg'>
            Contact
          </a>
        </div>
      </nav>
      {isSidebarOpen && (
        <div
          className={`bg-[#ADADAD] text-black text-md w-64 block p-2 min-h-screen ${animation} fixed md:relative top-0 right-0 h-full overflow-y-auto transition-transform duration-500 ease-in-out md:translate-x-0 justify-center align-middle md:hidden`}
        >
          <div className='p-16 font-medium space-y-4 flex flex-col items-center'>
            <a href='/#'>Home</a>
            <a href='/#'>About</a>
            <a href='/#'>Blog</a>
            <a href='/#'>Contact</a>
          </div>
        </div>
      )}

      <button
        className='md:hidden absolute text-white focus:outline-none top-4 left-0 px-3'
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? 'Close X' : 'Menu ☰'}
      </button>
    </div>
  );
};

export default Navbar;
