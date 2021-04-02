import React, { useState, useEffect } from "react";
import { NavLink } from "reac-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./AccountButton.css";

function AccountButton ({ setAuthenticated }) {
    const [ showMenu, setShowMenu ] = useState(false);

    const closeMenu = () => {
        setShowMenu(false);
    };

    const openMenu = () => {
        if (showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    };

    useEffect(() => {
        if (!showMenu) return;

        document.addEventListener("mouseEnter", closeMenu);

        return () => document.removeEventListener("mouseEnter", closeMenu);
    }, [showMenu]);

    return (
        <div className="account-menu-container">
            <div className="account-menu-button" onClick={openMenu}>
                <i className="fas fa-seedling"></i>
            </div>
            {showMenu && (
                <div className="account-menu">
                    <div onClick={closeMenu}>
                        <NavLink to="/home" className="account-menu-dropdown">Home</NavLink>
                    </div>
                    <div onClick={closeMenu}>
                        <NavLink to="/account" className="account-menu-dropdown">Home</NavLink>
                    </div>
                    <div onClick={closeMenu}>
                        <LogoutButton setAuthenticated={setAuthenticated} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default AccountButton;