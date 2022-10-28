import { Button } from "react-bootstrap";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blogs/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Course from "../../Pages/Courses/Course/Course";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import GetCourse from "../../Pages/Courses/GetCourse/GetCourse";
import FAQ from "../../Pages/FAQ/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                element: <Course></Course>,
                loader: () => fetch('https://educational-hour-server.vercel.app/courses')
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://educational-hour-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/get-course/course/:id',
                element: <PrivateRoute><GetCourse></GetCourse></PrivateRoute>,
                loader: ({ params }) => fetch(`https://educational-hour-server.vercel.app/course/${params.id}`)
            },
        ]
    },
    {
        path: '*', element: <div
            className='border rounded fs-2 p-5 fw-bold text-center'>404 <br /><small className='fw-semibold fs-3'>Oops! Looks like this page doesn't exist.</small> <br />
            <Button href="/" variant="info">Homepage</Button>{' '}
        </div>
    },
])