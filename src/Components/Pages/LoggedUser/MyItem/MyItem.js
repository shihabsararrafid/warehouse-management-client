import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

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
    </div>
  );
};

export default MyItem;
