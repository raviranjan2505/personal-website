import React,{useEffect,useState} from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

const [username, setUsername] = useState("");
const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
    const userdetails = async()=>{
      try{
        const response = await axios.get("http://localhost:4000/user/dashboard",
          { withCredentials: true }
        );
        
        setUsername(response.data.user.username);
       }catch(error){
        console.log(error);
        alert(error.response.data.error)
       }
    }
   userdetails();
  }, [])
  const token = localStorage.getItem('token');
  return (
    <>
    <div>

    {<DashboardNavbar />}
    <h1>Welcome {username}</h1>
    </div>
   
  
    </>
    
  )
}

export default Dashboard