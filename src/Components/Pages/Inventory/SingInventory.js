import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GiPriceTag, GiReturnArrow } from "react-icons/gi";
import { GrUpdate } from "react-icons/gr";
import { IconName } from "react-icons/gi";
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
    updateData(newQuantity);
  };
  const handleRestock = (e) => {
    e.preventDefault();
    const amount = parseInt(e.target.amount.value);
    if (amount >= 0) {
      const newQuantity = parseInt(quantity) + amount;
      setQuantity(newQuantity);
      updateData(newQuantity);
    }

    e.target.amount.value = "";
  };
  const updateData = (any) => {
    //console.log(quantity - 1);
    const url = `https://electra-warehouse-server-rafid.herokuapp.com/inventory/${itemid}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: any }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="border-2 item-container relative mx-5 my-10 rounded-xl shadow-2xl h-auto bg-[#e1d3d302]">
      <h1 className="text-3xl item-header font-bold font-mono uppercase text-[#116F6A]">
        {inventory.name}
      </h1>
      <img className="w-[200px] block mx-auto" src={inventory.img} alt="" />
      <p className="text-lg  font-bold font-mono">
        Model:{inventory.description?.Model}
      </p>
      <p className="text-lg text-[#EE4C0F] font-bold font-mono">
        Brand:{inventory.description?.Brand}
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
      <br />
      <br />
      <form
        onSubmit={handleRestock}
        className=" my-10 w-full mx-auto  lg:w-[40%] lg:right-0 flex flex-row "
      >
        <input
          className="border-2 text-center rounded-lg border-[#116F6A]"
          type="number"
          name="amount"
          id=""
          defaultValue={0}
          placeholder="Re Stock Amount"
        />
        <input
          className="font-semibold  hover:bg-white hover:text-[#116F6A] duration-500 hover:border-[#116F6A] hover:border-[3px]   rounded-3xl uppercase flex justify-center items-center font-mono text-white w-[60%]  lg:w-full   px-6 py-3 border-[2px] bg-[#116F6A]"
          type="submit"
          value="Re Stock"
        />
      </form>
      <Link to="/inventory">
        <button className="font-semibold text-2xl  my-9 lg:left-1/3 left-1/4  mx-auto hover:bg-white hover:text-[#EE4C0F] duration-500 hover:border-[#EE4C0F] hover:border-[3px]   rounded-3xl uppercase flex justify-center items-center font-mono text-white w-[60%]  lg:w-[30%]   px-6 py-3 border-[2px] bg-[#EE4C0F]">
          Manage Inventories
        </button>
      </Link>

      <button
        onClick={handleQuantity}
        className="font-semibold lg:left-1/3 left-1/4  mx-auto hover:bg-white hover:text-[#116F6A] duration-500 hover:border-[#116F6A] hover:border-[3px] absolute bottom-0  rounded-3xl uppercase flex justify-center items-center font-mono text-white w-[60%]  lg:w-[30%]   px-6 py-3 border-[2px] bg-[#116F6A]"
      >
        delivered
      </button>

      <br />
    </div>
  );
};

export default SingInventory;
