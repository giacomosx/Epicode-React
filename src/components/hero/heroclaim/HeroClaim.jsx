import React from "react";

const HeroClaim = ({title, claim}) => {
  return (
    <>
      <h1 className="display-6">{title}</h1>
      <blockquote className="text-secondary text-center blockquote">
        {claim}
      </blockquote>
    </>
  );
};

export default HeroClaim;
