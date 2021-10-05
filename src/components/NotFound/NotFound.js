import React from 'react';
import { NavLink } from 'react-router-dom';

// NotFound component
const NotFound = () => {
    const heading404 = {
        color: "red",
        fontSize: "60px",
        textAlign: "center",
        margin: "80px 0px"
    }
    return (
        <div className="notfound">
            <h1 style={heading404}>404 <br />
                Page not Found</h1>
            <div className="text-center mb-5">
                <NavLink to="/home"> <button className="btn bg-success text-white fs-5">Back Home</button> </NavLink>
            </div>
        </div >
    );
};

export default NotFound;