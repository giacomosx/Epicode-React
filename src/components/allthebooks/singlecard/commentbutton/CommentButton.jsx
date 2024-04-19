import React, { useState } from "react";

const CommentButton = ({status, clickBtn}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    clickBtn(!status)
  };

  let icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#7949FF"
      className="bi bi-chat-left"
      viewBox="0 0 16 16"
    >
      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
    </svg>
  );

  let iconFill = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#7949FF"
      class="bi bi-chat-left-fill"
      viewBox="0 0 16 16"
    >
      <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
    </svg>
  );

  return <button className="btn hover-up pb-0 " onClick={handleClick}>{clicked ? iconFill : icon}</button>;
};

export default CommentButton;
