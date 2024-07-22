import React from "react";
import "./Newsletter.css";
const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1>Get Excliusive Offer in Email</h1>
      <p>Subs us and get updated</p>
      <div>
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
