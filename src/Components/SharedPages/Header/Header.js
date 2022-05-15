import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import logo from "./../../../Images/warehouse logo.webp";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div
      className={`h-[100px] bg-[#116F6A] ${open ? "h-[200px] " : "h-[100px]"}`}
    >
      <nav className="flex h-full w-[90%] mx-auto text-white items-center   justify-between">
        <div className="flex h-full items-center">
          {/* <img className="w-[80px]" src={logo}></img> */}
          <p className="uppercase header-text font-mono text-2xl font-bold">
            Electra Logistics{" "}
          </p>
        </div>
        <ul className="flex h-full items-center w-[50%] uppercase text-lg font-bold justify-around">
          <div
            className={`lg:flex h-full ${open ? "flex" : "hidden"} 
             ${open ? "flex-col" : "hidden "}
           
             items-center w-[95%] justify-around`}
          >
            <Link className="nav-bar" to="/home">
              Home
            </Link>
            <Link className="nav-bar" to="/blogs">
              blogs
            </Link>
            <Link className="nav-bar" to="/about">
              about
            </Link>
            <Link className="nav-bar" to="/login">
              login
            </Link>
          </div>
          <li onClick={() => setOpen(!open)} className="w-[10px] lg:hidden">
            <AiOutlineBars />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
