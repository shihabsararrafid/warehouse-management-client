import React from "react";
import { GiPriceTag } from "react-icons/gi";
import { GrUpdate } from "react-icons/gr";
import {
  MdOutlineConfirmationNumber,
  MdEmojiTransportation,
} from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./SingItem.css";
const SingItem = ({ item, open }) => {
  console.log(item._id);
  //Implementing delete operation by sending the id of the item to the server side
  const handleDeleteBtn = (id) => {
    console.log(id);
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="border-2 item-container relative mx-5 my-10 rounded-xl shadow-2xl h-[500px] bg-[#e1d3d302]">
      <h1 className="text-3xl item-header font-bold font-mono uppercase text-[#116F6A]">
        {item.name}
      </h1>
      <img className="w-[200px] block mx-auto" src={item.img} alt="" />

      <p className="text-lg  font-bold font-mono">
        Model:{item.description.Model}
      </p>
      <p className="text-lg text-[#EE4C0F] font-bold font-mono">
        Brand:{item.description.Brand}
      </p>
      <p className="text-lg flex items-center justify-center  font-bold font-mono">
        <GiPriceTag /> Price:{item.price} Tk
      </p>
      <p className="text-lg flex text-[#EE4C0F] items-center justify-center   font-bold font-mono">
        <MdOutlineConfirmationNumber /> Quantity:{item.quantity}
      </p>
      <p className="text-lg  flex items-center justify-center   font-bold font-mono">
        <MdEmojiTransportation /> Supplier:{item.supplier}
      </p>
      <div className="absolute bottom-0 w-full flex flex-col">
        <button
          onClick={() => handleDeleteBtn(item._id)}
          className={`font-semibold ${
            open ? "flex" : "hidden"
          } hover:bg-white hover:text-[#EE4C0F] duration-500 hover:border-[#EE4C0F] hover:border-[3px]   rounded-3xl uppercase  justify-center items-center font-mono text-white w-[100%]   px-6 py-3 border-[2px] bg-[#EE4C0F]`}
        >
          <span className="text-white">
            {" "}
            <AiFillDelete />
          </span>{" "}
          Delete Inventory{" "}
        </button>
        <Link to={`/inventory/${item._id}`}>
          <button className="font-semibold hover:bg-white hover:text-[#116F6A] duration-500 hover:border-[#116F6A] hover:border-[3px]   rounded-3xl uppercase flex justify-center items-center font-mono text-white w-[100%]   px-6 py-3 border-[2px] bg-[#116F6A]">
            <span className="text-white">
              {" "}
              <GrUpdate />
            </span>{" "}
            Stock Update{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingItem;
