import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = ({ searchTerm, setSearchTerm }) => {
  const location = useLocation();
  // console.log(location.pathname);
  const pathname = location.pathname;
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user_data");
    navigate("/login");
  };
  return (
    <div className="flex px-5 py-2 border-l-green-300 justify-between border-b-2 border-black">
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="text-2xl font-bold">Community Share</h1>
      </div>
      <div>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className="border px-2 py-1 text-2xl w-80 border-gray-500 rounded-tl-lg rounded-bl-lg"
          placeholder="Search"
        />
        <button className="bg-black text-2xl text-white px-2 py-1 rounded-tr-lg rounded-br-lg">
          Search
        </button>
      </div>
      <div className="hidden md:flex font-bold text-2xl gap-4">
        <Link
          to={"/"}
          className={`hover:underline ${
            pathname === "/" ? "underline" : "no-underline"
          } cursor-pointer hover:transition duration-75 ease-in-out`}
        >
          Home
        </Link>
        <h1>|</h1>
        <Link
          to={"/contact"}
          className={`hover:underline ${
            pathname === "/contact" ? "underline" : "no-underline"
          } cursor-pointer hover:transition duration-75 ease-in-out`}
        >
          Contact
        </Link>
        <h1>|</h1>
        <Link
          to={"/profile"}
          className={`hover:underline ${
            pathname === "/profile" ? "underline" : "no-underline"
          } cursor-pointer hover:transition duration-75 ease-in-out`}
        >
          Profile
        </Link>
        <h1>|</h1>
        <Link
          to={"/about"}
          className={`hover:underline ${
            pathname === "/about" ? "underline" : "no-underline"
          } cursor-pointer hover:transition duration-75 ease-in-out`}
        >
          About
        </Link>
        <h1>|</h1>

        {/* Logout */}
        <div
          onClick={logout}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
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
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
