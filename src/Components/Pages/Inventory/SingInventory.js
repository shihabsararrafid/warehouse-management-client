import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GiPriceTag } from "react-icons/gi";
import { GrUpdate } from "react-icons/gr";
import {
  MdOutlineConfirmationNumber,
  MdEmojiTransportation,
  MdOutlineFeaturedPlayList,
} from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
const SingInventory = () => {
  const id = useParams();
  const itemid = id.id;
  //console.log(id.id);
  const [inventory, setInventory] = useState({});
  const [feature, setFeature] = useState([]);
  const [quantity, setQuantity] = useState("0");

  useEffect(() => {
    const url = `https://electra-warehouse-server-rafid.herokuapp.com/inventory/${itemid}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInventory(data);
        setFeature(data?.description?.Features?.split(","));
        setQuantity(data?.quantity);
      });
  }, [itemid]);
  const handleQuantity = () => {
    const newQuantity = parseInt(quantity) - 1;
    setQuantity(newQuantity);
    updateData();
  };
  console.log(quantity);
  const updateData = () => {
    console.log(quantity - 1);
    const url = `http://localhost:5000/inventory/${itemid}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: quantity - 1 }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="border-2 item-container relative mx-5 my-10 rounded-xl shadow-2xl h-[600px] bg-[#e1d3d302]">
      <h1 className="text-3xl item-header font-bold font-mono uppercase text-[#116F6A]">
        {inventory.name}
      </h1>
      <img className="w-[200px] block mx-auto" src={inventory.img} alt="" />
      <p className="text-lg  font-bold font-mono">
        Model:{inventory.description?.Model}
      </p>
      <p className="text-lg text-[#EE4C0F] font-bold font-mono">
        Brand:{inventory.description?.Brand}
        Lenght:{feature?.length}
      </p>
      <p className="text-lg flex items-center justify-center  font-bold font-mono">
        <GiPriceTag /> Price:{inventory.price} Tk
      </p>
      <p className="text-lg flex text-[#EE4C0F] items-center justify-center   font-bold font-mono">
        <MdOutlineConfirmationNumber /> Quantity:{quantity}
      </p>
      <p className="text-lg  flex items-center justify-center   font-bold font-mono">
        <MdEmojiTransportation /> Supplier:{inventory.supplier}
      </p>
      <span className="text-xl flex text-[#EE4C0F] items-center justify-center font-mono font-bold ">
        {" "}
        <MdOutlineFeaturedPlayList />
        Features:
      </span>
      {feature.map((single) => (
        <p className="text-lg flex items-center justify-center   font-bold font-mono">
          <span className="text-green-900">
            <IoAddCircleOutline />
          </span>{" "}
          {single}
        </p>
      ))}
      <button
        onClick={handleQuantity}
        className="font-semibold hover:bg-white hover:text-[#116F6A] duration-500 hover:border-[#116F6A] hover:border-[3px] absolute bottom-0  rounded-3xl uppercase flex justify-center items-center font-mono text-white w-[30%]   px-6 py-3 border-[2px] bg-[#116F6A]"
      >
        delivered
      </button>
    </div>
  );
};

export default SingInventory;
