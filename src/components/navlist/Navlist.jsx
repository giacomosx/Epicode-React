import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navlist.css";

const navLinks = [
  { title: "Fantasy", selector: "#fantasy" },
  { title: "History", selector: "#history" },
  { title: "Horror", selector: "#horror" },
  { title: "Romance", selector: "#romance" },
  { title: "Sci-fi", selector: "#sci-fi" },
];

const Navlist = () => {
  return (
    <>
      <Navbar.Toggle aria-controls="mainNav" />
      <Navbar.Collapse id="mainNav" className=" flex-grow-0 ">
        <Nav className="me-auto ">
          {
            navLinks.map((item, index) => (
              <Nav.Link key={index} className="text-bg-light hover--text-underline" href={item.selector}>{item.title}</Nav.Link>
            ))
          }
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default Navlist;
