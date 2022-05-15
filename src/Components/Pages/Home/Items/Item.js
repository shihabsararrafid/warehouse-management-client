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
      <h1>This is the item section</h1>
      <p>{item.length}</p>
      <div className="grid grid-cols-3 items-center justify-center">
        {item.map((sgItem) => (
          <SingItem item={sgItem}></SingItem>
        ))}
      </div>
    </div>
  );
};

export default Item;
