import React, { useState } from 'react';
import './Login.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
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
          <h2 className="form-heading">Get Started Now</h2>
          <p className="form-heading">Enter your credentials to access your account</p>
          <form>
          <div className="form-group">
  <label htmlFor="email"  className='formlable'>Email address*</label>
  <input type="email" id="email" placeholder="abc@gmail.com" required />  
</div>

            <div className="form-group">
            <label htmlFor="password" className='formlable'>Password*</label>
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
            <div className="form-options">
             
              <div>

              <a href="/" className="forgot-password">
                Forgot your password
              </a>
              </div>
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
            <p>Don't have an account? <span className='signup'>Sign up</span></p>
          </form>
        </div>
       

        
      </div>
    </div>
  );
}

export default Login;
