import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css" 

function Header() {
  return (
    <div className="header">
      <div className="logo">
        EMR KENYA
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link className="nav-link" to="/">
              login
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header