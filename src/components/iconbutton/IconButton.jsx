import React from "react";

import "./iconbutton.css";

const IconButton = ({iconName, variant, onClick}) => {
  
  return (
    <button className={`btn pb-0 px-1 lh-1 icon-button hover-up ${variant}`} onClick={onClick}>
    <ion-icon name={iconName}></ion-icon>
    </button>
  );
};

export default IconButton;
