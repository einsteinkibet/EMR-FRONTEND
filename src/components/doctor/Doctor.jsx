// DoctorDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PatientList from '../patient_list/Patient_list';
import PatientDetails from '../patient_details/Patient_details';
import './Doctor.css';

const Doctor = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

    fetchData();
  }, []);

  // Log the state to check if it's being updated
  useEffect(() => {
    console.log('Updated patients state:', patients);
  }, [patients]);

  return (
    <div>
      <h1 className='doctor-title'>Doctor Dashboard</h1>
      <PatientList patients={patients} />
      <Link to="/book-appointment">Book Appointment</Link>
    </div>
  );
};

export default Doctor;
