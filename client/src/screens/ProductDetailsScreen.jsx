import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const ProductDetailsScreen = () => {
  const data = useParams();
  // const name = decodeURIComponent(data.get('name'))
  const keyValuePairs = data.data.split('&');

// Create an object to store the decoded values
const decodedData = {};

// Loop through the key-value pairs and decode each value
keyValuePairs.forEach((pair) => {
  const [key, value] = pair.split('=');
  decodedData[key] = decodeURIComponent(value).split('+').join(' ');
});

console.log(decodedData);
  // console.log(data);
  return (
    <div>
      <Navbar />
      <div className="flex w-full justify-center mt-8">
        <div className="w-1/2 flex justify-end">
          <img
          className="w-96 h-96 object-cover border-4 border-black"
            src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=1894&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="w-1/2 flex flex-col ms-10 me-10 justify-between">
          <h1 className="text-4xl font-bold text-center">Product Details</h1>
          <hr className="border border-black" />
          <h1><span className="text-lg font-bold">Name</span>: {decodedData.name}</h1>
          <h1><span className="text-lg font-bold">Description</span>: {decodedData.desc}</h1>
          <h1><span className="text-lg font-bold">Price</span>: ${decodedData.price}</h1>
          <h1><span className="text-lg font-bold">Category</span>: {decodedData.category}</h1>
          <button className="uppercase bg-slate-500 text-white text-lg py-1">
            Add to Cart
          </button>
        </div>
      </div>
      <hr className="border border-black mt-5"/>
    </div>
  );
};

export default ProductDetailsScreen;
