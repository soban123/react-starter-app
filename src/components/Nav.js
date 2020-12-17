import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context/index";
export default function Nav() {
  const { state, dispatch } = useContext(Context);
  let history = useHistory();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              {state.login && (
                <li
                  className="nav-item"
                  onClick={() => {
                    history.push("/login");
                    localStorage.clear();
                    dispatch({ type: "logout" });
                  }}
                >
                  <Link className="nav-link active" to="/login">
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
