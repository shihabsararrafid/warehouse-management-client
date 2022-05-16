import React from "react";
import "./Home.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import banner from "./../../../Images/Banner.jpg";
import Banner from "./Banner/Banner";
import Item from "./Items/Item";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Item></Item>
      <Link to="/inventory">
        <button className="font-semibold lg:w-1/2 block mx-auto hover:bg-white text-3xl hover:text-[#EE4C0F] duration-500 hover:border-[#EE4C0F] rounded-full hover:border-[3px]  uppercase flex justify-center items-center font-mono text-white w-[100%]   px-6 py-3 border-[2px] bg-[#EE4C0F]">
          Manage Inventories
        </button>
      </Link>
    </div>
  );
};

export default Home;
