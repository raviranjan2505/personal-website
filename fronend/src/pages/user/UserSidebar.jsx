import React, { useState } from "react";
import { userMenuList } from "./UserMenuList";
import { FaChevronLeft, FaChevronRight, FaBars} from "react-icons/fa"; // Arrow and Hamburger icons
import { Link } from "react-router-dom"; // Use Link for client-side navigation
import { IoClose } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const UserSidebar = () => {
  const [mainMenu, setMainMenu] = useState(""); // Store the active menu
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state for open/close
  const navigate = useNavigate();

  // Toggle the sidebar visibility
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleLogout = async (e) => {
    e.preventDefault();
    try{  
      const response = await axios.post("http://localhost:4000/user/logout",{},
      {withCredentials:true});
      console.log(response.data);
      localStorage.removeItem('token');
      navigate("/");
    }catch(error){
      console.log(error)
      alert(error.response.data.error)
    }
  }

  return (
    <>
      <div
        className={`min-h-screen admin-sidebar bg-gray-800 text-white h-full p-4 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={toggleSidebar}
            className="lg:block hidden text-white p-2 hover:bg-gray-600 rounded-lg"
          >
            {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-white p-2 hover:bg-gray-600 rounded-lg"
          >
            {isSidebarOpen? <IoClose /> :<FaBars />}
          </button>
        </div>

        <ul>

          
          {userMenuList.map((menu, index) => (
            <li key={index} className="relative">
              <Link
                to={menu.link}
                className="block p-2 hover:bg-gray-600 rounded-lg"
                onClick={() => {
                  // Prevent the default link behavior and toggle the submenu visibility
                 
                  setMainMenu(mainMenu !== menu.name ? menu.name : ""); // Toggle submenu
                }}
              >
                <div className="flex items-center">
                  {/* Menu Icon */}
                  {menu.icon && (
                    <span className="mr-2">{menu.icon}</span>
                  )}
                  {/* Menu Name */}
                  <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
                    {menu.name}
                  </span>
                </div>
              </Link>

              {/* Submenu */}
              {menu.submenu && menu.name === mainMenu && isSidebarOpen && (
                <ul className="bg-gray-700 p-2 mt-2 rounded ml-4">
                  {menu.submenus.map((submenuLink, subindx) => (
                    <li key={subindx}>
                      <Link
                        to={submenuLink.link || "/"}
                        className="block p-2 hover:bg-gray-600 rounded-lg"
                      >
                        {submenuLink.name}
                      </Link>
                    </li>
                    
                  ))}
                 
                </ul>
              )}
            </li>
          ))}
           <li><Link  className="block p-2 hover:bg-gray-600 rounded-lg" onClick={handleLogout}>
           <div className="flex items-center">
           <span className="mr-2"><TbLogout2 /></span>
           <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
           Logout
            </span>
           </div>
          
           </Link>
           </li>
        </ul>
      </div>
    </>
  );
};
