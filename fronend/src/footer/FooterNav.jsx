import React from "react";
import { quickLink,socialMediaLink,importantLink } from "./FooterList";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

const FooterNav = () => {
  return (
    <section>
      <footer className=" bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Loop through footer list and create links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {quickLink.map((item) => (
                  <li key={item.name}>
                    <span className="inline-block mr-2">{item.icon}</span><Link
                      to={item.link}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Important Links</h3>
              <ul className="space-y-2">
                {importantLink.map((item) => (
                  <li key={item.name}>
                   <span className="inline-block mr-2">{item.icon}</span><Link
                      to={item.link}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Social Media Link</h3>
              <ul className="space-y-2">
                {socialMediaLink.map((item) => (
                  <li key={item.name}>
                   <span className="inline-block mr-2">{item.icon}</span> <Link
                      to={item.link}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <div className="">
                <p>
                  <span className="inline-block mr-2 text-blue-800">
                    <FaPhoneAlt />
                  </span>
                  +919006532272
                </p>
                <p>
                  <span className="inline-block mr-2  text-blue-800">
                    <MdEmail />
                  </span>
                  raviranjan2505@gmail.com
                </p>
                <div className="flex space-x-2 items-start">
                  <div className=" text-blue-900 font-bold">
                    <CiLocationOn />
                  </div>
                  <div>
                    <p>Office No. 04, </p>
                    <p>Noida, sec-62,</p>
                    <p>Uttar Predesh, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Optional: Footer bottom text */}
      </footer>
      <div className="text-center text-gray-400 mb-2 p-3 bg-blue-700">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </section>
  );
};

export default FooterNav;
