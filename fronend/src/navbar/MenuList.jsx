export const menuList = [
    {
      name: "Home",
      submenu: false,
      link: "/",
    },
    {
      name: "Projects",
      submenu: true,
      link: "/product",
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
    {
      name: "About Us", // If this is about the company or organization, consider updating the link
      submenu: false,
      link: "/about",  // Changed link to '/about' assuming that's the correct page
    },
    {
      name: "Contact",
      submenu: false,
      link: "/contact",
    },
    {
      name: "Sign Up",
      submenu: false,
      link: "/signup",
    },
    {
      name: "Login",
      submenu: false,
      link: "/login",
    },
    
  ];
  

  