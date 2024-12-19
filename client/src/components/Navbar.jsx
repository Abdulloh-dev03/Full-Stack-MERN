import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { IoSunny, IoMoon } from "react-icons/io5";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="container mx-auto flex justify-between items-center p-5 font-mono max-md:flex-col">
      <h1 className="text-4xl  bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
            <NavLink to={"/"}>ProductStore</NavLink>
        </h1>

      <div className="flex items-center gap-6 max-md:my-5">
        <NavLink to={"/create"}>
          <button
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white 
              rounded-md p-2 transition-all duration-300"
          >
            <CiSquarePlus size={24} />
          </button>
        </NavLink>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white 
            rounded-full p-2 transition-all duration-300"
        >
          {isDarkMode ? <IoSunny size={24} />:<IoMoon size={24} /> }
        </button>
      </div>
    </div>
  );
};

export default Navbar;
