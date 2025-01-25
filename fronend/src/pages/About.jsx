import React from "react";
import aboutUs from "../assets/contac-about/ab.jpg";
import webdev from "../assets/webdev/webdeb.png";

const About = () => {
  return (
    <>
      <section className="bg-gray-200 bg-cover">
        <div>
          <img src={aboutUs} alt="contact banner" />
        </div>

        <div className="wrapper p-10 container mx-auto px-6">
          <div className="md:flex justify-between gap-6">
            <div className="md:w-1/2">
              <img src={webdev} alt="about-us" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold text-blue-900">About Us</h1>
              <p>
                At [Your Company Name], we are passionate about crafting
                innovative software solutions that drive success for businesses
                and empower individuals. With a focus on cutting-edge
                technologies, agile methodologies, and user-centric design, we
                deliver high-quality applications that meet the ever-evolving
                needs of the digital world. Our team of experienced developers,
                designers, and engineers work collaboratively to bring ideas to
                life, offering custom software development services that align
                with your business goals. Whether you need a mobile app, web
                solution, or enterprise software, we have the expertise and
                dedication to turn your vision into reality. We believe that
                technology should not only be functional but also intuitive and
                engaging. That’s why we place a strong emphasis on creating
                seamless, scalable, and secure applications that enhance user
                experience while driving performance and efficiency. At the
                heart of our company is a commitment to continuous learning and
                improvement. We stay ahead of industry trends to deliver
                innovative solutions that are both practical and
                forward-thinking. We are dedicated to providing exceptional
                service and building long-lasting relationships with our
                clients, ensuring that every project is a success. Let us help
                you navigate the world of technology and achieve your business
                objectives with custom software solutions designed just for you.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper p-10 bg-[#eee3b444] container mx-auto px-6">
          <div>
            <h1 className="text-5xl font-bold text-blue-900">
              Mission & Vision
            </h1>
            <p>
              heart of our company is a commitment to continuous learning and
              improvement. We stay ahead of industry trends to deliver
              innovative solutions that are both practical and forward-thinking.
              We are dedicated to providing exceptional service and building
              long-lasting relationships with our clients, ensuring that every
              project is a success. Let us help you navigate the world of
              technology and achieve your business objectives with custom
              software solutions designed just for you.
            </p>
          </div>
          <div className="md:flex justify-center gap-6 mt-10">
            <div className=" lg:w-1/2 w-full bg-white rounded-lg shadow-lg p-5  mt-5 md:mt-0 text-center">
              <img
                src={webdev}
                alt="about-us"
                className="w-full h-48 object-cover rounded-lg mb-4 "
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Vision
              </h2>
              <p className="text-gray-600">
                Forward-thinking. We are dedicated to providing exceptional
                service and building long-lasting relationships with our
                clients, ensuring that every project is a success. Let us help
                you navigate the world of technology and achieve your business
                objectives with custom software solutions designed just for you.
              </p>
            </div>

            <div className="lg:w-1/2 w-full  bg-white rounded-lg shadow-lg p-5 mt-5 md:mt-0">
              <img
                src={webdev}
                alt="about-us"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                Mission
              </h2>
              <p className="text-gray-600">
                Forward-thinking. We are dedicated to providing exceptional
                service and building long-lasting relationships with our
                clients, ensuring that every project is a success. Let us help
                you navigate the world of technology and achieve your business
                objectives with custom software solutions designed just for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
