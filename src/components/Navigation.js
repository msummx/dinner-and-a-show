import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
  return (
    <>
    <Navbar bg="light">
        <Container>
            <Navbar.Brand href="/">D&AS</Navbar.Brand>
            <Nav>
                <Nav.Link href="/createplan">Create Plan</Nav.Link>
                <Nav.Link href="/myplans">My Plans</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default Navigation