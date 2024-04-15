import React from "react";
import {Navbar } from "react-bootstrap";

const Logo = ({ logoSrc, logoAlt, brandName }) => {
  return (
      <Navbar.Brand href="./index.html">
        <img
          alt={logoAlt}
          src={logoSrc}
          width="40"
          height="40"
          className=""
        />{" "}
        <span className="text-bg-light fs-2">{brandName}</span>
      </Navbar.Brand>
  );
};

export default Logo;
