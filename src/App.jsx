import "./App.css";
import Navbar from "./component/Navbar";
import Address from "./component/Address";
import FoodCard from "./component/FoodCard";
import { useState } from "react";
import cartImg from "./asset/cart.jpg";
import { Routes, Route, Outlet } from "react-router-dom";
import Payment from "./component/Payment";

function App() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const [number, setNumber] = useState(1);
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        {number == 0 ? (
          <>
            <div className="cart-page">
              <div className="cart-empty">
                <img src={cartImg} alt="" />
                <h3>Your Cart is Empty</h3>
                <p>You can go to home page to view more restaurants</p>
                <button
                  className="btn"
                  onClick={() => {
                    setNumber(1);
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <Address />
            <FoodCard number={number} setNumber={setNumber} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
