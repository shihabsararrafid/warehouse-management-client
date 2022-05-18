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
import Register from "./Components/Authentication/Register/Register";
import NotFound from "./Components/Pages/NotFound/NotFound";
import ManageItem from "./Components/Pages/LoggedUser/ManageItem/ManageItem";
import MyItem from "./Components/Pages/LoggedUser/MyItem/MyItem";
import RequireAuth from "./Components/RequireAuth/RequieAuth";
import Blogs from "./Components/Pages/Blogs/Blogs";

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
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <SingInventory></SingInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/managemyitem"
          element={
            <RequireAuth>
              <ManageItem></ManageItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer autoClose={8000} />
    </div>
  );
}

export default App;
