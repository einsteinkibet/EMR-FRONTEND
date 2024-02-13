import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Patient_list = () => {
  const [patients, setPatients] = useState([]);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    console.log('Fetching data...');
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/patient/patients');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    // Simulate fetching user role (replace with your authentication logic)
    setUserRole('Nurse'); // Set the user role here

    fetchData();
  }, []);

  // Log the state to check if it's being updated
  useEffect(() => {
    console.log('Updated patients state:', patients);
  }, [patients]);

  const canEditDescription = () => {
    // Add your logic here based on user roles
    // Example: Only allow nurses to edit the description
    return userRole === 'Nurse';
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Patient List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {patients.map(patient => (
          <li key={patient.PatientID} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <p>
              <strong>{patient.FirstName} {patient.LastName}</strong>
            </p>
            <p>{patient.Description || 'No description available'}</p>
            {canEditDescription() && (
              <Link to={`/patients/${patient.PatientID}/edit-description`}>Edit Description</Link>
            )}
            <Link to={`/patients/${patient.PatientID}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patient_list;
