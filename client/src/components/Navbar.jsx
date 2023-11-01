import React from "react";

const Navbar = () => {
  return (
    <div className="flex px-5 py-2 justify-between border-b-2 border-black">
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
          type="text"
          className="border px-2 py-1 text-2xl w-80 border-gray-500 rounded-tl-lg rounded-bl-lg"
          placeholder="Search"
        />
        <button className="bg-black text-2xl text-white px-2 py-1 rounded-tr-lg rounded-br-lg">
          Search
        </button>
      </div>
      <div className="flex font-bold text-2xl gap-4">
        <h1>Home</h1>
        <h1>|</h1>
        <h1>Contact</h1>
        <h1>|</h1>
        <h1>Profile</h1>
        <h1>|</h1>
        <h1>About</h1>
        <h1>|</h1>

        <div className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
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
