import React from "react";
import "./Main.css";
import posterImage from "../assets/payment-poster.jpeg"; // Add an image inside the assets folder

const Main = () => {
  return (
    <main className="main-container">
      <div className="poster">
        <img src={posterImage} alt="Payments, UPI & Wallet Services" />
        </div>
    </main>
  );
};

export default Main;
