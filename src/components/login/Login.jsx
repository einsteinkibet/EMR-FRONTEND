import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";

function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("receptionist");
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5555/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        // Call handleLogin function provided by parent component
        handleLogin();

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
            navigate("/default");
            break;
        }
      } else {
        setErrorMessage(data.message); // Set error message if login fails
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login--container">
      <form onSubmit={handleSubmit} className="login--form">
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

      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if present */}
      
      <h4>Don't have an account? Contact admin</h4>
    </div>
  );
}

export default Login;
