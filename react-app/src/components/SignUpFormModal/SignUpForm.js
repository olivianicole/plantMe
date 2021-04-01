import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signUp } from '../../services/auth';
import "./SignUp.css";

const SignUpForm = ({ authenticated, setShowModal, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
        const user = await signUp(firstName, email, password);
        if (!user.errors) {
            setAuthenticated(true);
        } else {
            setErrors(user.errors);
        }
    }
    };
  
  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };
  
  if (authenticated) {
  return <Redirect to="/home" />;
  };

return (
  <div className="signup-form-container">
      <form onSubmit={onSignUp} className="signup-form">
      <div className="signup-form-title">
          <p>Hello there!</p>
      </div>
      <div>
          {errors.map((error) => (
          <div className="signup-error-messages">{error}</div>
          ))}
      </div>
      <div className="signupform-field-container">
          <input
          className="signupform-field"
          name="firstName"
          type="email"
          placeholder="First Name"
          value={firstName}
          onChange={updateFirstName}
          />
      </div>
      <div className="signupform-field-container">
          <input
          className="signupform-field"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
          />
      </div>
      <div className="signupform-field-container">
          <input
          className="signupform-field"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          />
      </div>
      <div className="signupform-field-container">
          <input
          className="signupform-field"
          name="repeatPassword"
          type="password"
          placeholder="Confirm Password"
          value={repeatPassword}
          onChange={updateRepeatPassword}
          />
      </div>
      <div className="signup-form-action-container">
          
          <button type="submit" className="signup-form-register-button">Register</button>
      </div>
      </form>
  </div>
  );
};

export default SignUpForm;