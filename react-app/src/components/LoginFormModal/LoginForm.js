import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";

const LoginForm = ({ authenticated, setShowModal, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(firstName, email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
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

  if (authenticated) {
    return <Redirect to="/home" />;
  };

  return (
    <div className="login-form-container">
        <form onSubmit={onLogin}>
        <div className="login-form-title">
            <p>welcome back!</p>
            <div 
            onClick={() => setShowModal(false)}
            className="login-form-exit"> x
            </div>
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
            <button type="submit">Login</button>
        </div>
        </form>
    </div>
  );
};

export default LoginForm;