import React from "react";
import { Link } from "react-router-dom";
import {  MdSmartToy } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-6 py-3 sticky top-0 z-50">
      <div className="flex-1 flex items-center gap-2">
      <MdSmartToy className="text-blue-900 w-7 h-7" />

        <Link to="/" className="text-2xl font-bold text-base-content hover:text-blue-900 transition-all">
          Fitness-App
        </Link>
      </div>

      <div className="flex-none hidden md:flex gap-4">
        <Link to="/" className="btn btn-ghost btn-sm text-base-content hover:text-blue-800">Home</Link>
        <Link to="/about" className="btn btn-ghost btn-sm text-base-content hover:text-blue-800">About</Link>
        {/* <Link to="/contact" className="btn btn-ghost btn-sm text-base-content hover:text-blue-800">Contact Us</Link> */}
        <Link to="/login" className="btn btn-ghost btn-sm text-base-content hover:text-blue-800">Login</Link>
      </div>

      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
        >
          <li><Link to="/">Home</Link></li>
          <li><Link  to ={'/about'}>About</Link></li>

           <li><Link to ={'/contact'}>Contact Us</Link></li>
          <li><Link to={'/login'}>Login</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
