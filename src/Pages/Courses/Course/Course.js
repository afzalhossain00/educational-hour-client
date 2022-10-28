import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../Shared/CourseSummary/CourseSummary';

const Course = () => {
    const allCourses = useLoaderData()
    return (
        <div>
            <div className=' row row-cols-1 row-cols-md-3 row-cols-lg-4 gap-2 mt-4'>
                {
                    allCourses.map(course => <CourseSummary
                        key={course.id}
                        course={course}
                    ></CourseSummary>)
                }
            </div>
        </div>

    );
};

export default Course;