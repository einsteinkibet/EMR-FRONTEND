// DoctorDashboard.js
import React from 'react';
import Patient_list from '../patient_list/Patient_list';
import Patient_details from '../patient_details/Patient_details';

const Doctor = () => {
  return (
    <div>
      <h1>Doctor Dashboard</h1>
      <Patient_list />
    </div>
  );
};

export default Doctor;
