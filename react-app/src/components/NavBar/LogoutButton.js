import React from "react";
import { logout } from "../../services/auth";
import "./NavBar.css";

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return <button onClick={onLogout} className="logout-button">Logout</button>;
};

export default LogoutButton;
