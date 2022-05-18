import React from "react";
import { Link } from "react-router-dom";
import { GiPriceTag } from "react-icons/gi";
import { GrUpdate } from "react-icons/gr";
import { BiAlarmAdd } from "react-icons/bi";
import {
  MdOutlineConfirmationNumber,
  MdEmojiTransportation,
} from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
const ItemSing = ({ item }) => {
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;
  console.log(item.email);
  const emaill = item.email;
  const found = emaill?.find((em) => em === user?.email);
  const addToMyItem = (itemId) => {
    const url = `https://electra-warehouse-server-rafid.herokuapp.com/addToMyItem/${itemId}?email=${user.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: email }),
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
        {found ? (
          <p className="font-semibold   duration-500   rounded-3xl uppercase flex justify-center items-center font-mono text-white w-[100%]   px-6 py-3 border-[2px] bg-red-500">
            <marquee behavior="" direction="">
              Already Added
            </marquee>
          </p>
        ) : (
          <button
            onClick={() => addToMyItem(item._id)}
            className="font-semibold hover:bg-white hover:text-[#116F6A] duration-500 hover:border-[#116F6A] hover:border-[3px]   rounded-3xl uppercase flex justify-center items-center font-mono text-white w-[100%]   px-6 py-3 border-[2px] bg-[#116F6A]"
          >
            <span className="text-white">
              {" "}
              <BiAlarmAdd />
            </span>{" "}
            Add to My Item
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemSing;
