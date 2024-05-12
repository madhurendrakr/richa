import React, { useState } from "react";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      image: "/c1.jpg",
      alt: "My image",
      title: "Feedback Page",
      description:
        " 1. This is page where you can give feedback and review about a particular product. ",
    },
    {
      image: "/c2.jpg",
      alt: "My image",
      title: "Upload Items",
      description: "It allows users to upload a new items. ",
    },
    {
      image: "/c3.jpg",
      alt: "My image",
      title: "Filter Section",
      description:
        "This section allow the filter of of product based on categories and availble products.",
    },
    {
      image: "/c4.jpg",
      alt: "My image",
      title: "Chat Interface",
      description: " Here user can chat in group with other users.",
    },
    {
      image: "/c5.jpg",
      alt: "My image",
      title: "Product Page",
      description: "This page show the details about a particular product.",
    },
    {
      image: "/c6.jpg",
      alt: "My image",
      title: "Contact Page ",
      description: "Here user can give required details and contact to admin.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="relative w-full m-3 rounded-lg ">
        <div className="overflow-hidden relative w-full">
          <div className=" flex transition-transform duration-300 ease-in-out transform">
            {items.map((item, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 flex items-center justify-center ${
                  index === currentIndex ? "opacity-100" : "opacity-0 absolute"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className=" w-[70rem] h-[38rem] rounded-lg rounded-bl-2xl"
                />
                <div className="absolute bottom-0  w-[70rem] bg-black bg-opacity-70 text-white p-4 content-around rounded-2xl">
                  <h2 className="text-2xl mb-5 font-semibold text-center shadow-2xl">
                    {item.title}
                  </h2>
                  <p className="text-md text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
          onClick={handleBack}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Onboarding;
