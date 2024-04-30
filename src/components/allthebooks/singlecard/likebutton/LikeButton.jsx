import React, { useState } from "react";

import "./likebutton.css";

const LikeButton = ({idBook, setIdBook}) => {

  const handleClick = () => setIdBook(idBook)

  
  return (
    <button className="btn hover-up pb-0 px-1 lh-1 like-button" onClick={handleClick}>
    <ion-icon name='chatbox-ellipses-outline'></ion-icon>
    </button>
  );
};

export default LikeButton;
