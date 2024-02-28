import Patient_list from '../patient_list/Patient_list';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import './Doctor.css'; 

const Doctor = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const [loggedInUserInfo, setLoggedInUserInfo] = useState(null); // State to store the logged-in user's info


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

  const handleUpdateDescription = async (id, description, medicine, disease,nurse,doctor, date_served) => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/patient/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description: description,
          medicine: medicine,
          disease: disease,
          date_served: date_served,
          username: loggedInUserInfo.username,
          nurse: nurse,
          doctor:doctor,
        }),
      });
      if (response.ok) {
        alert('Patient information updated successfully!');
        // Optionally, you can fetch the updated patient data again to reflect the changes in your UI
      } else {
        alert('Failed to update patient information. Please try again.');
      }
    } catch (error) {
      console.error('Error updating patient information:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  // Log the state to check if it's being updated
  useEffect(() => {
    console.log('Updated patients state:', patients);
  }, [patients]);

  return (
    <div>
      <h1 className='doctor-title'>Doctor Dashboard</h1>
      <Link className="nav-link active" aria-current="page" to="/pending" style={{ color: "white", textDecoration: "underline", marginRight: '3rem' }}>View Pending Appointments</Link>
      
      <Patient_list patients={patients} onUpdateDescription={handleUpdateDescription} />
    </div>
  );
};

export default Doctor;
