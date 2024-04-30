import React from "react";

import "./iconbutton.css";

const IconButton = ({iconName}) => {
  
  return (
    <button className="btn hover-up pb-0 px-1 lh-1 icon-button" >
    <ion-icon name={iconName}></ion-icon>
    </button>
  );
};

export default IconButton;
