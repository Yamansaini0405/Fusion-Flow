import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#0d1630] text-white md:py-10 py-2 px-4 md:px-8 lg:px-20 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:py-8 py-4">
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl md:text-3xl font-bold text-white m-auto w-[90%] md:w-[100%] ">
            <span className="text-white ">Fusion</span>
            Flow
          </h3>
          <p className="md:text-md text-sm mt-1 m-auto w-[90%] md:w-[100%]">
            The world where you find all like minded people.
          </p>
        </div>
        <div className="mb-8 md:mb-0 md:m-auto px-4 md:px-0">
          <h4 className="md:text-lg text-md font-bold md:mb-4 mb-1">JOIN US</h4>
          <p className="text-sm">DIRECT TO YOUR INBOX</p>
          <div className="flex items-center mt-4">
            <input
              type="email"
              placeholder="Your e-mail"
              className="bg-[#151515] border border-[#333333] text-sm px-4 py-[0.35rem] rounded-l-md flex-1 focus:outline-none"
            />
            <button className="bg text-white px-6 py-1 rounded-r-md font-medium">
              JOIN
            </button>
          </div>
        </div>
        <div className="flex space-x-12 px-4 md:px-0">
          <div className="flex flex-col ">
            <div>
              <h5 className="font-semibold text-md ">FOLLOW US</h5>
            </div>

            <div className="flex  items-center md:gap-4 gap-2 mt-2">
              {" "}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl md:text-2xl hover:text-pink-500" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-xl md:text-2xl hover:text-blue-500" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-xl md:text-2xl hover:text-blue-300" />
              </a>
            </div>
          </div>
          <div>
            <div>
              <h5 className="font-semibold text-md">CALL US</h5>
            </div>
            <div className="mt-2">
              <p>+91 8941092513</p>
            </div>
          </div>
          
        </div>
      </div>
      <hr className="md:my-8 my-2" />
      <div className="container w-[90%] text-center mx-auto md:mt-8 mt-4 flex flex-col md:flex-row justify-center items-center text-sm md:space-x-8 pb-4 md:pb-0">
        <p>
          &copy; 2024 Fusion Flow, India. All Rights Reserved.
        </p>
        <div className="flex md:space-x-4 space-x-2 mt-2 md:mt-0 text-start ">
          <a href="/" className="hover:text-[#6db33f]">
            PRIVACY POLICY
          </a>
          <a href="/" className="hover:text-[#6db33f]">
            TERMS AND CONDITIONS
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
