import React from "react";
import {Navbar } from "react-bootstrap";

const Logo = ({ logoSrc, logoAlt, brandName }) => {
  return (
      <Navbar.Brand href="/">
        <img
          alt={logoAlt}
          src={logoSrc}
          width="40"
          height="40"
          className=""
        />{" "}
        <h1 className=" d-inline lead fs-2 text-white ">{brandName}</h1>
      </Navbar.Brand>
  );
};

export default Logo;
