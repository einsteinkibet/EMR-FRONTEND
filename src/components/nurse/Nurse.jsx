// NurseDashboard.js
import React from 'react';
import Patient_list from '../patient_list/Patient_list';
import Patient_details from '../patient_details/Patient_details';
import { Link } from 'react-router-dom';
import './Nurse.css'

const Nurse = () => {
  return (
    <div>
      <h1 className='nurse-title'>Nurse Dashboard</h1>
      <Patient_list />
      <Link to="/edit-description/:id">Edit Description</Link>
    </div>
  );
};

export default Nurse;
