import React, { useState, useEffect } from "react";
import axios from "axios";
import { setAlert } from "./alert";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

export const login = (email, password) => async (dispatch) => {
  const [host, setHost] = useState("");
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // Production Code
      setHost("https://nadiajali-realestate.herokuapp.com");
      console.log("NODE_ENV = PRODUCTION");
    } else {
      // Development Code
      setHost("http://localhost:8080");
      console.log("NODE_ENV = NOT PRODUCTION");
    }
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(host + "/api/token/", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert("Authenticated successfully.", "success"));
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch(setAlert("Error Authenticating.", "error"));
  }
};

export const signup = ({ name, email, password, password2 }) => async (
  dispatch
) => {
  const [host, setHost] = useState("");
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // Production Code
      setHost("https://nadiajali-realestate.herokuapp.com");
      console.log("NODE_ENV = PRODUCTION");
    } else {
      // Development Code
      setHost("http://localhost:8080");
      console.log("NODE_ENV = NOT PRODUCTION");
    }
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password, password2 });

  try {
    const res = await axios.post(host + "/api/accounts/signup", body, config);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });

    dispatch(login(email, password));
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL,
    });

    dispatch(setAlert("Error Authenticating.", "error"));
  }
};

export const logout = () => (dispatch) => {
  dispatch(setAlert("Logout successful.", "success"));
  dispatch({ type: LOGOUT });
};
