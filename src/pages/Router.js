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

function Login(props) {
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
function Signup() {
  return (
    <div>
      <h2>Signup</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

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
