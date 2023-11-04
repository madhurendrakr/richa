import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminProductsPage = () => {
  const [data, setData] = useState(null);
  const fetchData = () => {
    axios
      .get("http://localhost:3000/getAllProducts")
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

  const changeProductApproval = (id) => {
    axios
      .post("http://localhost:3000/changeApprovalStatus", {
        id: id,
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {data &&
        data.map((item, key) => (
          <div
            key={key}
            className="flex flex-col lg:flex-row lg:items-center p-4 border bg-white rounded-md shadow-md m-2 sm:m-4 lg:m-6 xl:m-8"
          >
            {/* Image as a card */}
            <div className="max-w-[160px] bg-white rounded-lg shadow-lg mb-3 lg:mb-0">
              <img
                className="w-full rounded-lg h-auto"
                src={item.image}
                alt={item.name}
              />
            </div>
            {/* Name, Description, Category, Price */}
            <div className="flex flex-col flex-1 lg:mx-4">
              <h1 className="text-lg font-semibold mb-1">{item.name}</h1>
              <p className="text-sm text-gray-700 mb-1">{item.description}</p>
              <p className="text-sm text-gray-600 mb-1">
                Category: {item.category}
              </p>
              <p className="text-sm text-indigo-600">Price: ${item.price}</p>
            </div>
            {/* Approval */}
            <div className="flex items-center justify-center lg:ml-4">
              {item.isApproved ? (
                <button onClick={()=>changeProductApproval(item._id)} className="text-white cursor-pointer hover:scale-105 bg-green-500 rounded-full px-2 py-1 text-sm">
                  Approved
                </button>
              ) : (
                <button onClick={()=>changeProductApproval(item._id)} className="text-white bg-red-600 cursor-pointer hover:scale-105 rounded-full px-2 py-1 text-sm">
                  Not Approved
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default AdminProductsPage;
