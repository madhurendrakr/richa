import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMode } from "../../modeSlice";

const ProductCard = ({ name, desc, price, category, image, id }) => {
  const darkMode = useSelector(selectMode);
  const navigate = useNavigate();

  // Truncate long descriptions
  let formalDesc = desc;
  if (desc.length > 37) formalDesc = desc.slice(0, 50) + "...";
  else formalDesc = desc;

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className={`flex m-3 hover:scale-105 cursor-pointer ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="border border-black rounded-lg w-full md:w-72">
        <div className="">
          <img
            className="w-full h-60 object-top rounded-t-lg"
            src={image}
            alt=""
          />
        </div>
        <div
          className={`flex pb-3 px-3 rounded-b-lg ${
            darkMode ? "bg-gray-900" : "bg-gray-300"
          }`}
        >
          <div className="w-full md:w-60">
            <div className="flex justify-between mt-3">
              <h1 className="text-lg font-bold">{name}</h1>
              <h1 className="text-green-600 font-bold text-xl">
                ${price}.00
              </h1>
            </div>
            <h1 className="mb-4 mt-2 h-8 text-sm">{formalDesc}</h1>
            <div className="flex mb-2 mt-4 font-bold">
              Availability: ........
            </div>
            <div className="flex justify-between">
              <button
                className={`${
                  darkMode ? "bg-blue-500" : "bg-blue-600"
                } py-1 rounded-lg px-2 text-black`}
              >
                More Details
              </button>
              <button
                className={`${
                  darkMode ? "bg-gray-600" : "bg-black"
                } py-1 px-2 rounded-lg text-white`}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
