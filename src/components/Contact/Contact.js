import React from 'react';
import { Button } from 'react-bootstrap';

// Contact component
const Contact = () => {
    return (
        <div className="container">
            <div className="text-center mt-5">
                <h1>We’d love to hear from <span style={{ color: "#00b628" }}>You</span></h1>
                <h4>Have questions about our learning, features, trials, or pricing? Need a demo? Our teams will help you.</h4>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <div className="mt-5 mb-5 ms-5">
                        <h2 className="mb-4">Get in touch with us</h2>
                        <input className="form-control mb-2 w-75 fs-5" type="text" placeholder="First Name" />
                        <input className="form-control mb-2 w-75 fs-5" type="text" placeholder="Last Name" />
                        <input className="form-control mb-2 w-75 fs-5" type="email" placeholder="Your Email" />
                        <input className="form-control mb-2 w-75 fs-5" type="tel" placeholder="Your Telephone" />
                        <textarea className="form-control mb-3 w-75 fs-5" style={{ height: "150px" }} placeholder="Leave a comment here"></textarea>
                        <Button className="px-4 px-1 fs-5 mb-2 bg-success" >Submit</Button><br />
                        <small>By clicking on SUBMIT, you acknowledge having read our Privacy notice</small>
                    </div>
                </div>
                <div className="col-md-7 mt-5">
                    <h3 >Office Locations</h3>
                    <div className="d-flex justify-content-evenly">
                        <div className="fs-5">
                            <h4>Head Office</h4>
                            <p>House:  17/1, Flat # A-1, <br />
                                Road: 420, Gulshan-2, <br />
                                Dhaka-1212, Bangladesh·<br />
                                Phone No: 01873936235 <br />
                                Email Id: mamun8475@gmail.com</p>
                        </div>
                        <div className="fs-5">
                            <h4>Branch Office</h4>
                            <p>House:  7/20, Flat # 15, <br />
                                Road: 12, Kushtia, <br />
                                Dhaka-1212, Bangladesh·<br />
                                Phone No: 01873936235 <br />
                                Email Id: mamun8475@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;