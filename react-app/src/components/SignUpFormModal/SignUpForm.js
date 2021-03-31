import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signUp } from '../../services/auth';

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
      <form onSubmit={onSignUp}>
      <div className="signup-form-title">
          <p>Hello there!</p>
      </div>
      <div>
          {errors.map((error) => (
          <div>{error}</div>
          ))}
      </div>
      <div>
          <label htmlFor="firstName">First Name</label>
          <input
          name="firstName"
          type="email"
          placeholder="First Name"
          value={firstName}
          onChange={updateFirstName}
          />
      </div>
      <div>
          <label htmlFor="email">Email</label>
          <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
          />
      </div>
      <div>
          <label htmlFor="password">Password</label>
          <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          />
      </div>
      <div>
          <label htmlFor="repeatPassword">Password</label>
          <input
          name="repeatPassword"
          type="password"
          placeholder="Confirm Password"
          value={repeatPassword}
          onChange={updateRepeatPassword}
          />
      </div>
      <button type="submit">Register</button>
      </form>
  </div>
  );
};

export default SignUpForm;