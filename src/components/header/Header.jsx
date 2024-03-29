import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ isLoggedIn, handleLogout }) {
  const handleLogoutClick = () => {
    // Call handleLogout function provided by parent component
    handleLogout();
  };

  return (
    <div className="header">
      <div className="logo">EMR KENYA</div>
      <div className="nav-links">
        <ul>
          {isLoggedIn ? (
            <li>
              <button className="nav-link" onClick={handleLogoutClick}>
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}

        </ul>
      </div>
    </div>
  );
}

export default Header;
