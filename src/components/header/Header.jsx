// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// function Header({ isLoggedIn, handleLogout }) {
//   return (
//     <div className="header">
//       <div className="logo">EMR KENYA</div>
//       <div className="nav-links">
//         <ul>
//           {isLoggedIn ? (
//             <li>
//               <button className="nav-link" onClick={handleLogout}>
//                 Logout
//               </button>
//             </li>
//           ) : (
//             <li>
//               <Link className="nav-link" to="/login">
//                 Login
//               </Link>
//             </li>
//           )}
//           <li>
//             <Link className="nav-link" to="/register">
//               Register
//             </Link>
//           </li>
//           <li>
//             <Link className="nav-link" to="/about">
//               About Us
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Header;


// Header.jsx
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

export default Header;
