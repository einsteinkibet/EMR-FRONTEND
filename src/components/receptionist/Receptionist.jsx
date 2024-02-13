// ReceptionistDashboard.js
import React from 'react';
import Patient_form from '../patient_form/Patient_form';
import Patient_list from '../patient_list/Patient_list';

const Receptionist = () => {
  return (
    <div>
      <h1>Receptionist Dashboard</h1>
      <Patient_form />
      {/* <Patient_list /> */}
    </div>
  );
};

export default Receptionist;
