import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import './navlist.css'

const Navlist = () => {
  return (
    <>
        <Navbar.Toggle aria-controls="mainNav" />
        <Navbar.Collapse id="mainNav" className=' flex-grow-0 '>
            <Nav className="me-auto ">
            <Nav.Link className="text-bg-light " href="#home">Home</Nav.Link>
            <Nav.Link className="text-bg-light " href="#fantasy">Fantasy</Nav.Link>
            <Nav.Link className="text-bg-light " href="#history">History </Nav.Link>
            <Nav.Link className="text-bg-light " href="#horror">Horror</Nav.Link>
            <Nav.Link className="text-bg-light " href="#romance">Romance</Nav.Link>
            <Nav.Link className="text-bg-light " href="#sci-fi">Sci-fi</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </>
  )
}

export default Navlist