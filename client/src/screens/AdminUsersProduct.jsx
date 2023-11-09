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
  const changeAdminStatus = (id) => {
    axios
      .post("http://localhost:3000/changeAdminStatus", {
        id: id,
      })
      .then((res) => {
        alert("Administration Status Changed!");
        window.location.reload();
      })
      .catch((err) => {
        alert("Could not complete the request");
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
                <div className="flex justify-end">
                  {item.phonenumber && (
                    <p className="flex-1">
                      phone:{" "}
                      <span className="font-bold">{item.phonenumber}</span>
                    </p>
                  )}
                  <button
                    onClick={(_) => changeAdminStatus(item._id)}
                    className={`text-end hover:scale-110 hover:text-white hover:outline-1 hover:outline-slate-950 transition duration-75 ease-in-out px-2 rounded-full ${
                      item.isAdmin ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  >
                    {item.isAdmin === true ? "Admin" : "User"}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminUsersProduct;
