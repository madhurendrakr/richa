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
  // const queryString = new URLSearchParams(data).toString()

  let formalDesc = desc;
  if (desc.length > 37) formalDesc = desc.slice(0, 30) + "...";
  else formalDesc = desc;
  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="flex m-3 hover:scale-105 cursor-pointer"
    >
      <div className="border border-black rounded-lg">
        <div className="">
          <img
            className="w-full h-60 object-top rounded-t-lg"
            src={image}
            alt=""
          />
        </div>
        <div className="flex bg-gray-300 pb-3 px-3 rounded-b-lg">
          <div className="w-60">
            <div className="flex justify-between">
              <h1 className="text-lg font-bold">{name}</h1>
              <h1 className="text-green-600 font-bold text-xl">${price}.00</h1>
            </div>
            <h1 className="mb-4 mt-2">{formalDesc}</h1>
            <div className="flex justify-between">
              <button className="bg-blue-500 py-1 rounded-lg px-2 text-black">
                More Details
              </button>
              <button className="bg-black py-1 px-2 rounded-lg text-white">
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
