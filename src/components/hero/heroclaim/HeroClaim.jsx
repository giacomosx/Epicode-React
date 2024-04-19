import React from "react";

const HeroClaim = ({title, claim}) => {
  return (
    <>
      <h1 className="display-6 text-center ">{title}</h1>
      <blockquote className="text-secondary text-center blockquote fs-5 ">
        {claim}
      </blockquote>
    </>
  );
};

export default HeroClaim;
