import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DashboardNavbar = () => {
  const navigate = useNavigate();
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
    <header className='w-full sticky top-0 z-50 bg-red-400'>
         <div className='flex justify-between'>
            <ul>
            <li><Link to='/'>profile</Link></li>
            </ul>
             <button onClick={handleLogout}>
                
                 Logout
             </button>
         </div>

    </header>
 </>
  )
}

export default DashboardNavbar