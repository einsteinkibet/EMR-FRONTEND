import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Patient_details.css'; // Import CSS file

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
        setPatient(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patient details:', error);
        setLoading(false); // Set loading to false even in case of error
      }
    };
  
    fetchPatientDetails();
  }, [id]);
  

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!patient) {
    return <div className="error">No patient found</div>;
  }

  return (
    <div className="patient-details-container">
      <h2>Patient Details</h2>
      <table className="patient-details-table">
        <tbody>
          <tr>
            <td><strong>Name:</strong></td>
            <td>{patient.first_name} {patient.last_name}</td>
          </tr>
          <tr>
            <td><strong>Age:</strong></td>
            <td>{patient.age}</td>
          </tr>
          <tr>
            <td><strong>Gender:</strong></td>
            <td>{patient.gender}</td>
          </tr>
          <tr>
            <td><strong>Contact Number:</strong></td>
            <td>{patient.contact_number}</td>
          </tr>
          <tr>
            <td><strong>Location:</strong></td>
            <td>{patient.location_input}</td>
          </tr>
          <tr>
            <td><strong>Description:</strong></td>
            <td>{patient.description}</td>
          </tr>
          <tr>
            <td><strong>Doctor:</strong></td>
            <td>{patient.doctor}</td>
          </tr>
          <tr>
            <td><strong>Disease:</strong></td>
            <td>{patient.disease}</td>
          </tr>
          <tr>
            <td><strong>Medicine Prescribed:</strong></td>
            <td>{patient.medicine}</td>
          </tr>
          <tr>
            <td><strong>Date Served:</strong></td>
            <td>{patient.date_served}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Patient_details;
