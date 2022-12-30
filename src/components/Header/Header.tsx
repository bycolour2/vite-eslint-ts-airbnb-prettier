import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

export const Header: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <header
      className={`border-b-2 border-gray-800 bg-white text-gray-900 dark:border-gray-400 dark:bg-gray-800 dark:text-gray-100`}
    >
      <div className="container mx-auto flex items-center justify-between py-2">
        <div className="text-center">
          <NavLink to="/" className="text-sm font-medium">
            Logo here
          </NavLink>
        </div>
        <nav className="flex items-center justify-between gap-4 px-4 py-2">
          <NavLink
            to="/"
            className="group text-sm font-medium transition duration-300"
          >
            Home
            <span
              className={`block h-0.5 max-w-0 ${
                darkMode ? 'bg-white' : 'bg-gray-800'
              } transition-all duration-500 group-hover:max-w-full`}
            ></span>
          </NavLink>
          <NavLink
            to="/about"
            className="group text-sm font-medium transition duration-300"
          >
            About
            <span
              className={`block h-0.5 max-w-0 ${
                darkMode ? 'bg-white' : 'bg-gray-800'
              } transition-all duration-500 group-hover:max-w-full`}
            ></span>
          </NavLink>
          <NavLink
            to="/contact"
            className="group text-sm font-medium transition duration-300"
          >
            Contact
            <span
              className={`block h-0.5 max-w-0 ${
                darkMode ? 'bg-white' : 'bg-gray-800'
              } transition-all duration-500 group-hover:max-w-full`}
            ></span>
          </NavLink>
        </nav>

        <div className="flex flex-row items-center justify-center gap-4">
          <DarkModeToggle />
          <NavLink
            to="/login"
            className="group text-sm font-medium transition duration-300"
          >
            Login
            <span
              className={`block h-0.5 max-w-0 ${
                darkMode ? 'bg-white' : 'bg-gray-800'
              } transition-all duration-500 group-hover:max-w-full`}
            ></span>
          </NavLink>
          <NavLink
            to="/register"
            className="group text-sm font-medium transition duration-300"
          >
            Register
            <span
              className={`block h-0.5 max-w-0 ${
                darkMode ? 'bg-white' : 'bg-gray-800'
              } transition-all duration-500 group-hover:max-w-full`}
            ></span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
