import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courses = useLoaderData();
    const { title, image_url, details } = courses
    return (
        <div>
            <Button className='mb-2' variant="outline-primary">Create pdf</Button>
            <div className='border rounded g-1 container px-2'>
                <img className='img-fluid mt-2 rounded' src={image_url} alt="" />
                <h5 className='fw-semibold mt-4'>{title}</h5>
                <p className='mt-2'> {details}</p>
                <Button className='mb-2' variant="outline-primary">Get Premium Access</Button>
            </div>
        </div>
    );
};

export default CourseDetails;