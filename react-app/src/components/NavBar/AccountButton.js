import React, { useState, useEffect } from "react";
import { NavLink } from "reac-router-dom";
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

    useEffect
}
