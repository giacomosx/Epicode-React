import React from "react";

const Listcommentbutton = ({ status, clickBtn, setDependencies }) => {
  const handleClick = () => {
    clickBtn(!status);
    setDependencies(false)
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
