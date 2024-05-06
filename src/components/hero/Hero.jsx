import React from "react";
import { useSelector } from "react-redux";
import { actualTheme } from "../../redux/themeSlice";

const Hero = ({children}) => {
  const isDark = useSelector(actualTheme)
  return (
    <div className="col-12">
      <section className={`row py-4 border-bottom ${isDark && 'border-secondary '}`} >
      {children}
      </section>
    </div>
  );
};

export default Hero;
