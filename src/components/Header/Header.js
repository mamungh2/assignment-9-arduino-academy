import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "blue",
        textDecoration: "underline",
    }
    return (
        <div style={{ backgroundColor: "#00a651" }}>
            <div className="container header">
                <nav className="d-inline">
                    <NavLink className="header-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                    <NavLink className="header-link" activeStyle={activeStyle} to="/about">About</NavLink>
                    <NavLink className="header-link" activeStyle={activeStyle} to="/services">Services</NavLink>
                    <NavLink className="header-link" activeStyle={activeStyle} to="/contact">Contact</NavLink>
                </nav>
                <div className="d-inline">
                    <input className="form-control mb-2 fs-5 w-25 d-inline" type="text" placeholder="Search..." />
                    <Button className="px-4 px-1 fs-5 mb-2 bg-success rounded" >Submit</Button><br />
                </div>
            </div>
        </div>
    );
};

export default Header;