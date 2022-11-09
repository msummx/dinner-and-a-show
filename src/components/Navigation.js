import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <Navbar sticky="top" bg="light">
        <Container>
            <Navbar.Brand><Link to="/">D&AS</Link></Navbar.Brand>
            <Nav>
                <Nav.Link><Link to="/createplan">Create Plan</Link></Nav.Link>
                <Nav.Link><Link to="/myplans">My Plans</Link></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default Navigation