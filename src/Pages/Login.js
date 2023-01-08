import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  //setting input values to the setValues function
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(values);

    // checking if input fields have values or not
    // then if there are not values show error
    if (!values.email || !values.password) {
      setErr("Fill all fields");
      return;
    }
    setErr("");
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        navigate("/tictactoe");
      })
      .catch((err) => {
        setErr(err.message);
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="login_container">
        <div className="log_msg">
          <Link to="/">
            <p>
              <i className="arrow left"></i>
            </p>
          </Link>
          <p>Login</p>
          <h1>Please enter your details</h1>
        </div>
        <form className="form_container" onSubmit={submitHandle}>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button className="btn" type="submit">
            Sign in
          </button>
          <b className="err">{err}</b>
        </form>
        <p>
          Don't have an account <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
