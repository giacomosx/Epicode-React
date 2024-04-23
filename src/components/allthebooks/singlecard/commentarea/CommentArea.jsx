import React, { useState } from "react";
import ninjaFetch from "../../../../ninjafetch";
import StarsRate from "../starsrate/StarsRate";

const CommentArea = ({ bookId }) => {
  const [comment, setComment] = useState({});
  const [response, setResponse] = useState(false);
  const [rate, setRate] = useState(0);

  const handleChange = (e) => {
    setComment({
      comment: e.target.value,
      rate: `${rate}`,
      elementId: `${bookId}`,
    });
  };

  const handleClick = () => {
    ninjaFetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "POST",
      body: comment,
    }).then(() => setResponse(true))
  };

  return (
    <>
      {response ? (
        <span className="alert bg-success-subtle text-success mt-2 d-block">
          Thank's for your review!
        </span>
      ) : (
        <div className="comment-area overflow-y-scroll h-100 m-0 d-flex flex-column w-100 gap-2 ps-1 pe-3 pb-2 small">
          <div>
            <h6 className="small text-secondary m-0">Get a review:</h6>
            <StarsRate rate={rate} setRate={setRate} />
            <textarea
              className="form-control mt-1 "
              placeholder="What about of this book?"
              onChange={handleChange}
              name="comment"
            ></textarea>
          </div>
          <button
            className=" btn btn-sm  bg--violet text-white"
            onClick={handleClick}
          >
            Send
          </button>
        </div>
      )}
    </>
  );
};

export default CommentArea;
