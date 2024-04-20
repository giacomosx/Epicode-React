import React, { useState } from "react";

import './commentbutton.css'

const CommentButton = ({ status, clickBtn }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    // clickBtn(!status);
  };

  return (
    <button className="btn hover-up pb-0 px-1 lh-1 comment-button" onClick={handleClick}>
      <ion-icon name={clicked ? "chatbox" : "chatbox-outline"}></ion-icon>
    </button>
  );
};

export default CommentButton;
