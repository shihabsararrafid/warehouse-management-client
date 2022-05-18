import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import logo from "./../../../Images/warehouse logo.webp";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const signingOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        alert("sign out successful");
      })
      .catch((error) => {
        alert("error occured while signing out");
      });
  };
  //console.log(open);
  return (
    <div
      className={`lg:h-[100px] bg-[#116F6A] ${
        open ? "h-[300px] " : "h-[100px]"
      }`}
    >
      <nav className="flex h-full w-[90%] mx-auto text-white items-center   justify-between">
        <div className="flex h-full items-center">
          {/* <img className="w-[80px]" src={logo}></img> */}
          <p className="uppercase header-text font-mono text-2xl font-bold">
            Electra warehouse
          </p>
        </div>
        <ul className="flex h-full items-center w-[70%] uppercase text-lg font-bold justify-around">
          <div
            className={`lg:flex lg:flex-row h-full ${open ? "flex" : "hidden"} 
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
            <div className="group">
              {user ? (
                <button
                  className="block hover:text-red-600 font-bold uppercase box-border duration-700 border-black"
                  onClick={signingOut}
                >
                  Sign out
                </button>
              ) : (
                <>
                  <Link
                    className="block hover:text-[#07F31F]  box-border duration-700 border-black"
                    to="/login"
                  >
                    Login
                  </Link>
                  <div className="    group-hover:border-[#07F31F] duration-700 border-black"></div>
                </>
              )}
              {user ? (
                <div className="flex lg:flex-row flex-col items-center">
                  <p className="text-sm text-white">
                    {user.displayName?.slice(0, 12)}
                  </p>
                  <div className="flex flex-col text-lg">
                    <p>
                      <Link to="/managemyitem">Manage My Items</Link>
                    </p>
                    <p>
                      <Link to="/myitem">My Items</Link>
                    </p>
                  </div>

                  <div className="w-[60px] rounded-full flex justify-center bg-white">
                    <img
                      className="w-[50px] p-1  rounded-full"
                      src={user.photoURL ? user.photoURL : ""}
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
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
