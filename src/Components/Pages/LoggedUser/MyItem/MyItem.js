import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { GiPriceTag } from "react-icons/gi";
import { GrUpdate } from "react-icons/gr";
import { BiAlarmAdd } from "react-icons/bi";
import {
  MdOutlineConfirmationNumber,
  MdEmojiTransportation,
} from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
const MyItem = () => {
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;
  console.log(email);
  const [myItem, setMyItem] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/myItem/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItem(data));
  }, []);
  return (
    <div>
      <h1>You Have Added {myItem.length} items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myItem.map((itm) => (
          <div className="border-2 relative  lg:grid-cols-3 md:grid-cols-2 grid-cols-1  item-container relative mx-5 my-10 rounded-xl shadow-2xl h-[500px] bg-[#e1d3d302]">
            <div>
              <h1 className="text-3xl item-header font-bold font-mono uppercase text-[#116F6A]">
                {itm.name}
              </h1>
              <img className="w-[200px] block mx-auto" src={itm.img} alt="" />

              <p className="text-lg  font-bold font-mono">
                Model:{itm.description.Model}
              </p>
              <p className="text-lg text-[#EE4C0F] font-bold font-mono">
                Brand:{itm.description.Brand}
              </p>
              <p className="text-lg flex items-center justify-center  font-bold font-mono">
                <GiPriceTag /> Price:{itm.price} Tk
              </p>
              <p className="text-lg flex text-[#EE4C0F] items-center justify-center   font-bold font-mono">
                <MdOutlineConfirmationNumber /> Quantity:{itm.quantity}
              </p>
              <p className="text-lg  flex items-center justify-center   font-bold font-mono">
                <MdEmojiTransportation /> Supplier:{itm.supplier}
              </p>
              <button className="font-semibold absolute bottom-0   hover:bg-white hover:text-[#116F6A] duration-500 hover:border-[#116F6A] hover:border-[3px]   rounded-3xl uppercase flex justify-center items-center font-mono text-white w-[100%]   px-6 py-3 border-[2px] bg-[#116F6A]">
                <span className="text-white">
                  {" "}
                  <AiFillDelete />
                </span>{" "}
                Delete This Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
