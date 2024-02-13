// EditDescription.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditDescription = () => {
  const { id } = useParams();
  const [editedDescription, setEditedDescription] = useState('');

  const handleSave = async () => {
    try {
      // Save edited description to the backend using the patient ID
      const response = await fetch(`http://127.0.0.1:5555/patient/patients/${id}/edit-description`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: editedDescription }),
      });

      if (response.ok) {
        console.log('Description saved successfully!');
      } else {
        console.error('Failed to save description');
      }
    } catch (error) {
      console.error('Error saving description:', error);
    }
  };

  return (
    <div>
      <h2>Edit Description</h2>
      <textarea
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      />
      <button onClick={handleSave}>Save Description</button>
    </div>
  );
};

export default EditDescription;
