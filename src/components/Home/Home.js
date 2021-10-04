import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./arduino-db.JSON')
            .then(response => response.json())
            .then(data => setCourses(data));
    }, []);
    return (
        <div className="container">
            <div>
                <h1 className="mt-5 text-center">Learn to write code that controls <span style={{ color: "#00b628" }}>REAL</span>  things!</h1>
                <div className="row g-5 p-5 align-items-center">
                    <div className="col">
                        <img className="img-fluid rounded" src="https://mamundb.netlify.app/images/headerpic.png" alt="" />
                    </div>
                    <div className="col text-start fs-5">
                        <h4>Why are you here ?</h4>
                        <p>The Arduino programming is an open-source computer hardware or software platform for building digital devices and interactive objects that can sense and control the physical world around them. In Arduino course, you will learn how to programming and the platform will work in terms of the physical board and also libraries and the IDE (integrated development environment). The course will also cover programming the Arduino and 8051 microcontroller using C code and accessing the pins on the board via the software to control external devices.</p>
                    </div>
                </div>
            </div>

            <div className="row mb-5 align-items-center">
                <h1 className="text-center mb-5"><span style={{ color: "#00b628" }}>One</span> Million Dollar Contest</h1>
                <div className="col-md-7">
                    <p>We arrange a $1 million dollar contest about arduino project. People from all over the world can participate this contest. This contest will be for 7 days in California, USA. Interested persons are encouraged for this contest. First winner will get $40000 dollar, second winner will get $35000 dollar, third winner will get $30000 dollar, forth winner will get $25000 dollar, fifth winner will get $20000 dollar, and next 10 people will get $10000 dollar. </p>
                    <div className="input-group rounded mt-5">
                        <input className="form-control mb-2 fs-5" type="text" placeholder="Your Name" />
                        <input className="form-control mb-2 fs-5" type="text" placeholder="Email with papers" />
                        <Button className="px-4 px-1 fs-5 mb-2 bg-success rounded" >Submit</Button><br />
                    </div>
                </div>
                <div className="col-md-5">
                    <img className="w-100 rounded" src="https://circuitmagic.com/wp-content/uploads/2021/07/Arduino-contest-1024x616.jpg" alt="" />
                </div>
            </div>

            <div>
                <h1 className="text-center mt-5">Our <span style={{ color: "#00a651" }}>Service</span></h1>

                {
                    courses.slice(0, 4).map(course => <Course key={course.key} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Home;