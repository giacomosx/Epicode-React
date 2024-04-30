import React from "react";

import './commentbutton.css'

const CommentButton = ({setShowAreaComment, showAreaComment }) => {

  return (
    <button className="btn hover-up pb-0 px-1 lh-1 comment-button color--violet" onClick={() => setShowAreaComment(!showAreaComment)}>
      <ion-icon name="chatbox-outline"></ion-icon>
    </button>
  );
};

export default CommentButton;
