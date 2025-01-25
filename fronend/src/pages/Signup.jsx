import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
   const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  console.log(email)
   console.log(username)
   console.log(gender)
   console.log(password)
  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(email)
   console.log(username)
   console.log(gender)
   console.log(password)
    try {
      const response = await axios.post("http://localhost:4000/user/signup", {
        email,
        username,
        gender,
        password,
      });
      console.log(response.newUser);
     alert(response.data.message)
     localStorage.setItem('token', response.data.token);
     
      console.log("Response:", response.newUser); 
      setTimeout(() =>{
        navigate("/otp")
      },2000);
      
       
    } catch (error) {
      console.log(error.response.data.message);
      console.log(error.response.data.error)
       alert(error.response.data.message);
       alert(error.response.data.error);
    }
  };


  return (
    <>
    <section className='h-screen bg-Hero bg-cover
          font-[Poppins] md:bg-top bg-center flex items-center'>
        <div className='fixed left-[10px] top-[10px]'>
          <Link to="/" className='bg-blue-500 text-white px-[10px] py-[5px] hover:bg-blue-950'>Home</Link>
        </div>
    <div className="w-100 md: w-[500px] mx-auto bg-gray-500 mt-[100px] px-4 py-5">
     <form className="space-y-5 text-center" onSubmit={handleSubmit}>
     <h1 className="font-bold text-[24px]">Registration Form</h1>
       <div>
         <input type="email" placeholder="Email" className="w-[100%] px-3 py-1" onChange={(e)=>setEmail(e.target.value)}/>
       </div>
       <div>
         <input type="text" placeholder="Username"  className="w-[100%] px-3 py-1" onChange={(e)=>setUsername(e.target.value)}/>
       </div>
       <div>
         <select className="w-[100%] px-3 py-1" onChange={(e)=>setGender(e.target.value)}>
         <option value="" disabled selected>Select Gender</option>
           <option value="male">Male</option>
           <option value="female">Female</option>
           <option value="other">Other</option>
         </select>
       </div>
       <div>
         <input type="password" placeholder="Password" className="w-[100%] px-3 py-1" onChange={(e)=>setPassword(e.target.value)}/>
       </div>
       <div>
         <button type="submit" className="w-[100%] px-3 py-1 text-white bg-blue-700 hover:bg-blue-900">Signup</button>
       </div>
     </form>
     <p>
       Already have an account? <Link to="/login" className="underline">Login</Link>
     </p>
    
   </div>
   </section>
    </>
    
  );
};

export default Signup;
