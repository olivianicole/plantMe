import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import "./NavBar.css";

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    dispatch(logout())
    setAuthenticated(false);
  };

  return <button onClick={onLogout} className="logout-button">Logout</button>;
};

export default LogoutButton;
