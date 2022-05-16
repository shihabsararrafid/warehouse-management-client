import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingItem from "../Home/SingItem/SingItem";
import "./Inventory.css";
const Inventory = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("https://electra-warehouse-server-rafid.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, [inventories]);
  // getting id from child compo sothat I can delete the item from the ui also
  const getId = (itemId) => {
    const newInventoriea = inventories.filter((inv) => inv._id !== itemId);
    setInventories(newInventoriea);
  };
  return (
    <div>
      <h1 className="text-center flex justify-center text-6xl font-mono font-bold text-[#4209c5]">
        ALL INVENTORIES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        {inventories.map((sgItem) => (
          <SingItem
            getId={getId}
            open={true}
            key={sgItem._id}
            item={sgItem}
          ></SingItem>
        ))}
      </div>
      <Link to="/additem">
        <button className="font-semibold text-2xl  my-9 lg:left-1/3 left-1/4  mx-auto hover:bg-white hover:text-[#1aee0f] duration-500 hover:border-[#1aee0f] hover:border-[3px]   rounded-3xl uppercase flex justify-center items-center font-mono text-white w-[60%]  lg:w-[30%]   px-6 py-3 border-[2px] bg-[#1aee0f]">
          Add New Item
        </button>
      </Link>
    </div>
  );
};

export default Inventory;
