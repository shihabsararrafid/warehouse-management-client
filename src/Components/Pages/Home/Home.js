import React from "react";
import "./Home.css";
import banner from "./../../../Images/Banner.jpg";

const Home = () => {
  return (
    <div className="banner h-[1000px] w-full">
      {/* <img className="w-full relative" src={banner}></img> */}

      <h1>Welcome to the home page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut aliquam
        maxime assumenda voluptate itaque hic accusantium consequatur,
        voluptates eum sequi autem dolorem totam porro obcaecati eveniet
        aspernatur perferendis labore tenetur!
      </p>
    </div>
  );
};

export default Home;
