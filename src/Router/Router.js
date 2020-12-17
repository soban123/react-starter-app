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
import Login from "../pages/login";
import Signup from "../pages/signup";
import About from "../pages/about";
import Dashboard from "../pages/dashboard";

export default function App() {
  return (
    <>
      <div>
        <Switch>
          <PrivateRoute path="/about">
            <About />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PublicRoute path="/login">
            <Login />
          </PublicRoute>

          <PublicRoute path="/signup">
            <Signup />
          </PublicRoute>
        </Switch>
      </div>
    </>
  );
}

// You can think of these components as "pages"
// in your app.

function PrivateRoute({ children, ...rest }) {
  let token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}

function PublicRoute({ children, ...rest }) {
  let token = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
            }}
          />
        )
      }
    />
  );
}
