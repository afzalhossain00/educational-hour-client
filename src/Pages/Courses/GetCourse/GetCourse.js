import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const GetCourse = () => {
    const getCourse = useLoaderData();
    const { title, image_url, details, price, id } = getCourse;
    return (
        <div className="card mb-3 w-75 mx-auto mt-5">
            <div className="row g-0">
                <div className="col-md-5">
                    <img src={image_url} className="img-fluid rounded h-100" alt="..." />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <small><p>{details}</p></small>
                        <h6 className="card-text">Price: ${price}</h6>
                        <Link className='px-3' style={{ textDecoration: 'none' }} to={`/get-course/course/checkout/${id}`}> <Button className='mb-2 rounded-4' variant="outline-primary">Enroll Now</Button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default GetCourse;