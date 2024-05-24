import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const countries = ['India', 'USA', 'Canada'];
  const cities = {
    India: ['Delhi', 'Mumbai', 'Bangalore'],
    USA: ['New York', 'Los Angeles', 'Chicago'],
    Canada: ['Toronto', 'Vancouver', 'Montreal']
  };

  const regexPatterns = {
    name: /^[A-Za-z]+$/,
    username: /^[A-Za-z0-9_]{5,}[A-Za-z0-9]$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    phoneNo: /^\+\d{1,3}\d{10}$/,
    panNo: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    aadharNo: /^\d{12}$/
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    else if (!regexPatterns.name.test(formData.firstName)) newErrors.firstName = 'Invalid First Name';

    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    else if (!regexPatterns.name.test(formData.lastName)) newErrors.lastName = 'Invalid Last Name';

    if (!formData.username) newErrors.username = 'Username is required';
    else if (!regexPatterns.username.test(formData.username)) newErrors.username = 'Invalid Username';

    if (!formData.email) newErrors.email = 'Email is required';
    else if (!regexPatterns.email.test(formData.email)) newErrors.email = 'Invalid Email';

    if (!formData.password) newErrors.password = 'Password is required';
    else if (!regexPatterns.password.test(formData.password)) newErrors.password = 'Password must be minimum 8 characters long and contain at least one uppercase and lowercase letter and atleast one digit and one special character';

    if (!formData.phoneNo) newErrors.phoneNo = 'Phone Number is required';
    else if (!regexPatterns.phoneNo.test(formData.phoneNo)) newErrors.phoneNo = 'Invalid Phone Number. Format: +CCXXXXXXXXXX';

    if (!formData.country) newErrors.country = 'Country is required';

    if (!formData.city) newErrors.city = 'City is required';

    if (!formData.panNo) newErrors.panNo = 'Pan No. is required';
    else if (!regexPatterns.panNo.test(formData.panNo)) newErrors.panNo = 'Invalid Pan No. Format: AAAAA9999A';

    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar No. is required';
    else if (!regexPatterns.aadharNo.test(formData.aadharNo)) newErrors.aadharNo = 'Invalid Aadhar No. Must be 12 digits';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success', { state: { formData } });
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div className="password-container">
        <label>Password:</label>
        <div className="password-wrapper">
          <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} />
          <button type="button" className="toggle-password" onClick={handleTogglePassword}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
        {errors.phoneNo && <span>{errors.phoneNo}</span>}
      </div>
      <div>
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          {countries.map(country => <option key={country} value={country}>{country}</option>)}
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>
      <div>
        <label>City:</label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          {(cities[formData.country] || []).map(city => <option key={city} value={city}>{city}</option>)}
        </select>
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>Pan No.:</label>
        <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
        {errors.panNo && <span>{errors.panNo}</span>}
      </div>
      <div>
        <label>Aadhar No.:</label>
        <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
        {errors.aadharNo && <span>{errors.aadharNo}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
