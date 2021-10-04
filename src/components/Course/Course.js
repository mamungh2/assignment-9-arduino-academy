import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Course.css';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Rating from 'react-rating';

const Course = (props) => {
    const { img, coursename, trainer, duration, star, price } = props.course;
    return (
        <div className="row align-items-center mb-4 mt-4 border rounded p-3 course">
            <div className="col-md-4">
                <img className="rounded w-100" src={img} alt="" />
            </div>
            <div className="col-md-8 fs-5">
                <h4>{coursename}</h4>
                <p className="mb-0">Trainer: {trainer}</p>
                <p className="mb-0">Duration: {duration}</p>
                <div className="d-flex align-items-center">
                    <p className="mb-0">Rating: </p>
                    <div className="mt-2">
                        {
                            <Rating
                                initialRating={star}
                                readonly></Rating>
                        }
                    </div>
                </div>
                <p className="mb-0">Price: ${price}</p>
                <NavLink to="/cart" className="me-4">
                    <Button className="px-4 px-1 fs-5 mb-2 bg-success" ><FontAwesomeIcon icon={faShoppingCart} className="me-2" />Add to Cart</Button>
                </NavLink>
                <NavLink to="/details">
                    <Button className="px-4 px-1 fs-5 mb-2 bg-success" ><FontAwesomeIcon icon={faShoppingCart} className="me-2" />Details</Button>
                </NavLink>
            </div>
        </div>
    );
};

export default Course;