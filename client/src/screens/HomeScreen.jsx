import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMode } from "../../modeSlice";

const api = "http://localhost:3000/getAllProducts";

const HomeScreen = ({ searchTerm }) => {
  const darkMode = useSelector(selectMode);

  const [filteredProduct, setFilteredProduct] = useState(null);
  const [productData, setProductData] = useState(null);
  const [bookFilter, setBookFilter] = useState(false);
  const [electronicsFilter, setElectronicsFilter] = useState(false);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get(api)
      .then((res) => {
        setProductData(res.data.data);
      })
      .catch((err) => console.log(err.data));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (productData) {
      let filteredArray = [...productData];

      if (searchTerm && searchTerm.trim() !== "") {
        filteredArray = filteredArray.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (bookFilter) {
        filteredArray = filteredArray.filter((item) =>
          item.category.toLowerCase().includes("books")
        );
      }

      if (electronicsFilter) {
        filteredArray = filteredArray.filter((item) =>
          item.category.toLowerCase().includes("electronics")
        );
      }

      setFilteredProduct(filteredArray);
    }
  }, [searchTerm, bookFilter, electronicsFilter, productData]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`relative transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div
        onClick={() => navigate("/addProduct")}
        className={`fixed bottom-5 right-5 z-50 cursor-pointer hover:scale-105 p-4 ${
          darkMode ? "bg-gray-800 text-white" : "bg-blue-500 text-white"
        } rounded-full transition-all duration-300`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={darkMode ? "white" : "currentColor"}
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <img
        className="w-full h-60 object-cover"
        src="https://img.freepik.com/premium-photo/beautiful-mountain-range-reflects-tranquil-water-generative-ai_188544-9117.jpg?w=1060"
        alt=""
      />

      <h1
        className={`text-5xl text-center py-5 mt-5 mx-6 rounded-lg transition-all duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        All available items...
      </h1>

      <div className="flex flex-col sm:flex-row">
        <div className="sm:px-10 sm:py-10">
          <div
            className={`border transition-all duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
            } px-4 py-3 rounded-lg mb-2`}
          >
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl whitespace-nowrap">Filter By Category</h1>
              <hr className="border-t-2 border-white" />
            </div>
            <div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  name="Books"
                  checked={bookFilter}
                  onChange={(e) => setBookFilter((prev) => !prev)}
                />
                <h1>Books</h1>
              </div>
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  checked={electronicsFilter}
                  onChange={() => setElectronicsFilter((prev) => !prev)}
                />
                <h1>Electronics</h1>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <h1>Cycle</h1>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <h1>Cloth</h1>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <h1>Tech Gadgets</h1>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <h1>General</h1>
              </div>
            </div>
          </div>
          <div
            className={`border transition-all duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
            } px-5 py-2 rounded-lg h-48`}
          >
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl whitespace-nowrap">
                Filter By Availability
              </h1>
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

        <div className="mt-10 grid mobile:grid-cols-1 tablet:grid-cols-1 largeTab:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProduct &&
            filteredProduct
              .filter((item) => item.isApproved)
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
                    darkMode={darkMode}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
