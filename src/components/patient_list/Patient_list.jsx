import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Patient_list.css';

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
    <div className="patient-list-container">
      <h2 className='title'>Patient List</h2>
      <ol className="patient-list">
        {patients.map(patient => (
          <li key={patient.PatientID} className="patient-item">
            <div className="patient-info">
              <strong>{patient.FirstName} {patient.LastName}</strong>
              <p>{patient.Description || 'No description available'}</p>
            </div>
            <div className="patient-actions">
              {canEditDescription() && (
                <Link to={`/patients/${patient.PatientID}/edit_description`} className="action-link">Edit Description</Link>
              )}
              <Link to={`/patients/${patient.PatientID}`} className="action-link">View Details</Link>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Patient_list;
