import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Edit_description.css';

const Edit_description = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [editedDescription, setEditedDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [medicinePrescribed, setMedicinePrescribed] = useState('');
  const [diagnosedWith, setDiagnosedWith] = useState('');
  const [comeBackDate, setComeBackDate] = useState('');

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5555/patient/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched patient data:', data);
        if (data.length > 0) {
          setPatient(data[0]);
          setEditedDescription(data[0].description || '');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patient data:', error);
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
          summarized_description: `${diagnosedWith}, ${medicinePrescribed}, ${comeBackDate}` 
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
      <input type="text" value={medicinePrescribed} onChange={(e) => setMedicinePrescribed(e.target.value)} />
      <br />
      <label>Diagnosed With:</label>
      <input type="text" value={diagnosedWith} onChange={(e) => setDiagnosedWith(e.target.value)} />
      <br />
      <label>Come Back Date:</label>
      <input type="date" value={comeBackDate} onChange={(e) => setComeBackDate(e.target.value)} />
      <br />
      <button className="submit-button" onClick={handleDescriptionSubmit}>Submit</button>
    </div>
  );
};

export default Edit_description;
