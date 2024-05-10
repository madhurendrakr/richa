import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";

const CarouselPage = () => {
  // Sample image data, replace with your actual image URLs
  const images = [
    "https://via.placeholder.com/600",
    "https://via.placeholder.com/600",
    "https://via.placeholder.com/600",
    "https://via.placeholder.com/600",
    "https://via.placeholder.com/600",
  ];

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold text-center mb-8">Image Carousel</h1>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} className="mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselPage;
