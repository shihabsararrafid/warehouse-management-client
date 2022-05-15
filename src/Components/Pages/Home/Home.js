import React from "react";
import "./Home.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import banner from "./../../../Images/Banner.jpg";
import Banner from "./Banner/Banner";
import Item from "./Items/Item";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Item></Item>
    </div>
  );
};

export default Home;
