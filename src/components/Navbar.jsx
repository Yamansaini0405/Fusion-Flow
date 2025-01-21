import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);
  

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav className="w-[80%] m-auto ">
      <div className="container mx-auto px- py-4 flex justify-between items-center gap-x-">
      <div
          className={`overflow-scroll scrollbar-hidden z-10 fixed top-0 left-0 h-full bg-black opacity-[0.9] text-white transition-transform duration-300 ease-in-out ${
            isMenu ? "translate-x-0" : "-translate-x-full"
          } md:w-[30%] w-[50%] shadow-lg`}
        >
          <h2 className=" text-2xl flex justify-end font-bold p-4 border-b border-gray-600">
            <RxCross2 onClick={() => setIsMenu(!isMenu)} />
          </h2>
          <ul className="p-4 space-y-2 text-center text-lg font-bold">
            <a to="/">
              <li className="block p-2 hover:text-[#374daf] rounded">Home</li>
            </a>
            <a to="/blog">
              <li className="block p-2 hover:text-[#3b86ff] rounded">stats</li>
            </a>
            <a to='/resources'>
              <li className="block p-2 hover:text-[#3b86ff] rounded">why us</li>
            </a>
            <a to='/contact'><li className="block p-2 hover:text-[#3b86ff] rounded">about us</li></a>
            
            
          </ul>
        </div>
        <div className="flex justify-center items-center md:gap-2 gap-1 ">
        <button
            onClick={handleMenu}
            className="text-white text-2xl outline-none md:hidden"
          >
            {isMenu ? "" : <RiMenu2Line />}
          </button>
          <a to="/" className="flex items-center">
            <h2 className='text-2xl font-bold text-white'>FusionFlow</h2>
          </a>
        </div>
        
        <div className="hidden md:flex space-x-16 font-semibold text-xl ">
          <a to="/about" className="text-white cursor-pointer  transition-transform transform hover:scale-125">Home</a>
          <a to="/features" className="text-white cursor-pointer  transition-transform transform hover:scale-125">stats</a>
          <a to="/pricing" className="text-white cursor-pointer  transition-transform transform hover:scale-125">why us?</a>
          <a to="/contact" className="text-white cursor-pointer  transition-transform transform hover:scale-125">About us</a>
        </div>
        <div className="flex space-x-4">
          <a to="/login">
            <button className="text-white hover:bg-gray-200 font-semibold py-2 px-4 rounded border-2 border-white">
              Login
            </button>
          </a>
          <a to="/get-started">
            <button className="bg-white text-[#16213E] font-semibold py-2 px-4 rounded text-lg ">
              Get Started
            </button>
          </a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;


