import React, { useState } from "react";

function Navbar({ setCurrentPage }) {
  const [openMenu, setOpenMenu] = useState(false);
  
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleNavigation = (page) => {
    console.log('Navegando para:', page);
    setCurrentPage(page);
    setOpenMenu(false); // Fecha o menu mobile
  };

  return (
    <nav className="bg-[#021526] p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">MD.</div>
        
        {/* Menu Desktop */}
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <button 
                onClick={() => handleNavigation('home')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('cv')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Curriculum Vitae
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('contact')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Contact
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('blog')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Blog
              </button>
            </li>
          </ul>
        </div>

        {/* Botão Hamburger */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          openMenu ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col mt-4 space-y-2 pt-2">
          <li>
            <button 
              onClick={() => handleNavigation('home')}
              className="block text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors w-full text-left"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavigation('cv')}
              className="block text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors w-full text-left"
            >
              Curriculum Vitae
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavigation('contact')}
              className="block text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors w-full text-left"
            >
              Contact
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavigation('blog')}
              className="block text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors w-full text-left"
            >
              Blog
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
