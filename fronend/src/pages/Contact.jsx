import React, { useState } from "react";
import contacmain from "../assets/contac-about/contactus.jpg";
import contactSub from "../assets/contac-about/prof-1.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/user/contact-form", {
        fullName,
        email,
        phone,
        country,
        project,
        message,
      });
      console.log(response.data); // Log the response from the server
      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Error submitting the form! Please try again.");
    }
  };

  return (
    <section className="bg-gray-200 bg-cover pb-8">
      <div>
        <img src={contacmain} alt="contact banner" />
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-5 px-5 items-center container mx-auto">
        <div className="left-part space-y-5 basis-[50%]">
          <div>
            <div className="text-[40px] text-blue-900 font-bold tracking-wide leading-[40px]">
              <p>
                <span className="bg-gradient-to-r from-[#4069f0]  to-[#00f7ff] text-transparent bg-clip-text text-[40px] mr-[10px]">
                  Connect
                </span>
                With Our
              </p>
              <p> Team Of Expert</p>
            </div>
          </div>
          <div>
            <p className="text-blue-950 text-[24px] font-sans leading-[30px]">
              Contact Our team of excellence-driven experts today to bring your
              project to life.
            </p>
          </div>
          <div className="flex justify-between flex-col md:flex-row md:space-x-4">
            <div className="flex space-x-2 items-start">
              <div className="text-blue-900 font-bold">
                <FaPhoneAlt />
              </div>
              <p>+919006532272</p>
            </div>
            <div className="flex space-x-2 items-start">
              <div className="text-blue-900 font-bold">
                <MdEmail />
              </div>
              <p>raviranjan2505@gmail.com</p>
            </div>
            <div className="flex space-x-2 items-start">
              <div className="text-blue-900 font-bold">
                <CiLocationOn />
              </div>
              <div>
                <p>Office No. 04,</p>
                <p>Noida, sec-62,</p>
                <p>Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
          <div className="bg-white flex items-center px-5">
            <div className="basis-[60%]">
              <div className="text-2xl font-bold text-blue-900 tracking-wide leading-[25px]">
                <p>Want to join our</p>
                <p>talented team?</p>
              </div>
              <p className="font-semibold mt-3">Follow us on LinkedIn</p>
              <a href="#" className="text-blue-700 align-middle">
                <div className="inline-block mr-2">
                  <FaLinkedin />
                </div>
                linkedin.com
              </a>
            </div>
            <div>
              <img src={contactSub} alt="contact image" width="200" />
            </div>
          </div>
        </div>
        <div className="right-part bg-blue-950 mt-8 md:mt-0">
          <form className="h-[50%]" onSubmit={handleSubmit}>
            <div className="p-5 space-y-5">
              <div className="md:flex md:space-x-3">
                <div>
                  <label className="block text-white mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-white mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="md:flex md:space-x-3">
                <div>
                  <label className="block text-white mb-1">Phone Number</label>
                  <input
                    inputMode="numeric"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="w-[100%]">
                  <label className="block text-white mb-1">Location</label>
                  <select
                    className="w-[100%]"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">Select Location</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Dubai">Dubai</option>
                  </select>
                </div>
              </div>
              <div className="w-[100%]">
                <label className="block text-white mb-1">Select Your Project Type</label>
                <select
                  className="w-[100%]"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                >
                  <option value="">Select Project</option>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Employee Management">Employee Management</option>
                  <option value="School Management">School Management</option>
                  <option value="Hospital Management">Hospital Management</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="w-[100%]">
                <label className="block text-white mb-1">Tell us about your Project</label>
                <textarea
                  className="w-[100%]"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div>
                <button className="bg-blue-700 hover:bg-blue-900 text-white py-1 px-5 align-middle rounded-md">
                  Submit
                  <span className="inline-block align-middle ml-1">
                    <FaLongArrowAltRight />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
