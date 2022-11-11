import React, { useState } from "react";
import styles from "./login.module.css";
import logo from "../../assets/logo.png";
import {  Navigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);

  const validar = () => {
    if (user === "" || password === "") {
      return;
    }
    if (user === "eduardo" && password === "1234") {
      alert(`Welcome ${user} `);
      setValidate(true);
    } else {
      alert("Usuario y/o password invalido");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.contLogo}>
        <img className={styles.imgLogo} src={logo} alt={"logo"} />
      </div>
      <div className={styles.contform}>
        <form>
          <div className={styles.campo}>
            <h2>Log In</h2>
            <label>Username</label>
            <input
              className={styles.btnUser}
              placeholder="Username"
              type={"text"}
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              className={styles.btnPass}
              placeholder="Password"
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              className={styles.btnSend}
              type={"submit"}
              value={"Log In"}
              onClick={validar}
            />
            {validate && <Navigate to={`/dashboard/${user}`} />}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
