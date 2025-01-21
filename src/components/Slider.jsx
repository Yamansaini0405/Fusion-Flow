import React, { useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    {
      title: "App development",
      image:
        "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104494.jpg",
    },
    {
      title: "Website development",
      image:
        "https://img.freepik.com/free-vector/app-development-concept-with-phone-laptop_23-2148701016.jpg",
    },
    {
      title: "logo Designing",
      image:
        "https://img.freepik.com/premium-photo/hands-using-stylus-designing-3d-logo-tablet_1371862-5948.jpg",
    },
    {
      title: "UI/UX Design",
      image:
        "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
    },
    {
      title: "Software Testing",
      image:
        "https://img.freepik.com/premium-vector/software-testing-vector-illustration-featuring-application-engineering-debugging-development-process-programming-coding-flat-background_2175-25608.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const LeftArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );

  const RightArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );

  return (
    <div className="bg-gray-100 py-6 px-4 md:px-20 rounded-2xl my-4">
      <div className="flex justify-between items-center mb-6 flex-col md:flex-row">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Project for what you need
        </h2>
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline flex items-center"
        >
          View all design categories →
        </a>
      </div>

      <div className="md:hidden relative">
        <div className="relative overflow-hidden rounded-lg">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
            <div
              className="h-48 bg-cover bg-center w-full"
              style={{
                backgroundImage: `url(${services[currentIndex].image})`,
              }}
            ></div>
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-semibold text-lg">
                {services[currentIndex].title}
              </h3>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
            aria-label="Previous slide"
          >
            <LeftArrow />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
            aria-label="Next slide"
          >
            <RightArrow />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-blue-600 w-4" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <div
              className="h-44 bg-cover bg-center w-full"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-semibold">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
