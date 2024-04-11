import React from "react";
import {Navbar } from "react-bootstrap";

const Logo = ({ logoSrc, logoAlt, brandName }) => {
  return (
      <Navbar.Brand href="#home">
        <img
          alt={logoAlt}
          src={logoSrc}
          width="30"
          height="30"
          className=""
        />{" "}
        <span className="text-bg-light">{brandName}</span>
      </Navbar.Brand>
  );
};

export default Logo;
