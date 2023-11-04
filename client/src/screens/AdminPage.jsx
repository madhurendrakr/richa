import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Link
        to={"/adminUsers"}
        className="md:w-1/2 m-2 text-4xl hover:bg-green-200
       cursor-pointer md:m-4 h-60 md:h-[85vh] flex items-center justify-center border border-green-500 rounded-lg"
      >
        Users
      </Link>
      <Link
        to={"/adminProduct"}
        className="md:w-1/2 text-4xl m-2 md:h-[85vh] hover:bg-red-200 cursor-pointer md:m-4 h-60 flex items-center justify-center border border-red-600 rounded-lg"
      >
        Products
      </Link>
    </div>
  );
};

export default AdminPage;
