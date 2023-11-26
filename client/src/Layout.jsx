import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = ({searchTerm,setSearchTerm}) => {
  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Outlet />
    </div>
  );
};

export default Layout;
