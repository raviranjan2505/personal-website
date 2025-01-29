import { MdDashboardCustomize } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

import { MdOutlineAnalytics } from "react-icons/md";
import { SiGoogleadsense } from "react-icons/si";
export const userMenuList = [
    {
      icon:<MdDashboardCustomize />,
      name: "DashBoard",
      submenu: false,
      link: "/admin/admin-users",
    },
    {
      icon:<MdOutlineAnalytics />,
      name: "Analytics",
      submenu: true,
      link: "",
      submenus: [  // Fixed typo here from 'subMunus' to 'submenus'
        {
          name: "Project 1",
          link: "/admin/admin-users",
        },
        {
          name: "Project 2",
          link: "/project2",
        },
        {
          name: "Project 3",
          link: "/project3",
        },
        {
          name: "Project 4",
          link: "/project4",
        },
      ],
    },
    {
      icon:<SiGoogleadsense />,
      name: "Leads", // If this is about the company or organization, consider updating the link
      submenu: true,
      link: "/about", 
      submenus: [  // Fixed typo here from 'subMunus' to 'submenus'
        {
          name: "Project 1",
          link: "/project1",
        },
        {
          name: "Project 2",
          link: "/project2",
        },
        {
          name: "Project 3",
          link: "/project3",
        },
        {
          name: "Project 4",
          link: "/project4",
        },
      ], // Changed link to '/about' assuming that's the correct page
    },
    {
      icon:<FaRegUserCircle />,
      name: "Contact",
      submenu: true,
      link: "/contact",
      submenus: [  // Fixed typo here from 'subMunus' to 'submenus'
        {
          name: "Project 1",
          link: "/project1",
        },
        {
          name: "Project 2",
          link: "/project2",
        },
        {
          name: "Project 3",
          link: "/project3",
        },
        {
          name: "Project 4",
          link: "/project4",
        },
      ],
    },
 
    
  ];
  

  