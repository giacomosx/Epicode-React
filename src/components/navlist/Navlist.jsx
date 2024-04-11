import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

const Navlist = () => {
  return (
    <>
        <Navbar.Toggle aria-controls="mainNav" />
        <Navbar.Collapse id="mainNav">
            <Nav className="me-auto">
            <Nav.Link className="text-bg-light active " href="#home">Home</Nav.Link>
            <Nav.Link className="text-disabled disabled " href="#fav">Fav</Nav.Link>
            <Nav.Link className="text-disabled disabled " href="#topFive">Top </Nav.Link>
            <Nav.Link className="text-disabled disabled " href="#offers">Offers</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </>
  )
}

export default Navlist