import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courses = useLoaderData();
    const { title, image_url, details } = courses
    return (
        <div className='border rounded g-1 container px-2'>
            <img className='img-fluid mt-2 rounded' src={image_url} alt="" />
            <h5 className='fw-semibold mt-4'>{title}</h5>
            <p className='mt-2'> {details}</p>

        </div>
    );
};

export default CourseDetails;