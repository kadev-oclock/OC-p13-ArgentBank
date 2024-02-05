import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/image/argentBankLogo.png";
import { useSelector } from "react-redux";
import "./Nav.css";



export default function Nav() {
  const token = useSelector((state) => state.token.token);
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
        {(token)?
        <Link className="main-nav-item" to="/logout">
        <i className="fa fa-user-circle"></i>
        Sign out
      </Link>
        :
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
        }
        
      </div>
    </nav>
  );
}
