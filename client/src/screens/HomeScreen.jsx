import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const api = "http://localhost:3000/getAllProducts";
const HomeScreen = () => {
  const [productData, setProductData] = useState(null);
  const [bookSelected, setBookSelected] = useState(false);
  // const [bookSelected, setBookSelected] = useState(false);
  // const [bookSelected, setBookSelected] = useState(false);
  // const [bookSelected, setBookSelected] = useState(false);
  const navigate = useNavigate();
  const bookFilter = () => {
    if (!bookSelected && productData) {
      const filteredArray = productData.filter(
        (item) => item.category == "Books"
      );
    }
    setBookSelected((prev) => !prev);
  };
  const getData = () => {
    axios
      .get(api)
      .then((res) => {
        setProductData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err.data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="relative">
      <div
        onClick={() => navigate("/addProduct")}
        className="fixed bottom-5 right-5 z-50 cursor-pointer hover:scale-105 p-4 bg-blue-500 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      {/* <Navbar /> */}
      <img
        className="w-full h-60 object-cover"
        src="https://img.freepik.com/premium-photo/beautiful-mountain-range-reflects-tranquil-water-generative-ai_188544-9117.jpg?w=1060"
        alt=""
      />

      <h1 className="text-5xl bg-neutral-800 text-center text-white py-5 mt-5 mx-6 rounded-lg">
        All available items...
      </h1>

      <div className="flex">
        {/* Filter Section */}
        <div className="px-10 py-10">
          <div className="border border-black text-white bg-pink-600 px-4 py-3 rounded-lg mb-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl whitespace-nowrap">Filter By Category</h1>
              <hr className="border-t-2 border-white" />
            </div>
            <div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="Books"
                  checked={bookSelected}
                  onChange={bookFilter}
                />
                <h1>Books</h1>
              </div>
              <div className="flex gap-1" >
                <input type="checkbox" />
                <h1>Electronics</h1>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <h1>Item1</h1>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <h1>Item2</h1>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <h1>Item3</h1>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <h1>Item4</h1>
              </div>
            </div>
          </div>
          <div className="border border-black bg-pink-500 text-white px-5 py-2 rounded-lg h-48">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl whitespace-nowrap">Filter By Availability</h1>
              <hr className="border-t-2 border-white" />
            </div>
            <div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <h1>To sell</h1>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <h1>To rent</h1>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <h1>None</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productData &&
            productData
              .filter((item) => item.isApproved) // Filter out products with isApproved === true
              .map((item, ind) => (
                <div className="mt-10" key={ind}>
                  <ProductCard
                    key={ind}
                    name={item.name}
                    desc={item.description}
                    price={item.price}
                    category={item.category}
                    image={item.image}
                    id={item._id}
                  />
                </div>
              ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
