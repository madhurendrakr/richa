import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailsScreen = () => {
  const params = useParams();
  const [productData, setProductData] = useState(null);
  const getProductData = (id) => {
    axios
      .post("http://localhost:3000/getProduct", {
        id,
      })
      .then((res) => {
        console.log(res.data);
        setProductData(res.data.product)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductData(params.data)
  }, [])
  
  // console.log(params.data);

  return (
    <div>
      <Navbar />
      <div className="flex w-full justify-center mt-8">
        <div className="w-1/2 flex justify-end">
          <img
            className="w-96 h-96 object-cover border-4 border-black"
            src={productData?.image}
            alt=""
          />
        </div>
        <div className="w-1/2 flex flex-col ms-10 me-10 justify-between">
          <h1 className="text-4xl font-bold text-center">Product Details</h1>
          <hr className="border border-black" />
          <h1>
            <span className="text-lg font-bold">Name</span>: {productData?.name}
          </h1>
          <h1>
            <span className="text-lg font-bold">Description</span>:{" "}
            {productData?.description}
          </h1>
          <h1>
            <span className="text-lg font-bold">Price</span>: ${productData?.price}
            
          </h1>
          <h1>
            <span className="text-lg font-bold">Category</span>:{" "}
            {productData?.category}
          </h1>
          <button className="uppercase bg-slate-500 text-white text-lg py-1">
            Add to Cart
          </button>
        </div>
      </div>
      <hr className="border border-black mt-5" />
    </div>
  );
};

export default ProductDetailsScreen;
