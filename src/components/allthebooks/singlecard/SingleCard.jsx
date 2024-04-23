import React, { useContext, useState } from "react";
import LikeButton from "./likebutton/LikeButton";


import "./singlecard.css";
import CommentButton from "./commentbutton/CommentButton";
import Listcommentbutton from "./listcommentbutton/Listcommentbutton";
import CommentsList from "./commentslist/CommentsList";
import CommentArea from "./commentarea/CommentArea";
import { ThemeContext } from "../../../contexts/ThemeContext";

const SingleCard = ({ img, title, bookId}) => {
  const [selected, setSelected] = useState(false);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [areaCommentVisible, setAreaCommentVisible] = useState(false);

  const {isDark} = useContext(ThemeContext)

  return (
    <div 
      className={`${isDark ? 'bg-dark text-bg-dark ' : ''} border-0 card h-100   ${selected ? "shadow--violet" : "shadow-sm"} flex-row g-0 rounded-4 `}
    >
      <div className="row">
        <div className="col-4 pe-0">
          <div className="card-img h-100 ">
            <img src={img} alt={title} className="w-100 h-100 object-fit-cover img-fluid rounded-start-4  "/>
          </div>
        </div>
        <div className="col-8 ps-0 pe-2">
          <div className="h-100 card-body p-2 d-flex flex-column  justify-content-between">
            <h5 className={`${isDark && 'text-white '} card-title h6 pt-1`}>{title}</h5>
            <div className='card-text overflow-y-scroll'>
                {areaCommentVisible && <CommentArea bookId={bookId}/>}
                {commentsVisible && <CommentsList bookId={bookId} isDark={isDark}/>}
            </div>
            <div className={`card-action d-flex justify-content-end border-top pe-1 gap-3 ${isDark && 'border-secondary '} `}>
              
              <CommentButton status={areaCommentVisible} clickBtn={setAreaCommentVisible} setDependencies={setCommentsVisible}/>
              <Listcommentbutton status={commentsVisible} clickBtn={setCommentsVisible} setDependencies={setAreaCommentVisible} />
              <LikeButton status={selected} selectcard={setSelected}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;