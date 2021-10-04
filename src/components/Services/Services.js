import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./arduino-db.JSON')
            .then(response => response.json())
            .then(data => setCourses(data));
    }, []);
    // const { img, coursename, trainer, duration, rating, price } = props.course;
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-5"><span style={{ color: "#00b628" }}>Our </span>Services</h1>
            {
                courses.map(course => <Course key={course.key} course={course}></Course>)
            }
        </div>
    );
};

export default Services;