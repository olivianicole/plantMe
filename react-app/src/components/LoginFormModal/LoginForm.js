import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from "../../store/session";
import demouser from "./demo-user.png";
import "./LoginForm.css"

const LoginForm = ({ authenticated, setShowModal, setAuthenticated }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };
  let handleErrors;
  if(errors){
    for (let i = 0; i < errors.length; i++);
    if(errors[0]){
      if (errors[1]){
        handleErrors = (
          <>
            <div>{`Email: ${errors[0].email}`}</div>
            <div>{`Password: ${errors[0].email}`}</div>
          </>
        )
      } else {
        handleErrors = (
          <>
            <div>{`Email: ${errors[0].email}`}</div>
          </>
        )
      }
    } else if (errors[1]){
        handleErrors = (
          <>
            <div>{`Password: ${errors[1].password}`}</div>
          </>
        )
      }
    
  }
  
  const signInDemoUser = async (e) => {
    e.preventDefault();
    await dispatch(login("demo@gmail.com", "password"))
    setAuthenticated(true);
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
        <div className="login-errors-container">
           {handleErrors}
        </div>
        <div className="login-form-field-container">
            <input
            className="login-form-field"
            name="email"
            type="wmail"
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
          <div className="action-inner">
            <button className="login-form-register-button" type="submit">sign in</button>
            <button type="button" onClick={onClose} className="login-form-link-home" to="/">
              <i className="fas fa-home"></i>
            </button>
          </div>
          <button onClick={signInDemoUser} className="demouser">
            <img src={demouser} alt="click to sign in as a demo user"/>
          </button>
        </div>
        </form>
    </div>
  );
};

export default LoginForm;