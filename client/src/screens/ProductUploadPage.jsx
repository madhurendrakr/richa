import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMode } from "../../modeSlice";
const categories = [
  "Clothing",
  "Electronics",
  "Home & Garden",
  "Books",
  "Toys",
];

const ProductUploadPage = () => {
  const darkMode = useSelector(selectMode);
  const userId = localStorage.getItem("user_data");
  const userIdParsed = JSON.parse(userId);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [imageLink, setImageLink] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const firebaseConfig = {
    apiKey: "AIzaSyDdR7nMEjUUXmBt2g6nc9tJY1Ee34wj5A8",
    authDomain: "valobasha-95ab5.firebaseapp.com",
    projectId: "valobasha-95ab5",
    storageBucket: "valobasha-95ab5.appspot.com",
    messagingSenderId: "953254992039",
    appId: "1:953254992039:web:a6b3a4afd8aa798c772382",
    measurementId: "G-F3G1H0HSBN",
  };
  const app = initializeApp(firebaseConfig);
  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    setIsUploading(true);
    // Create a reference to the location where you want to store the file in Firebase Storage
    // const storageRef = firebase.storage().ref().child(`images/${file.name}`);
    const storage = getStorage(app);
    const storageRef = ref(storage, `images/${file.name}`);
    try {
      // Upload the file to Firebase Storage
      const snapshot = uploadBytes(storageRef, file)
        .then((snapshot) => {
          console.log(snapshot);
        })
        .then(() => {
          getDownloadURL(storageRef)
            .then((url) => {
              console.log(url);
              setImageLink(url);
              setIsUploading(false);
            })
            .catch((err) => {
              console.log(err);
              setIsUploading(false);
            });
        });

      // File uploaded successfully
      console.log("File uploaded:", snapshot);

      // You can do additional processing or update your UI here if needed
    } catch (error) {
      // Handle the error
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    axios
      .post("http://localhost:3000/addProduct", {
        name: name,
        description: description,
        price: price,
        category: category,
        image: imageLink,
        addedBy: userIdParsed.id,
      })
      .then((res) => {
        alert("Product has been added Successfully!");
        navigate("/");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`w-full max-w-md m-auto p-4 relative transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {isUploading && (
        <div className="w-screen flex justify-center items-center fixed top-0 bottom-0 left-0 h-screen bg-gray-500 opacity-50"></div>
      )}
      <form
        className={`shadow-md rounded px-8 pt-6 pb-8 mb-4 transition-colors duration-500 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 ${
              darkMode ? "text-white bg-gray-700" : "text-gray-700 bg-white"
            } leading-tight focus:outline-none focus:shadow-outline transition-colors duration-500`}
            id="name"
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 ${
              darkMode ? "text-white bg-gray-700" : "text-gray-700 bg-white"
            } leading-tight focus:outline-none focus:shadow-outline transition-colors duration-500`}
            id="description"
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 ${
              darkMode ? "text-white bg-gray-700" : "text-gray-700 bg-white"
            } leading-tight focus:outline-none focus:shadow-outline transition-colors duration-500`}
            id="price"
            type="number"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            className={`block appearance-none w-full border rounded ${
              darkMode ? "text-white bg-gray-700" : "text-gray-700 bg-white"
            } border-gray-300 hover:border-gray-400 px-3 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline transition-colors duration-500`}
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            className={`appearance-none block w-full ${
              darkMode ? "text-white bg-gray-700" : "text-gray-700 bg-white"
            } border border-gray-300 hover:border-gray-400 px-3 py-2 rounded leading-tight focus:outline-none focus:shadow-outline transition-colors duration-500`}
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              darkMode ? "dark-mode-button" : ""
            } transition-colors duration-500`}
            type="submit"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUploadPage;
