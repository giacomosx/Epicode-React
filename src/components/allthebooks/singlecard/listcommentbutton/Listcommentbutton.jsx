import React from "react";

const Listcommentbutton = ({ idBook, setIdBook}) => {

  return (
    <button
      className="btn hover-up pb-0 list-icon lh-1 px-1"
    >
      <ion-icon name="list-outline"></ion-icon>
    </button>
  );
};

export default Listcommentbutton;
