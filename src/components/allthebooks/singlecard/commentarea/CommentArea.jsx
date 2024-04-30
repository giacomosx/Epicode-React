import React, { useState } from "react";
import ninjaFetch from "../../../../ninjafetch";
import StarsRate from "../starsrate/StarsRate";
import MainButton from "../../../mainbutton/MainButton";

const CommentArea = ({ idBook, setIdBook}) => {
  const [comment, setComment] = useState({});
  const [response, setResponse] = useState(false);
  const [rate, setRate] = useState(0);

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
      setIdBook(idBook)
    })
  };

  return (
    <>
      {response ? (
        <span className="alert bg-success-subtle text-success mt-2 d-block position-relative small ">
          Thank's for your review! <span className="small text-decoration-underline cursor-pointer" onClick={() => setResponse(false)}>(close)</span>
        </span>
      ) : (
        <div className=" d-flex flex-column gap-2  bg-white rounded px-2 py-3 shadow-sm ">
          
            <h6 className="text-secondary m-0 small">Get a review:</h6>
            <StarsRate rate={rate} setRate={setRate} />
            <textarea
              className="form-control mt-1 form-control-sm "
              placeholder="What about of this book?"
              onChange={handleChange}
              name="comment"
            ></textarea>
          
          <MainButton onClick={handleClick} className="btn-sm">Send</MainButton>
        </div>
      )}
    </>
  );
};

export default CommentArea;
