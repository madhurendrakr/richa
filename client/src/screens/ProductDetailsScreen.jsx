import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaComment } from "react-icons/fa";

const ProductDetailsScreen = () => {
  const params = useParams();
  const [showOptions, setShowOptions] = useState(false);
  const [availbilty, setavailibilty] = useState(true);
  const [addedTocart, setaddedTocart] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [isCallTapped, setIsCallTapped] = useState(false);
  const [email, setEmail] = useState(null);

  const feedback = [
    "Wow, this is amazing!",
    "I didn't expect that!",
    "Great job, keep it up!",
  ];

  const [feedbackInput, setFeedbackInput] = useState(""); // New state variable to manage the feedback input value
  const [feedbackList, setFeedbackList] = useState(feedback); // New state variable to manage the list of feedback

  const handleFeedbackSubmit = () => {
    if (feedbackInput.trim() !== "") {
      setFeedbackList((prevList) => [feedbackInput, ...prevList]); // Add the feedback input to the feedback list
      setFeedbackInput(""); // Clear input field after submitting
    }
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const toggleAvailable = () => {
    setavailibilty(!availbilty);
  };

  const toggleadded = () => {
    setaddedTocart(!addedTocart);
  };
  const handleEmailClick = (emailAddress) => {
    const subject = "Hello";
    const body = "I wanted to say...";

    const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(
      emailAddress
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open a new tab with the Gmail compose window
    window.open(gmailComposeUrl, "_blank");
  };
  const [productData, setProductData] = useState(null);
  const getUserData = (id) => {
    // console.log(id);
    axios
      .post("http://localhost:3000/getEmailAndPhoneById", {
        id,
      })
      .then((res) => {
        // console.log(res.data);
        setEmail(res.data.email);
        setPhoneNumber(res.data.phone || null);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getProductData = (id) => {
    axios
      .post("http://localhost:3000/getProduct", {
        id,
      })
      .then((res) => {
        // console.log(res.data);
        setProductData(res.data.product);
        getUserData(res.data?.product?.addedBy);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductData(params.data);
  }, []);

  // console.log(params.data);
  const showpopup = () => {
    alert(phoneNumber);
  };
  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex w-full justify-center mt-8">
        <div className="w-1/2 flex justify-end">
          <img
            className="w-96 h-96 object-cover border-4 border-black rounded-2xl"
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
          <h1>
            <span className="text-lg font-bold" placeholder="dog">
              Availability{" "}
            </span>{" "}
            :..........
          </h1>

          <div className="flex gap-2">
            <button
              onClick={toggleAvailable}
              className={` font-semibold flex-1 rounded-lg bg-slate-700 hover:bg-slate-600 text-lg py-1 ${
                availbilty ? "text-green-500" : "text-red-400"
              }`}
            >
              {availbilty ? "Available" : "Not Available"}
            </button>

            <button
              onClick={toggleadded}
              className={`flex-1 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black text-lg py-1  font-semibold ${
                addedTocart ? "text-black" : "text-white"
              }`}
            >
              {addedTocart ? "Added to cart" : "Add to Cart"}
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
                  onClick={() => handleEmailClick(email)}
                  className="flex gap-2 justify-center items-center
                   flex-1 uppercase rounded-lg mt-1 mr-1 bg-orange-400
                 hover:bg-slate-600 text-white text-lg py-1"
                >
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
                  Email
                </button>
                <button
                  onClick={() => setIsCallTapped((prev) => !prev)}
                  className="flex-1 uppercase rounded-lg mt-1 ml-1 flex justify-center items-center gap-1
                 bg-pink-600 hover:bg-slate-600 text-white text-lg py-1"
                >
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
                  {isCallTapped ? phoneNumber : "Call"}
                </button>
                {/* Add more options as needed */}
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="border border-black mt-5" />
      <div className="m-10">
        <input
          type="text"
          value={feedbackInput}
          onChange={(e) => setFeedbackInput(e.target.value)}
          placeholder="Enter your feedback"
          className="border border-gray-400 p-2 rounded-md w-1/2"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleFeedbackSubmit();
            }
          }}
        />
        <br />
        <button
          onClick={handleFeedbackSubmit}
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Submit Feedback
        </button>
      </div>
      <div className="m-10">
        <h2 className="text-lg font-semibold mb-4">Feedback List:</h2>
        <div className="grid gap-4">
          {feedbackList.map((feedback, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex items-center w-1/2"
            >
              <FaComment className="text-blue-500 w-6 h-6 mr-2" />{" "}
              {/* Display comment icon */}
              <p className="text-base">{feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsScreen;
