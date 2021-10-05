import React from 'react';
import { useEffect, useState } from 'react';
import Course from '../Course/Course';

// Services component
const Services = () => {
    // keep data as variable in state
    const [courses, setCourses] = useState([]);

    // fetch data from local database
    useEffect(() => {
        fetch('./arduino-db.JSON')
            .then(response => response.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div className="container mt-5">
            {/* send data to Course component through loop */}
            <h1 className="text-center mb-5"><span style={{ color: "#00b628" }}>Our </span>Services</h1>
            {
                courses.map(course => <Course key={course.key} course={course}></Course>)
            }
        </div>
    );
};

export default Services;