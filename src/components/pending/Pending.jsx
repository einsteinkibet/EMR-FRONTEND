// Pending.jsx
import React, { useState, useEffect } from 'react';
import './Pending.css';

const Pending = () => {
  const [appointments, setAppointments] = useState([]);
                                     
  useEffect(() => {
    console.log('Fetching pending appointments...');
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/appointments');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched pending appointments:', data);
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching pending appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="pending-container">
      <h2 className="pending-title">Pending Appointments</h2>
      <div className="appointment-list">
        {appointments.map(appointment => (
          <div key={appointment.id} className="appointment-item">
            <div className="appointment-info">
              <p><strong>Appointment Number:</strong> {appointment.appointment_number}</p>
              <p><strong>Patient ID:</strong> {appointment.patient_name}</p>
              {/* Add more appointment details as needed */}
            </div>
            {/* Add buttons or actions for each appointment */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pending;
