import React from 'react';
import { Link } from 'react-router-dom';

const CourseSummary = ({ course }) => {
    const { title, image_url, details, id, price } = course
    return (
        <div className='border rounded g-2 container px-2'>
            <img className='img-fluid mt-2 rounded' src={image_url} alt="" />
            <h5 className='fw-semibold mt-4'>{title}</h5>
            <small><p className='mt-2'>
                {details.length > 250 ?
                    <p>{details.slice(0, 105) + '...'} <Link to={`/course/${id}`}>Read More</Link></p>
                    :
                    <p>{details}</p>
                }
            </p></small>
            <h6>Price: ${price}</h6>
        </div>
    );
};

export default CourseSummary;