import React, { useEffect, useState } from "react";
import SingItem from "../Home/SingItem/SingItem";
import "./Inventory.css";
const Inventory = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("https://electra-warehouse-server-rafid.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return (
    <div>
      <h1 className="text-center flex justify-center text-6xl font-mono font-bold text-[#4209c5]">
        ALL INVENTORIES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        {inventories.map((sgItem) => (
          <SingItem open={true} key={sgItem._id} item={sgItem}></SingItem>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
