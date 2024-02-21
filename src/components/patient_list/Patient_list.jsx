import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Patient_list.css';

const Patient_list = () => {
  const [patients, setPatients] = useState([]);
  const [userRole, setUserRole] = useState('');
  const [visible, setVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log('Fetching data...');
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/patient');
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

  const handleScheduleAppointment = async (patientId) => {
    try {
      const response = await fetch('http://127.0.0.1:5555/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          appointment_number: Math.floor(Math.random() * 1000), // Generate a random appointment number
          patient_id: patientId
        })
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Appointment created:', data);
      // You can update the UI to reflect the newly created appointment if needed
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };
  
  return (
    <div className="patient-list-container">
      <h2 className='title'>Patient List</h2>
      <ol className="patient-list">
        {patients.map(patient => (
          <li key={patient.id} className="patient-item">
            <div className="patient-info">
              <strong className='names'>{patient.first_name} {patient.last_name}</strong>
              <p>{patient.description || 'No description available'}</p>
            </div>
            <div className="patient-actions">
              {canEditDescription() && (
                <button>
                  <Link to={`/patient/${patient.id}/edit_description`} className="action-link">Edit Description</Link>
                </button>
              )}
              <button onClick={() => handleScheduleAppointment(patient.id)}>Schedule Appointment</button>
              <button>
                <Link to={`/patient/${patient.id}`} className="action-link">View Details</Link>
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Patient_list;
