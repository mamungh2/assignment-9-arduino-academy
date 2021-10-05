import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

// header component
const Header = () => {
    // active style when select an navigation link
    const activeStyle = {
        fontWeight: "bold",
        color: "blue",
        textDecoration: "underline",
    }
    return (
        <div style={{ backgroundColor: "#00a651" }}>
            <div className="container header d-flex justify-content-between align-items-center py-3">
                <div>
                    <img src="./images/academiclogo.png" alt="" />
                </div>
                {/* main navigation links of header*/}
                <nav className="d-inline">
                    <NavLink className="header-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                    <NavLink className="header-link" activeStyle={activeStyle} to="/about">About</NavLink>
                    <NavLink className="header-link" activeStyle={activeStyle} to="/services">Services</NavLink>
                    <NavLink className="header-link" activeStyle={activeStyle} to="/contact">Contact</NavLink>
                </nav>
                {/* search bar */}
                <div className="input-group w-25">
                    <input className="form-control fs-5" type="text" placeholder="Search here..." />
                    <Button className="px-4 px-1 fs-5 rounded" >Search</Button><br />
                </div>
            </div>
        </div>
    );
};

export default Header;