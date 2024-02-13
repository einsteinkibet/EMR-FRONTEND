// NurseDashboard.js
import React from 'react';
import Patient_list from '../patient_list/Patient_list';
import Patient_details from '../patient_details/Patient_details';

const Nurse = () => {
  return (
    <div>
      <h1>Nurse Dashboard</h1>
      <Patient_list />
      {/* Link to patient details or edit form */}
    </div>
  );
};

export default Nurse;
