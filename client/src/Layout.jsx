import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMode } from "../modeSlice";
import Footer from "./components/Footer";

const Layout = ({ searchTerm, setSearchTerm }) => {
  const darkMode = useSelector(selectMode);

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
