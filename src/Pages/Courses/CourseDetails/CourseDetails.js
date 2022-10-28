import React from 'react';
import ReactToPdf from 'react-to-pdf'
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courses = useLoaderData();
    const { title, image_url, details } = courses
    const ref = React.createRef();
    return (
        <div>
            <div>
                <ReactToPdf targetRef={ref} filename="Course Info.pdf">
                    {({ toPdf }) => (
                        <button className='mb-2 btn btn-outline-primary' onClick={toPdf}>Generate pdf</button>
                    )}
                </ReactToPdf>
            </div>
            <div ref={ref} className='border rounded g-1 container px-2'>
                <img className='img-fluid mt-2 rounded' src={image_url} alt="" />
                <h5 className='fw-semibold mt-4'>{title}</h5>
                <p className='mt-2'> {details}</p>
                <Button className='mb-2' variant="outline-primary">Get Premium Access</Button>
            </div>
        </div >
    );
};

export default CourseDetails;