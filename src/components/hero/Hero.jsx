import React from "react";

const Hero = ({children}) => {
  return (
    <section className="row py-4 " >
      {children}
    </section>
  );
};

export default Hero;
