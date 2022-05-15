import React, { useEffect, useState } from "react";
import SingItem from "../SingItem/SingItem";

const Item = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("item.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-6xl font-mono font-bold text-[#116F6A]">
        STORED ITEMS
      </h1>

      <div className="grid grid-cols-3 items-center justify-center">
        {item.map((sgItem) => (
          <SingItem item={sgItem}></SingItem>
        ))}
      </div>
    </div>
  );
};

export default Item;
