import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { ButtonGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [passwordError, setPasswordError] = useState('')

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate('/courses')
            })
            .catch(error => {
                console.error(error)
                setPasswordError(error.message)
            })
    }

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/courses')
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="w-75 mx-auto">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button> <br />
                <Form.Text className="text-danger">
                </Form.Text>
            </Form>
            <p className='text-danger'>{passwordError}</p>
            <p>
                <small>
                    New to this website? Please <Link to="/register">Register</Link>
                </small>
            </p>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2 rounded btn btn-outline-primary' variant="light"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button className='rounded btn btn-outline-primary' variant="light"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;