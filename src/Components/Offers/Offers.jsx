import React from "react";
import exclusive_image from "../assets/exclusive_image.png";

import "./Offers.css";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <p>On Best Seller Products</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
