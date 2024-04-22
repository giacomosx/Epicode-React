import React, { useState } from "react";
import ninjaFetch from "../../../../ninjafetch";

const CommentArea = ({ bookId }) => {
  const [comment, setComment] = useState({});
  const [response, setResponse] = useState(false);

  const handleChange = (e) => {
    setComment({ comment: e.target.value, rate: "5", elementId: `${bookId}` });
  };

  const handleClick = () => {
    ninjaFetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "POST",
      body: comment,
    }).then(() => setResponse(true))
  };
  

  return (
    <>
      {response && <span className="alert bg-success-subtle text-success mt-2 d-block">Thank's for your review </span>}
      <div className="comment-area overflow-y-scroll h-100 pt-2 pe-1 m-0 d-flex">
        <div>
          <h6 className="small text-secondary m-0">Get a review:</h6>
          <textarea
            className="form-control small mt-1 ms-1"
            placeholder="What about of this book?"
            onChange={handleChange}
            name="comment"
          ></textarea>
        </div>
        <div className="d-flex align-items-end ps-2 pb-2">
          <button
            className=" btn btn-sm  bg--violet text-white"
            onClick={handleClick}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentArea;
