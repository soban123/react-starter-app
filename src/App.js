import Router from "./Router/Router";
import Nav from "./components/Nav";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "./context/index";
import { BrowserRouter, Link } from "react-router-dom";

export default function App() {
  const [Token, setToken] = useState("");
  const { state, dispatch } = useContext(Context);
  console.log(state, "state");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      dispatch({ type: "login" });
    }
  }, []);
  return (
    <BrowserRouter>
      {state.login ? <Nav /> : ""}
      <Router Token={Token} />
    </BrowserRouter>
  );
}
