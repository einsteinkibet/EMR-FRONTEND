// import { useEffect, useState } from 'react';
// import './Register.css';
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [role, setRole] = useState(''); // Add role state
//   const [passwordError, setPasswordError] = useState('');

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Password validation
//     if (password !== confirmPassword) {
//       setPasswordError('Passwords do not match');
//       return;
//     }

//     try {
//       // API call logic here
//       const response = await fetch('http://127.0.0.1:5555/user/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json;charset=utf-8',
//         },
//         body: JSON.stringify({ username, password, role }), // Include role in the request body
//         // mode: 'cors',
//       });

//       const data = await response.json();
//       console.log(data);

//       alert('User registered successfully');
      
//       navigate('/login');
//       console.log('done');
//     } catch (error) {
//       console.error('This is the error:', error);
//     }
//   };

//   return (
//     <div className="register--container">
//       <form onSubmit={handleSubmit} className="register--form">
//         <label>Username</label>
//         <br />
//         <input
//           value={username}
//           onChange={handleUsernameChange}
//           className="input--field"
//           type="text"
//         />
//         <br />
//         <label>Password</label>
//         <br />
//         <input
//           value={password}
//           onChange={handlePasswordChange}
//           className="input--field"
//           type="password"
//         />
//         <br />
//         <label>Confirm Password</label>
//         <br />
//         <input
//           value={confirmPassword}
//           onChange={handleConfirmPasswordChange}
//           className="input--field"
//           type="password"
//         />
//         <br />
//         <label>Role</label>
//         <br />
//         <select
//           value={role}
//           onChange={handleRoleChange}
//           className="input--field"
//         >
//           <option value="">Select Role</option>
//           <option value="admin">Admin</option>
//           <option value="doctor">Doctor</option>
//           <option value="nurse">Nurse</option>
//           <option value="receptionist">Receptionist</option>
//           {/* Add more options as needed */}
//         </select>
//         <br />
//         {passwordError && <p className="error-message">{passwordError}</p>}
//         <br />
//         <button className="submit--field" type="submit">
//           Register
//         </button>
//       </form>

//       <h4 className='already-have-account'>Already have an Account?
//         <Link to='/login' >Login</Link>
//       </h4>
//     </div>
//   );
// }

// export default Register;



import { useEffect, useState } from 'react';
import './Register.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [role, setRole] = useState('receptionist'); // Default role is receptionist

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    try {
      //  API call logic here
      const response = await fetch('http://127.0.0.1:5555/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ username, password, role }), // Include role in the request body
        // mode: 'cors',
      });

      const data = await response.json();
      console.log(data);

      alert('User registered successfully');
      
      navigate('/Login');
      console.log('done');
    } catch (error) {
      console.error('This is the error:', error);
    }
  };

  return (
    <div className="register--container">
      <form onSubmit={handleSubmit} className="register--form">
        <label>Username</label>
        <br />
        <input
          value={username}
          onChange={handleUsernameChange}
          className="input--field"
          type="text"
          required
        />
        <br />
        <label>Password</label>
        <br />
        <input
          value={password}
          onChange={handlePasswordChange}
          className="input--field"
          type="password"
          required
        />
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="input--field"
          type="password"
          required
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
        <br />
        <label>Role</label>
        <br />
        <select value={role} onChange={handleRoleChange} className="select--field">
          <option value="receptionist">Receptionist</option>
          <option value="nurse">Nurse</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <button className="submit--field" type="submit">
          Register
        </button>
        <h4 className='already-have-account'>Already have an Account?
          <Link to='/login'>Login</Link>
        </h4>
      </form>
    </div>
  );
}

export default Register;
