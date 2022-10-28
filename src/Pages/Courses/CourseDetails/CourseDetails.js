import React from 'react';
import ReactToPdf from 'react-to-pdf'
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courses = useLoaderData();
    const { title, image_url, details, price, id } = courses;
    const ref = React.createRef();
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <ReactToPdf targetRef={ref} filename="Course Info.pdf">
                    {({ toPdf }) => (
                        <button className='btn btn-outline-primary text-center rounded-4' onClick={toPdf}>Download</button>
                    )}
                </ReactToPdf>
            </div>
            <div ref={ref} className='border rounded g-3 container mt-2 mb-3'>
                <img className='img-fluid rounded-2' src={image_url} alt="" />
                <h5 className='fw-semibold mt-4 p-2'>{title}</h5>
                <p className='mt-2 px-3'> {details}</p>
                <h6 className='px-3 pb-2'>Price: ${price}</h6>
                <Link className='px-3' style={{ textDecoration: 'none' }} to={`/get-course/course/${id}`}> <Button className='mb-2 rounded-4' variant="outline-primary">Premium Access</Button></Link>
            </div>
        </div >
    );
};

export default CourseDetails;