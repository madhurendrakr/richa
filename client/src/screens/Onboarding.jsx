import React, { useState } from "react";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      image: "/img1.jpg",
      alt: "My image",
      title: "First Image",
      description: "This is the description for the first image.",
    },
    {
      image: "/img2.jpg",
      alt: "My image",
      title: "Second Image",
      description: "This is the description for the second image.",
    },
    {
      image: "/img3.jpg",
      alt: "My image",
      title: "Third Image",
      description: "This is the description for the third image.",
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
                  <h2 className="text-lg font-semibold text-center">
                    {item.title}
                  </h2>
                  <p className="text-sm text-center">{item.description}</p>
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
