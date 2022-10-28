import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GetCourse = () => {
    const getCourse = useLoaderData();
    const { title, image_url, details, price } = getCourse;
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
                        <button className='mb-2 btn btn-outline-primary rounded-4'>Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default GetCourse;