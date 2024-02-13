// PatientDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Patient_details = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    // Fetch patient details from the backend using the patient ID
    const fetchPatientDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5555/patient/patients/${id}`);
        const data = await response.json();
        setPatient(data);
      } catch (error) {
        console.error('Error fetching patient details:', error);
      }
    };

    fetchPatientDetails();
  }, [id]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Patient Details</h2>
      <p>Name: {patient.FirstName} {patient.LastName}</p>
      <p>Date of Birth: {patient.DateOfBirth}</p>
      <p>Gender: {patient.Gender}</p>
      <p>Contact Number: {patient.ContactNumber}</p>
      <p>Address: {patient.Address}</p>
      <p>Description: {patient.Description}</p>
    </div>
  );
};

export default Patient_details;
