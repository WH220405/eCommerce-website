import { registerUser } from "../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classes from "./Register.module.css";

const Register = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = e => {
    setUserInfo(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <h1 className={classes.h1}>Register</h1>
      <form className={classes.form} onSubmit={handleChange}>
        <label>
          Username:
          <input
            className={classes.username}
            type="text"
            id="usename"
            value={userInfo}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            className={classes.password}
            type="password"
            id="password"
            value={userInfo}
            onChange={handleChange}
          />
        </label>
        <button className={classes.btn}>Sign Up</button>
        <p className={"mt-3"}>
          Already a member?
          <Link to="/login">Log In</Link>
        </p>
      </form>
    </>
  );
};

export default Register;
