// PatientDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Patient_details = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5555/patient/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPatient(data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patient details:', error);
        setLoading(false); // Set loading to false even in case of error
      }
    };
  
    fetchPatientDetails();
  }, [id]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Patient Details</h2>
      <p>Name: {patient.first_name} {patient.last_name}</p>
      <p>Age: {patient.age}</p>
      <p>Gender: {patient.gender}</p>
      <p>Contact Number: {patient.contact_number}</p>
      <p>location:{patient.location_input}</p>
      <p>Description: {patient.description}</p>
      <p>served by:
        {patient.doctor ? patient.doctor.username : 'Doctor not specified'}
        {patient.receptionist ? ` ${patient.receptionist.username}` : ' Receptionist not specified'}
        {patient.nurse ? ` ${patient.nurse.username}` : ' Nurse not specified'}
      </p>
      <p>summary:{patient.summarized_description}</p>
    </div>
  );
};

export default Patient_details;
