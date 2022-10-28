import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div class="card mt-5 pt-5 pb-2 text-center rounded-0 bg-light">
            <div class="card-body">
                <h5 class="card-title mb-4">Education Hour</h5>
                <div className="mx-auto fw-semibold">
                    <Link style={{ textDecoration: 'none', color: 'black' }} className="me-4 fs-6" to="/"></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} className="me-4" to="/courses">Courses</Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} className="me-4" to="/faq">FAQ</Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} className="me-4" to="/blog">Blog</Link>
                </div>
            </div>
            <p>&copy; Copyright 2022. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;