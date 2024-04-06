import React from "react";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar_logo ">
        {/* drive logo */}
        <img
          className="h-8 w-8"
          src="https://th.bing.com/th/id/OIP.UIXSFAAezcV0uSDiF-mpuwHaHa?w=205&h=205&c=7&r=0&o=5&dpr=1.7&pid=1.7"
          alt=""
        />
        <span className="text-#000ff mx-2"> Drive</span>
      </div>
      <div className="NavBar_search  mx-10">
        {/* search logo */}
        <img
          className="h-6 w-6"
          src="https://th.bing.com/th?id=OIP._RTO9yp1xH5aQA0vS7fpHAHaHW&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"
          alt=""
        />
        <input
          className="mx-3 border border-gray-800 "
          type="text"
          placeholder="  Search in Drive"
        />
      </div>
      <div className="Navbar_options">
        {/* lock logo */}
        <img
          className="h-7 w-6"
          src="https://th.bing.com/th/id/OIP.D9rdyMk2SX-uXlLNBHnHCAHaJD?w=180&h=220&c=7&r=0&o=5&dpr=1.7&pid=1.7"
        />
        {/* folder logo*/}
        <img
          className="h=8 w-8"
          src="https://th.bing.com/th/id/OIP.M2kl4iVwEQFXeOB7PbWcYgHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7"
        />
        {/* profile logo */}
        <img
          className="h-9 w-9 "
          src="https://th.bing.com/th/id/OIP.eCrcK2BiqwBGE1naWwK3UwHaHa?w=206&h=205&c=7&r=0&o=5&dpr=1.7&pid=1.7"
        />
      </div>
    </div>
  );
};
