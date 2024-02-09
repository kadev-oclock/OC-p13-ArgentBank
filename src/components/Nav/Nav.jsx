import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/image/argentBankLogo.png";
import { useSelector } from "react-redux";
import "./Nav.css";

export default function Nav() {
  const token = useSelector((state) => state.token.token);
  const profile = useSelector((state) => state.profile.profile);
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {(token) ? (
          <div>
            {profile && profile.firstName && profile.lastName ? (
              <Link to="/user" className="main-nav-item">
                <span className="space_nav">{profile.firstName} {profile.lastName}</span>
              </Link>
            ) : null}
            <Link className="main-nav-item" to="/logout">
              <i className="fa fa-user-circle"></i>
              Sign out
            </Link>
          </div>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
