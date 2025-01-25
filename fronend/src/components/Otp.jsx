import React, { useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Otp = () => {
  // State to store values of each OTP input (initially empty)
  const [otp, setOtp] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    // Move focus to the next input if the current input is filled
    if (e.target.value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };
useEffect(() => {
  const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
},[])
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Join OTP array into a single string
    const otpString = otp.join('');

    // Validate OTP length
    if (otpString.length !== 6) {
      setError('Please enter a complete OTP.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Make API call to the backend using axios
      const response = await axios.post('http://localhost:4000/user/verify', {
        otp: otpString
      });

      // Handle API response
     console.log(response.data.message);
      setMessage(response.data.message);
      setTimeout(()=>{
        navigate("/login");
      },2000)
      
    } catch (err) {
      setError('An error occurred while verifying OTP.');
      console.error(err.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  // Create 6 input fields for OTP
  const inputs = Array.from({ length: 6 }).map((_, index) => (
    <input
      key={index}
      id={`otp-input-${index}`}
      inputMode="numeric"
      value={otp[index] || ''}
      onChange={(e) => handleChange(e, index)}
      maxLength="1"
      className="w-[30px] h-[30px] border appearance-none text-center"
    />
  ));

  return (
    <>
    <section className='h-screen bg-Hero bg-cover
          font-[Poppins] md:bg-top bg-center flex items-center'>
        <div className='fixed left-[10px] top-[10px]'>
          <Link to="/" className='bg-blue-500 text-white px-[10px] py-[5px] hover:bg-blue-950'>Home</Link>
        </div>
      <div className='w-[300px] mx-auto bg-white p-[20px] '>
        <h2 className='mb-[15px] text-center text-2xl'>Please Enter OTP</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-[15px]">
            {inputs}
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {message && <p className="text-green-500">{message}</p>}
          <button type="submit" disabled={isLoading} className='mb-[15px] bg-blue-600 text-center hover:bg-blue-900 w-[100%] text-white'>
            {isLoading ? 'Verifying...' : 'Submit'}
          </button>
        </form>
      </div>
      </section>
    </>
  );
};

export default Otp;
