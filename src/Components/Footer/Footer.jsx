import React from "react";
import "./Footer.css";
import footer_logo from "../assets/logo.png";
import insta_icon from "../assets/instagram_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Moonlight Upahar</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={insta_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
