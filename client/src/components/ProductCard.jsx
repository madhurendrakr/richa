import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ name, desc, price,category,image,id }) => {
  const navigate = useNavigate();
  const data = {
    name,
    desc,
    price,
    category,
    image,
    id
  }
  const queryString = new URLSearchParams(data).toString()

  let formalDesc = desc;
  if (desc.length > 50) formalDesc = desc.slice(0, 50) + "...";
  else formalDesc = desc;
  return (
    <div
      onClick={() => navigate(`/product/${queryString}`)}
      className="flex m-3 hover:scale-105 cursor-pointer"
    >
      <div className="border border-black rounded-lg">
        <div className="">
          <img
            className="w-full h-60 object-cover rounded-t-lg"
            src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=1894&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex bg-gray-300 pb-3 px-3 rounded-b-lg">
          <div className="w-60">
            <div className="flex justify-between">
              <h1 className="text-lg font-bold">{name}</h1>
              <h1 className="text-green-600 font-bold text-xl">${price}.00</h1>
            </div>
            <h1>{formalDesc}</h1>
            <div className="flex justify-between">
              <button className="bg-blue-500 py-1 px-2 text-black rounded-sm">
                More Details
              </button>
              <button className="bg-black py-1 px-2 rounded-sm text-white">
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
