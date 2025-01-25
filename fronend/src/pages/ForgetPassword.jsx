import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/user/forgot-password", {
        email,
      });
      console.log(response);
      alert(response.data.message);
      setTimeout(() =>{
        navigate("/");
      },2000)
      
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  }
  return (
    <>
    <section className='h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center flex items-center'>
    <div className='fixed left-[10px] top-[10px]'>
      <Link to="/" className='bg-blue-500 text-white px-[10px] py-[5px] hover:bg-blue-950'>Home</Link>
    </div>
    <div className="w-100 md: w-[500px] mx-auto bg-gray-500 mt-[100px] px-4 py-5">
     <form className="space-y-5 text-center" onSubmit={handleSubmit}>
     <h1 className="font-bold text-[24px]">Forget Password</h1>
       <div>
         <input type="email" placeholder="Email" className="w-[100%] px-3 py-1" onChange={(e)=>setEmail(e.target.value)}/>
       </div>
       <div>
         <button type="submit" className="w-[100%] px-3 py-1 bg-blue-700 hover:bg-blue-900">Send Otp</button>
       </div>
     </form>
     
   
   </div>
   </section>
    </>
  )
}

export default ForgetPassword