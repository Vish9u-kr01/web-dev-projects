import React from "react";
import "./Loginmodal.css";

const Loginmodal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Login to Paytm</h2>
        <input type="text" placeholder="Enter Mobile Number" />
        <button>Send OTP</button>
      </div>
    </div>
  );
};

export default Loginmodal;



















