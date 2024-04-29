import React from "react";

import './commentbutton.css'

const CommentButton = ({idBook, setIdBook }) => {


  return (
    <button className="btn hover-up pb-0 px-1 lh-1 comment-button color--violet">
      <ion-icon name="chatbox-outline"></ion-icon>
    </button>
  );
};

export default CommentButton;
