import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { resetPasswordOtp } = useParams();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:4000/user/reset-password/${resetPasswordOtp}`, { password });
      console.log(response.data.message); // Check the response here
      setError(""); // Reset error message if successful reset
      
      setMessage(response.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
        setError(`Error: ${error.response.data.message || "Something went wrong."}`);
      } 
    
  };

  return (
    <>
      <div className="w-2/5 mx-auto bg-gray-500 mt-[100px] px-4 py-5">
        <form className="space-y-5 text-center" onSubmit={handleResetPassword}>
          <h1 className="font-bold text-[24px]">Reset Password</h1>
          <div>
            <input
              type="password"
              placeholder="New Password"
              className="w-[100%] px-3 py-1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-[100%] px-3 py-1"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="w-[100%] px-3 py-1 bg-blue-700 hover:bg-blue-900">
              Submit
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {message && <p className="text-green-500">{message}</p>}
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
