// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   console.log(email)
//   console.log(password)
//   const handleLogin = async(e) => {
//     e.preventDefault();
//     console.log({ email, password });
//     try{
//       const response = await axios.post("http://localhost:4000/user/login", {
//         email,
//         password,
//       },
//       {
//         withCredentials: true,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
      
//       console.log(response.data)
//       localStorage.setItem('token', response.data.token);
//       setTimeout(() => {
//         navigate("/dashboard") 
//       }, 2000);
       
//       alert(response.data.message)
//     }catch(error){
//       console.log(error.response.data.error);
//       alert(error.response.data.error)
//     }
//   }
//   return (
//     <>
//     <section className='h-screen bg-Hero bg-cover
//       font-[Poppins] md:bg-top bg-center flex items-center'>
//     <div className='fixed left-[10px] top-[10px]'>
//       <Link to="/" className='bg-blue-500 text-white px-[10px] py-[5px] hover:bg-blue-950'>Home</Link>
//     </div>
//     <div className="w-100 md: w-[500px] mx-auto bg-gray-500 px-4 py-5">
//          <form className="space-y-5 text-center" onSubmit={handleLogin} >
//          <h1 className="font-bold text-[24px]">Login Form</h1>
//            <div>
//              <input type="email" placeholder="Email/user" className="w-[100%] px-3 py-1" onChange={(e)=>setEmail(e.target.value)}/>
//            </div>
//            <div>
//              <input type="password" placeholder="Password" className="w-[100%] px-3 py-1" onChange={(e)=>setPassword(e.target.value)}/>
//            </div>
//            <div>
//              <button type="submit" className="w-[100%] px-3 py-1 bg-blue-700 hover:bg-blue-900">Login</button>
//            </div>
//          </form>
//          <p>
//            Don't have an account? <Link to="/signup" className='underline'>Signup</Link>
//          </p>
//          <p>
//            Forgot your password? <Link to="/forgot-password" className='underline'>Forget Password</Link>
//          </p>
//        </div>

//     </section>
//     </>
//   )
// }

// export default Login


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({ usernameOrEmail, password });

    try {
      const response = await axios.post(
        'http://localhost:4000/user/login',
        {
          usernameOrEmail, // Send this as the login identifier
          password,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response)
      localStorage.setItem('token', response.data.token);
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);

      alert(response.data.message);
      console.log("hello");
    } catch (error) {
      console.log(error.response.data.error);
      alert(error.response.data.error);
    }
  };

  return (
    <section className="h-screen bg-Hero bg-cover font-[Poppins] md:bg-top bg-center flex items-center">
      <div className="fixed left-[10px] top-[10px]">
        <Link to="/" className="bg-blue-500 text-white px-[10px] py-[5px] hover:bg-blue-950">
          Home
        </Link>
      </div>
      <div className="w-100 md:w-[500px] mx-auto bg-gray-500 px-4 py-5">
        <form className="space-y-5 text-center" onSubmit={handleLogin}>
          <h1 className="font-bold text-[24px]">Login Form</h1>
          <div>
            <input
              type="text"
              placeholder="Email or Username"
              className="w-[100%] px-3 py-1"
              onChange={(e) => setUsernameOrEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-[100%] px-3 py-1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="w-[100%] px-3 py-1 bg-blue-700 hover:bg-blue-900">
              Login
            </button>
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/signup" className="underline">Signup</Link>
        </p>
        <p>
          Forgot your password? <Link to="/forgot-password" className="underline">Forget Password</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
