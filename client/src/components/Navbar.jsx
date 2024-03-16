import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toggleMode, selectMode } from "../../modeSlice";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectMode);

  const toggleModeHandler = () => {
    dispatch(toggleMode());
  };

  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user_data");
    navigate("/login");
  };

  return (
    <div className={`flex px-5 py-2 justify-between border-b-2 border-black transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
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
          className={`border px-2 py-1 text-2xl w-80 border-gray-500 rounded-tl-lg rounded-bl-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
          placeholder="Search"
        />
        <button className={`text-2xl px-2 py-1 rounded-tr-lg rounded-br-lg ${darkMode ? "bg-gray-800 text-white" : "bg-black text-white"}`}>
          Search
        </button>
      </div>
      <div className="hidden md:flex font-bold text-2xl gap-4">
        <button
          onClick={toggleModeHandler}
          className={`rounded-full border border-black w-8 h-8 justify-center flex items-center ${darkMode ? 'bg-white text-black' : 'bg-cyan-800 text-white'}`}
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          )}
        </button>

        <Link
          to={"/"}
          className={`hover:underline ${pathname === "/" ? "underline" : "no-underline"} cursor-pointer hover:transition duration-75 ease-in-out ${darkMode ? "text-white" : "text-black"}`}
        >
          Home
        </Link>
        <h1>|</h1>
        <Link
          to={"/contact"}
          className={`hover:underline ${pathname === "/contact" ? "underline" : "no-underline"} cursor-pointer hover:transition duration-75 ease-in-out ${darkMode ? "text-white" : "text-black"}`}
        >
          Contact
        </Link>
        <h1>|</h1>
        <Link
          to={"/profile"}
          className={`hover:underline ${pathname === "/profile" ? "underline" : "no-underline"} cursor-pointer hover:transition duration-75 ease-in-out ${darkMode ? "text-white" : "text-black"}`}
        >
          Profile
        </Link>
        <h1>|</h1>
        <Link
          to={"/about"}
          className={`hover:underline ${pathname === "/about" ? "underline" : "no-underline"} cursor-pointer hover:transition duration-75 ease-in-out ${darkMode ? "text-white" : "text-black"}`}
        >
          About
        </Link>
        <h1>|</h1>

        {/* Logout */}
        <div
          onClick={logout}
          className={`p-2 rounded-full hover:bg-gray-300 cursor-pointer ${darkMode ? "text-white" : "text-black"}`}
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
