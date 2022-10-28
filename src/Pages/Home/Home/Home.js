import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import CourseSummary from '../../Shared/CourseSummary/CourseSummary'

const Home = () => {

    return (
        <div className='bg-light rounded pb-4'>
            <div className='container px-4 py-4 pb-4 mx-auto text-center'>
                <h1 className='fw-bold'>Educational Hour</h1>
                <p className='mt-4 mb-4 p-4 fs-4'>Learning Hour is an online learning platform where you can learn all the necessary topic. You can check our courses also join with us for latest courses.</p>

                <div className=''>
                    <a href="/courses">
                        <button type='button' className='btn btn-outline-info me-2 rounded-pill'>Courses</button>
                    </a>
                    <a href="/register">
                        <button type='button' className='btn btn-outline-info rounded-pill'>Sign Up</button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Home;