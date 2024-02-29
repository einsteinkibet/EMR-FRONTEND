import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Receptionist from './components/receptionist/Receptionist';
import Nurse from './components/nurse/Nurse';
import Doctor from './components/doctor/Doctor';
import Patient_details from './components/patient_details/Patient_details';
import Edit_description from './components/edit_description/Edit_description';
import './App.css';
import Admin from './components/admin/Admin';
import Pending from './components/pending/Pending';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userCount, setUserCount] = useState([]);


  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/receptionist" element={isLoggedIn ? <Receptionist /> : <Navigate to="/" />} />
        <Route path="/nurse" element={isLoggedIn ? <Nurse /> : <Navigate to="/" />} />
        <Route path="/doctor" element={isLoggedIn ? <Doctor /> : <Navigate to="/" />} />
        <Route path="/patient/:id" element={isLoggedIn ? <Patient_details /> : <Navigate to="/" />} />
        <Route path="/patient/:id/edit_description" element={isLoggedIn ? <Edit_description /> : <Navigate to="/" />} />
        <Route path="/admin" element={isLoggedIn ? <Admin /> : <Navigate to="/" />} />
        <Route path="/pending" element={isLoggedIn? <Pending /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
