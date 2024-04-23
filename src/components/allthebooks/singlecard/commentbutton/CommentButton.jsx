import React from "react";

import './commentbutton.css'

const CommentButton = ({ status, clickBtn, setDependencies }) => {

  const handleClick = () => {
    clickBtn(!status);
    setDependencies(false)
  };

  return (
    <button className="btn hover-up pb-0 px-1 lh-1 comment-button" onClick={handleClick}>
      <ion-icon name={status ? "chatbox" : "chatbox-outline"}></ion-icon>
    </button>
  );
};

export default CommentButton;
