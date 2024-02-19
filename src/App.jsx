
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Receptionist from './components/receptionist/Receptionist';
import Nurse from './components/nurse/Nurse';
import Doctor from './components/doctor/Doctor';
import Patient_details from './components/patient_details/Patient_details';
import Edit_description from './components/edit_description/Edit_description';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/receptionist" element={isLoggedIn ? <Receptionist /> : <Login handleLogin={handleLogin} />} />
        <Route path="/nurse" element={isLoggedIn ? <Nurse /> : <Login handleLogin={handleLogin} />} />
        <Route path="/doctor" element={isLoggedIn ? <Doctor /> : <Login handleLogin={handleLogin} />} />
        <Route path="/patient/:id" element={isLoggedIn ? <Patient_details /> : <Login handleLogin={handleLogin} />} />
        <Route path="/patient/:id/edit_description" element={isLoggedIn ? <Edit_description /> : <Login handleLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
