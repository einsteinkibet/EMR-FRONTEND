// PatientForm.js
import React, { useState } from 'react';
import './Patient_form.css';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
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
      // Your submit logic here
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

        <label>Date Of Birth:</label>
        <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />

        <label>Gender:</label>
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} />

        <label>Contact Number:</label>
        <input type="text" name="contact_number" value={formData.contact_number} onChange={handleChange} />

        <label>Address:</label>
        <textarea name="address" value={formData.address} onChange={handleChange} />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} disabled={true} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientForm;
