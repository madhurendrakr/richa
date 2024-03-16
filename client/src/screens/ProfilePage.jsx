import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfilePageProductCard from "../components/ProfilePageProductCard";
import { useSelector } from "react-redux";
import { selectMode } from "../../modeSlice";

const ProfilePage = () => {
  const darkMode = useSelector(selectMode);

  const userId = JSON.parse(localStorage.getItem("user_data"));
  const [userProducts, setUserProducts] = useState(null);

  const getAllHisProduct = () => {
    axios
      .post("http://localhost:3000/getProductByUser", {
        id: userId.id,
      })
      .then((res) => {
        console.log(res.data.data);
        setUserProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllHisProduct();
  }, []);

  return (
    <div>
      <div className={`bg-${darkMode ? "gray-900" : "pink-100"} p-4 rounded-lg shadow-lg mb-4 lg:mb-8 xl:mb-10`}>
        <div className="text-center">
          <h1 className={`text-2xl font-bold text-${darkMode ? "white" : "pink-800"} mb-4`}>
            {userId && userId.name}
          </h1>
          <h1 className={`text-lg font-semibold text-${darkMode ? "white" : "pink-600"}`}>
            Email: {userId && userId.email}
          </h1>
        </div>
      </div>

      {userProducts &&
        userProducts.map((item, key) => (
          <ProfilePageProductCard
            id={item._id}
            category={item.category}
            desc={item.description}
            image={item.image}
            isApproved={item.isApproved}
            name={item.name}
            price={item.price}
            key={key}
          />
        ))}
    </div>
  );
};

export default ProfilePage;
