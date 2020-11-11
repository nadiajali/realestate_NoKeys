import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";

const Login = ({ login, isAuthenticated }) => {
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
  
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password, host);
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="auth">
      <Helmet>
        <title>Real Estate - Login</title>
        <meta name="description" content="login page" />
      </Helmet>
      <h1 className="auth_title">Sign In</h1>
      <p className="auth_lead">Sign Into Your Account</p>
      <form className="auth_form" onSubmit={(e) => onSubmit(e)}>
        <div className="auth_form_group">
          <input
            className="auth_form_input"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="auth_form_group">
          <input
            className="auth_form_input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>
        <button className="auth_form_button">Login</button>
      </form>
      <p className="auth_authtext">
        Don't have an account?{" "}
        <Link classname="auth_authtext_link" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
