// EditDescription.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Edit_description.css';

const Edit_description = () => {
  const { PatientID } = useParams();
  const [patient, setPatient] = useState(null);
  const [editedDescription, setEditedDescription] = useState('');
  const [descriptionEdited, setDescriptionEdited] = useState(false);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5555/patient/patients/${PatientID}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPatient(data);
        setEditedDescription(data.Description || ''); // Initialize editedDescription with the current description
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatient();
  }, [PatientID]);

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
    setDescriptionEdited(true); // Mark the description as edited
  };

  const handleDescriptionSubmit = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/patient/patients/${PatientID}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Description: editedDescription }),
      });
      if (response.ok) {
        alert('Description updated successfully!');
        // You can handle the transfer of the edited patient to the doctor's dashboard here
      } else {
        alert('Failed to update description. Please try again.');
        await onDescriptionUpdate(patient.PatientID, editedDescription);

      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Edit Description</h1>
      <h2>{patient && `${patient.FirstName} ${patient.LastName}`}</h2>
      <p><strong>Description:</strong></p>
      <textarea value={editedDescription} onChange={handleDescriptionChange}></textarea>
      <br />
      <button onClick={handleDescriptionSubmit}>Submit</button>
    </div>
  );
};

export default Edit_description;
