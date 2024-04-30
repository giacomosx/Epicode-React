import React from "react";
import "./overlaybutton.css";

const OverlayButton = ({ selector }) => {
  return (
    <a href={selector} title="Go up" className="btn--top position-fixed ">
      <img src="./icons/arrow-up.svg" alt="Top" width={25} height={25} />
    </a>
  );
};

export default OverlayButton;
