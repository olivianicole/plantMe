import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";

const LoginForm = ({ authenticated, setShowModal, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };


  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClose = () => setShowModal(false)

  if (authenticated) {
    return <Redirect to="/home" />;
  };

  return (
    <div className="login-form-container">
        <form className="login-form" onSubmit={onLogin}>
        <div className="login-form-title">
            <p>Welcome back!</p>
        </div>
        <div>
            {errors.map((error) => (
            <div className="login-error-messages">{error}</div>
            ))}
        </div>
        <div className="login-form-field-container">
            <input
            className="login-form-field"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            />
        </div>
        <div className="login-form-field-container">
            <input
            className="login-form-field"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            />
        </div>
        <div className="login-form-action-container">
            <button className="login-form-register-button" type="submit">Login</button>
            <button type="button" onClick={onClose} className="login-form-link-home" to="/">
              <i className="fas fa-home"></i>
          </button>
        </div>
        </form>
    </div>
  );
};

export default LoginForm;