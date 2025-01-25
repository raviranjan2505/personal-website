import React from "react";

import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Navbar } from "./navbar/Navbar";
import { useLocation } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ForgetPassword from './pages/ForgetPassword';
import Otp from './components/Otp';
import ResetPassword from './pages/ResetPassword';
import FooterNav from "./footer/FooterNav";

function App() {
  const token = localStorage.getItem('token');
  const location = useLocation();
      const  hideNavbar= ["/signup", "/login", "/logout","/forgot-password","/otp"].includes(location.pathname);
  return (
    <>
      {hideNavbar ? "" : <Navbar />}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset-password/:resetPasswordOtp" element={<ResetPassword /> } />
      </Routes>
      {hideNavbar ? "" : <FooterNav />}
      </>
     
  
  );
}

export default App;
