import React, { useState } from 'react';
import './Login.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="left-section">
      </div>
      <div className="right-section">
        <div className="login-form">
          <h2 className="form-heading">Sign Up Now</h2>
          <p className="form-heading">Create your account</p>
          <form>
            <div className="form-group">
              <label htmlFor="fullName" className='form-label'>Full Name*</label>
              <input type="text" id="fullName" placeholder="John Doe" required />  
            </div>
            <div className="form-group">
              <label htmlFor="email" className='form-label'>Email address*</label>
              <input type="email" id="email" placeholder="john@example.com" required />  
            </div>
            <div className="form-group">
              <label htmlFor="password" className='form-label'>Password*</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="*********"
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="password-toggle"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" className='form-label'>Confirm Password*</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="*********"
                required
              />
            </div>
            <button className="login-button" type="submit">
              Sign Up
            </button>
            <p>Already have an account? <a href="/" className='login'>Log In</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
