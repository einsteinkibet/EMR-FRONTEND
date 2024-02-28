import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Edit_description.css';

const Edit_description = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [editedDescription, setEditedDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [medicine, setMedicine] = useState('');
  const [disease, setDisease] = useState('');
  const [date_served, setDate_served] = useState('');
  const [doctor, setDoctor] = useState('');


  useEffect(() => {
    const fetchPatient = async () => {
      try {
        console.log('Fetching patient data...');
        const response = await fetch(`http://127.0.0.1:5555/patient/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched patient data:', data);
        if (data && Object.keys(data).length > 0) {
          console.log('Setting patient data...');
          setPatient(data);
          console.log('Setting edited description...');
          setEditedDescription(data.description || '');
        } else {
          console.log('No patient data found.');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patient data:', error);
        setLoading(false); // Ensure loading state is set to false even in case of error
      }
    };
  
    fetchPatient();
  }, [id]);
  
  
  

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleDescriptionSubmit = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/patient/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          description: editedDescription,
          medicine: medicine,
          date_served: date_served,
          disease: disease,
          doctor:doctor
        }),
      });
      if (response.ok) {
        alert('Description updated successfully!');
        window.history.back();
      } else {
        alert('Failed to update description. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  if (loading) {
    return <div className="edit-description-container">Loading...</div>;
  }

  return (
    <div className="edit-description-container">
      <h1>Edit Description</h1>
      <h2>{patient ? `${patient.first_name} ${patient.last_name}` : 'Loading...'}</h2>
      <p><strong>Description:</strong></p>
      <textarea className="description-textarea" value={editedDescription} onChange={handleDescriptionChange}></textarea>
      <br />
      <label>Medicine Prescribed:</label>
      <input type="text" value={medicine} onChange={(e) => setMedicine(e.target.value)} />
      <br />
      <label>Diagnosed With:</label>
      <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} />
      <br />
      <label>Date served:</label>
      <input type="date" value={date_served} onChange={(e) => setDate_served(e.target.value)} />
      <br />
      <label>Served By</label>
      <input type="text" value={doctor} onChange={(e) => setDoctor(e.target.value)} />
      <br />

      <button className="submit-button" onClick={handleDescriptionSubmit}>Submit</button>
    </div>
  );
};

export default Edit_description;
