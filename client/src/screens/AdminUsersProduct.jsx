import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminUsersProduct = () => {
  const [data, setData] = useState(null);
  const fetchData = () => {
    axios
      .get("http://localhost:3000/getAllUsers")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Define an array of background colors
  const colors = [
    "bg-red-200",
    "bg-orange-200",
    "bg-yellow-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-indigo-200",
    "bg-purple-200",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl text-center">All Users</h2>
        <hr className="border-b mb-5 border-black" />
        <div className="flex flex-col gap-2">
          {data &&
            data.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${colors[index % colors.length]}`}
              >
                <h3 className="">
                  Name: <span className="font-bold">{item.name}</span>
                </h3>
                <p>
                  Email: <span className="font-bold">{item.email}</span>
                </p>
                <p>
                  ID: <span className="font-bold">{item._id}</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminUsersProduct;
