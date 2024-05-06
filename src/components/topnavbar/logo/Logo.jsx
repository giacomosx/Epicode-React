import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ logoSrc, logoAlt, brandName }) => {
  return (
      <Link to={'/'} className="navbar-brand">
        <img
          alt={logoAlt}
          src={logoSrc}
          width="40"
          height="40"
          className=""
        />{" "}
        <h1 className=" d-inline lead fs-2 text-white ">{brandName}</h1>
      </Link>
  );
};

export default Logo;
