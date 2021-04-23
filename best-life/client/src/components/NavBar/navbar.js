import React from "react";
import NavItem from "./NavItem"
import './style.css';


export default function NavBar() {
    return(
        <div className="main-navbar-container">
            <NavItem name="Schedule" />
            <NavItem name="Progress" />
        </div>
    );
}