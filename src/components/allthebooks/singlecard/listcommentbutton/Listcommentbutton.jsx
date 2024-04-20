import React from "react";

const Listcommentbutton = ({ status, clickBtn }) => {
  const handleClick = () => {
    clickBtn(!status);
  };

  return (
    <button
      className="btn hover-up pb-0 list-icon lh-1 px-1"
      onClick={handleClick}
    >
      <ion-icon name="list-outline"></ion-icon>
    </button>
  );
};

export default Listcommentbutton;
