import React, { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useSelector, useDispatch } from "react-redux";
import {
  responseComments,
  loadingComments,
  dataComments,
  getComments,
  deleteComment
} from "../../redux/commentsSlice";
import { actualTheme } from "../../redux/themeSlice";
import { currentBook } from "../../redux/bookSelectedSlice";
import AddComment from "../addcomment/AddComment";

const CommentArea = () => {
  const currentBookSelected = useSelector(currentBook)

  const isLoading = useSelector(loadingComments);
  const listComments = useSelector(dataComments);
  const response = useSelector(responseComments)

  const isDark = useSelector(actualTheme)
  
  const dispatch = useDispatch();
  
  const endpoint = `https://striveschool-api.herokuapp.com/api/books/${currentBookSelected}/comments` ;
  
  useEffect(() => {
    dispatch(getComments(endpoint))
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <div className="comment-area rounded m-0 my-3 py-3  px-2  ">
      {isLoading && (
        <div className="d-flex justify-content-center w-100 h-100 align-items-center ">
          <Spinner animation="grow" className="color--violet" />
        </div>
      )}
      {!isLoading && listComments && (
        <>
          <h6 className=" text-secondary m-0 small">Reviews:</h6>
          <ul className="p-0 m-0 ">
            {listComments.map((item, index) => (
              <li
                className="small p-0 mb-1 list-group-item "
                key={`comment-${index}`}
              >
                <span className={`${isDark ? 'text-white' : 'text-black'} small`}>
                  <span className="small icon-link star-rate fill">
                    {item.rate}
                    <span className="star-commentlist"><ion-icon name="star"></ion-icon></span>
                  </span>
                  - {item.author}: <span className="cursor-pointer small text-decoration-underline " onClick={() => dispatch(deleteComment(item._id.toString()))}>Delete</span>
                </span>
                <p className="p-0 m-0 small text-body">{item.comment}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
    <AddComment />
    </>
  );
};

export default CommentArea;
