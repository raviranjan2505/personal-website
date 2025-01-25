import React, { useState } from "react";
import { menuList } from "./MenuList";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu toggle
  const [mainMenu, setMainMenu] = useState(false); // For toggling product submenu on mobile
  const location = useLocation();

  // Function to handle active link styling
  const isActiveLink = (path) => {
    if(location.pathname === path){
      return true;
    }
   
    console.log(path)
    console.log("hello")
    console.log(location.pathname)
  }
 

  return (
    <nav className="bg-gray-800 p-4">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Logo</div>
        <ul className="flex space-x-6 text-white">
          {menuList.map((menu, index) => (
            <li key={index} className="relative group">
              <Link
                to={menu.link || "/"}
                className={`hover:text-gray-400 ${isActiveLink(menu.link) ? 'text-gray-300 bg-red-950' : ''}`} // Highlight active link
              >
                {menu.name}
              </Link>

              {/* Show submenu for "Projects" on hover with transition */}
              {menu.submenu && (
                <ul className="absolute top-[40px] left-0 opacity-0 invisible bg-white group-hover:opacity-100 group-hover:visible transition-all duration-1000 rounded shadow-md z-50 transform group-hover:translate-y-2 w-[100px]">
                  
                    <div className="w-4 h-4 left-3 absolute mt-1 top-[-10px] bg-white rotate-45 z-[-1]"></div>
                 
                  {menu.submenus.map((submenuLink, subindx) => (
                    <li key={subindx} className="group text-black">
                      <Link
                        to={submenuLink.link || "/"}
                        className={`block p-2 hover:bg-gray-600 hover:text-white ${isActiveLink(submenuLink.link) ? 'text-gray-300 bg-red-950' : ''}`}
                      >
                        {submenuLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">Logo</div>
        {/* Mobile Menu Icon */}
        <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <FaTimes className="text-white text-3xl" />
          ) : (
            <FaBars className="text-white text-3xl" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <ul>
            {menuList.map((menu, index) => (
              <li key={index} className="relative mb-4">
                <Link
                  to={menu.link || "/"}
                  className="block p-2 hover:bg-gray-600"
                  onClick={() => {
                    // Close menu on link click
                    mainMenu !== menu.name ? setMainMenu(menu.name) : setMainMenu("");
                  }}
                >
                  {menu.name}
                </Link>

                {/* Mobile Submenu for Products (toggle visibility on click) */}
                {menu.submenu && menu.name === mainMenu && (
                  <ul className="bg-gray-700 p-2 mt-2 rounded">
                    {menu.submenus.map((submenuLink, subindx) => (
                      <li key={subindx}>
                        <Link
                          to={submenuLink.link || "/"}
                          className="block p-2 hover:bg-gray-600"
                          onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu on submenu item click
                        >
                          {submenuLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
