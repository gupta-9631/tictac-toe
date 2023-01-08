import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome_container">
        <div className="msg">
          <div>async</div>
          <h1>tic tac</h1>
          <h1>toe</h1>
        </div>
        <div className="btn_container">
          <Link to="/login" className="login_btn">
            <button className="login_btn">Login</button>
          </Link>
          <Link to="register" className="reg_btn">
            <button className="reg_btn">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
