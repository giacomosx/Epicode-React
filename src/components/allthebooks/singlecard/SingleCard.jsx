import React, { useState } from "react";
import LikeButton from "./likebutton/LikeButton";

import "./singlecard.css";

const SingleCard = ({ img, title }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`card h-100 border-0  ${selected ? "shadow--violet" : "shadow-sm"} flex-row g-0 rounded-4 `}
    >
      <div className="row">
        <div className="col-4 pe-0">
          <div className="card-img h-100 ">
            <img src={img} alt={title} className="w-100 h-100 object-fit-cover img-fluid rounded-start-4  "/>
          </div>
        </div>
        <div className="col-8 ps-0 pe-2">
          <div className="h-100 card-body p-2 d-flex flex-column  justify-content-between ">
            <h5 className="card-title h6 ">{title}</h5>
            <div className="card-text d-flex justify-content-end ">
            <LikeButton status={selected} selectcard={setSelected}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
