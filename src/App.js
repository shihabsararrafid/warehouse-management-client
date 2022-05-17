import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/SharedPages/Header/Header";
import Inventory from "./Components/Pages/Inventory/Inventory";
import SingInventory from "./Components/Pages/Inventory/SingInventory";
import AddItem from "./Components/Pages/AddItem/AddItem";
import { ToastContainer } from "react-toastify";
import Login from "./Components/Pages/Home/Login/Login";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/additem" element={<AddItem></AddItem>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/inventory/:id"
          element={<SingInventory></SingInventory>}
        ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
