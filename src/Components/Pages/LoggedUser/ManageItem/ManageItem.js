import React, { useEffect, useState } from "react";
import Item from "../../Home/Items/Item";
import ItemSing from "./ItemSing";

const ManageItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://electra-warehouse-server-rafid.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        {items.map((sgItem) => (
          <ItemSing item={sgItem}></ItemSing>
        ))}
      </div>
    </div>
  );
};

export default ManageItem;
