import { useState } from "react";
import { loginUser } from "../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await loginUser("auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div classname={classes.form}>
      <h1 className={classes.h1}>LOG IN</h1>
      <form className={classes.container} onSubmit={handleLogin}>
        <label>First Name</label>
        <input
          className={classes.input}
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label>password</label>
        <input
          className={classes.input}
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {/* <label>password</label>
        <input
          className={classes.input}
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label>Email</label>
        <input
          className={classes.input}
          type="email"
          placeholder="Enter email"
          id="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /> */}
        <button className={classes.login} type="submit" onClick={handleLogin}>
          LOG IN
        </button>
        <p className={"mt-3"}>
          Don't have an account?
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
