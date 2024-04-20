import React, { useState } from "react";
import LikeButton from "./likebutton/LikeButton";


import "./singlecard.css";
import CommentButton from "./commentbutton/CommentButton";
import StarsRate from "./starsrate/StarsRate";
import Listcommentbutton from "./listcommentbutton/Listcommentbutton";
import CommentsList from "./commentslist/CommentsList";

const SingleCard = ({ img, title, bookId }) => {
  const [selected, setSelected] = useState(false);
  const [commentsVisible, setCommentsVisible] = useState(false);

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
            <h5 className="card-title h6 m-0 pt-1">{title}</h5>
            <div className='card-text h-100'>
                {commentsVisible && <CommentsList bookId={bookId}/>}
            </div>
            <div className="card-action d-flex justify-content-between border-top pe-1 ">
              <div>
                <StarsRate />
              </div>
              <div className="d-flex align-items-center gap-1">
              <CommentButton />
              <Listcommentbutton status={commentsVisible} clickBtn={setCommentsVisible}/>
              <LikeButton status={selected} selectcard={setSelected}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;