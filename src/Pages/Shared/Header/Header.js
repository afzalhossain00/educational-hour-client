import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SideNav from '../SideNav/SideNav';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const [toggled, setToggled] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.error(error) })
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Brand className='fw-bold fs-3' href="/">Educational Hour</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto fw-semibold">
                        <Nav.Link href="/"></Nav.Link>
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">
                            <input onChange={(event) => setToggled(event.target.checked)} className='roundedCircle' type='checkbox'></input>{toggled ? "Light" : "Dark"}
                            {
                                user?.uid ?
                                    <>
                                        <Button className='btn btn-outline-primary ms-2 rounded-pill' variant="light" onClick={handleLogOut}>Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='btn btn-outline-primary btn-md me-2 rounded-pill' style={{ textDecoration: 'none' }} to='/login'>Login</Link>
                                        <Link className='btn btn-outline-primary btn-md me-2 rounded-pill' style={{ textDecoration: 'none' }} to='/register'>Register</Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/">
                            {user?.photoURL ?
                                <Image title={user?.displayName} style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <SideNav></SideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;