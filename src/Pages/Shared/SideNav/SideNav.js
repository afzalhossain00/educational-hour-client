import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h5 className='mb-2 text-center'>Course List:</h5>
            <div>
                {
                    categories.map(category => <div className='p-4 rounded border mb-2 text-center bg-light fw-semibold'
                        key={category.id}>
                        <Link style={{ textDecoration: 'none' }} to={`/course/${category.id}`}>{category.name}</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SideNav;