import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Receptionist from './components/receptionist/Receptionist';
import Nurse from './components/nurse/Nurse';
import Doctor from './components/doctor/Doctor';
import Patient_details from './components/patient_details/Patient_details';
import Edit_description from "./components/edit_description/Edit_description";
import Header from './components/header/Header';
import Register from './components/register/Register'
import Login from "./components/login/Login";

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<Login />} />
        <Route path="/receptionist" element={<Receptionist />} />
        <Route path="/nurse" element={<Nurse />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patients/:id" element={<Patient_details />} />
        <Route path="/patients/:PatientID/edit_description" element={<Edit_description />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
