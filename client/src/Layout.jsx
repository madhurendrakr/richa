import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMode } from "../modeSlice";

const Layout = ({searchTerm,setSearchTerm}) => {
  const darkMode = useSelector(selectMode)
  
  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Outlet />
    </div>
  );
};

export default Layout;
