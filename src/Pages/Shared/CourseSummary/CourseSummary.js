import React from 'react';
import { Link } from 'react-router-dom';

const CourseSummary = ({ course }) => {
    const { title, image_url, details, id } = course
    return (
        <div className='border rounded g-1 container px-2'>
            <img className='img-fluid mt-2 rounded' src={image_url} alt="" />
            <h5 className='fw-semibold mt-4'>{title}</h5>
            <p className='mt-2'>
                {details.length > 250 ?
                    <p>{details.slice(0, 105) + '...'} <Link to={`/course/${id}`}>Read More</Link></p>
                    :
                    <p>{details}</p>
                }
            </p>

        </div>
    );
};

export default CourseSummary;