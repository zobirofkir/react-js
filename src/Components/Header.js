import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-black w-full xl:p-5 p-2">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="text-white font-bold text-xl">
            <Link to={'/'}>Home</Link>
          </div>
          <div className="block lg:hidden">
            <button className="text-white focus:outline-none" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex space-x-10">
            <Link to={"/about"} className='text-white font-bold text-xl'>About</Link>
            <Link to={'/contact'} className='text-white font-bold text-xl'>Contact</Link>
            <a href="#" className="text-white font-bold text-xl">Login</a>
            <a href="#" className="text-white font-bold text-xl">Register</a>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden">
            <a href="" className="block text-white font-bold text-xl px-4 py-2">About</a>
            <a href="" className="block text-white font-bold text-xl px-4 py-2">Contact</a>
            <a href="" className="block text-white font-bold text-xl px-4 py-2">Login</a>
            <a href="" className="block text-white font-bold text-xl px-4 py-2">Register</a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
