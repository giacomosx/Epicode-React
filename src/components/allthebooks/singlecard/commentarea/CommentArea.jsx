import React, { useState } from "react";
import ninjaFetch from "../../../../ninjafetch";
import StarsRate from "../starsrate/StarsRate";
import MainButton from "../../../mainbutton/MainButton";

const CommentArea = ({ idBook }) => {
  const [comment, setComment] = useState({});
  const [response, setResponse] = useState(false);
  const [rate, setRate] = useState(0);
  console.log(idBook);

  const handleChange = (e) => {
    setComment({
      comment: e.target.value,
      rate: `${rate}`,
      elementId: `${idBook}`,
    });
  };

  const handleClick = () => {
    ninjaFetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "POST",
      body: comment,
    }).then(() => {
      setResponse(true)
      setRate(0)
    })
  };

  return (
    <>
      {response ? (
        <span className="alert bg-success-subtle text-success mt-2 d-block position-relative ">
          Thank's for your review! <span className="small text-decoration-underline " onClick={() => setResponse(false)}>(close)</span>
        </span>
      ) : (
        <div className="comment-area overflow-y-scroll h-100 m-0 d-flex flex-column w-100 gap-2 ps-1 pe-3 pb-2 my-3 ">
          <div>
            <h6 className="text-secondary m-0 small">Get a review:</h6>
            <StarsRate rate={rate} setRate={setRate} />
            <textarea
              className="form-control mt-1 form-control-sm "
              placeholder="What about of this book?"
              onChange={handleChange}
              name="comment"
            ></textarea>
          </div>
          <MainButton onClick={handleClick} className="btn-sm">Send</MainButton>
        </div>
      )}
    </>
  );
};

export default CommentArea;
