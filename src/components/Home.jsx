import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";


import ImgRight from '../assets/image-right.webp'
import ImgLeft from '../assets/image-left.webp'
import Slider from "./Slider";

import Bar from "./Bar";
import Form from "./Form";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="bg-[url('../assets/hero.jpg')] bg-cover bg-center">
      <div className=" border-2 border-gray-400 flex flex-col md:flex-row justify-center rounded-2xl items-center gap-x-4 md:py-4 w-[90%] md:w-[85%] px-4 m-auto  bg-cover bg-center mt-8 ">
      <motion.div
          className="flex justify-start items-center object-fit mt-2 w-[25%] ml-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={ImgLeft} alt="" className="h-[70vh]"/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-3xl text-center md:text-5xl lg:text-6xl font-bold text-white m-auto w-[90%] md:w-[80%]">
          We connect people to bring projects to life
          </h3>
          <p className="m-auto text-center text-sm md:text-lg lg:text-xl mt-[1rem] md:mt-[1.5rem] text-white font-semibold md:w-[30em] w-[90%]">
          Find high-quality paid or unpaid Projects  with the help of Fusion Flow to upsill yourself.
          </p>
          <motion.div
            className="flex justify-center items-center md:mt-8 mt-6 md:w-[100%] w-[90%] m-auto"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
          >
           <div className="flex justify-center items-center">
           <button className="bg-gradient-to-r from-white to-white hover:opacity-90 text-black md:px-6 md:py-2 px-3 py-1 font-semibold rounded-xl md:text-xl text-lg shadow-lg transition-all duration-300">
              <a href="#form"> Get started</a>
            </button>
           </div>
           
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-start items-center object-fit mt-2 w-[25%]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={ImgRight} alt="" className="h-[70vh]"/>
        </motion.div>
      </div>
      <div className=" gap-x-8 md:mt-16 w-[95%] md:w-[100%] m-auto">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="left">
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Slider />
            </motion.div>
          </div>
        </div>
      </div>
      <div>
        <div className=" bg-gradient-to-br  py-16 px-4 w-[90%] m-auto rounded-2xl">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 "
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Freelancing?
              </h2>
              <p className="text-xl text-white">
                Discover the freedom and flexibility of being your own boss
              </p>
            </motion.div>

           
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
      
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Flexible Hours
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Work when you're most productive. Set your own schedule and
                  maintain perfect work-life balance.
                </p>
              </motion.div>

       
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Work From Anywhere
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Be location independent. Work from home, a café, or while
                  traveling around the world.
                </p>
              </motion.div>

       
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Higher Income Potential
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Set your own rates and take on multiple projects. Your earning
                  potential is unlimited.
                </p>
              </motion.div>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Professional Growth
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Expand your skillset with diverse projects and clients. Take
                  on new challenges and grow your expertise.
                </p>
              </motion.div>

              
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Work-Life Integration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Balance personal life and career goals. Create a lifestyle
                  that aligns with your values and priorities.
                </p>
              </motion.div>

   
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Build Strong Networks
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Develop lasting relationships with clients worldwide. Create a
                  network that generates recurring opportunities.
                </p>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-[85%] m-auto flex justify-center items-center">
        <div className="left w-[50%] px-20">
          <h2 className="text-4xl font-bold text-white mb-8">Results from Survey!!</h2>
          <p className="text-md font-bold text-white">Lorem ipsum dolor sit amet  elit. In, sunt.</p>
          <p className="text-md font-bold text-white">Lorem ipsum dolor sit amet  elit. In, sunt.</p>
          <p className="text-md font-bold text-white">Lorem ipsum dolor sit amet  elit. In, sunt.</p>
          <p className="text-md font-bold text-white">Lorem ipsum dolor sit amet  elit. In, sunt.</p>
          <a to="/get-started">
            <button className="bg-white text-[#16213E] font-bold py-1 px-4 rounded text-lg mt-4 ">
              Fill Form
            </button>
          </a>
           
        </div>
        <div className="right w-[50%]  mr-4">
          <Bar/>
        </div>
      </div>
      <div id="form">
        <Form/>
      </div>
    </div>
  );
}

export default Home;
