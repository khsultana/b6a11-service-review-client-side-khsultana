import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
import {
  FaHome,
  FaCaretRight,
  FaUser,
  FaCartPlus,
  FaQuestion,
} from "react-icons/fa";

const Header = () => {
  const menuItem = (
    <>
      <li>
        <Link className="font-semibold" to="/">
          <FaHome></FaHome> Home
        </Link>
        <Link className="font-semibold" to="/">
          <FaCaretRight /> Category
        </Link>
        <Link className="font-semibold" to="/">
          <FaCartPlus /> Cart
        </Link>
        <Link className="font-semibold" to="/login">
          <FaUser /> Login
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar mb-4 mt-4 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link className="flex items-center justify-center gap-3" to="/">
          <div>
            <img
              className="shadow-lg rounded-full"
              style={{ height: "80px" }}
              src={logo}
              alt=""
            />
          </div>
          <div>
            <h2 className="font-bold text-orange-600 font-serif text-lg">
              Sultana's{" "}
              <Link className="text-black" href="/" alt>
                Kitchen
              </Link>
            </h2>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-outline btn-error rounded-none">
          Ask Us <FaQuestion />
        </Link>
      </div>
    </div>
  );
};

export default Header;
