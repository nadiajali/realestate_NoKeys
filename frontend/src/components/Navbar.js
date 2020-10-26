import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import Alert from "./Alert";
import PropTypes from "prop-types";

const navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <a className="navbar_top_auth_link" onClick={logout} href="#!">
      Logout
    </a>
  );

  const guestLinks = (
    <Fragment>
      <Link className="navbar_top_auth_link" to="/login">
        Login
      </Link>
      <Link className="navbar_top_auth_link" to="/signup">
        Sign Up
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar_top">
          <div className="navbar_top_logo">
            <Link className="navbar_top_logo_link" to="/">
              Real Estate
            </Link>
          </div>
          <div className="navbar_top_auth">
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </div>
        </div>
        <div className="navbar_bottom">
          <li className="navbar_bottom_item">
            <NavLink className="navbar_bottom_item_link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar_bottom_item">
            <NavLink className="navbar_bottom_item_link" exact to="/listings">
              Listings
            </NavLink>
          </li>
          <li className="navbar_bottom_item">
            <NavLink className="navbar_bottom_item_link" exact to="/about">
              About
            </NavLink>
          </li>
          <li className="navbar_bottom_item">
            <NavLink className="navbar_bottom_item_link" exact to="/contact">
              Contact
            </NavLink>
          </li>
        </div>
      </nav>
      <Alert />
    </Fragment>
  );
};

navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(navbar);
