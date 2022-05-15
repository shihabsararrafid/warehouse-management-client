import React from "react";
import img from "./../../../../Images/Banner.jpg";
import "./Banner.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="banner h-[1000px] lg:h-[700px] w-full">
      {/* <img className="w-full relative" src={banner}></img> */}

      <div className="left-banner h-full justify-center items-center grid grid-cols-1 lg:grid-cols-2">
        <h1 className="text-5xl  text-white">
          Welcome to the <br />
          <span
            className="
        text-[#0B19F7] font-mono font-bold uppercase text-6xl"
          >
            Electra Warehouse
          </span>
        </h1>
        <p className="text-2xl text-[#e80505] text-justify font-mono font-semibold text-white">
          This is the website to maintain the products of our main website{" "}
          <a className="text-red-600" href="/electra">
            Electra
          </a>
          This is only for the valid users not for any usual person.
          <br /> It is used for the following purposes :
          <ol className="text-justify">
            <li className="flex items-center">
              <span className="text-black">
                {" "}
                <BsFillArrowRightSquareFill />
              </span>{" "}
              <p className="ml-2">To know the stock of any product</p>
            </li>
            <li className="flex items-center">
              <span className="text-black">
                {" "}
                <BsFillArrowRightSquareFill />
              </span>{" "}
              <p className="ml-2">To know the price of any product</p>
            </li>
            <li className="flex items-center">
              <span className="text-black">
                {" "}
                <BsFillArrowRightSquareFill />
              </span>{" "}
              <p className="ml-2">
                To know the selling statistics of any product
              </p>
            </li>
            <li className="flex items-center">
              <span className="text-black">
                {" "}
                <BsFillArrowRightSquareFill />
              </span>{" "}
              <p className="ml-2">
                TTo know the delivery status of any product
              </p>
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default Banner;
