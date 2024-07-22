import React from "react";
import "./CSS/LoginSignup.css";

const LogInSignUp = () => {
  return (
    <div className="signinsignup">
      <div className="signinsignup-container">
        <h1>Sign Up</h1>
        <div className="signinsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="signinsignup-signin">
          Already have an account? <span> Login here</span>
        </p>
        <div className="signinsignup-agree">
          <input type="checkbox" id="" name="" />
          <p>By continuing, I agree the terms of use and privacy.</p>
        </div>
      </div>
    </div>
  );
};

export default LogInSignUp;
