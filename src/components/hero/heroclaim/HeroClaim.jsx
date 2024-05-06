import React from "react";
import { actualTheme } from "../../../redux/themeSlice";
import { useSelector } from "react-redux";

const HeroClaim = ({title, claim}) => {

  const isDark = useSelector(actualTheme)

  return (
    <>
      <h1 className={`display-6 text-center ${isDark ? 'text-white ': ''}`} data-testid={'welcome'}>{title}</h1>
      <blockquote className="text-secondary text-center blockquote fs-5 ">
        {claim}
      </blockquote>
    </>
  );
};

export default HeroClaim;
