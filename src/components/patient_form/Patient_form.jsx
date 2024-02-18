// PatientForm.js
import React, { useState } from 'react';
import './Patient_form.css';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    age: '',
    gender: '',
    contact_number: '',
    address: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5555/patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Patient registered successfully!');
        // Optionally, reset the form after successful submission
        setFormData({
          first_name: '',
          last_name: '',
          age: '',
          gender: '',
          contact_number: '',
          address: '',
          description: '',
        });
      } else {
        console.error('Failed to register patient.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  return (
    <div className='form'>
      <h2>Register New Patient</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />

        <label>Last Name:</label>
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />

        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} />

        <label>Gender:</label>
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} />

        <label>Contact Number:</label>
        <input type="text" name="contact_number" value={formData.contact_number} onChange={handleChange} />

        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleChange} />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientForm;
