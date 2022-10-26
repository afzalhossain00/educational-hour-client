import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const course = useLoaderData();
    return (
        <div>
            <h2>category has : {course.length}</h2>
        </div>
    );
};

export default Category;