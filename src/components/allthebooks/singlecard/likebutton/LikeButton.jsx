import React, { useState } from "react";

import "./likebutton.css";

const LikeButton = ({selectcard, status}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    selectcard(!status)
  }

  
  return (
    <button className="btn hover-up pb-0 px-1 lh-1 like-button" onClick={handleClick}>
    <ion-icon name={clicked ? 'heart' : 'heart-outline'}></ion-icon>
    </button>
  );
};

export default LikeButton;
