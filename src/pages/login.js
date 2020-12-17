import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";

export default function Login(props) {
  let history = useHistory();

  const { state, dispatch } = useContext(Context);

  return (
    <div>
      <h2>Login</h2>
      <button
        onClick={() => {
          localStorage.setItem("token", "login");
          dispatch({ type: "login" });
          history.push("/dashboard");
        }}
      >
        {" "}
        Login{" "}
      </button>
    </div>
  );
}
