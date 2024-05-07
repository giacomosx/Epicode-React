import React, { useState } from "react";
import StarsRate from "../starsrate/StarsRate";
import MainButton from "../mainbutton/MainButton";
import {
  postComment,
  responseComments,
  resetResponse,
} from "../../redux/commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { currentBook } from "../../redux/bookSelectedSlice";

const AddComment = () => {
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState(null);
  const currentBookSelected = useSelector(currentBook);
  const response = useSelector(responseComments);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setReview({
      comment: e.target.value,
      rate: rate,
      elementId: currentBookSelected,
    });
  };

  const handleClick = () => {
    dispatch(postComment(review));
  };

  return (
    <div className=" d-flex flex-column gap-2 py-3 px-2">
      {response ? (
        <span className="alert alert-light  mt-2 d-block small">
          {response}{" "}
          <span
            className="small cursor-pointer text-decoration-underline "
            onClick={() => dispatch(resetResponse())}
          >
            (close)
          </span>
        </span>
      ) : (
        <>
          <h6 className="text-secondary m-0 small">Get a review:</h6>
          <StarsRate rate={rate} setRate={setRate} />
          <textarea
            className="form-control mt-1 form-control-sm "
            placeholder="What about of this book?"
            name="comment"
            onChange={handleChange}
          ></textarea>

          <MainButton onClick={handleClick} className="btn-sm">
            Send
          </MainButton>
        </>
      )}
    </div>
  );
};

export default AddComment;
