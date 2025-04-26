import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Live score", path: "/" },
    { name: "Schedule", path: "/schedule" },
    { name: "Squad", path: "/squad" },
    { name: "Top", path: "/top" },
    { name: "Venues", path: "/venues" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sticky top-0 z-50 bg-[#101828] shadow-md'>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <Link className="flex items-center space-x-2" to="/">
            {/* <div className='h-[40px] w-[40px] bg-orange-300 rounded-full flex items-center justify-center'>
              <span className='text-[20px] text-white font-bold'>IPL</span>
            </div> */}
       <span className="text-orange-600 font-extrabold text-2xl tracking-wide drop-shadow-sm">WicketWatch</span>

          </Link>

          {/* Desktop Links */}
          <div className='hidden md:flex space-x-6'>
            {links.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className="text-sm text-[#E3B23C] font-medium transition-colors hover:text-orange-600"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100'
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className='md:hidden mt-2 flex flex-col space-y-2'>
            {links.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                className="text-lg text-black font-bold transition-color px-2 py-1 hover:bg-orange-100 rounded"
                onClick={() => setIsOpen(false)} // closes menu on click
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
