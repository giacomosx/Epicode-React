import React from "react";
import StarsRate from "../starsrate/StarsRate";
import MainButton from "../mainbutton/MainButton";

const AddComment = () => {
  return (
    <div className=" d-flex flex-column gap-2  bg-white rounded px-2 py-3 shadow-sm ">
      <h6 className="text-secondary m-0 small">Get a review:</h6>
      <StarsRate />
      <textarea
        className="form-control mt-1 form-control-sm "
        placeholder="What about of this book?"
        name="comment"
      ></textarea>

      <MainButton className="btn-sm">Send</MainButton>
    </div>
  );
};

export default AddComment;
