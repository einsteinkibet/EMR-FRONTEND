// // // Define the hostedRoutePrefix
// // const hostedRoutePrefix = "http://example.com/api";

// // function Login() {
// //   const navigate = useNavigate();
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [role, setRole] = useState("receptionist");

// //   const handleLogin = (data) => {
// //     console.log(data);
// //     axios
// //       .post(`${hostedRoutePrefix}/authorization/Login`, data)  // Use hostedRoutePrefix here
// //       .then((res) => {
// //         console.log(res.data);
// //         localStorage.setItem("access_token", res.data.access_token);
// //         localStorage.setItem("refresh_token", res.data.refresh_token);
// //         localStorage.setItem(
// //           "current_user",
// //           JSON.stringify(res.data.current_user)
// //         );
// //         setJWToken(res.data.access_token);
// //         setCurrentUser(res.data.current_user);
// //         setIsLoggedIn(true);
// //         setIsAuthenticated(true);
// //         navigate("/products");
// //         console.log("CURRENT USER ID", res.data.current_user);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //         setIsLoggedIn(false);
// //         // setErrorMessages(error.response.data.message);
// //       });
// //     reset();
// //     setErrorMessages("");
// //   };
// //   return (
// //     <div className="login--container">
// //       <form onSubmit={handleLogin} className="login--form">
// //         {/* Your form elements */}
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;
// // Define the hostedRoutePrefix
// const hostedRoutePrefix = "http://example.com/api";

// function Login() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("receptionist");

//   const handleLogin = (data) => {
//     console.log(data);
//     axios
//       .post(`${hostedRoutePrefix}/authorization/Login`, data)  // Use hostedRoutePrefix here
//       .then((res) => {
//         console.log(res.data);
//         localStorage.setItem("access_token", res.data.access_token);
//         localStorage.setItem("refresh_token", res.data.refresh_token);
//         localStorage.setItem(
//           "current_user",
//           JSON.stringify(res.data.current_user)
//         );
//         setJWToken(res.data.access_token);
//         setCurrentUser(res.data.current_user);
//         setIsLoggedIn(true);
//         setIsAuthenticated(true);
//         navigate("/products");
//         console.log("CURRENT USER ID", res.data.current_user);
//       })
//       .catch((error) => {
//         console.log(error);
//         setIsLoggedIn(false);
//         // setErrorMessages(error.response.data.message);
//       });
//     reset();
//     setErrorMessages("");
//   };
//   return (
//     <div className="login--container">
//       <form onSubmit={handleLogin} className="login--form">
//         {/* Your form elements */}
//       </form>
//     </div>
//   );
// }

// export default Login;




// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './Login.css';

// // Define the hostedRoutePrefix
// const hostedRoutePrefix = "http://localhost:5555";

// function Login() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("receptionist");

//   const handleLogin = (e) => {
//     e.preventDefault(); // Prevent form submission

//     const data = {
//       username,
//       password,
//       role
//     };

//     axios.post(`${hostedRoutePrefix}/authorization/login`, data)
//       .then((res) => {
//         console.log(res.data);
//         localStorage.setItem("access_token", res.data.access_token);
//         localStorage.setItem("refresh_token", res.data.refresh_token);
//         localStorage.setItem("current_user", JSON.stringify(res.data.current_user));
//         // Set user state, authentication status, etc.
//         // Navigate based on the selected role
//         navigate(`/${role}`);
//       })
//       .catch((error) => {
//         console.log(error);
//         // Handle login error
//       });
//   };

//   return (
//     <div className="login--container">
//       <form onSubmit={handleLogin} className="login--form">
//         <label>Username</label>
//         <br />
//         <input
//           className="input--field"
//           type="text"
//           placeholder="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <br />
//         <label>Password</label>
//         <br />
//         <input
//           className="input--field"
//           type="password"
//           placeholder="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <label>Select Role</label>
//         <br />
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="receptionist">Receptionist</option>
//           <option value="nurse">Nurse</option>
//           <option value="doctor">Doctor</option>
//           <option value="admin">Admin</option>
//         </select>
//         <button className="submit--field" type="submit">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("receptionist"); // Default role is receptionist

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5555/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, role }), // Include role in the request body
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        // Redirect based on the selected role
        switch (role) {
          case "receptionist":
            navigate("/receptionist");
            break;
          case "nurse":
            navigate("/nurse");
            break;
          case "doctor":
            navigate("/doctor");
            break;
          case "admin":
            navigate("/admin");
            break;
          default:
            // Default redirect if role is not recognized
            navigate("/default");
            break;
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login--container">
      <form onSubmit={handleLogin} className="login--form">
        <label>Username</label>
        <br />
        <input
          className="input--field"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          className="input--field"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Role</label>
        <br />
        <select value={role} onChange={(e) => setRole(e.target.value)} className="select--field">
          <option value="receptionist">Receptionist</option>
          <option value="nurse">Nurse</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <button className="submit--field" type="submit">
          Login
        </button>
      </form>

      <h4>Don't have an account? <Link to='/register' >Register</Link></h4>
    </div>
  );
}

export default Login;

