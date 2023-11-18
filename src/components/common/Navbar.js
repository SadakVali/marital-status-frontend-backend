// imports from packages
import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";

// asset imports
import logo from "../../assets/Logo/logo.png";
import { NavbarLinks } from "../../assets/data/NavbarLinks";

const Navbar = () => {
  const location = useLocation();
  const matchRoute = (route) => matchPath({ path: route }, location.pathname);
  return (
    <div
      className="min-h-[15vh] flex flex-row justify-between items-center w-11/12 
      max-w-maxContent mx-auto"
    >
      {/* company Logo and name */}
      <Link to="/">
        <img src={logo} alt="Logo" loading="lazy" />
      </Link>
      {/* Navigation Links */}
      <nav className="block">
        <ul className="flex gap-x-6 justify-center items-center">
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              <Link to={`${link.path}`}>
                <p
                  className={`${
                    matchRoute(link?.path) ? "font-medium" : "font-light"
                  } text-richblack-5 text-[1.125rem] font-inter active:scale-90`}
                >{`${link.text}`}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Login, Signup, Dashboard */}
      <div className="flex items-center gap-x-4 text-richblack-5">
        <Link to="/login" className="active:scale-95">
          <button
            className={`${
              matchRoute("/login") && "font-bold"
            } rounded-lg border px-4 py-2`}
          >
            <p className="text-richblack-5 font-light">LogIn</p>
          </button>
        </Link>
        <Link to="/signup" className="active:scale-95">
          <button
            className={`${
              matchRoute("/signup") && "font-bold"
            } rounded-lg border px-4 py-2`}
          >
            <p className="text-richblack-5 font-light">SignUp</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
