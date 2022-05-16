import React, { useEffect, useState } from "react";
import SingItem from "../Home/SingItem/SingItem";

const Inventory = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("https://electra-warehouse-server-rafid.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-6xl font-mono font-bold text-[#116F6A]">
        ALL INVENTORIES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        {inventories.map((sgItem) => (
          <SingItem item={sgItem}></SingItem>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
