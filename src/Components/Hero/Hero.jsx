// import React from "react";
// import "./Hero.css";
// import hand_icon from "../assets/hand_icon.png";
// import arrow_icon from "../assets/arrow.png";
// import hero_image from "../assets/hero_image.png";
// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero-left">
//         <h2>New Arrivals Only</h2>
//         <div>
//           <div className="hand-icon">
//             <p>New</p>
//             <img src={hand_icon} alt="" />
//           </div>
//           <p>Collection</p>
//           <p>For everyone</p>
//         </div>
//         <div className="hero-latest-btn">
//           <div>Latest Collection</div>
//           <img src={arrow_icon} alt="" />
//         </div>
//       </div>
//       <div className="hero-right">
//         <img src={hero_image} alt="" />
//       </div>
//     </div>
//   );
// };

import React from "react";
import "./Hero.css";
import Hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_img from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-left">
        <h2>New Arrivals</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={Hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>For everyone</p>
        </div>

        <div className="hero-latest-btn">
          {/* <a href="#newCollect" style={{ textDecoration: "none" }}> */}
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
          {/* </a> */}
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;

// export default Hero;
