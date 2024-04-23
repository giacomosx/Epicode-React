import React from "react";

const HeroClaim = ({title, claim, isDark}) => {
  return (
    <>
      <h1 className={`display-6 text-center ${isDark ? 'text-white ': ''}`}>{title}</h1>
      <blockquote className="text-secondary text-center blockquote fs-5 ">
        {claim}
      </blockquote>
    </>
  );
};

export default HeroClaim;
