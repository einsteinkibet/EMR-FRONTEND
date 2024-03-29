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
    date_served:'',
    location_input:'',
    disease: '',
    medicine: '',
    summarized_descrition: '',
    served_by: '',
    doctor: '',
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
        alert('Patient registered successfully, wait for an appointment!');
        console.log('Patient registered successfully!');
        setFormData({
          first_name: '',
          last_name: '',
          age: '',
          gender: '',
          contact_number: '',
          address: '',
          description: '',
          date_served:'',
          location_input:'',
          summarized_descrition: '',
          served_by: '',
          disease: '',
          medicine: '',
          doctor: '',
          
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

        <label>Date Served:</label>
        <input type="date" name="date_served" value={formData.date_served} onChange={handleChange} />
        
        <label>Hospital Served:</label>
        <input type="text" name="location_input" value={formData.location_input} onChange={handleChange} />
        
        <input type="hidden" name="summarized_description" value={formData.summarized_descrition} onChange={handleChange} />

        <input type="hidden" name="served_by" value={formData.served_by} onChange={handleChange} />

        <input type="hidden" name="medicine" value={formData.medicine} onChange={handleChange} />

        <input type="hidden" name="disease" value={formData.disease} onChange={handleChange} />

        <input type="hidden" name="doctor" value={formData.doctor} onChange={handleChange} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default PatientForm;