import React from 'react';
import { useLocation } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const location = useLocation();
  const { state } = location;
  const { formData } = state || {};

  return (
    <div>
      <h1>Form Submission Successful</h1>
      {formData ? (
        <div>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
          <p>Phone No: {formData.phoneNo}</p>
          <p>Country: {formData.country}</p>
          <p>City: {formData.city}</p>
          <p>PAN No: {formData.panNo}</p>
          <p>Aadhar No: {formData.aadharNo}</p>
        </div>
      ) : (
        <p>No form data available.</p>
      )}
    </div>
  );
};

export default Success;
