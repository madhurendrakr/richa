import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailsScreen = () => {
  const params = useParams();
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const [productData, setProductData] = useState(null);
  const getProductData = (id) => {
    axios
      .post("http://localhost:3000/getProduct", {
        id,
      })
      .then((res) => {
        console.log(res.data);
        setProductData(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductData(params.data);
  }, []);

  // console.log(params.data);

  return (
    <div>
      {/* <Navbar /> */}
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
            <span className="text-lg font-bold">Price</span>: $
            {productData?.price}
          </h1>
          <h1>
            <span className="text-lg font-bold">Category</span>:{" "}
            {productData?.category}
          </h1>

          <div className="flex gap-2">
            <button
              className="uppercase flex-1 rounded-lg bg-slate-500
             hover:bg-slate-600 text-white text-lg py-1"
            >
              Available
            </button>
            <button className="uppercase flex-1 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-1">
              Add to Cart
            </button>
          </div>
          <div>
            <button
              className="uppercase rounded-lg w-full bg-cyan-600
               hover:bg-slate-600 text-white text-lg py-1"
              onClick={toggleOptions}
            >
              Contact Owner
            </button>
            {showOptions && (
              <div className="flex">
                <button
                  className="flex gap-2 justify-center items-center
                   flex-1 uppercase rounded-lg mt-1 mr-1 bg-orange-400
                 hover:bg-slate-600 text-white text-lg py-1"
                >
                  Email
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </button>
                <button
                  className="flex-1 uppercase rounded-lg mt-1 ml-1 flex justify-center items-center gap-1
                 bg-pink-600 hover:bg-slate-600 text-white text-lg py-1"
                >
                  Call
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                    />
                  </svg>
                </button>
                {/* Add more options as needed */}
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="border border-black mt-5" />
    </div>
  );
};

export default ProductDetailsScreen;
